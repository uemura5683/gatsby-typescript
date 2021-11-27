import * as React from "react"
import Layout from "../../components/layout"
import { motion } from "framer-motion";
import Seo from "../../components/seo"
import BreadCrumb from "../../components/breadcrumb"
import Title from "../../components/title"
import CardExtend from "../../components/card-extend-detail"
import JSONData from "../../json/list.json"
const Jsondata = JSONData.content;
const params = location.search
    , splits = params.split("=");
const SecondPage = () => (
<Layout>
      <Seo title="Serverside" />
      <motion.div
        animate={{ x: 0, opacity: 1 }}
        initial={{ x: 0, opacity: 0 }}
        exit={{ x: 0, opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <BreadCrumb name="Serverside" link="/serverside" name_child="PHP" link_child="/serverside/list?param=php" />
        <Title name="PHP" />
        <CardExtend data={Jsondata}/>
     </motion.div>
  </Layout>
)
export default SecondPage
