import React, { useState, useEffect, useRef } from 'react'
import SEO from "../components/seo";
import { Helmet } from "react-helmet";
import "./clean.css";
import BIRDS from "vanta/dist/vanta.birds.min";

const IndexPage = () => {
  return (
    <>
      <SEO title="play" keywords={[`playground`]} />
      <Helmet>
        <script src="vanta.net.min.js"></script>
      </Helmet>
      <header>
        <img src="https://media-exp1.licdn.com/dms/image/C5603AQHaKwX4oLVxew/profile-displayphoto-shrink_200_200/0/1569682747737?e=1669852800&v=beta&t=yXnH7Rw6povQUXy6EwcUbjSbgzU7QZuk5Yp_BP_Miqc"></img>
        <h1>Hello World!</h1>
      </header>
      <ul>
        <li><a href="">Official Website</a></li>
        <li><a href="">YouTube</a></li>
        <li><a href="">Linkedin</a></li>
        <li><a href="">GitHub</a></li>
      </ul>
    </>
  );
}

export default IndexPage;