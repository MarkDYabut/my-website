import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql, Link } from "gatsby";
import styled from "@emotion/styled";

const NavLink = styled(Link)`
  color: black;
  /* margin-left: 15px; */
  font-size: 1.3rem;
  text-decoration: none;
  display: inline-block;
  position: relative;
  font-weight: bold;

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

const Container = styled.div`
  text-align: center;
`;

const OuterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  height: 78vh;
`;

const Description = styled.p`
  padding: 0;
  margin-bottom: 1rem;
  font-size: 1.4rem;
`;

const NameHeader = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 0;
`;

const LandingBio = () => (
  <StaticQuery
    query={graphql`
      query LandingSiteTitleQuery {
        site {
          siteMetadata {
            title
            subtitle
          }
        }
      }
    `}
    render={(data) => (
      <OuterContainer>
        <Container>
          <NameHeader>{data.site.siteMetadata.title}</NameHeader>
          <Description>{data.site.siteMetadata.subtitle}</Description>
          <br />
          <NavLink to="/about">About</NavLink> <br />
          <br />
          <NavLink to="/lifestyle">Lifestyle Blog</NavLink> <br />
          <br />
          <NavLink to="/tech">Tech Blog</NavLink>
        </Container>
      </OuterContainer>
    )}
  />
);

NameHeader.propTypes = {
  siteTitle: PropTypes.string,
  subtitle: PropTypes.string,
};

NameHeader.defaultProps = {
  siteTitle: ``,
  subtitle: ``,
};

export default LandingBio;
