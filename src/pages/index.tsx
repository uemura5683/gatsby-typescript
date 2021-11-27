import * as React from "react"
import { Link, graphql } from "gatsby"
import { motion } from "framer-motion";
import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = ({ data }) => (
    <Layout>
      <Seo title="トップページ" />
      <motion.div
        animate={{ x: 0, opacity: 1 }}
        initial={{ x: 0, opacity: 0 }}
        exit={{ x: 0, opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="card-wrap">
          {data.allMicrocmsTop.edges.map(({ node }) => (
            <div className="card-content"  key={node.id}>
              <Link to={`${node.link}`}>
                <div className="list">
                  <div className="title">{node.name}</div>
                  <img src={`${node.image.url}`} alt={node.name} style={{ margin: `5rem auto` }} />
                </div>
              </Link>
            </div>
          ))}
        </div>
      </motion.div>
  </Layout>
)

export default IndexPage;

export const query = graphql`
  {
    allMicrocmsTop {
      edges {
        node {
          link
          id
          name
          image {
            url
            height
            width
          }
        }
      }
    }
  }
`