import * as React from "react"
import axios from "axios"
import Layout from "../../components/layout"
import { motion } from "framer-motion";
import Seo from "../../components/seo"
import BreadCrumb from "../../components/breadcrumb"
import Title from "../../components/title"
import CardExtend from "../../components/card-extend-detail"
import { useLocation } from "@reach/router"
const { useState, useEffect } = React

const SecondPage = () => {
  const location = useLocation()
    , params = location.search
    , splits = params.split("=")
    ,[skilllist, setUsers] = useState([])
    ,[onchange, onchanges] = useState("");

    useEffect(() => {
      axios.get(process.env.DATA)
        .then(res => setUsers(res.data))
        .catch(error => console.log(error));
    }, [] );

  return (
    <Layout>
      <Seo title="Design" />
      <motion.div
        animate={{ x: 0, opacity: 1 }}
        initial={{ x: 0, opacity: 0 }}
        exit={{ x: 0, opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <BreadCrumb name="Design" link="/design" name_child={`${splits[1]}`} link_child={`${params}`}/>
        <Title name={`${splits[1]}`} />
        <div className="c-select-box">
          <select onChange={(e) => onchanges(e.currentTarget.value)}>
            <option value="default">all</option>
            <option value="document">document</option>
            <option value="qiita">qiita</option>
            <option value="coliss">coliss</option>
            <option value="blogsite">blogsite</option>
            <option value="zenn">zenn</option>
            <option value="conpany">conpany</option>
            <option value="portfolio">portfolio</option>
          </select>
        </div>
        <CardExtend data={skilllist} lang={`${splits[1]}`} chang={onchange}/>
      </motion.div>
    </Layout>
  );
}
export default SecondPage
