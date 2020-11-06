const path = require("path")

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
            component: path.resolve(`src/components/artpiece-template.js`),
            context: {
                id: artwork.id,
            }
        })
    });
}