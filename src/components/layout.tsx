import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Header from "./header"
import "../css/layout.css"
import "../css/component.css"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="l-container" >
        <main>{children}</main>
        <footer>
          <div className="l-footer_inner">
            <Link to="/frontend" className="menu-item">Frontend</Link>
            <Link to="/serverside" className="menu-item">Serverside</Link>
            <Link to="/cms" className="menu-item">CMS</Link>
            <Link to="/design" className="menu-item" >Design</Link>
            <Link to="/other" className="menu-item">Other</Link>
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