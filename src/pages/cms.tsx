import * as React from "react"
import Layout from "../components/layout"
import { motion } from "framer-motion";
import Seo from "../components/seo"
import BreadCrumb from "../components/breadcrumb"
import Title from "../components/title"
import { graphql } from "gatsby"

const SecondPage = ({ data }) => {
  return (
    <Layout>
      <Seo title="CMS" />
      <motion.div
        animate={{ x: 0, opacity: 1 }}
        initial={{ x: 0, opacity: 0 }}
        exit={{ x: 0, opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <BreadCrumb name="CMS" link="/cms" name_child={null} link_child={null} />
        <Title name="CMS" />
        <div className="card-wrap">
          {data.allMicrocmsCms.edges.map(({ node }) => (
            <div className="card-content"  key={node.id}>
              <a href={`${node.link}`}>
                <div className="list">
                  <div className="title">{node.name}</div>
                  <img src={`${node.image.url}`} alt={node.name} style={{ margin: `5rem auto` }} />
                </div>
              </a>
            </div>
          ))}
        </div>
      </motion.div>
    </Layout>
  )
}

export default SecondPage

export const query = graphql`
  {
    allMicrocmsCms {
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