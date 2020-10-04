import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"

function IndexPage() {
  return (
    <Layout>
      <img src="/images/logos/logo.svg" alt="logo" />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <Link to="/page-2/">Go to page 2</Link> <br />
    </Layout>
  )
}

export default IndexPage
