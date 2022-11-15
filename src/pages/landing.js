import React from "react";
import styled from "@emotion/styled";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { Link } from "gatsby";
import Rotate from "../components/animators/rotate";
import Marquee from "../components/animators/marquee";
import Explode from "../components/animators/explode";
import Slide from "../components/animators/slide";

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

const StyledImg = styled.img`
  height: 5vh;
  border-radius: 100%;
  display: block;
  margin-left: auto;
  margin-right: auto;
`

const StyledDiv = styled.div`
  font-family: 'Open Sans', sans-serif;
  /* background-image: url("https://media3.giphy.com/media/Byour3OgR0nWnRR6Tc/giphy.gif?cid=ecf05e4722ks8wa4i6sg1mgbq786bsyhbuhcc0lifqbfua8g&rid=giphy.gif&ct=g"); */
  /* background-image: url("https://media4.giphy.com/media/Cv7wrQjYcd6hO/giphy.gif?cid=790b76111e1eb9ac58c668894944df3fc1437ec2552592ae&rid=giphy.gif&ct=g"); */
  /* background-image: url("https://media0.giphy.com/media/Ohv997ZtdeX0rpfVMm/giphy.gif?cid=ecf05e47ktn3a8k7t3t5ht0b3wvquf89kj690pxvnqx7jygb&rid=giphy.gif&ct=g"); */
  /* background-image: url("https://media1.giphy.com/media/StuRkmXcnKcyGWzu1K/giphy.gif?cid=ecf05e47fzpm6nljpbdempewn9to5u2yx4y0gnzezn4y0vj3&rid=giphy.gif&ct=g"); */
  background-image: url("https://i.giphy.com/media/yoJC2pxpca0K6v67qo/giphy.webp");
  height: 100vh;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: 50vh;
  background-position: 50% 120%;
  `

const Landing = () => (
  <StyledDiv>
    <Layout>
      <Content>
      <Slide>
        <h1>Landing</h1>
      </Slide>
        <p css={{textAlign:"center"}}>
          work in progress as always
          <Explode>🙏</Explode>
        </p>
        <Rotate>
          😈🌎🎒
        <StyledImg src={"/me.webp"}/>
          94🚀90
        </Rotate>
        <StyledDiv2>
        <Marquee>
          <span>
          don't worry, you'll think of something - don't worry, you'll think of something - don't worry, you'll think of something -  don't worry, you'll think of something - don't worry, you'll think of something - 
          </span>
        </Marquee>
        </StyledDiv2>
      </Content>
    </Layout>
  </StyledDiv>
);

export default Landing;
