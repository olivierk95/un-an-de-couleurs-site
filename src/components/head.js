import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'
import favicon from '../assets/un-an-de-couleurs-logo-icon.svg'

const Head = (props) => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                    description
                    image
                    author
                    url
                }
            }
        }
    `)
    
    const metaTitle = props.title || data.site.siteMetadata.title;
    const metaAuthor = props.author || data.site.siteMetadata.author;
    const metaDescription = props.description || data.site.siteMetadata.description;
    const metaUrl = props.url || data.site.siteMetadata.url;
    const metaImage = props.image || data.site.siteMetadata.image;
    const metaKeywords = props.keywords || ['artiste peintre', 'peintre liégeois', 'art à vendre', 'artiste liège', 'fresque murale', 'tableau acrylique', 'projet artistique', 'commande peinture'];

    return(
        <Helmet 
            title={`${props.title} | ${data.site.siteMetadata.title}`}
            meta={[
                {
                    name: `description`,
                    content: metaDescription,
                },
                {
                    property: `og:title`,
                    content: metaTitle,
                },
                {
                    property: `og:description`,
                    content: metaDescription,
                },
                {
                    property: `og:type`,
                    content: `website`,
                },
                {
                    property: `og:image`,
                    content: metaImage,
                },
                {
                    property: `og:url`,
                    content: metaUrl,
                },
                {
                    name: `twitter:card`,
                    content: `summary_large_image`,
                },
                {
                    name: `twitter:creator`,
                    content: metaAuthor,
                },
                {
                    name: `twitter:title`,
                    content: metaTitle,
                },
                {
                    name: `twitter:description`,
                    content: metaDescription,
                },
                {
                    name: `twitter:image`,
                    content: metaImage,
                },
            ].concat(
                metaKeywords && metaKeywords.lenght > 0? {
                    name: `keywords`,
                    content: metaKeywords.join(`, `),
                } : []
            )
        }
        />
    )
}

export default Head