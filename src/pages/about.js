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
        {/* <h2>Projects</h2>
        <p>
          You can find my projects
          <br />
          <a
            target="_blank"
            href="https://www.notion.so/markyabut/Projects-d14b191e8d1843049e3ba19787a695f4"
          >
            Projects Page
          </a>
        </p> */}
        <p>
          Mark Yabut is passionate about building healthy, but also efficient
          systems. This site explores strategies and tools that could help
          individuals live happier, healthier and productive lives.
        </p>
        <h2>Who he is</h2>
        <p>
          He is a new graduate from Ryerson University with a (
          <a
            target="_blank"
            href="https://www.notion.so/markyabut/Design-of-communication-network-for-power-stations-ce7c52a6a3e44745ac11ebdc75e9634b"
          >
            Bachelors of Engineer: Electrical Engineering
          </a>
          ) and has experience doing amazing things. He thinks he is trying his
          best to improve and provide value to the world. But maybe he's not
          trying enough?
        </p>
        <h2>Things he likes</h2>
        <p>
          <ul>
            <li>
              <p>
                1. Power: With his education specialized in communication
                networks and his experience as a telecommunication technician he
                has become passionate about major infrastructure design. His
                final thesis was a (
                <a
                  target="_blank"
                  href="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/155556ff-a527-4457-b1ac-5da4431dcce6/Design-of-Automation-Unit-and-Communication-Network-For-Modern_Power-Stations.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20201115%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20201115T022529Z&X-Amz-Expires=86400&X-Amz-Signature=f41aa38b2df80d6eaf60bbf846bfbf66ce85276205b09a7c93bdd56603e0bda9&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Design-of-Automation-Unit-and-Communication-Network-For-Modern%2520Power-Stations.pdf%22"
                >
                  design of a communication network for modern power stations
                </a>
                ). As he tries to further his understanding of power he has
                picked up some cool new hobbies. Things like electric vehicles,
                solar panels, batteries, 3d printing, cad design.
              </p>
            </li>
            <li>
              <p>
                2. Coding: He was first introduced to coding back during his
                first semester of his undergrad in 2013, in a course called
                CPS125. He ended up getting a 4.33 gpa in that course, an early
                sign of his love for code. He was first taught C, Assembly,
                Verilog, and Java during his time in school. He now focuses on
                coding web applications using HTML, CSS and Javascript.
              </p>
            </li>
            <li>
              <p>
                3. Optimizing: There's a term he likes called (
                <a
                  target="_blank"
                  href="https://www.giantbomb.com/min-maxing/3015-128/#:~:text=Min%2Dmaxing%20is%20the%20character,but%20exceedingly%20weak%20in%20others."
                >
                  min-maxing
                </a>
                ) which he discovered through video games. It's an idea of
                "minimizing undesirable qualities of a character so as to
                maximize desirable qualities in order to achieve the most
                powerful character possible in an RPG." Now that he has moved
                away from games, he is trying to view life in the same way. By
                attempting to min-max life by creating productive, efficient,
                and sustainable systems that emphasize desirables and forgoes
                undesirables. He one day hopes that his journey to optimization
                will be useful to someone.
              </p>
            </li>
            <li>
              <p>
                4. Writing: He was never really much of a writer but he's found
                appreciation and enjoyment behind writing. He came to the big
                realization that knowing numbers is not enough. Communicational
                skills; especially in tech is such an important skill that he
                had undervalued for so long. So what better way to improve it?
                Write! He writes in a (
                <Link to="/lifestyle">Lifestyle Blog</Link>) which is really
                just a collection of his ideas for him to refer back to. He also
                is trying to abide by the principles of "learn through teaching"
                and "create notes to teach your future self because you forget."
                So he writes in a (<Link to="/tech">Tech Blog</Link>).
              </p>
            </li>
          </ul>
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
