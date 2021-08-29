import * as React from "react"

const BreadCrumb = ( {name, link} ) => {
  return (
    <div className="breadcrumb">
      <ul>
        <li><a href="/">TOP</a></li>
        <li><a href={link}>{name}</a></li>
      </ul>
    </div>
  )
};
export default BreadCrumb