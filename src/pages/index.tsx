import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { motion } from "framer-motion";
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
      <div className="card-wrap">
        <div className="card-content">
          <div className="list">
            <div className="title">Frontend</div>
            <Link to="/frontend/">
              <StaticImage
                src="../images/top/frontend.png"
                width={300}
                quality={95}
                alt="A Gatsby astronaut"
                style={{ marginBottom: `1.45rem` }}
              />
            </Link>
          </div>
        </div>
        <div className="card-content">
          <div className="list">
            <div className="title">Backend</div>
            <Link to="/backend/">
              <StaticImage
                src="../images/top/frontend.png"
                width={300}
                quality={95}
                alt="A Gatsby astronaut"
                style={{ marginBottom: `1.45rem` }}
              />
            </Link>
          </div>
        </div>
        <div className="card-content">
          <div className="list">
            <div className="title">Other</div>
            <Link to="/other/">
              <StaticImage
                src="../images/top/frontend.png"
                width={300}
                quality={95}
                alt="A Gatsby astronaut"
                style={{ marginBottom: `1.45rem` }}
              />
            </Link>
          </div>
        </div>
      </div>        
      </motion.div>
  </Layout>
  )
}

export default IndexPage;
