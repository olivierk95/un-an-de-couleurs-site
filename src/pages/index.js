import React from "react"
import Layout from "../templates/layout"
import { graphql, useStaticQuery} from "gatsby"
import Gallery from "../components/gallery"
import Head from "../components/head"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
      query {
        covers: allStrapiArtworks(sort: {fields: day, order: DESC}) {
          nodes {
            id
            day
            date
            title
            support
            technique
            cover_width
            cover_height
            color
            galerie_cover {
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

  return (
    <Layout>
      <Head title="Galerie" />
      <section className="gallery-display">
        <Gallery 
          data={data.covers.nodes}
          j0={true}
        />
      </section>
    </Layout>
  )
}

export default IndexPage
