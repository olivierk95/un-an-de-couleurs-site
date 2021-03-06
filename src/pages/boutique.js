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
            price_sale
            cost_material
            boutique_width
            boutique_height
            boutique_cover {
              childImageSharp {
                fluid {
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
            price_sale
            cost_material
            boutique_width
            boutique_height
            boutique_cover {
              childImageSharp {
                fluid(maxHeight: 1000, maxWidth: 1000) {
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
      <Head title="boutique" description="Bienvenue à la boutique d'Organik. Peintures, prints, tableaux et autre à prix libres (rarement fixés). Décorer son lieu de vie avec ses couleurs, c'est aussi soutenir ce beau projet."/>
      <section className="gallery-display">
        {covers && <Gallery data={covers}/> }
      </section>
    </Layout>
  )
}

export default BoutiquePage
