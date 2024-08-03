import "./ContactForm.scss";
import emailjs from "@emailjs/browser";
import React, { useRef } from "react";

export default function ContactForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_c9eo7cf", "template_nj8c9gp", form.current, {
        publicKey: "Aqi_cQd6mCDFmPfAd",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <form ref={form} onSubmit={sendEmail} className="contact__form">
      <input className="contact__input" type="text" placeholder="Name" name="user_name" required></input>
      <input className="contact__input" type="text" placeholder="Phone" name="phone" required></input>
      <input className="contact__input" type="text" placeholder="Email" name="user_email" required></input>
      <input
        className="contact__input"
        type="text"
        placeholder="Address"
        name="address"
        required
      ></input>
      <input
        className="contact__input"
        type="text"
        placeholder="Message"
        name="message"
        required
      ></input>
      <button className="contact__button" type="submit">
        SUBMIT
      </button>
    </form>
  );
}
