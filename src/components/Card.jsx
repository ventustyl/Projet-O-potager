import React from "react";

import jsonData from './listing.json'

import './card.scss'



const produits = ["Aromates", "Fruits", "Legumes"]

const bloc = produits.map((itemaccueil) => {

  //Nombre aléatoire entre 0 et 2
    const test = produits[[Math.floor(Math.random() * (2 - 0 + 1)) + 0]] 
  //Nombre aléatoire entre 0 et 44
    const hasardliste = [[Math.floor(Math.random() * (44 - 0 )) + 0]]

   //Rendu possible 3 375 000 possibilité
  return ( <div key={itemaccueil}> 
  <img src={jsonData[test][hasardliste].image} alt={jsonData[test][hasardliste].nom}></img>
  <h4>Comment se cultive {jsonData[test][hasardliste].nom} ?</h4>
  <p>Quand planter : {jsonData[test][hasardliste].saison} </p>
  <p>Quand récolter : {jsonData[test][hasardliste].recolte} </p>
  <p>Mesure : {jsonData[test][hasardliste].taille} </p>
  <p>Type de sol : {jsonData[test][hasardliste].sol} </p>
  <p>Exposition : {jsonData[test][hasardliste].exposition} </p>
  <p>Conservation après cueillette : {jsonData[test][hasardliste].conservation} </p>
  </div>)

});
// Bloc card légumes
const Card = () => {
  return (
  
      <div className="culture">{bloc}</div>

  );
};

export default Card;
