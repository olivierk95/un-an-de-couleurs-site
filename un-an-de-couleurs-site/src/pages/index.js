import React from "react"
import Layout from "../components/layout"
import Hero from "../components/hero"
import {graphql, useStaticQuery} from "gatsby"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
        query {
            images: file(relativePath: { eq: "galerie-hero.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 1000) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `)
  return (
    <Layout>
      <Hero image={data.images.childImageSharp.fluid} alt="Belle petite peinture"></Hero>
      <h1 className="font-color-cycle">Hello</h1>
    </Layout>
  )
}

export default IndexPage
