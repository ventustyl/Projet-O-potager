import React from "react";
import "../styles/astuces.scss";
import Legende from "../images/legende.jpg";
import Listing1 from "../images/listing 1.jpg";
import Listing2 from "../images/listing 2.jpg";
import Listing3 from "../images/listing 3.jpg";
import Pdf from "../images/pdf.png";

const Astuces = () => {
  return (
    <div className="flex">
      <h1>Nos Astuces</h1>

      <section>
        <article>
          <div>
            <h3>Légendes</h3>
            <div className="legende" >
              <img src={Legende} alt="Légende plantation" />
              <div className="astuce">
                <img src={Listing1} alt="Listing Légumes Fruits 1" />
                <img src={Listing2} alt="Listing Légumes Fruits 2" />
                <img src={Listing3} alt="Listing Légumes Fruits 3" />
              </div>
            </div>
          </div>
          <p className='telechargement'>Télécharger notre document version pdf </p>
          <a href ='./Calendrier-legumes.pdf' target="_blank"><img src={Pdf} alt="PDF icone téléchargement" /></a>

        </article>
      </section>
    </div>
  );
};

export default Astuces;
