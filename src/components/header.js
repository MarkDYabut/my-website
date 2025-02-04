import { Link } from "gatsby";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import React from "react";

const Content = styled.div`
  max-width: 860px;
  padding: 1rem 1.0875rem;
  font-size: 1.2rem;
`;

const NavLink = styled(Link)`
  color: black;
  /* margin-left: 15px; */
  text-decoration: none;
  display: block;
  text-align: center;
  position: relative;

  border: 2px solid black;
  border-radius: 5px;
  border-color: #e7e7e7;
  padding: 4px 8px;
  margin: 8px;

  color: black;

  ::after {
    content: "";
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.8);
    transform-origin: bottom right;
    transition: transform 0.4s cubic-bezier(0.86, 0, 0.07, 1);
  }

  :hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
`;

const GitHubLink = styled.a`
  color: black;
  /* margin-left: 15px; */
  margin-right: 15px;
  text-decoration: none;
  display: inline-block;
  position: relative;

  ::after {
    content: "";
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.8);
    transform-origin: bottom right;
    transition: transform 0.4s cubic-bezier(0.86, 0, 0.07, 1);
  }

  :hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
`;

const HomeLink = styled(NavLink)`
  margin-left: 0;
`;

const SiteHeader = styled.header`
  background: transparent;
  display: flex;
  align-content: center;
  justify-content: center;
`;

const Header = ({ siteTitle }) => (
  <SiteHeader>
    <Content>
      <NavLink to="/">Home Page</NavLink>
      {/* <NavLink to="https://my-pomodoro.netlify.app/">Tools</NavLink> */}
      <NavLink to="/lifestyle">Lifestyle Blog</NavLink>
      <NavLink to="/tech">Tech Blog</NavLink>
      {/* <NavLink to="/tech">Project Blog</NavLink> */}
      <NavLink to="/contact">Contact</NavLink>
      {/* <NavLink
          target="_blank"
          to="https://www.notion.so/markyabut/Projects-d14b191e8d1843049e3ba19787a695f4"
        >
          Projects
        </NavLink> */}
    </Content>
  </SiteHeader>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
