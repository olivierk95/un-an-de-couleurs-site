import React from "react"
import Layout from "../components/layout"
import {graphql, useStaticQuery} from "gatsby"
import Img from "gatsby-image"
import { Link } from "gatsby"

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

  const galerie = data.covers.nodes.map((cover) =>
    <Link to={`/jour-` + cover.day} className={`gallery-display__item grid-column-` + cover.cover_width + ` grid-row-`+ cover.cover_height} key={cover.information.id}>
      <Img className="gallery-display__item__image" fluid={{ ...cover.galerie_cover.childImageSharp.fluid, aspectRatio: cover.cover_width/cover.cover_height}} alt={cover.information.title}/>
      <div className="gallery-display__item__info" style={{backgroundColor: cover.information.color_primary}}>
        <h2 className="info__title h2-title">Jour {cover.day}</h2>
        <hr className="info__divider"/>
        <p className="info__caract text-small">{cover.information.support} - {cover.information.technique}</p>
      </div>
    </Link>
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
