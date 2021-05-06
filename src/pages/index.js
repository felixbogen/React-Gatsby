import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"

function IndexPage() {
  return (
    <Layout>
      <SEO title="Home" />
      <div className="Hero">
      <div className="HeroGroup">
      <h1>Welcome</h1>
      <p>Welcome to your new Gatsby site.</p>
      <Link to="/page-2/">Go to page 2</Link> <br />
      </div>
      </div>
    </Layout>
  )
}

export default IndexPage
