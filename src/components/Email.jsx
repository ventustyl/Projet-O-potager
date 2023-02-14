import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./email.scss";

// npm i @emailjs/browser

const Email = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_3ssbl3j",
        "template_2yu5qeu",
        form.current,
        "icnwddaTm-ishFL5F"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("message envoyé!");
          window.location='/'
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div id="contact-container">
      <h1 className="contact-titre">Contactez-nous</h1>
      <div className="contact-texte">
      
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis luctus lacus. Praesent consectetur luctus nibh, nec mattis tortor tincidunt nec. Pellentesque facilisis et dolor in pellentesque. Etiam imperdiet egestas vestibulum. Donec ut pulvinar tortor. Pellentesque blandit finibus enim, quis aliquam mi vulputate nec. Proin mi ante, bibendum interdum felis ac, interdum accumsan mi. Cras id quam ut nisl ultricies eleifend id a ipsum. Cras rutrum commodo dolor, nec auctor quam sollicitudin in. Aenean metus velit, facilisis ac ligula sed, ultrices luctus mi. Quisque a commodo augue. Nam non odio ac nulla scelerisque interdum. Suspendisse ultricies euismod tristique. Nunc id eleifend nisl. Duis eget ligula hendrerit erat varius lobortis. Sed ornare lacus quam, vel sodales enim finibus in.
        <p>Suivez-nous également sur les réseaux</p>
        </p>
        <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Envoyer" />
      </form>
      </div>

    </div>
  );
};

export default Email;
