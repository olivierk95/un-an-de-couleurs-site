const path = require("path")
const { createRemoteFileNode } = require("gatsby-source-filesystem")

exports.createPages = async({ graphql, actions}) => {
    const { createPage } = actions

    const result = await graphql(`
        {
            artworks: allStrapiArtworks {
                nodes {
                    id
                    day
                }
            }
        }
    `)

    result.data.artworks.nodes.forEach(artwork => {
        createPage({
            path: `/jour-${artwork.day}`,
            component: path.resolve(`src/templates/artpiece.js`),
            context: {
                id: artwork.id,
            }
        })
    });
}

exports.onCreateNode = async ({
        node,
        actions,
        store,
        cache,
        createNodeId,
    }) => {
        const { createNode } = actions
        
    let multipleImages = node.slider
    
        if (node.internal.type === "StrapiArtworks") {
        if (multipleImages.length > 0) {
            // multipleImages.forEach(el => console.log(el))
            const images = await Promise.all(
            multipleImages.map(el =>
                createRemoteFileNode({
                    url: `http://localhost:1337${el.url}`,
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