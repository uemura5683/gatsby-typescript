import * as React from "react"
import { Link, graphql } from "gatsby"
import { motion } from "framer-motion";
import BreadCrumb from "../components/breadcrumb"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Title from "../components/title"

const SecondPage = () => {
  return (
    <Layout>
      <Seo title="Ohter" />
      <motion.div
        animate={{ x: 0, opacity: 1 }}
        initial={{ x: 0, opacity: 0 }}
        exit={{ x: 0, opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <BreadCrumb name="Ohter" link="/other" name_child={null} link_child={null} />
        <Title name="Ohter" />
      </motion.div>
    </Layout>
  )  
}
export default SecondPage
