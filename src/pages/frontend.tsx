import * as React from "react"
import { Link, graphql } from "gatsby"
import { motion } from "framer-motion";
import Layout from "../components/layout"
import Seo from "../components/seo"
import BreadCrumb from "../components/breadcrumb"
import Title from "../components/title"
import CardExtend from "../components/card-extend"
import JSONData from "../json/frontend.json"
const Jsondata = JSONData.content;

const SecondPage = () => {
  return (
    <Layout>
      <Seo title="フロントエンド一覧" />
      <motion.div
        animate={{ x: 0, opacity: 1 }}
        initial={{ x: 0, opacity: 0 }}
        exit={{ x: 0, opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <BreadCrumb name="Frontend" link="/frontend" name_child={null} link_child={null}/>
        <Title name="Frontend" />
        <CardExtend data={Jsondata} path="frontend" />
      </motion.div>
    </Layout>
  )
}
export default SecondPage
