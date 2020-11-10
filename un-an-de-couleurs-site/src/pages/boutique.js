import React from "react"
import Layout from "../templates/layout"
import { graphql, useStaticQuery} from "gatsby"
import Gallery from "../components/gallery"

const BoutiquePage = () => {
  const data = useStaticQuery(graphql`
      query {
        sales: allStrapiSales(sort: {fields: information___date, order: DESC}) {
          nodes {
            id
            information {
              color_primary
              title
            }
            pricing {
              leasing_price
              sale_price
              cost_material
            }
            boutique_cover {
              childImageSharp {
                fluid(maxHeight: 500, maxWidth: 500) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
        artworks: allStrapiArtworks(filter: {status: {eq: "acquerir"}}, sort: {fields: information___date, order: DESC}) {
          nodes {
            id
            information {
              color_primary
              title
            }
            pricing {
              leasing_price
              sale_price
              cost_material
            }
            boutique_cover {
              childImageSharp {
                fluid(maxHeight: 500, maxWidth: 500) {
                  ...GatsbyImageSharpFluid
                }
              }
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

export default BoutiquePage
