import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
import styled from "@emotion/styled";
import Header from "./header";
import "./layout.css";
import { Link } from "gatsby";
import GitInfo from 'react-git-info/macro';
import Slide from "./animators/slide";


const Content = styled.div`
  margin: 0 auto;
  max-width: 860px;
  padding: 0 1.0875rem 1rem;
  padding-top: 0;
`;

const NavLink = styled(Link)`
  padding: 0 0.4rem 0;
`;

const RegLink = styled.a`
  padding: 0 0.4rem 0;
`;

const Footer = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
`;

const BottomLinks = styled.div`
  display: flex;
  justify-content: center;
`;

const gitInfo = GitInfo();
console.log(gitInfo.branch);
console.log(gitInfo.commit.date);
console.log(gitInfo.commit.hash);
console.log(gitInfo.commit.message);
console.log(gitInfo.commit.shortHash);

const Layout = ({ children, hideHeader }) => (
  <StaticQuery
    query={graphql`
    {
      graphqlGitInfo: allFile(limit: 1, sort: {order: DESC, fields: modifiedTime}) {
        edges {
          node {
            fields {
              gitLogLatestAuthorName
              gitLogLatestAuthorEmail
              gitLogLatestDate
            }
            internal {
              type
              mediaType
              description
              owner
            }
            accessTime(formatString: "z MMM DD YYYY, HH:mm", locale: "est")
          }
        }
      }
    }
    

    
    `}
    render={(data) => (
      <>
        <p></p>
        {/* {
          !hideHeader &&
          <>
            <Header />
            <hr />
          </>
        } */}
        <Content>
          <main>{children}</main>
          <hr />
          <BottomLinks>
            <>
              {/* <RegLink href="https://my-pomodoro.netlify.app/" target="_blank">
              Tools
            </RegLink> */}
              <RegLink
                href="https://www.linkedin.com/in/mark-yabut-218018152/"
                target="_blank"
              >
                linkedin
              </RegLink>
              <NavLink
                to="/"
              >
                home
              </NavLink>
              <NavLink
                to="/tech"
              >
                tech
              </NavLink>
              <NavLink
                to="/lifestyle"
              >
                lifestyle
              </NavLink>
              <NavLink
                to="/poc"
              >
                other
              </NavLink>
              {/* <RegLink
              href="https://www.instagram.com/markyabut3/"
              target="_blank"
            >
              instagram
            </RegLink> */}
              {/* <NavLink to="/youtube">Youtube</NavLink> */}
            </>
          </BottomLinks>
          <br />
          <hr />
          {data.graphqlGitInfo.edges.map(({ node }) => (
            <>
              <Footer>modified on: {gitInfo.commit.date}</Footer>
              {/* <Footer>Last commit by: {node.fields.gitLogLatestAuthorName}</Footer> */}
              <Footer>last commit: {gitInfo.commit.message}</Footer>
              <Footer>
                <a
                  href="https://github.com/MarkDYabut/my-website/commits/master"
                  target="_blank"
                >
                  github commit history
                </a>
              </Footer>
            </>
          ))}
          <br />
          <hr />

          <Footer>
            <Slide>
              <p>built with<NavLink to="/tech/this-website-was-built-with-gatsby">gatsby</NavLink></p>
            </Slide>
          </Footer>
        </Content>
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
