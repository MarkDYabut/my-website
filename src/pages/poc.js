import React from "react";
import styled from "@emotion/styled";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { Link } from "gatsby";
import { keyframes } from "@emotion/core";
import Theme from "../components/theme";

const Content = styled.div`
  margin: 0 auto;
  max-width: 860px;
  padding: 1.45rem 1.0875rem;
`;

const Frame = styled.iframe`
  border-style: none;
  width: 100%;
  height 500px;
`

const DivSpaced = styled.div`
  margin-left: 10px ;
  margin-right: 10px ;
  margin-top: 20px ;
  margin-bottom: 20px ;
`

const glow = keyframes`
  0% {
    background-position: 0 0;
  }
  50% {
    background-position: 400% 0;
  }
  100% {
    background-position: 0 0;
  }
`

const ButtonStyled = styled.button`
  padding: 0.6em 2em;
  border: none;
  outline: none;
  color: rgb(255, 255, 255);
  background: #111;
  cursor: pointer;
  position: relative;
  z-index: 0;
  border-radius: 10px;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

&:before {
  content: "";
  background: linear-gradient(
    45deg,
    #ff0000,
    #ff7300,
    #fffb00,
    #48ff00,
    #00ffd5,
    #002bff,
    #7a00ff,
    #ff00c8,
    #ff0000
  );
  position: absolute;
  top: -2px;
  left: -2px;
  background-size: 400%;
  z-index: -1;
  filter: blur(5px);
  -webkit-filter: blur(5px);
  width: calc(100% + 4px);
  height: calc(100% + 4px);
  animation: ${glow} 20s linear infinite;
  transition: opacity 0.3s ease-in-out;
  border-radius: 10px;
}

&:after {
  z-index: -1;
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  background: #222;
  left: 0;
  top: 0;
  border-radius: 10px;
}
`

//

const Poc = () => {

  const openInNewTab = url => {
    if (window.confirm("This link will open in a new tab as it is an external link, Continue?")) {
      window.open(url, '_blank', 'noopener,noreferrer');
    } else {
      console.log("user cancelled")
    }
  };

  return (
    <>
      <SEO title="Proofs of Concepts" keywords={[`proofs`, `poc`]} />
      <Layout>
      <Theme button={1}>
        <Content>
          <h1>Proofs of concepts aka. POC</h1>
          <h2>Below are little processes that are either experimental or live.</h2>
          <p>These are processes that I feel are too small to create into it's own blog post, as I am
            getting more matured these processes are happening much more often and I don't want the process
            of creating so many blog posts to slow me down. If you'd like a more in depth analysis into a process
            you can try sending me a message  <Link to="/contact">here</Link>.
          </p>
          <DivSpaced>
            <h3>Implementing a dark theme</h3>
            <Theme button={2}>
              <p>stuff in here is the children to the theme component</p>
            </Theme>
            <p>Made huge progress in regards to my understanding of styled components, react and how
              the two together can make a nice theme toggle component. Below you can see how I applied
              a theme toggle to my pomodoro application.
            </p>
            <ButtonStyled onClick={() => openInNewTab(
              'https://github.com/MarkDYabut/pomodoro/commit/b4fca09f2b89b979478624f45d04725d994fb9ea#diff-9deca907c356329fdc2670b779733a6496f356262308d92ac942e832f3eda164')}>
                Feature Commit</ButtonStyled>
          </DivSpaced>
          <DivSpaced>
            <h3>Implementing a new blog category</h3>
            <p>Since the implementation was already done for my other blog categories; the implementation
              was rather simple to do as I already had the required code; I just needed to copy, paste, and refactor.
              Check the link below for the feature branch and look for the latest commits in it for the code changes.
            </p>
            <ButtonStyled onClick={() => openInNewTab('https://github.com/MarkDYabut/my-website/commits/feature-add-project-blog-category')}>Feature Branch</ButtonStyled>
          </DivSpaced>
          <DivSpaced>
            <h3>Implementing a sexy ass button</h3>
            <p>I simply copied and refactored into an emotion/react component. Check the link for other buttons.</p>
            <ButtonStyled onClick={() => openInNewTab('https://getcssscan.com/css-buttons-examples')}>Sexy Buttons Link</ButtonStyled>
          </DivSpaced>
          <DivSpaced>
            <h3>Implementing a button that prompts user if it will open a link in a new tab</h3>
            <p>
              Nothing crazy here, just utilizing window.confirm() and window.open().
            </p>
            <ButtonStyled onClick={() => openInNewTab('https://www.google.ca/')}>Link</ButtonStyled>
          </DivSpaced>
          <DivSpaced>
            <h3>Implementing iframes to get my other projects into here</h3>
            <p>
              Below is some timers I made inside a gatsby starter app.
              This application is actually hosted on a different domain but i'm able to embedd them into this application
              through the use of iframes.
            </p>
            <p>
              <ButtonStyled onClick={() => openInNewTab('https://github.com/MarkDYabut/pomodoro')}>Source Code</ButtonStyled>
            </p>
            <Frame src="https://my-pomodoro.netlify.app/app"></Frame>
            <Frame src="https://my-pomodoro.netlify.app/app2"></Frame>
          </DivSpaced>
        </Content>
      </Theme>
      </Layout>
    </>
  )
};

export default Poc;