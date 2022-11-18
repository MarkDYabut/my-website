import React from "react";
import styled from "@emotion/styled";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { Link } from "gatsby";
import Rotate from "../components/animators/rotate";
import Marquee from "../components/animators/marquee";
import Explode from "../components/animators/explode";
import Slide from "../components/animators/slide";
import Emojis from "../components/emojis";

const Content = styled.div`
  margin: 0 auto;
  max-width: 860px;
  padding: 1.45rem 1.0875rem;
`;

const StyledDiv2 = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
`

const Frame = styled.iframe`
  border-style: none;
  width: 100%;
  height: 50vh;
`

const StyledImg = styled.img`
  height: 5vh;
  border-radius: 100%;
  display: block;
  margin-left: auto;
  margin-right: auto;
`

const StyledToolbar = styled.div`
  position: fixed;
  bottom: 0px;
  width: 100vw;
`

const StyledDiv = styled.div`
  font-family: 'Open Sans', sans-serif;
  /* background-image: url("https://media3.giphy.com/media/Byour3OgR0nWnRR6Tc/giphy.gif?cid=ecf05e4722ks8wa4i6sg1mgbq786bsyhbuhcc0lifqbfua8g&rid=giphy.gif&ct=g"); */
  /* background-image: url("https://media4.giphy.com/media/Cv7wrQjYcd6hO/giphy.gif?cid=790b76111e1eb9ac58c668894944df3fc1437ec2552592ae&rid=giphy.gif&ct=g"); */
  /* background-image: url("https://media0.giphy.com/media/Ohv997ZtdeX0rpfVMm/giphy.gif?cid=ecf05e47ktn3a8k7t3t5ht0b3wvquf89kj690pxvnqx7jygb&rid=giphy.gif&ct=g"); */
  /* background-image: url("https://media1.giphy.com/media/StuRkmXcnKcyGWzu1K/giphy.gif?cid=ecf05e47fzpm6nljpbdempewn9to5u2yx4y0gnzezn4y0vj3&rid=giphy.gif&ct=g"); */
  background-image: url("https://i.giphy.com/media/yoJC2pxpca0K6v67qo/giphy.webp");
  height: 150vh;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: 100h;
  background-position: 50% 120%;
  `

const Landing = () => (
  <>
    <StyledDiv>
      <Layout>
        <Content>
          <Emojis />
          {/* <Slide> */}
          {/* </Slide> */}
          <StyledDiv2>
            <h1 style={{ textAlign: "center", position: "absolute" }}>Landing</h1>
            <Marquee>
              <span style={{ position: "absolute" }}>
                🚅 - don't worry, you'll think of something - don't worry, you'll think of something - don't worry, you'll think of something -  don't worry, you'll think of something - don't worry, you'll think of something -
              </span>
            </Marquee>
          </StyledDiv2>
          <Frame src="https://my.spline.design/untitled-f0845f74992fc4c8bb1237fbe833bc1f/"></Frame>
          <div style={{ width: "101%", height: "70px", position: "relative", left: "-1px", bottom: "90px", backgroundColor: "#fff", textAlign: "center" }}>
            {/* <br/>          work in progress as always */}
            <Explode>🙏</Explode>        <Rotate>
              😈🌎🎒
              <StyledImg src={"/me.webp"} />
              94🚀90<br />
              🔥🔥🔥
            </Rotate>

          </div>

        </Content>
      </Layout>
    </StyledDiv>
    <StyledToolbar>
      {/* <img src={"/Untitled.png"} /> */}
    </StyledToolbar>
  </>
);

export default Landing;
