import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import JSONData from "../content/other.json"

const List = () => {
  const Jsondata = JSONData.content;
  return (
    <div className="card-wrap">
      <div className="card-content">
        <div className="title">Wordpress</div>
        <StaticImage
          src="../images/cms/wp.png"
          width={300}
          quality={95}
          alt="HTML"
          style={{ margin: `5rem` }}
        />
      </div>
      <div className="card-content">
        <div className="title">Movable Type</div>
          <StaticImage
            src="../images/cms/mt.png"
            width={300}
            quality={95}
            alt="Movable Type"
            style={{ margin: `5rem` }}
          />
        </div>
      <div className="card-content">
        <div className="title">micro CMS</div>
        <StaticImage
          src="../images/cms/mcms.png"
          width={300}
          quality={95}
          alt="mcms"
          style={{ margin: `5rem` }}
        />
      </div>
    </div>
  )
};
export default List