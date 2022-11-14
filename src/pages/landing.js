import React from "react";
import styled from "@emotion/styled";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { Link } from "gatsby";
import Marquee from "../components/animators/slide";

const Content = styled.div`
  margin: 0 auto;
  max-width: 860px;
  padding: 1.45rem 1.0875rem;
`;

const StyledSpan = styled.span`
  font-size: 20px;
`

const Landing = () => (
  <>
    <Layout showBackground={true}>
      <Content>
        <h1>Landing...</h1>
        <Marquee>
          <StyledSpan>
          🔨Work in progress as always🚀
          </StyledSpan>
        </Marquee>
      </Content>
    </Layout>
  </>
);

export default Landing;
