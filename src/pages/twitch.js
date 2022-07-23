import React from "react";
import styled from "@emotion/styled";
import Layout from "../components/layout";
import { Helmet } from "react-helmet"
import SEO from "../components/seo";
import { Link } from "gatsby";

const Content = styled.div`
  margin: 0 auto;
  max-width: 860px;
  padding: 1.45rem 1.0875rem;
`;

const Twitch = () => (
  <>
    <Layout>
      <Content>
        <h1>Jokes...</h1>
        <p>Coming soon though</p>
        <iframe
          class="streamable-embed"
          src="https://streamable.com/o/moo" height="450"
          width="100%"
          scrolling="no"
          frameborder="0"
          allowTransparency="true"
        // style="overflow: hidden; display: block; width: 100%"
        ></iframe>
        <iframe
          src="https://codesandbox.io/embed/ynn88nx9x?view=split"
          // style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
          allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb"
          sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
        ></iframe>
        <iframe
          src="https://codepen.io/team/codepen/embed/preview/PNaGbb"
          // style="width:100%; height:300px;"
        ></iframe>

      </Content>
    </Layout>
  </>
);

export default Twitch;
