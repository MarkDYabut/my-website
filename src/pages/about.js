import React from "react"
import styled from "@emotion/styled"

import LandingBio from "../components/landing-bio"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Content = styled.div`
  margin: 0 auto;
  max-width: 860px;
  padding: 1.45rem 1.0875rem;
`

const IndexPage = () => (
  <Layout>
    <SEO title="About" keywords={[`Mark Yabut`, `about`]} />
    <Content>
      <h1>About</h1>
      <h2>Third person</h2>
      <p>
        Mark Yabut is a technology advocate. He's passionate about building
        healthy, but also efficient systems. This site explores strategies and
        tools that could help individuals live happier, healthier and productive
        lives.
      </p>
      <h2>Who I am</h2>
      <p>
        I am currently a new graduate from Ryerson University with a Bachelor of
        Engineering from Ryerson University. I have experience working as a data
        analyst for a small sized advertising company called Direct Target
        Promotions. I currently work part time as a telecommunications
        technician for Bell Canada.
      </p>
      <h2>What I do for fun</h2>
      <p>
        <ul>
          <li>
            1. Write: I have never really been much of a writer but i've
            recently found appreciation and enjoyment behind writing. I was
            always more of a numbers person, i'd focus my learning on maths,
            sciences, coding; but I came to the big realization that knowing
            those things is not enough. Communicational skills; especially in
            tech is such an important skill that I had undervalued for so long.
            So what better way to improve it? Write!
          </li>
          <li>
            2. Code: I have always had an interest of how things work, a
            tinkerer mindset. Which is why I think I was able to easily pick up
            and enjoy coding; more so then maths and physics. So it ended up
            being a skill that I continued to pursue on my own time, for fun; as
            Electrical Engineering curriculum consisted of only about 20%
            programming courses.
          </li>
          <li>
            3. Optimization: This topic really has resonated with me most
            recently. I have found serious drive and enjoyment creating
            optimized, efficient, and sustainable systems for myself. What i've
            found is required for such systems is iteration; I one day hope that
            my journey towards optimizing my life will help someone, even if
            only by a little.
          </li>
        </ul>
      </p>
    </Content>
  </Layout>
)

export default IndexPage
