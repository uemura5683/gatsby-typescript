import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"

function IndexPage() {
  return (
    <Layout>
    <div className="list">
      <h1>Frontend</h1>
      <StaticImage
        src="../images/gatsby-astronaut.png"
        width={300}
        quality={95}
        alt="A Gatsby astronaut"
        style={{ marginBottom: `1.45rem` }}
      />
      <p>
        <Link to="/frontend/">Go to page 2</Link> <br />
      </p>
    </div>
  </Layout>
  )
}

export default IndexPage;
