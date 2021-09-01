import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import JSONData from "../content/serverside.json"

const List = () => {
  const Jsondata = JSONData.content;
  return (
    <div className="card-wrap">
      <div className="card-content">
        <div className="title">PHP</div>
        <StaticImage
          src="../images/backend/php.png"
          width={300}
          quality={95}
          alt="PHP"
          style={{ marginBottom: `1.45rem` }}
        />
      </div>
      <div className="card-content">
        <div className="title">GO</div>
          <StaticImage
            src="../images/backend/go.png"
            width={300}
            quality={95}
            alt="GO"
            style={{ marginBottom: `1.45rem` }}
          />
        </div>
    </div>
  )
};
export default List