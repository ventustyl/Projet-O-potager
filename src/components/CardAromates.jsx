import React from "react";
import jsonData from "./listing.json";

import "../components/card.scss";

const produit = jsonData["Fruits"].map((itemAromates, nb) => {
  return (
    <div className="cartearomates" key={itemAromates.nom}>
      <img
        src={jsonData["Aromates"][nb].image}
        alt={jsonData["Aromates"][nb].nom}
      ></img>
      <h4>Comment se cultive {jsonData["Aromates"][nb].nom} ?</h4>
      <p>Quand planter : {jsonData["Aromates"][nb].saison} </p>
      <p>Quand récolter : {jsonData["Aromates"][nb].recolte} </p>
      <p>Mesure : {jsonData["Aromates"][nb].taille} </p>
      <p>Type de sol : {jsonData["Aromates"][nb].sol} </p>
      <p>Exposition : {jsonData["Aromates"][nb].exposition} </p>
      <p>
        Conservation après cueillette : {jsonData["Aromates"][nb].conservation}{" "}
      </p>
    </div>
  );
});

const Card = () => {
  return <div className="legumes">{produit}</div>;
};

export default Card;