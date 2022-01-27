import * as React from "react"
import { Link } from "gatsby"
import { slide as Menu } from "react-burger-menu";
import { StaticImage } from "gatsby-plugin-image"

const Props = ({data}) => {
  return (
    <Menu {...Props}>
      <Link to="/" className="menu-item" >
        TOP
      </Link>
      <Link to="/frontend" className="menu-item" >
        Frontend
      </Link>
      <ul className="child-category">
          {data.allMicrocmsFrontend.edges.map(({ node }) => (
              <li><Link to={`${node.link}`}>{node.name}</Link></li>
          ))}
      </ul>
      <Link to="/serverside" className="menu-item" >
        Serverside
      </Link>
      <ul className="child-category">
          {data.allMicrocmsServerside.edges.map(({ node }) => (
              <li><Link to={`${node.link}`}>{node.name}</Link></li>
          ))}
      </ul>
      <Link to="/cms" className="menu-item" >
        CMS
      </Link>
      <ul className="child-category">
          {data.allMicrocmsCms.edges.map(({ node }) => (
              <li><Link to={`${node.link}`}>{node.name}</Link></li>
          ))}
      </ul>
      <Link to="/design" className="menu-item" >
        Design
      </Link>
      <ul className="child-category">
          {data.allMicrocmsDesign.edges.map(({ node }) => (
              <li><Link to={`${node.link}`}>{node.name}</Link></li>
          ))}
      </ul>
      <Link to="/other" className="menu-item" >
        Other
      </Link>
      <ul className="child-category">
          {data.allMicrocmsOther.edges.map(({ node }) => (
              <li><Link to={`${node.link}`}>{node.name}</Link></li>
          ))}
      </ul>
      <div className="header-sns visible-phone">
        <ul>
          <li>
            <a
              href="https://nu-blogsite.net/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <StaticImage
                src="../images/sns/nu-blog.png"
                width={30}
                alt="nu-blog"
              />
            </a>
          </li>
          <li>
            <a
                href="https://uemu-engineer.com/"
                target="_blank"
                rel="noreferrer noopener"
            >
              <StaticImage
                src="../images/sns/nu-portfolio.png"
                width={30}
                alt="nu-stack"
              />
            </a>
          </li>
          <li>
            <a
                href="https://twitter.com/uemuragame5683"
                target="_blank"
                rel="noreferrer noopener"
            >
              <StaticImage
                src="../images/sns/twitter.png"
                width={30}
                alt="twitter"
              />
            </a>
          </li>
        </ul>
      </div>
    </Menu>
  );
};
export default Props