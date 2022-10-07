import React from "react";
import styled from "@emotion/styled";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { Link } from "gatsby";

const Content = styled.div`
  margin: 0 auto;
  max-width: 860px;
  padding: 1.45rem 1.0875rem;
`;

const Frame = styled.iframe`
  border-style: none;
  width: 100%;
  height 600px;
`

const Poc = () => (
  <>
    <Layout>
      <Content>
        <h1>Proofs of concepts aka. POC</h1>
        <p>Coming soon though</p>
        <Frame src="https://my-pomodoro.netlify.app/"></Frame>
      </Content>
    </Layout>
  </>
);

export default Poc;
