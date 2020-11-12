/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

const path = require(`path`)

module.exports = {
  siteMetadata: {
    title: 'Un an de Couleurs',
    author: 'Olivier Keutgens',
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `assets`),
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: /assets/
        }
      },
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: 'https://unandecouleurs-cms.herokuapp.com/' || 'http://localhost:1337',
        contentTypes: [ `artworks`, `sales` ],
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `BioRhyme Expanded`,
            variants: [`200`, `300`, `400`, `700`, `800`]
          },
          {
            family: `Vampiro One`,
          },
          {
            family: `BioRhyme`,
            variants: [`200`, `300`, `400`, `700`, `800`]
          },
        ],
      },
    }
  ],
}