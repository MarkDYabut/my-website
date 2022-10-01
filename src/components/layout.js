import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
import styled from "@emotion/styled";
import Header from "./header";
import "./layout.css";
import { Link } from "gatsby";

const Content = styled.div`
  margin: 0 auto;
  max-width: 860px;
  padding: 0 1.0875rem 1rem;
  padding-top: 0;
`;

const NavLink = styled(Link)`
  padding: 0 0.3rem 0;
`;

const RegLink = styled.a`
  padding: 0 1.0875rem 1rem;
`;

const Footer = styled.div`
  display: flex;
  justify-content: center;
`;

const BottomLinks = styled.div`
  display: flex;
  justify-content: center;
`;

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
    {
      gitInfo: allFile(limit: 1, sort: {order: DESC, fields: modifiedTime}) {
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
        <Header />
        <Content>
          <hr />
          <main>{children}</main>
          <hr />

          <BottomLinks>
            {/* <RegLink href="https://my-pomodoro.netlify.app/" target="_blank">
              Tools
            </RegLink> */}
            <RegLink
              href="https://www.linkedin.com/in/mark-yabut-218018152/"
              target="_blank"
            >
              Linkedin
            </RegLink>
            <RegLink
              href="https://github.com/MarkDYabut/my-website"
              target="_blank"
            >
              Source Code
            </RegLink>
            <RegLink
              href="https://www.instagram.com/markyabut3/"
              target="_blank"
            >
              Instagram
            </RegLink>
            {/* <NavLink to="/youtube">Youtube</NavLink> */}

          </BottomLinks>

          <hr />

          {data.gitInfo.edges.map(({ node }) => (
            <>
              <Footer>Modified on: {node.accessTime}</Footer>
              <Footer>Modified by: {node.fields.gitLogLatestAuthorName}</Footer>
              <Footer>
                <a
                  href="https://github.com/MarkDYabut/my-website/commits/master"
                  target="_blank"
                >
                Github commit history
                </a>
              </Footer>
            </>
          ))}
          <br />
          <hr />

          <Footer>
            <p>
              Built with <NavLink to="/tech/this-website-was-built-with-gatsby">Gatsby</NavLink>
            </p>
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
