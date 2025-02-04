import React from "react";
import styled from "@emotion/styled";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { Link } from "gatsby";
import { css } from "@emotion/core";
import Slide from "../components/animators/slide";
import Emojis from "../components/emojis";

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
  padding: 0 0.3rem 0;
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
          <Slide><h1>Mark Yabut</h1></Slide>
          <p>
            <i>
              "Advice is really your current-self talking to your former-self."
            </i>
          </p>
          <p>
            <s>
              This site aims to share my journey as I explore strategies, tools and
              ideas that attempt improve my internal systems so that I may live a
              happier, healthier and productive life (and maybe inspire the reader).
            </s>
          </p>
          <p>
            This site is me talking to myself.
          </p>
          <hr />
          <h2>About me</h2>
          <p>
            I work as a
            <NavLink to="/tech/what-is-a-software-test-engineer">
              software test engineer,
            </NavLink>
            where I build applications that test other applications that I may have also built. I have
            an education in{" "}
            <a
              href="https://www.ryerson.ca/programs/undergraduate/electrical-engineering/"
              target="_blank"
            >
              electrical computer engineering
            </a>
            {" "}that I don't really use, but I keep the spirit alive through my hobbies. 
          </p>
          <p>
            I like making  
            {" "}           
            <a 
              href='javascript:;'
              onClick={() => askUser(
              '/project')}>
              things.
            </a>
            {" "}
            But don't press that "things" link if you are worried about a 40-50mb render or if you are trying to navigate to it
            from an embedded browser such as the one inside of Instagram (it will crash).
          </p>
          <p>
            I also spend time writing about what i've learned while working in
            tech as I believe that:
          </p>
          <p>
            <i>
              "The formula for success and happiness is sharing what we learn,
              even if it's something that we may feel that 'everybody knows.'"
            </i>
          </p>
          <hr />
          <h2>Why this</h2>
          <s>
            <p>
              For a while I'd wake up every morning, go through the same routines
              and by the end of it, ask myself: “isn't it supposed to get easier?”
              Everything got better for me when I made peace with the fact that it
              will not ever get easier; life is hard.
            </p>
            <p>
              Back to the original question, I developed this place because I needed
              it.
            </p>
            <p>
              When things are going well or not so well; the question is always the
              same “how to keep going?” With everything getting more complex, it's
              easy to get stuck and feel like we're not getting anywhere.
            </p>
            <p>
              This place is somewhere to track my milestones and a reminder to
              myself that I am pushing forward.
            </p>
          </s>
          <p>
            My 2022 self looking at the 2020 self that wrote this: 🤦‍♂️
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
    limit: 2
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
    limit: 2
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
    limit: 2
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