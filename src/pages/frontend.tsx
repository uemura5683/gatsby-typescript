import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import { AnimatePresence, motion } from "framer-motion";
import Seo from "../components/seo"

const SecondPage = () => (
  <Layout>
    <Seo title="フロントエンド一覧" />
    <motion.div
      animate={{ x: 0, opacity: 1 }}
      initial={{ x: 0, opacity: 0 }}
      exit={{ x: 0, opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1>Hi from the second page</h1>
      <p>Welcome to page 2</p>
      <Link to="/">Go back to the homepage</Link>
     </motion.div>
  </Layout>
)

export default SecondPage
