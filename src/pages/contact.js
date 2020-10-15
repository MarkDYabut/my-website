import React, { useState } from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import styled from "@emotion/styled";
import { Global, css } from "@emotion/core";

const Wrapper = styled.div`
  margin-top: 30px;
  margin-bottom: 50px;

  html {
    height: 100%;
  }
  body {
    font-family: Arial, Helvetica, sans-serif;
    background: linear-gradient(to bottom, #f05053, #e1eec3);
    height: 100%;
    margin: 0;
    color: #555;
  }
`;

const sharedStyles = css`
  background-color: #eee;
  height: 40px;
  border-radius: 5px;
  border: 1px solid #ddd;
  margin: 10px 0 20px 0;
  padding: 20px;
  box-sizing: border-box;
`;

const StyledFormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 0 20px;
`;

const StyledForm = styled.form`
  width: 100%;
  max-width: 700px;
  padding: 40px;
  background-color: #fff;
  border-radius: 10px;
  box-sizing: border-box;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
`;

const StyledInput = styled.input`
  display: block;
  width: 100%;
  ${sharedStyles}
`;

const StyledButton = styled.button`
  display: block;
  background-color: #f7797d;
  color: #fff;
  font-size: 0.9rem;
  border: 0;
  border-radius: 5px;
  height: 40px;
  padding: 0 20px;
  cursor: pointer;
  box-sizing: border-box;
`;

const StyledFieldset = styled.fieldset`
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 10px;
  margin: 20px 0;

  legend {
    padding: 0 10px;
  }

  label {
    padding-right: 20px;
  }

  input {
    margin-right: 10px;
  }
`;

const StyledError = styled.div`
  color: red;
  font-weight: 800;
  margin: 0 0 40px 0;
`;

const StyledTextArea = styled.textarea`
  background-color: #eee;
  width: 100%;
  min-height: 100px;
  resize: none;
  ${sharedStyles}
`;

const Content = styled.div`
  margin: 0 auto;
  max-width: 860px;
  padding: 1.45rem 1.0875rem;
  text-align: center;
`;

const IndexPage = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...formState }),
    })
      .then(() => alert("Success!"))
      .catch((error) => alert(error));

    e.preventDefault();
  };

  return (
    <Layout>
      <SEO title="Contact" keywords={[`Mark Yabut`, `contact`, `email`]} />

      <>
        <Wrapper>
          <StyledFormWrapper>
            <StyledForm
              onSubmit={handleSubmit}
              name="contact"
              method="post"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
            >
              <input type="hidden" name="form-name" value="contact" />
              <h2>Contact Form</h2>
              <label htmlFor="name">Name</label>
              <StyledInput
                id="name"
                type="text"
                name="name"
                onChange={handleChange}
                value={formState.name}
                placeholder="Enter your name"
              />
              <label htmlFor="email">Email</label>
              <StyledInput
                id="email"
                type="email"
                name="email"
                onChange={handleChange}
                value={formState.email}
                placeholder="Enter your email"
              />
              {/* <StyledFieldset>
                <legend>Gender</legend>
                <label>
                  <input type="radio" value="female" name="gender" />
                  Female
                </label>
                <label>
                  <input type="radio" value="male" name="gender" />
                  Male
                </label>
              </StyledFieldset> */}
              <label htmlFor="message">Message</label>
              <StyledTextArea
                id="message"
                type="message"
                name="message"
                onChange={handleChange}
                value={formState.message}
                placeholder="Enter your message"
              />
              {/* <StyledError>
                <p>Error Message</p>
              </StyledError> */}
              <StyledButton type="submit">Send</StyledButton>
            </StyledForm>
          </StyledFormWrapper>
        </Wrapper>
      </>

      <Content>
        <h3>Hidden contact form</h3>
        <form
          onSubmit={handleSubmit}
          name="contact"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value="contact" />
          <label htmlFor="name">Name: </label>
          <br />
          <input
            id="name"
            type="text"
            name="name"
            onChange={handleChange}
            value={formState.name}
            placeholder="Enter your name"
          />
          <br />
          <label htmlFor="email">Email: </label> <br />
          <input
            id="email"
            type="email"
            name="email"
            onChange={handleChange}
            value={formState.email}
            placeholder="Enter your email"
          />
          <br />
          <label htmlFor="message">Message: </label> <br />
          <input
            id="message"
            type="message"
            name="message"
            onChange={handleChange}
            value={formState.message}
            placeholder="Enter your message"
          />
          <br /> <br />
          <button type="submit">Submit</button>
        </form>
      </Content>
    </Layout>
  );
};

export default IndexPage;
