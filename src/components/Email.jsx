import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./email.scss";
import Facebook from "../images/facebook.png";
import Twiter from "../images/twiter.png";
import Instagram from "../images/instagram.png";

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
          window.location = "/";
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
      <div>
        <p>
          Si vous avez des questions, des commentaires ou des suggestions,
          n'hésitez pas à nous contacter en utilisant le formulaire ci-dessous.
        </p>
        <p>
          Nous sommes toujours ravis d'entendre parler de nos visiteurs et de
          répondre à leurs demandes. Nous sommes également ouverts aux
          collaborations avec d'autres passionnés de jardinage, des associations
          de protection de l'environnement et des entreprises qui partagent
          notre engagement pour la nature et le bien-être de la planète.
        </p>
        <p>
          Si vous souhaitez travailler avec nous ou nous proposer un
          partenariat, veuillez également utiliser le formulaire de contact
          ci-dessous et nous vous répondrons dans les plus brefs délais. Enfin,
          si vous souhaitez soutenir notre site et nous aider à continuer à
          partager notre passion pour les plantes, vous pouvez nous faire un don
          en utilisant le lien ci-dessous.
        </p>
        <p>
          Chaque contribution est appréciée et nous permet de continuer à
          proposer du contenu de qualité à nos visiteurs.
        </p>
        <p>Suivez-nous également sur les réseaux</p>
        <div className="social">
          <img src={Facebook} alt="facebook icon"></img>
          <img src={Twiter} alt="Twitter icon"></img>
          <img src={Instagram} alt="Instagram icon"></img>
        </div>
  </div>
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
