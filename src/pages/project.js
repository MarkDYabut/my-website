import React from "react";
import { Link, graphql } from "gatsby";
import { css } from "@emotion/core";
import styled from "@emotion/styled";

import Layout from "../components/layout";
import SEO from "../components/seo";

const Content = styled.div`
  margin: 0 auto;
  max-width: 860px;
  padding: 1.45rem 1.0875rem;
`;

const ArticleDate = styled.h5`
  display: inline;
  color: #606060;
`;

const MarkerHeader = styled.h3`
  display: inline;
  border-radius: 1em 0 1em 0;
`;

const ReadingTime = styled.h5`
  display: inline;
  color: #606060;
`;

const Frame = styled.iframe`
  border-style: none;
  width: 100%;
  height: 500px;

  -moz-border-radius: 12px;
  -webkit-border-radius: 12px;border-radius: 12px;
  -moz-box-shadow: 4px 4px 14px #000;
  -webkit-box-shadow: 4px 4px 14px #000;
  box-shadow: 4px 4px 14px #000;
  -moz-transform:rotate(2deg);
  // -webkit-transform:rotate(-3deg);
  -o-transform:rotate(2deg);
  -ms-transform:rotate(2deg);
  
  filter:progid:DXImageTransform.Microsoft.BasicImage(rotation=.1);
`

const Frame2 = styled.iframe`
  border-style: none;
  width: 100%;
  height: 100%;

  @media(min-width: 500px) {
    height: 375px;
  }

  -moz-border-radius: 12px;
  -webkit-border-radius: 12px;border-radius: 12px;
  -moz-box-shadow: 4px 4px 14px #000;
  -webkit-box-shadow: 4px 4px 14px #000;
  box-shadow: 4px 4px 14px #000;
  // -moz-transform:rotate(2deg);
  // -webkit-transform:rotate(3deg);
  // -o-transform:rotate(2deg);
  // -ms-transform:rotate(2deg);
  
  // filter:progid:DXImageTransform.Microsoft.BasicImage(rotation=-.1);
`

const IndexPage = ({ data }) => {
  return (
    <>
      <SEO title="Project" keywords={[`Mark Yabut`, `blog`, `project`]} />
      <Layout>
        <Content>
          <h1>Project</h1>
          <p>
            A collection of personal projects that I am involved in that I have had a chance to document.
          </p>

          <p>
            Below is a react three fiber project that I refactored into a gatsby application. Just now got
            into the three.js space and been having a lot of fun, it will definitely keep me occupied for the rest of 2022.
            Note: you can manipulate the render with mouse/click/finger actions.
          </p>
          <p><i>***Disclosure: it is going to be a 40-50mb render so I suggest not refreshing the page (hence the long load). - I will try and prioritize 
            adding a proper disclosure that asks for user input before rendering.</i></p>
          <Frame2 src="https://hilarious-croissant-c19f8a.netlify.app/r3f-2"></Frame2>
          <p>
            Below is a cool little timer application I initially built in F2020. It is built with the same {" "}
            <Link to="tech/this-website-was-built-with-gatsby">technologies</Link> {" "}
            as this website, configured as a {" "}
            <Link to="tech/progressive-web-applications">progressive web application</Link> 
            {""}, contains 2 apps and has been inserted into this application as an iframe.
          </p>
          <Frame src="https://my-pomodoro.netlify.app/app2"></Frame>
          {data.allMarkdownRemark.edges
            .filter(({ node }) => {
              const rawDate = node.frontmatter.rawDate;
              const date = new Date(rawDate);
              return date < new Date();
            })
            .map(({ node }) => (
              <div key={node.id}>
                <Link
                  to={node.frontmatter.path}
                  css={css`
                    text-decoration: none;
                    color: inherit;
                  `}
                >
                  <MarkerHeader>{node.frontmatter.title} </MarkerHeader>
                  <div>
                    <ArticleDate>{node.frontmatter.date}</ArticleDate>
                    <ReadingTime> - {node.fields.readingTime.text}</ReadingTime>
                  </div>
                  <p>{node.excerpt}</p>
                </Link>
              </div>
            ))}
        </Content>
      </Layout>
    </>
  );
};

export default IndexPage;

export const query = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        frontmatter: { category: { eq: "project" }, draft: { eq: false } }
      }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            rawDate: date
            path
          }
          fields {
            slug
            readingTime {
              text
            }
          }
          excerpt
        }
      }
    }
  }
`;
