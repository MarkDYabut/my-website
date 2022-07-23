import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
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
  <>
    <Content>
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
        <RegLink href="https://www.instagram.com/markyabut3/" target="_blank">
          Instagram
        </RegLink>
        {/* <NavLink to="/youtube">Youtube</NavLink> */}
      </BottomLinks>

      <Footer>
        Built with <NavLink to="/tech/this-website-was-built-with-gatsby">gatsbyjs</NavLink> by <NavLink to="/me">me</NavLink>
      </Footer>
    </Content>
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
