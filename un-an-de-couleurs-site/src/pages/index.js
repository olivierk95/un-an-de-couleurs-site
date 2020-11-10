import React from "react"
import Layout from "../templates/layout"
import { graphql, useStaticQuery} from "gatsby"
import Gallery from "../components/gallery"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
      query {
        covers: allStrapiArtworks(sort: {fields: day, order: DESC}) {
          nodes {
            day
            cover_width
            cover_height
            galerie_cover {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            information {
              id
              title
              color_primary
              support
              technique
            }
          }
        }
      }
  `)

  return (
    <Layout>
      <section className="gallery-display">
        <Gallery data={data.covers.nodes}/>
      </section>
    </Layout>
  )
}

export default IndexPage
