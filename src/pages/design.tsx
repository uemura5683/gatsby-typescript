import * as React from "react"
import Layout from "../components/layout"
import { motion } from "framer-motion";
import Seo from "../components/seo"
import BreadCrumb from "../components/breadcrumb"
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
