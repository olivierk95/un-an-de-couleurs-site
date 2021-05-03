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
        ////// PROBLEM this is the measurement ID instead of the tracking ID :'(
        // The property ID; the tracking code won't be generated without it
        trackingId: "UA-183430005-1",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: true,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Defers execution of google analytics script after page load
        defer: false,
        // Any additional optional fields
        pageTransitionDelay: 0,
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
      resolve: 'gatsby-plugin-mailchimp',
      options: {
          endpoint: '', // string; add your MC list endpoint here; see instructions below
          timeout: 3500, // number; the amount of time, in milliseconds, that you want to allow mailchimp to respond to your request before timing out. defaults to 3500
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