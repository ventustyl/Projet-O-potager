import React from "react";
import Card from "../components/Card";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../styles/home.scss";

// Choix de la page d'accueil au hasard
const pages = ["Fruits", "Aromates", "Legumes"];

// Item nombre aléatoire entre 1 et 3
const Item = pages[Math.floor(Math.random() * (2 - 0 + 1)) + 0];

const Home = () => {
  return (
    <>
      <Navbar />
      <main>
        <div className="hero-div">
          <img
            src={require(`../images/${Item}.jpg`)}
            alt="Fond"
            className="hero"
          />
          <div className="titre-site">
            <h1>Le potager "Le bonheur de manger son chez soi".</h1>
          </div>
        </div>

        <section>
          <h2>Venez partager un moment de détente et de nature</h2>
          <div className="boutonduo">
            <a href={`/${Item}`}>
              {" "}
              <button className="btn1"> {Item}</button>
            </a>
            <a href={`/Journal`}>
              <button className="btn2">Voir le journal</button>
            </a>
          </div>

          <h3>O Potager Perso c'est quoi ?</h3>
          <p>
            La permaculture est une approche écologique pour la conception de
            systèmes de production alimentaire durable. Elle considère la nature
            comme un modèle pour concevoir des jardins, des fermes et des
            systèmes alimentaires plus durables qui produisent des aliments
            sains et nutritifs. La permaculture met l'accent sur les relations
            entre les plantes, les animaux, les humains et le sol. <br />
            <br /> Cela signifie que toutes les formes de vie sont considérées
            comme des acteurs importants dans la production alimentaire et que
            les relations entre eux sont optimisées pour créer un équilibre
            écologique. Les aliments produits en permaculture sont souvent
            considérés comme plus sains que les aliments produits par les
            méthodes traditionnelles, car ils sont cultivés sans produits <br />
            En outre, la permaculture encourage les pratiques de rotation des
            cultures et de protection des sols pour renforcer la santé du sol et
            de la vie microbienne, ce qui peut améliorer la qualité des aliments
            produits. En somme, la permaculture offre une alternative durable
            pour la production alimentaire qui tient compte de la santé de la
            nature et des personnes. Elle crée une relation symbiotique entre
            les éléments du système alimentaire pour produire des aliments de
            qualité supérieure.
          </p>
        </section>

        <section className="carte">
          <Card />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Home;
