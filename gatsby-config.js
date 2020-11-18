/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

const path = require(`path`)

module.exports = {
  siteMetadata: {
    title: 'Un an de Couleurs',
    author: 'Organik',
    description: "Projet de peinture de l'artiste liégeois Organik. Une oeuvre quotidienne pour ajouter des couleurs à une année bien grise. Fresques, tableaux, illustrations.",
    image: '/src/assets/photo-profil.jpg',
    url: 'https://unandecouleurs.be'
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "G-8WD3G3JPFP",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: true,
        // Setting this parameter is optional
        anonymize: true,
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `assets`),
      },
    },
    {
      resolve:`gatsby-plugin-manifest`,
      options: {
        name: `Un an de couleurs`,
        short_name: `Un an de couleurs`,
        start_url: `/`,
        background_color: `#FFFFFF`,
        theme_color: `#FFFFFF`,
        display: `standalone`,
        icon: `src/assets/un-an-de-couleurs-logo-icon.svg`,
      }
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
        apiURL: process.env.API_URL,
        contentTypes: [ `artworks`, `sales` ],
      },
    },
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: `BioRhyme Expanded`,
              variants: [`200`, `300`, `400`, `700`, `800`]
            },
            {
              family: `Kumar One Outline`,
            },
            {
              family: `Kumar One`,
            },
            {
              family: `Limelight`,
            },
            {
              family: `Montserrat`,
              variants: [`100`, `200`, `300`, `400`, `500`, `600`, `700`, `800`, `900`,]
            },
            {
              family: `BioRhyme`,
              variants: [`200`, `300`, `400`, `700`, `800`]
            },
          ],
        },
      },
    }
  ],
}