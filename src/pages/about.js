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
          systems. He believes that life is about suffering and the purpose of
          life is to contribute the highest (
          <a
            target="_blank"
            href="https://en.wikipedia.org/wiki/Net_(economics)"
          >
            net
          </a>
          ) reduction of suffering. This site explores strategies and tools that
          could help individuals live happier, healthier and productive lives.
        </p>
        <h2>Who he is</h2>
        <p>
          He is a new graduate from Ryerson University with a B.E.E.E. and has
          experience doing mediocre things, but is trying his best to improve
          himself so that he can provide more value to the world.
        </p>
        <h2>Things he likes</h2>
        <p>
          <ul>
            <li>
              1. Writing: He was never really much of a writer but he's found
              appreciation and enjoyment behind writing. He came to the big
              realization that knowing numbers is not enough. Communicational
              skills; especially in tech is such an important skill that he had
              undervalued for so long. So what better way to improve it? Write!
              He writes in a weekly (<Link to="/lifestyle">Lifestyle Blog</Link>
              ) which is really just a collection of his ideas for him to refer
              back to. He also is trying to abide by the principles of "learn
              through teaching" and "create notes to teach your future self
              because you forget." So he also has a soon to be weekly (
              <Link to="/tech">Tech Blog</Link>).
            </li>
            <li>
              2. Coding: He was first introduced to coding back during his first
              semester of his ungrad in 2013, a course called CPS125. His GPA
              for that course ended up being 2x what his cGPA ended up at, which
              is why it's probably something that he likes.
            </li>
            <li>
              3. Optimizing: There's a term he likes called (
              <a
                target="_blank"
                href="https://www.giantbomb.com/min-maxing/3015-128/#:~:text=Min%2Dmaxing%20is%20the%20character,but%20exceedingly%20weak%20in%20others."
              >
                min-maxing
              </a>
              ) which he discovered through video games. It's an idea of
              "minimizing undesirable qualities of a character so as to maximize
              desirable qualities in order to achieve the most powerful
              character possible in an RPG." Now that he has moven a away from
              games, he is trying to view life as a game, and min-max life by
              creating productive, efficient, and sustainable systems. He one
              day hopes that his journey to optimization will be useful to
              someone.
            </li>
            <li>
              4. Power: As he try to harness value out of his 7 year long,
              $50000 investment into a piece of paper; he has picked up some
              cool new hobbies. Things like electric vehicles, solar panels, big
              batteries, wires, 3d printing, soldering.
            </li>
          </ul>
        </p>
        <h2>Say Hello!</h2>Feel free to (<Link to="/contact">Contact Him</Link>
        ).
      </Content>
    </Layout>
  </>
);

export default IndexPage;
