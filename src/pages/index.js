import React from 'react'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import { graphql } from "gatsby"
import NonStretchedImage from "../components/NonStretchedImage";
import Layout from "../layouts/index";
import pageStyles from "./page.module.css";
import Link from 'gatsby-link'
import SEO from "../components/SEO";

const RootIndex = (props) => {
  const renderBlock = (block) => {
    if (block.title !== "empty") {
      return (
        <div className={pageStyles.indexblock}>
          <Link to={`/${block.slug}`} >
            <div className={pageStyles.link}>
              <h1>{block.title}</h1>
              <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" /><path d="M0 0h24v24H0V0z" fill="none" /></svg>
            </div>
            <p>{block.description}</p>
          </Link>
        </div>
      )
    }
  }
  const post = get(props, 'data.contentfulPage')
  return (
    <Layout>
      <SEO
        title={post.title}
        description={post.highlighted}
        path={post.slug}
        cover={post.coverImage && post.coverImage.fluid}
      />
      <Helmet title={`Tapahtuma Ryö`} />
      <div className={pageStyles.cover}>
        <NonStretchedImage className={pageStyles.coverImage} objectFit={"contain"} fluid={post.coverImage.fluid} />
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#270c2b" fill-opacity="1" d="M0,96L6.2,117.3C12.3,139,25,181,37,213.3C49.2,245,62,267,74,250.7C86.2,235,98,181,111,170.7C123.1,160,135,192,148,218.7C160,245,172,267,185,245.3C196.9,224,209,160,222,122.7C233.8,85,246,75,258,69.3C270.8,64,283,64,295,53.3C307.7,43,320,21,332,58.7C344.6,96,357,192,369,218.7C381.5,245,394,203,406,186.7C418.5,171,431,181,443,154.7C455.4,128,468,64,480,53.3C492.3,43,505,85,517,106.7C529.2,128,542,128,554,138.7C566.2,149,578,171,591,202.7C603.1,235,615,277,628,266.7C640,256,652,192,665,165.3C676.9,139,689,149,702,144C713.8,139,726,117,738,133.3C750.8,149,763,203,775,229.3C787.7,256,800,256,812,245.3C824.6,235,837,213,849,218.7C861.5,224,874,256,886,266.7C898.5,277,911,267,923,256C935.4,245,948,235,960,218.7C972.3,203,985,181,997,149.3C1009.2,117,1022,75,1034,80C1046.2,85,1058,139,1071,181.3C1083.1,224,1095,256,1108,240C1120,224,1132,160,1145,122.7C1156.9,85,1169,75,1182,80C1193.8,85,1206,107,1218,96C1230.8,85,1243,43,1255,58.7C1267.7,75,1280,149,1292,149.3C1304.6,149,1317,75,1329,69.3C1341.5,64,1354,128,1366,154.7C1378.5,181,1391,171,1403,186.7C1415.4,203,1428,245,1434,266.7L1440,288L1440,320L1433.8,320C1427.7,320,1415,320,1403,320C1390.8,320,1378,320,1366,320C1353.8,320,1342,320,1329,320C1316.9,320,1305,320,1292,320C1280,320,1268,320,1255,320C1243.1,320,1231,320,1218,320C1206.2,320,1194,320,1182,320C1169.2,320,1157,320,1145,320C1132.3,320,1120,320,1108,320C1095.4,320,1083,320,1071,320C1058.5,320,1046,320,1034,320C1021.5,320,1009,320,997,320C984.6,320,972,320,960,320C947.7,320,935,320,923,320C910.8,320,898,320,886,320C873.8,320,862,320,849,320C836.9,320,825,320,812,320C800,320,788,320,775,320C763.1,320,751,320,738,320C726.2,320,714,320,702,320C689.2,320,677,320,665,320C652.3,320,640,320,628,320C615.4,320,603,320,591,320C578.5,320,566,320,554,320C541.5,320,529,320,517,320C504.6,320,492,320,480,320C467.7,320,455,320,443,320C430.8,320,418,320,406,320C393.8,320,382,320,369,320C356.9,320,345,320,332,320C320,320,308,320,295,320C283.1,320,271,320,258,320C246.2,320,234,320,222,320C209.2,320,197,320,185,320C172.3,320,160,320,148,320C135.4,320,123,320,111,320C98.5,320,86,320,74,320C61.5,320,49,320,37,320C24.6,320,12,320,6,320L0,320Z"></path>
        </svg>
        <h2 className={pageStyles.highlighted}>{post.highlighted}</h2>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#270c2b" fill-opacity="1" d="M0,96L6.2,117.3C12.3,139,25,181,37,213.3C49.2,245,62,267,74,250.7C86.2,235,98,181,111,170.7C123.1,160,135,192,148,218.7C160,245,172,267,185,245.3C196.9,224,209,160,222,122.7C233.8,85,246,75,258,69.3C270.8,64,283,64,295,53.3C307.7,43,320,21,332,58.7C344.6,96,357,192,369,218.7C381.5,245,394,203,406,186.7C418.5,171,431,181,443,154.7C455.4,128,468,64,480,53.3C492.3,43,505,85,517,106.7C529.2,128,542,128,554,138.7C566.2,149,578,171,591,202.7C603.1,235,615,277,628,266.7C640,256,652,192,665,165.3C676.9,139,689,149,702,144C713.8,139,726,117,738,133.3C750.8,149,763,203,775,229.3C787.7,256,800,256,812,245.3C824.6,235,837,213,849,218.7C861.5,224,874,256,886,266.7C898.5,277,911,267,923,256C935.4,245,948,235,960,218.7C972.3,203,985,181,997,149.3C1009.2,117,1022,75,1034,80C1046.2,85,1058,139,1071,181.3C1083.1,224,1095,256,1108,240C1120,224,1132,160,1145,122.7C1156.9,85,1169,75,1182,80C1193.8,85,1206,107,1218,96C1230.8,85,1243,43,1255,58.7C1267.7,75,1280,149,1292,149.3C1304.6,149,1317,75,1329,69.3C1341.5,64,1354,128,1366,154.7C1378.5,181,1391,171,1403,186.7C1415.4,203,1428,245,1434,266.7L1440,288L1440,0L1433.8,0C1427.7,0,1415,0,1403,0C1390.8,0,1378,0,1366,0C1353.8,0,1342,0,1329,0C1316.9,0,1305,0,1292,0C1280,0,1268,0,1255,0C1243.1,0,1231,0,1218,0C1206.2,0,1194,0,1182,0C1169.2,0,1157,0,1145,0C1132.3,0,1120,0,1108,0C1095.4,0,1083,0,1071,0C1058.5,0,1046,0,1034,0C1021.5,0,1009,0,997,0C984.6,0,972,0,960,0C947.7,0,935,0,923,0C910.8,0,898,0,886,0C873.8,0,862,0,849,0C836.9,0,825,0,812,0C800,0,788,0,775,0C763.1,0,751,0,738,0C726.2,0,714,0,702,0C689.2,0,677,0,665,0C652.3,0,640,0,628,0C615.4,0,603,0,591,0C578.5,0,566,0,554,0C541.5,0,529,0,517,0C504.6,0,492,0,480,0C467.7,0,455,0,443,0C430.8,0,418,0,406,0C393.8,0,382,0,369,0C356.9,0,345,0,332,0C320,0,308,0,295,0C283.1,0,271,0,258,0C246.2,0,234,0,222,0C209.2,0,197,0,185,0C172.3,0,160,0,148,0C135.4,0,123,0,111,0C98.5,0,86,0,74,0C61.5,0,49,0,37,0C24.6,0,12,0,6,0L0,0Z"></path>
        </svg>
      </div>
      <div className="wrapper">
        <h1 className="section-headline">{post.title}</h1>
        {post.blocks.map(block => (
          renderBlock(block)
        ))}
      </div>
    </Layout>
  )
}


export default RootIndex

export const pageQuery = graphql`
  query FrontPage{
    contentfulPage(slug: {eq: "/"}) {
      slug
      title
      coverImage {
        fluid(quality: 100) {
          src
        }
      }
      highlighted
      blocks {
        ... on ContentfulBlock {
        title
        description
        slug
        content {
          childMarkdownRemark {
            html
          }
        }
        }
      }
    }
  }
`
