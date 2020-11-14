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
    <SEO title="About" keywords={[`Mark Yabut`, `about`, `information`]} />
    <Layout>
      <Content>
        <h1>About</h1>
        <h2>Projects</h2>
        <p>
          You can find my projects
          <br />
          <a
            target="_blank"
            href="https://www.notion.so/markyabut/Projects-d14b191e8d1843049e3ba19787a695f4"
          >
            here
          </a>
        </p>
        <h2>Third person</h2>
        <p>
          Mark Yabut is passionate about building healthy, but also efficient
          systems. This site explores strategies and tools that could help
          individuals live happier, healthier and productive lives.
        </p>
        <h2>Who I am</h2>
        <p>
          I am a 2020 graduate from Ryerson University with a Bachelor of
          Engineering. I have experience in the telecommunications industry as a
          technician and web developmeent experience in the advertising
          industry.
        </p>
        <h2>Things I like</h2>
        <p>
          <ul>
            <li>
              1. Writing: I have never really been much of a writer but i've
              recently found appreciation and enjoyment behind writing. I was
              always more of a numbers person, but I came to the big realization
              that knowing numbers is not enough. Communicational skills;
              especially in tech is such an important skill that I had
              undervalued for so long. So what better way to improve it? Write!
              You can find my weekly articles on "life", which is really just a
              collection of ideas and me writing to my future self
              <br />
              <Link to="/lifestyle">here</Link>
              <br />I am also trying to abide by the principles of "learning
              through teaching" and "teaching your future self, because you
              forget." So I will be trying to put out tutorials on "tech"
              <br />
              <Link to="/tech">here</Link>
            </li>
            <li>
              2. Coding: I have always had an interest of how things work, a
              tinkerer mindset. Which is why I think I was able to easily pick
              up and enjoy coding; more so then maths and physics. So it ended
              up being a skill that I continued to pursue.
            </li>
            <li>
              3. Optimizing: This topic really has resonated with me most
              recently. I have found serious drive and enjoyment creating
              optimized, efficient, and sustainable systems for myself. I one
              day hope that my journey towards optimizing my life will help
              someone, even if only by a little.
            </li>
            <li>
              4. Power: As I try to harness the "Electrical Engineer" out of
              what I learnt in school; I've picked up an interest in electric
              devices such as e-bikes, e-atvs, e-scooters. Allowing me to bond
              with my dad. Some things involved with this are 18650 lithium ion
              batteries, DC motors, soldering, and all the other fun stuff
              associated with electronics. The goal is to keep trying to go
              faster and faster. The fastest one we've put together goes a
              sketchy 40km/hr powered by a 48v 750w hub motor.
            </li>
          </ul>
        </p>
        <h2>Say Hello!</h2>Feel free to leave me a message
        <br />
        <Link to="/contact">here</Link>
      </Content>
    </Layout>
  </>
);

export default IndexPage;
