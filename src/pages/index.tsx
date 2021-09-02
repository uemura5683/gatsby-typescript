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
          <Link to="/frontend/">
            <div className="list">
              <div className="title">Frontend</div>
              <StaticImage
                src="../images/top/frontend.png"
                width={300}
                quality={95}
                alt="A Gatsby astronaut"
                style={{ margin: `5rem` }}
              />
            </div>
          </Link>
        </div>
        <div className="card-content">
          <Link to="/backend/">
            <div className="list">
              <div className="title">Backend</div>
              <StaticImage
                src="../images/top/backend.png"
                width={300}
                quality={95}
                alt="A Gatsby astronaut"
                style={{ margin: `5rem` }}
              />
            </div>
          </Link>
        </div>
        <div className="card-content">
          <Link to="/other/">
            <div className="list">
              <div className="title">Other</div>
                <StaticImage
                  src="../images/top/other.png"
                  width={300}
                  quality={95}
                  alt="A Gatsby astronaut"
                  style={{ margin: `5rem` }}
                />
            </div>
          </Link>
        </div>
      </div>        
      </motion.div>
  </Layout>
  )
}

export default IndexPage;
