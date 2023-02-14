import React from "react";
import jsonData from "./listing.json";

import "../components/card.scss";

const produit = jsonData["Legumes"].map((itemlegumes, nb) => {
  return (
    <div className="cartelegumes" key={itemlegumes.nom}>

      <img
        src={jsonData["Legumes"][nb].image}
        alt={jsonData["Legumes"][nb].nom}
      ></img>
      <h4>Comment se cultive {jsonData["Legumes"][nb].nom} ?</h4>
      <p>Quand planter : {jsonData["Legumes"][nb].saison} </p>
      <p>Quand récolter : {jsonData["Legumes"][nb].recolte} </p>
      <p>Mesure : {jsonData["Legumes"][nb].taille} </p>
      <p>Type de sol : {jsonData["Legumes"][nb].sol} </p>
      <p>Exposition : {jsonData["Legumes"][nb].exposition} </p>
      <p>
        Conservation après cueillette : {jsonData["Legumes"][nb].conservation}{" "}
      </p>
    </div>
  );
});

const Card = () => {
  return <div className="legumes">{produit}</div>;
};

export default Card;
