import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Menu from "./Menu";

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#89A6D1`,
      marginBottom: `1.45rem`,
    }}
  >
    <Menu width={250}/>
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 1200,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
