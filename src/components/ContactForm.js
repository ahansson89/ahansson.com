import React from 'react';
import styled from 'styled-components';
import 'whatwg-fetch'; // Fetch Polyfill

const Form = styled.form``;

const Name = styled.input`
  border: 0;
  padding: 10px;
  color: #333;
  border: solid 1px #ccc;
  margin: 0 0 20px;
  border-radius: 6px;
  width: 100%;
  box-sizing: border-box;
`;

const Email = styled.input`
  border: 0;
  padding: 10px;
  color: #333;
  border: solid 1px #ccc;
  margin: 0 0 20px;
  border-radius: 6px;
  width: 100%;
  box-sizing: border-box;
`;

const Message = styled.textarea`
  border: 0;
  padding: 10px;
  color: #333;
  border: solid 1px #ccc;
  margin: 0 0 20px;
  border-radius: 6px;
  width: 100%;
  box-sizing: border-box;
`;

const Submit = styled.input`
  border: solid 1px #ccc;
  padding: 15px 30px;
  margin: 0 0 20px;
  text-transform: uppercase;
  font-weight: bold;
  color: #333;
  cursor: pointer;
  border-radius: 6px;
  background-color: #fff;
`;


function ContactForm(props) {
  return (
  <form action="https://getform.io/f/7aa1d449-3d35-4dc5-812d-1ed3274b005c" method="POST">
    <Name
      name="name"
      type="text"
      title="Name"
      placeholder="Full Name"
      required
    />
    <Email
      name="email"
      type="email"
      title="Email"
      placeholder="Email"
      required
    />
    <Message
      name="message"
      title="Message"
      type="text"
      placeholder="Message"
      required
    />
    <Submit
      type="submit"
      value={'Send'}
    />
  </form>
)
  }
export default ContactForm;
