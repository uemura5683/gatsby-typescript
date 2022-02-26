import * as React from "react"
import axios from "axios"
import Layout from "../components/layout"
import { motion } from "framer-motion";
import Seo from "../components/seo"
import BreadCrumb from "../components/breadcrumb"
import Title from "../components/title"
import CardExtend from "../components/card-extend-detail"
import { useLocation } from "@reach/router"
const { useState, useEffect } = React

const SecondPage = () => {
  const location = useLocation()
    , params = location.search
    , splits: string[] = params.split("=")
    , [skilllist, setUsers] = useState([])
    , [onchange, onchanges] = useState("")
    , target = `${splits[1]}` != ''
             ? decodeURI( `${splits[1]}` )
             : '全て';

    useEffect(() => {
      axios.get(process.env.DATA)
        .then(res => setUsers(res.data))
        .catch(error => console.log(error));
    }, [] );

  return (
    <Layout>
      <Seo title={target + 'の検索結果'} />
      <motion.div
        animate={{ x: 0, opacity: 1 }}
        initial={{ x: 0, opacity: 0 }}
        exit={{ x: 0, opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <BreadCrumb name={target + 'の検索結果'} link="/search" name_child={null} link_child={`${params}`}/>
        <Title name={target + 'の検索結果'} />
        <div className="c-select-box">
          <select onChange={(e) => onchanges(e.currentTarget.value)}>
            <option value="default">all</option>
            <option value="document">document</option>
            <option value="qiita">qiita</option>
            <option value="coliss">coliss</option>
            <option value="blogsite">blogsite</option>
            <option value="zenn">zenn</option>
            <option value="company">company</option>
            <option value="codepen">codepen</option>
            <option value="portfolio">portfolio</option>
          </select>
        </div>
        <CardExtend data={skilllist} lang={`${splits[1]}`} type={`${splits[0]}`} chang={onchange}/>
      </motion.div>
    </Layout>
  );
}
export default SecondPage
