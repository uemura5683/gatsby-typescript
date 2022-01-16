import * as React from "react"
import { Link, useStaticQuery,graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Menu from "../components/menu"

const FrontHeader = () => {

  const data = useStaticQuery(
    graphql`
    {
      allMicrocmsFrontend {
        edges {
          node {
            id
            link
            name
          }
        }
      }
      allMicrocmsServerside {
        edges {
          node {
            id
            link
            name
          }
        }
      }
      allMicrocmsCms {
        edges {
          node {
            id
            link
            name
          }
        }
      }
      allMicrocmsDesign {
        edges {
          node {
            id
            link
            name
          }
        }
      }
      allMicrocmsOther {
        edges {
          node {
            id
            link
            name
          }
        }
      }
    }
  `)
  return (
    <header
    style={{
      background: `#89A6D1`,
      marginBottom: `1.45rem`,
      position: `sticky`,
      top: `0px`,
      left: `0px`,
    }}
  >
    <Menu data={data}/>
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 1200,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0, textAlign: `center`, }}>
        <Link to="/" >
          <StaticImage
            src="../images/logo.png"
            width={227}
            height={28}
            alt="Uemu BK List"
          />
        </Link>
      </h1>
    </div>
    <div className="header-sns hidden-phone">
        <ul>
          <li>
            <a
              href="https://nu-blogsite.net/"
              target="_blank"
              rel="noreferrer noopener"
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
            </a>
          </li>
          <li>
            <a
                href="https://uemu-engineer.com/"
                target="_blank"
                rel="noreferrer noopener"
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
            </a>
          </li>
          <li>
            <a
                href="https://twitter.com/uemuragame5683"
                target="_blank"
                rel="noreferrer noopener"
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
            </a>
          </li>
        </ul>
    </div>

  </header>
  )
}

export default FrontHeader

