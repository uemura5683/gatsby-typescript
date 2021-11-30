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
      <Seo title="Design" />
      <motion.div
        animate={{ x: 0, opacity: 1 }}
        initial={{ x: 0, opacity: 0 }}
        exit={{ x: 0, opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <BreadCrumb name="Design" link="/design" name_child={null} link_child={null} />
        <Title name="Design"/>
      </motion.div>
    </Layout>
  )
}
export default SecondPage
