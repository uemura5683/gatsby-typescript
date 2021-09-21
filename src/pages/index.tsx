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
          <Link to="/frontend">
            <div className="list">
              <div className="title">Frontend</div>
              <StaticImage
                src="../images/top/frontend.png"
                width={300}
                quality={95}
                alt="Frontend"
                style={{ margin: `5rem` }}
              />
            </div>
          </Link>
        </div>
        <div className="card-content">
          <Link to="/serverside">
            <div className="list">
              <div className="title">Serverside</div>
              <StaticImage
                src="../images/top/serverside.png"
                width={300}
                quality={95}
                alt="Serverside"
                style={{ margin: `5rem` }}
              />
            </div>
          </Link>
        </div>
        <div className="card-content">
          <Link to="/cms">
            <div className="list">
              <div className="title">CMS</div>
                <StaticImage
                  src="../images/top/cms.png"
                  width={300}
                  quality={95}
                  alt="CMS"
                  style={{ margin: `5rem` }}
                />
            </div>
          </Link>
        </div>
        
        <div className="card-content">
          <Link to="/design">
            <div className="list">
              <div className="title">Design</div>
                <StaticImage
                  src="../images/top/design.png"
                  width={300}
                  quality={95}
                  alt="Design"
                  style={{ margin: `5rem` }}
                />
            </div>
          </Link>
        </div>

        <div className="card-content">
          <Link to="/others">
            <div className="list">
              <div className="title">Other</div>
                <StaticImage
                  src="../images/top/other.png"
                  width={300}
                  quality={95}
                  alt="Other"
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
