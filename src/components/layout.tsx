/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import Header from "./header"
import "../css/layout.css"
import "../css/component.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div
        style={{
          margin: `0 auto`,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        <footer>
          <div className="l-footer_inner">
            <Link
              to="/frontend"
              className="menu-item"
            >
              Frontend
            </Link>
            <Link
              to="/serverside"
              className="menu-item"
            >
              Serverside
            </Link>
            <Link
              to="/cms"
              className="menu-item"
            >
              CMS
            </Link>
            <Link
              to="/design"
              className="menu-item"
            >
              Design
            </Link>
            <Link
              to="/other"
              className="menu-item"
            >
              Other
            </Link>
          </div>
          <div className="copyright">
            © {new Date().getFullYear()} Uemu BK List
          </div>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout