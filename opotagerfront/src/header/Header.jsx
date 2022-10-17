import React, { useState } from "react";
import { AppBar, Toolbar, Tabs, Tab } from "@mui/material";
import Logo from "../img/icon.png";
import { Link } from "react-router-dom";

const pages = [
  "Journal",
  "Légumes",
  "Fruits",
  "Aromates",
  "Astuces",
  "Experiences",
  "Contact",
  "Connexion",
];
const Header = () => {
  const [value, setValue] = useState();

  return (
    <AppBar sx={{ bgcolor: "#FCFCFF", position: "sticky" }}>
      <Toolbar>
        <a href="/">
          <img src={Logo} alt="Logo O potager perso" />
        </a>
        <Tabs
          value={value}
          onChange={( value) => setValue(value)}
          sx={{ ml: "auto", textDecoration: "none" }}
        >
          {pages.map((link) => (
            <Tab
            
              LinkComponent={Link}
              to={`/${link === "home" ? "" : link }`}
              sx={{
                textDecoration: "none",
                ":hover": {
                  textDecoration: "underline",
                  textUnderlineOffset: "18px",
                },
              }}
              key={link}
              label={link}
            />
          ))}
        </Tabs>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
