import React from "react";
import "../styles/mentions.scss";

const Mentions = () => {
  return (
    <main className="mentions">
      <h1>Mentions Légales</h1>
      <section>
        <p>
          Conformément aux dispositions de la loi n° 2004-575 du 21 juin 2004
          pour la confiance en l'économie numérique, il est précisé aux
          utilisateurs du site O Potager Perso l'identité des différents
          intervenants dans le cadre de sa réalisation et de son suivi.
        </p>
        <p>
          Edition du site Le présent site, accessible à l’URL opotagerperso.fr
          (le « Site »), est édité par :<br /> Jean-Ronan LEPEN, résidant 2716
          Chemin du Plan du Pont 83400 Hyères, de nationalité Française
          (France), né(e) le 05/04/1978,
        </p>
        <p>
          Hébergement Le Site est hébergé par
          <a href="https://www.lws.fr/" target="_blank" rel="noreferrer">
            la société LWS
          </a>
          , situé 2 rue Jules Ferry 88190 Golbey. (contact téléphonique ou email
          : +33177623003).
        </p>
        <p>
          Directeur de publication Le Directeur de la publication du Site est
          Jean-Ronan LEPEN.
          <br /> Nous contacter Par téléphone : +33608047653 Par email :
          opotagerpeso@gmail.com Par courrier : 2716 Chemin du Plan du Pont
          83400 Hyères
        </p>
      </section>
    </main>
  );
};

export default Mentions;
