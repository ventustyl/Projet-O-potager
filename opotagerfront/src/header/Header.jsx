import React, { useState } from "react";
import Logo from "../img/icon.png";
const pages = ["Accueil", "Journal", "Plantation", "Contact"];
const Header = () => {
  const [value, setValue] = useState();
  return (
    <header>
      <img className="logo" src={Logo} alt="Logo O Potager Perso" />
      <nav value={value} onChange={(e, value) => setValue(value)}>
        {pages.map((link) => (
          <a href="./{link}" key={link} label={link} />
        ))}
      </nav>
    </header>
  );
};

export default Header;
