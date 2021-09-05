import * as React from "react"
import Layout from "../components/layout"
import { motion } from "framer-motion";
import Seo from "../components/seo"
import BreadCrumb from "../components/breadcrumb"
import Title from "../components/title"
import CardExtend from "../components/card-extend"
import JSONData from "../json/serverside.json"
const Jsondata = JSONData.content;

const SecondPage = () => (
  <Layout>
      <Seo title="Backend" />
      <motion.div
        animate={{ x: 0, opacity: 1 }}
        initial={{ x: 0, opacity: 0 }}
        exit={{ x: 0, opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <BreadCrumb name="Backend" link="/backend"/>
        <Title name="Backend" />
        <CardExtend data={Jsondata} />
     </motion.div>
  </Layout>
)

export default SecondPage
