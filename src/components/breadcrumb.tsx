import * as React from "react"
import { Link } from "gatsby"

const BreadCrumb = ( {name, link, name_child, link_child} ) => {
  return (
    <div className="breadcrumb">
      <ul>
        <li><Link to="/">TOP</Link></li>
        <li><Link to={link}>{name}</Link></li>
        { name_child ? (
          <>
            <li><Link to={link_child}>{name_child}</Link></li>
          </>
        ) : null}
      </ul>
    </div>
  )
};
export default BreadCrumb