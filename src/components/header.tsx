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
    <header>
      <Menu data={data}/>
      <div className="l-header-inner" >
        <h1 className="c-logo">
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
      <div className="header-sns">
          <form className="header-keyword" method="GET" action="/search">
              <input type="checkbox" id="keyword-checkbox" />
              <label htmlFor="keyword-checkbox">
                <svg width="30" height="30" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.4932 8.00006C17.4932 11.6043 14.5815 14.5233 10.9932 14.5233C7.40488 14.5233 4.49316 11.6043 4.49316 8.00006C4.49316 4.3958 7.40488 1.47681 10.9932 1.47681C14.5815 1.47681 17.4932 4.3958 17.4932 8.00006Z" fill="#89A6D1" stroke="#ffffff"></path>
                  <line y1="-0.5" x2="9.96006" y2="-0.5" transform="matrix(-0.652039 0.758185 -0.757097 -0.653302 6.49414 12.6047)" stroke="#ffffff"></line>
                </svg>
              </label>
              <div className="keyword-box">
                <input className="head-search-text" type="text" name="q" defaultValue="" placeholder="検索キーワードを入力" />
                <button type="submit" className="head-search-btn">
                  <svg width="15" height="15" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.4932 8.00006C17.4932 11.6043 14.5815 14.5233 10.9932 14.5233C7.40488 14.5233 4.49316 11.6043 4.49316 8.00006C4.49316 4.3958 7.40488 1.47681 10.9932 1.47681C14.5815 1.47681 17.4932 4.3958 17.4932 8.00006Z" fill="#ffffff" stroke="#89A6D1"></path>
                    <line y1="-0.5" x2="9.96006" y2="-0.5" transform="matrix(-0.652039 0.758185 -0.757097 -0.653302 6.49414 12.6047)" stroke="#89A6D1"></line>
                  </svg>
                </button>
              </div>
          </form>
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
    </header>
  )
}

export default FrontHeader

