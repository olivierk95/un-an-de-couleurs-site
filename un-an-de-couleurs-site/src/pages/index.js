import React from "react"
import Layout from "../components/layout"
import {graphql, useStaticQuery} from "gatsby"
import Img from "gatsby-image"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
      query {
        covers: allStrapiArtwork(sort: {fields: day, order: DESC}) {
          nodes {
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
            }
          }
        }
      }
  `)

  const galerie = data.covers.nodes.map((cover) =>
    <div className={`grid-column-` + cover.cover_width + ` grid-row-`+ cover.cover_height} key={cover.information.id}>
      <Img fluid={{ ...cover.galerie_cover.childImageSharp.fluid, aspectRatio: cover.cover_width/cover.cover_height}} objectFit="fit" alt={cover.information.title}/>
    </div>
  )
  return (
    <Layout>
      <section className="gallery-display">
        {galerie}
      </section>
    </Layout>
  )
}

export default IndexPage
