import React from "react";
import styled from "@emotion/styled";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { Link } from "gatsby";
import { css } from "@emotion/core";

const ArticleDate = styled.h4`
  display: inline;
  color: #606060;
`;

const MarkerHeader = styled.h3`
  display: inline;
  border-radius: 1em 0 1em 0;
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
  padding: 0 0.3rem 0;
`;

const IndexPage = ({ data }) => {
  return (
    <>
      <SEO title="Home" keywords={[`Mark Yabut`, `about`, `index`]} />
      <Layout>
        <Content>
          <h1>Mark Dyllan Yabut</h1>
          <p>
            <i>
              "Advice is really your current-self talking to your former-self."
            </i>
          </p>
          <p>
            This site aims to share my journey as I explore strategies, tools and
            ideas that attempt improve my internal systems so that I may live a
            happier, healthier and productive life (and maybe inspire the reader).
          </p>
          <hr />
          <h2>About me</h2>
          <p>
            I work as a
            <NavLink to="/tech/what-is-a-software-test-engineer">
              software test engineer,
            </NavLink>
            where I work on improving testing processes through code. I have
            an education in{" "}
            <a
              href="https://www.ryerson.ca/programs/undergraduate/electrical-engineering/"
              target="_blank"
            >
              electrical engineering
            </a>
            {" "} that currently has a solid 0-20% (closer to 0%) relevancy to what I do. I also spend time writing about what i've learned while working in
            tech as I believe that:
          </p>
          <p>
            <i>
              "The formula for success and happiness is sharing what we learn,
              even if it's something that we may feel that 'everybody knows.'" - I totally stole this quote from someone and I forgot who
            </i>
          </p>
          <hr />
          <h2>Latest Tech Blog Posts</h2>
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
          <hr />
          <h2>Latest Lifestyle Blog Posts</h2>
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
          <hr />
          <h2>Why this</h2>
          <p>
            For a while I’d wake up every morning, go through the same routines
            and by the end of it, ask myself: “isn’t it supposed to get easier?”
            Everything got better for me when I made peace with the fact that it
            will not ever get easier; life is hard.
          </p>
          <p>
            Back to the original question, I developed this place because I needed
            it.
          </p>
          <p>
            When things are going well or not so well; the question is always the
            same “how to keep going?” With everything getting more complex, it’s
            easy to get stuck and feel like we’re not getting anywhere.
          </p>
          <p>
            This place is somewhere to track my milestones and a reminder to
            myself that I am pushing forward.
          </p>
          <hr />
          <h2>Disclosure</h2>
          <p>
            The ideas i've shared here are both of my own and of my influences.
          </p>
          <p>
            <i>"Take what you want and leave the rest."</i>
          </p>
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
    limit: 3
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
    limit: 3
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
}
`;