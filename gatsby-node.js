const path = require("path")
const { createRemoteFileNode } = require("gatsby-source-filesystem")

// const makeRequest = (graphql, request) => new Promise((resolve, reject) => {
//     // Query for article nodes to use in creating pages.
//     resolve(graphql(request).then(result => {
//         if(result.errors) {
//             reject(result.errors)
//         }
//         return result;
//     }))
// })

// !!!! à mettre autre part 
function string_to_slug(str) {
    str = str.replace(/^\s+|\s+$/g, ''); // trim
    str = str.toLowerCase();
    
    // remove accents, swap ñ for n, etc
    var from = "àáäâèéëêìíïîòóöôùúüûñç·/_,:;";
    var to   = "aaaaeeeeiiiioooouuuunc------";
    for (var i=0, l=from.length ; i<l ; i++) {
        str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
    }
    
    str = str.replace(/[^a-z0-9 -]/g, '') // remove invalid chars
        .replace(/\s+/g, '-') // collapse whitespace and replace by -
        .replace(/-+/g, '-'); // collapse dashes
    
    return str;
}


exports.createPages = async({ graphql, actions}) => {
    const { createPage } = actions
    const artpieceTemplate = path.resolve('src/templates/artpiece.js')
    const saleTemplate = path.resolve('src/templates/sale.js')

    return graphql(`
        {
            artworks: allStrapiArtworks {
                nodes {
                    id
                    day
                }
            }
            sales: allStrapiSales {
                nodes {
                    id
                    title
                }
            }
            artworksSales: allStrapiArtworks(filter: {status: {eq: "acquerir"}}) {
                nodes {
                    id
                    title
                }
            }
        }
    `).then(result => { 
        if(result.errors) {
            Promise.reject(result.errors);
        }

        result.data.artworks.nodes.forEach(artwork => {
            createPage({
                path: `/jour-${artwork.day}`,
                component: artpieceTemplate,
                context: {
                    id: artwork.id,
                }
            })
        })
 
        result.data.sales.nodes.forEach(sale => {
            createPage({
                path: `/boutique/${string_to_slug(sale.title)}`,
                component: saleTemplate,
                context: {
                    id: sale.id,
                }
            })
        })

        result.data.artworksSales.nodes.forEach(sale => {
            createPage({
                path: `/boutique/${string_to_slug(sale.title)}`,
                component: saleTemplate,
                context: {
                    id: sale.id,
                }
            })
        });
    }) 
}



// Code d'internet pour permettre la gestion de gatsby-image sur l'entrée "groupe d'images" de Strapi
exports.onCreateNode = async ({
        node,
        actions,
        store,
        cache,
        createNodeId,
    }) => {
        const { createNode } = actions
        
        let multipleImages = node.slider
    
        if (node.internal.type === "StrapiArtworks" || node.internal.type === "StrapiSales") {
        if (multipleImages.length > 0) {
            // multipleImages.forEach(el => console.log(el))
            const images = await Promise.all(
            multipleImages.map(el =>
                createRemoteFileNode({
                    url: process.env.DEPLOY_URL ? el.url : `http://localhost:1337${el.url}`,
                    parentNodeId: node.id,
                    store,
                    cache,
                    createNode,
                    createNodeId,
                })
            )
            )
        
        multipleImages.forEach((image, i) => {
                image.localFile___NODE = images[i].id
            })
        }
    }
}

exports.createSchemaCustomization = ({ actions }) => {
    const { createTypes } = actions
    const typeDefs = `
        type StrapiArtworks implements Node {
            sale_price: String
            cost_material: String
        }
        type StrapiSales implements Node {
            sale_price: String
            cost_material: String
        }
    `
    createTypes(typeDefs)
}