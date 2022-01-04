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
    <SEO title="Home" keywords={[`Mark Yabut`, `about`, `index`]} />
    <Layout>
      <Content>
        <h1>Mark Yabut</h1>
        <p>Advice is really your current-self talking to your former-self.</p>
        <p>
          This site aims to share my journey as I explore strategies, tools and ideas that attempt improve my internal systems so that I may live
          a happier, healthier and productive life (and maybe inspire the reader).
        </p>
        <h2>About Me</h2>
        <p>
          Mark works as a software test engineer, where he works on improving testing processes through automation. He spends time writing about what
          he's learned while working in tech as he believes that the formula for success and happiness is sharing what we learn, even if it's something
          that we may feel that "everybody knows." 
        </p>
        <p>
        He is trying his best to follow his own advice and learn from the advice given to him.
        </p>

      </Content>
    </Layout>
  </>
);

export default IndexPage;
