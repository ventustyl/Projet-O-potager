import React from "react";
import jsonData from "./listing.json";

import "../components/card.scss";

const produit = jsonData["Fruits"].map((itemfruits, nb) => {
  return (
    <div className="cartefruits" key={itemfruits.nom}>
 
      <img
        src={jsonData["Fruits"][nb].image}
        alt={jsonData["Fruits"][nb].nom}
      ></img>
      <h4>Comment se cultive {jsonData["Fruits"][nb].nom} ?</h4>
      <p>Quand planter : {jsonData["Fruits"][nb].saison} </p>
      <p>Quand récolter : {jsonData["Fruits"][nb].recolte} </p>
      <p>Mesure : {jsonData["Fruits"][nb].taille} </p>
      <p>Type de sol : {jsonData["Fruits"][nb].sol} </p>
      <p>Exposition : {jsonData["Fruits"][nb].exposition} </p>
      <p>
        Conservation après cueillette : {jsonData["Fruits"][nb].conservation}{" "}
      </p>
    </div>
  );
});

const Card = () => {
  return <div className="legumes">{produit}</div>;
};

export default Card;
