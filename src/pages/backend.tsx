import * as React from "react"
import Layout from "../components/layout"
import { motion } from "framer-motion";
import Seo from "../components/seo"
import BreadCrumb from "../components/breadcrumb"
import Title from "../components/title"
import ServersideList from "../components/serversidelist"

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
        <ServersideList />
     </motion.div>
  </Layout>
)

export default SecondPage
