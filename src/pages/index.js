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
        <h1>Mark Yabut</h1>
        <p>
          This site explores strategies, tools and ideas that attempt to help an
          individual improve their internal systems such that they may live
          happier, healthier and productive lives.
        </p>
      </Content>
    </Layout>
  </>
);

export default IndexPage;
