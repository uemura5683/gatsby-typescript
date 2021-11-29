import * as React from "react"
import Layout from "../../components/layout"
import { motion } from "framer-motion";
import Seo from "../../components/seo"
import BreadCrumb from "../../components/breadcrumb"
import Title from "../../components/title"
import CardExtend from "../../components/card-extend-detail"
import JSONData from "../../json/list.json"
import { useLocation } from "@reach/router"
const Jsondata = JSONData.content;

const SecondPage = () => {

  const location = useLocation()
      , params = location.search
      , splits = params.split("=");

  return (
    <Layout>
      <Seo title="Cms" />
      <motion.div
        animate={{ x: 0, opacity: 1 }}
        initial={{ x: 0, opacity: 0 }}
        exit={{ x: 0, opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <BreadCrumb name="Cms" link="/cms" name_child={`${splits[1]}`} link_child={`${params}`}/>
        <Title name={`${splits[1]}`} />
        <CardExtend data={Jsondata}/>
      </motion.div>
    </Layout>
  )
}
export default SecondPage
