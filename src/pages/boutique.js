import React from "react"
import Layout from "../templates/layout"
import { graphql, useStaticQuery} from "gatsby"
import Gallery from "../components/gallery"
import Head from "../components/head"

const BoutiquePage = () => {
  const data = useStaticQuery(graphql`
      query {
        sales: allStrapiSales(sort: {fields: created_at, order: DESC}) {
          nodes {
            id
            created_at
            title
            color
            sale_price
            cost_material
            boutique_cover {
              childImageSharp {
                fluid(maxHeight: 500, maxWidth: 500) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
        artworks: allStrapiArtworks(filter: {status: {eq: "acquerir"}}, sort: {fields: created_at, order: DESC}) {
          nodes {
            id
            created_at
            title
            color
            sale_price
            cost_material
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
  
  let covers = [];
  covers = data.sales.nodes.concat(data.artworks.nodes)

  covers.sort(function(a,b) {
    let c = new Date(a.created_at);
    let d = new Date(b.created_at);
    return d-c;
  })

  return (
    <Layout>
      <Head title="boutique" />
      <section className="gallery-display">
        <Gallery data={covers}/>
      </section>
    </Layout>
  )
}

export default BoutiquePage
