import React, { useState } from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import styled from "@emotion/styled";

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
      <Content>
        <h3>
          Hidden contact form, congrats on getting here... lol - feel free to
          leave a message; page still needs to be styled...better but it works!
        </h3>
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
