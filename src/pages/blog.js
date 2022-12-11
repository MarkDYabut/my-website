import React from "react";
import styled from "@emotion/styled";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { Link } from "gatsby";
import { css } from "@emotion/core";
import Slide from "../components/animators/slide";

const ArticleDate = styled.h4`
  display: inline;
  color: #606060;
`;

const MarkerHeader = styled.h3`
  display: inline;
  border-radius: 1em 0 1em 0;
  text-decoration: underline;
`;

const ReadingTime = styled.h4`
  display: inline;
  color: #606060;
`;

const Content = styled.div`
  margin: 0 auto;
  max-width: 860px;
  padding: 1.45rem 1.0875rem;
`;

const NavLink = styled(Link)`
  padding-bottom: 20px;
`;

const IndexPage = ({ data }) => {

  const askUser = url => {
    if (window.confirm("This link will open in a new tab, Continue?")) {
      window.open(url, '_blank', 'noopener, noreferrer');
    } else {
      console.log("user cancelled")
    }
  }

  return (
    <>
      <SEO title="Home" keywords={[`Mark Yabut`, `about`, `index`]} />
      <Layout hideHeader={true}>
        <Content>
          <Slide><h1>Blog</h1></Slide>
          <h2>Latest Project Posts</h2>
          {data.project.edges
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
          <NavLink to="../project">See all project posts</NavLink>
          <h2>Latest Tech Posts</h2>
          {data.tech.edges
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
          <NavLink to="../tech">See all tech posts</NavLink>
          <h2>Latest Lifestyle Posts</h2>
          {data.lifestyle.edges
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
          <NavLink to="../lifestyle">See all lifestyle posts</NavLink>

        </Content>
      </Layout>
    </>
  );
}

export default IndexPage;

export const query = graphql`
{
  site {
    siteMetadata {
      title
    }
  }
  lifestyle: allMarkdownRemark(
    limit: 5
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
 tech: allMarkdownRemark(
    limit: 5
    sort: { fields: [frontmatter___date], order: DESC }
    filter: {
      frontmatter: { category: { eq: "tech" }, draft: { eq: false } }
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
  project: allMarkdownRemark(
    limit: 5
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