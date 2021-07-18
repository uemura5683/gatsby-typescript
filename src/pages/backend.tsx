import * as React from "react"
import Layout from "../components/layout"
import { motion } from "framer-motion";
import Seo from "../components/seo"
import FrontendList from "../components/frontendlist"

const SecondPage = () => (
  <Layout>
      <Seo title="バックエンド一覧" />
      <motion.div
        animate={{ x: 0, opacity: 1 }}
        initial={{ x: 0, opacity: 0 }}
        exit={{ x: 0, opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <FrontendList />
     </motion.div>
  </Layout>
)

export default SecondPage
