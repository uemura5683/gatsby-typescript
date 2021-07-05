import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { AnimatePresence, motion } from "framer-motion";
import Layout from "../components/layout"
import Seo from "../components/seo"

function IndexPage() {
  return (
    <Layout>
      <Seo title="トップページ" />
      <motion.div
        animate={{ x: 0, opacity: 1 }}
        initial={{ x: 0, opacity: 0 }}
        exit={{ x: 0, opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
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
      </motion.div>
  </Layout>
  )
}

export default IndexPage;
