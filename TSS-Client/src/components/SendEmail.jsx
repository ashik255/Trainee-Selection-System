import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import { Col } from "react-bootstrap";

// npm i @emailjs/browser

const SendEmail = () => {
  const form = useRef();
  const [successMessage, setSuccessMessage] = useState('');

  const EmailSubmit = (e) => {
    e.preventDefault();
    setSuccessMessage('Message sent successfully!');
    emailjs
      .sendForm(
        'service_qt158qe',
        'template_wpxwoqc',
        form.current,
        'JyLQ-I7uD3QMhV4PL'
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <StyledContactForm>
      <div className="text-center black">
        <Col>
          <form ref={form} onSubmit={EmailSubmit}>
            <label>Name</label>
            <input type="text" name="user_name" />
            <label>Email</label>
            <input type="email" name="user_email" />
            <label>Subject</label>
            <input type="text" name="user_subject" />
            <label>Message</label>
            <textarea name="message" />

            <input type="submit" value="Send" />
          </form>
          {successMessage && (
            <p className="mt-2 " style={{ color: 'green', fontWeight: 'bold' }}>
              {successMessage}
            </p>
          )}
        </Col>
      </div>
    </StyledContactForm>
  );
};

export default SendEmail;

// Styles
const StyledContactForm = styled.div`
  width: 500px;
  text: center;
  margin: 0 auto;
  padding: 2rem 0;


  form {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    font-size: 16px;

    input {
      width: 100%;
      height: 35px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);

      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }

    textarea {
      max-width: 100%;
      min-width: 100%;
      width: 100%;
      max-height: 100px;
      min-height: 100px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);

      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }

    label {
      margin-top: 1rem;
    }

    input[type="submit"] {
      margin-top: 2rem;
      cursor: pointer;
      background: rgb(249, 105, 14);
      color: white;
      border: none;
    }
  }
`;