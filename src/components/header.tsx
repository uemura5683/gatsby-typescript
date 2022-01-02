import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Menu from "../components/menu"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#89A6D1`,
      marginBottom: `1.45rem`,
      position: `sticky`,
      top: `0px`,
      left: `0px`,
    }}
  >
    <Menu />
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 1200,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0, textAlign: `center`, }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          <StaticImage
            src="../images/logo.png"
            width={315}
            alt="Uemu Cheet Sheet"
          />
        </Link>
      </h1>
    </div>
    <div className="header-sns hidden-phone">
        <ul>
          <li>
            <Link
              to="https://nu-blogsite.net/"
              style={{
                color: `white`,
                textDecoration: `none`,
              }}
            >
              <StaticImage
                src="../images/sns/nu-blog.png"
                width={30}
                alt="nu-blog"
              />
            </Link>
          </li>
          <li>
            <Link
                to="https://uemu-engineer.com/"
                style={{
                  color: `white`,
                  textDecoration: `none`,
                }}
              >
              <StaticImage
                src="../images/sns/nu-portfolio.png"
                width={30}
                alt="nu-stack"
              />
            </Link>
          </li>
          <li>
            <Link
                to="https://twitter.com/uemuragame5683"
                style={{
                  color: `white`,
                  textDecoration: `none`,
                }}
              >
              <StaticImage
                src="../images/sns/twitter.png"
                width={30}
                alt="twitter"
              />
            </Link>
          </li>
        </ul>
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
