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

const IndexPage = ({ data }) => {
  return (
    <>
      <SEO title="Lifestyle" keywords={[`Mark Yabut`, `blog`, `lifestyle`]} />
      <Layout>
        <Content>
          <h1>Lifestyle</h1>
          <p>
            A collection of thoughts inspired by the experiences and ideas surrounding me.
          </p>
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
        frontmatter: { category: { eq: "lifestyle" }, draft: { eq: false } }
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
