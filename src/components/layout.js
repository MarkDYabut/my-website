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
          <hr />
          <main>{children}</main>
          <hr />
          <Footer>
            Built by ©<NavLink to="/about">Mark Yabut</NavLink>
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
