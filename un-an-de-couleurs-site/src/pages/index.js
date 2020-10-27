import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

import "../styles/index.scss"

const IndexPage = () => {
  return (
    <Layout>
      <h1>Hello</h1>
      <Link to="/contact">Parlez-moi</Link>
    </Layout>
  )
}

export default IndexPage
