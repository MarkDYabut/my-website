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
        <h1>Mark Yabut</h1>
        <p>
          Mark Yabut is passionate about building healthy, but also efficient
          systems. Life can be viewed as a large system containg sub-systems and
          processes. This site explores strategies, tools and ideas that attempt
          to help an individual improve their internal systems such that they
          may live happier, healthier and productive lives.
        </p>
        <h2>Who he is</h2>
        <p>
          He is a new graduate from Ryerson University with a (
          <a
            target="_blank"
            href="https://www.notion.so/markyabut/Bachelor-s-of-Engineering-Electrical-Engineering-3ebb3849592246a79f6252c7d674195f"
          >
            Bachelors of Engineer: Electrical Engineering
          </a>
          ). He spends his time designing, optimizing, developing and writing.
          He is constantly finding new ways to improve himself, and hopes his
          journey will be usefull to someone.
        </p>
        <h2>Things he likes</h2>
        <p>
          1. Design: With his education specialized in communication networks
          and his experience as a telecommunication technician he has become
          passionate about major infrastructure design. His final thesis was a (
          <a
            target="_blank"
            href="https://www.notion.so/markyabut/Design-of-communication-network-for-power-stations-ce7c52a6a3e44745ac11ebdc75e9634b"
          >
            design of a communication network for modern power stations
          </a>
          ). As he tries to further his understanding of engineering design he
          has picked up some cool new hobbies like; electric vehicles, solar
          panels, batteries, 3d printing, cad design.
        </p>
        <p>
          2. Code: He was first introduced to coding back during his first
          semester of his undergrad in 2013, in a course called CPS125. He ended
          up getting a 4.33 gpa in that course, an early sign of his love for
          code. He was first taught C, Assembly, Verilog, and Java during his
          time in school, now he focuses on developing (
          <Link to="/tech/tp-1progressive-web-applications">
            progressive web applications
          </Link>
          ) using modern web technologies.
        </p>
        <p>
          3. Optimize: There's a term he likes called (
          <a
            target="_blank"
            href="https://www.giantbomb.com/min-maxing/3015-128/#:~:text=Min%2Dmaxing%20is%20the%20character,but%20exceedingly%20weak%20in%20others."
          >
            min-maxing
          </a>
          ) which he discovered through video games. It's an idea of "minimizing
          undesirable qualities of a character so as to maximize desirable
          qualities in order to achieve the most powerful character possible in
          an RPG." Now that he has moved away from games, he is trying to view
          life in the same way. By attempting to min-max life by creating
          productive, efficient, and sustainable systems that emphasize
          desirables and forgoes undesirables. His day-to-day activities rely
          heavily on the use of a centralized note taking system built in (
          <Link to="/lifestyle/lp2-why-i-think-notion-will-change-your-life">
            Notion
          </Link>
          ) and believes that the one most important take away from his ideas ->
          is to start organizing your life in Notion.
        </p>
        <p>
          4. Write: He was never really much of a writer but he's found
          appreciation and enjoyment behind writing. He came to the big
          realization that knowing numbers is not enough. Communicational
          skills; especially in tech is such an important skill that he had
          undervalued for so long. So what better way to improve it? Write! He
          writes in a (<Link to="/lifestyle">Lifestyle Blog</Link>) which is
          really just a collection of his ideas for him to refer back to. He
          also is trying to abide by the principles of "learn through teaching"
          and "create notes to teach your future self because you forget." So he
          writes in a (<Link to="/tech">Tech Blog</Link>).
        </p>
        <h2>Say hello!</h2>
        <p>
          Feel free to (<Link to="/contact">contact</Link>) him, but please dont
          break his netlify forms api.
        </p>
      </Content>
    </Layout>
  </>
);

export default IndexPage;
