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
    <Layout>
      <Content>
        <h1>Welcome</h1>
        <p>Content... here</p>
      </Content>
    </Layout>
  </>
);

export default IndexPage;
