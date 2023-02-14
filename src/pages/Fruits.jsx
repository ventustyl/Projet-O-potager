import React from "react";
import CardFruits from "../components/CardFruits";
import '../components/cardlegumes.scss'

const Fruits = () => {
  return (
    <main className='titre'>
    <h1>Les fruits</h1>
      <CardFruits />
    </main>
  );
};

export default Fruits;
