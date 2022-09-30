import React from "react";
import styled from "@emotion/styled";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { Link } from "gatsby";
import { css } from "@emotion/core";
import { createContext, useState } from "react";

import "./theme.css";

const ArticleDate = styled.h5`
  display: inline;
  color: #606060;
`;

const MarkerHeader = styled.h3`
  display: inline;
  border-radius: 1em 0 1em 0;
`;

const ReadingTime = styled.h5`
  display: inline;
  color: #606060;
`;

const Content = styled.div`
  margin: 0 auto;
  max-width: 860px;
  padding: 1.45rem 1.0875rem;
`;

const NavLink = styled(Link)`
  padding: 0 0.3rem 0;
`;

export const ThemeContext = createContext(null);

const IndexPage = ({ data }) => {

  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  return (
    <>
      <SEO title="play" keywords={[`playground`]} />
      <div id={theme}>
        <Layout>
          <Content>
            <ThemeContext.Provider value={{ theme, toggleTheme }}>
              <h1>Playground</h1>
              <button onClick={toggleTheme}>{theme}</button>
            </ThemeContext.Provider>
          </Content>
        </Layout>
      </div>
    </>
  );
}

export default IndexPage;