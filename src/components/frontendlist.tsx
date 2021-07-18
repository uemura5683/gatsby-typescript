import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import JSONData from "../content/frontend.json"

const List = () => {
  const Jsondata = JSONData.content;
  console.log(Jsondata);
  return (
    <div className="card-wrap">
      <div className="card-content">
        <div className="title">HTML</div>
        <StaticImage
          src="../images/frontend/html.png"
          width={300}
          quality={95}
          alt="HTML"
          style={{ marginBottom: `1.45rem` }}
        />
      </div>
      <div className="card-content">
        <div className="title">CSS</div>
          <StaticImage
            src="../images/frontend/css.png"
            width={300}
            quality={95}
            alt="css"
            style={{ marginBottom: `1.45rem` }}
          />
        </div>
      <div className="card-content">
        <div className="title">Javascript</div>
        <StaticImage
          src="../images/frontend/js.png"
          width={300}
          quality={95}
          alt="Javascript"
          style={{ marginBottom: `1.45rem` }}
        />
      </div>
      <div className="card-content">
        <div className="title">jQuery</div>
        <StaticImage
          src="../images/frontend/jq.png"
          width={300}
          quality={95}
          alt="jquery"
          style={{ marginBottom: `1.45rem` }}
        />
      </div>
      <div className="card-content">
        <div className="title">node.js</div>
        <StaticImage
          src="../images/frontend/node.png"
          width={300}
          quality={95}
          alt="Node.js"
          style={{ marginBottom: `1.45rem` }}
        />
      </div>
      <div className="card-content">
        <div className="title">SCSS</div>
        <StaticImage
          src="../images/frontend/scss.png"
          width={300}
          quality={95}
          alt="scss.js"
          style={{ marginBottom: `1.45rem` }}
        />
      </div>
      <div className="card-content">
        <div className="title">Pug</div>
        <StaticImage
          src="../images/frontend/pug.png"
          width={300}
          quality={95}
          alt="scss.js"
          style={{ marginBottom: `1.45rem` }}
        />
      </div>
      <div className="card-content">
        <div className="title">React.js</div>
        <StaticImage
          src="../images/frontend/react.png"
          width={300}
          quality={95}
          alt="scss.js"
          style={{ marginBottom: `1.45rem` }}
        />
      </div>
      <div className="card-content">
        <div className="title">Vue.js</div>
        <StaticImage
          src="../images/frontend/vue.png"
          width={300}
          quality={95}
          alt="vue.js"
          style={{ marginBottom: `1.45rem` }}
        />
      </div>
      <div className="card-content">
        <div className="title">gulp.js</div>
        <StaticImage
          src="../images/frontend/gulp.png"
          width={300}
          quality={95}
          alt="gulp.js"
          style={{ marginBottom: `1.45rem` }}
        />
      </div>
    </div>
  )
};
export default List