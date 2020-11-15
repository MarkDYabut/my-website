import React from "react";

import LandingBio from "../components/landing-bio";
import Layout from "../components/layout";
import SEO from "../components/seo";

const IndexPage = () => (
  <>
    <SEO title="Home" keywords={[`Mark Yabut`, `home`, `landing`]} />
    <LandingBio />
  </>
);

export default IndexPage;
