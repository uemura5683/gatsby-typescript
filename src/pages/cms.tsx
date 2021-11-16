import * as React from "react"
import Layout from "../components/layout"
import { motion } from "framer-motion";
import Seo from "../components/seo"
import BreadCrumb from "../components/breadcrumb"
import Title from "../components/title"
import CardExtend from "../components/card-extend"
import JSONData from "../json/cms.json"
const Jsondata = JSONData.content;

const SecondPage = () => (
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
        <CardExtend data={Jsondata} path="cms"/>
     </motion.div>
  </Layout>
)

export default SecondPage
