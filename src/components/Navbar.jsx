// import de react
import React, { useContext, useState } from "react";
import { useSelector } from "react-redux";
import { UidContext } from "./AppContext";

// import de scsss
import "./navbar.scss";

//import du logo
import Logo from "../images/icon.png";

// Variable qui contient les pages
const pages = [
  "Journal",
  "Legumes",
  "Fruits",
  "Aromates",
  "Astuces",
  "Contact",
];
const listItems = pages.map((link) => (
  <li key={link}>
    <a href={`/${link}`}>{link}</a>
  </li>
));

const Navbar = () => {
  const uid = useContext(UidContext);
  const [navOpen, setNavOpen] = useState(false);

  const userData = useSelector((state) => state.rootReducer.userReducer);

  return (
    <nav>
      <a href="/">
        <img className="logo" src={Logo} alt="Logo Potager" />
      </a>
      <div className="menu-toogle" onClick={() => setNavOpen(!navOpen)}>
        <div className={navOpen ? "hamBoxOpen" : "hamBox"}>
          <span className={navOpen ? "lineTop spintop" : "lineTop"}></span>
          <span className={navOpen ? "lineBottom spinbottom" : "lineBottom"}></span>
        </div>
      </div>
      <div className="navbar">
      <ul>
        {" "}
        {listItems}
        {uid ? (
          <li>
          <img src={window.location.origin + "/image/profil" + userData.picture} alt="pic profil"/> 
            <a href="/connexion">Bienvenue {userData.pseudo} </a>
          </li>
        ) : (
          <li>
            <a href="/connexion"> Connexion </a>
          </li>
        )}
      </ul>
      </div>
      <div
        className="nav-overlay"
        style={{
      
         left: navOpen ? "0" : "100%",
          transitionDelay: navOpen ? "0s" : "0s",
        }}
      ><ul>
      <li>
      <a href="/"> <img className="logo" src={Logo} alt="Logo Potager" /></a>
      </li>
        {" "}
        {listItems}
        {uid ? (
          <li>
          <img className="pic-profil" src={window.location.origin + "/image/profil" + userData.picture} alt="pic profil"/> 
            <a href="/connexion"> Bienvenue {userData.pseudo} </a>
          </li>
        ) : (
          <li>
         
            <a href="/connexion"> Connexion </a>
          </li>
        )}
      </ul></div>      
    </nav>
  );
};

export default Navbar;
