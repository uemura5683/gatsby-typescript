import * as React from "react"

const BreadCrumb = ( {name, link, name_child, link_child} ) => {
  return (
    <div className="breadcrumb">
      <ul>
        <li><a href="/">TOP</a></li>
        <li><a href={link}>{name}</a></li>
        { name_child ? (
          <>
            <li><a href={link_child}>{name_child}</a></li>
          </>
        ) : null}
      </ul>
    </div>
  )
};
export default BreadCrumb