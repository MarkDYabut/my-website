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
  padding: 0 1.0875rem 1rem;
`;

const A = styled.a`
  padding: 0 1.0875rem 1rem;
`;

const Footer = styled.div`
  display: flex;
  justify-content: center;
`;

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={(data) => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <Content>
          <main>{children}</main>
          <Footer>
            {" "}
            <NavLink to="/">Home</NavLink>
            {/* <NavLink to="/about">About</NavLink> */}
            <NavLink to="/lifestyle">Lifestyle</NavLink>
            <NavLink to="/tech">Tech</NavLink>
          </Footer>
          <Footer>
            <A target="_blank" href="https://www.instagram.com/markyabut3/">
              Instagram
            </A>
            <A
              target="_blank"
              href="https://www.linkedin.com/in/mark-yabut-218018152/"
            >
              Linkedin
            </A>
            <A target="_blank" href="https://github.com/MarkDYabut">
              Github
            </A>
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
