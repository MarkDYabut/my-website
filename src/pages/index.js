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

const IndexPage = () => (
  <>
    <SEO title="Index" keywords={[`Mark Yabut`, `about`, `information`]} />
    <Layout>
      <Content>
        <h1>Mark Yabut 2</h1>
        <p>Advice is really your current-self talking to your former-self.</p>
        <p>
          This site explores strategies, tools and ideas that attempt to help an
          individual improve their internal systems such that they may live
          happier, healthier and productive lives.
        </p>
        <p>Basically; this is me talking to myself.</p>
      </Content>
    </Layout>
  </>
);

export default IndexPage;
