import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Potager from "../img/O potager panier.jpg";
import {Link} from "react-router-dom"

const Home = () => {
  return (
    <Box sx={{ mx: "auto" }} position="relative" width="100%" height="90%">
      <img src={Potager} alt="Fond de potager" width="100%" height="70%" />
      <Typography
        fontFamily="Dancing Script"
        variant="h3"
        color="white"
        textAlign={"center"}
        width="100%"
        height="80px"
        backgroundColor="#85ffbe83"
        margin="auto"
        sx={{
          fontSize: "60px",
          position: "absolute",
          top: "0",
          right: "0",
          left: "0",
          bottom: "0",
          mx: "auto",
        }}
      >
        Le potager "Le bonheur de manger son chez soi"
      </Typography>
      <Box width="100%" height="30%" display="flex" flexDirection="column">
        <Typography fontFamily="Inter" textAlign="center" variant="h4" padding={4}>
        VENEZ PARTAGER UN MOMENT DE DETENTE ET DE NATURE 
        </Typography>
    <Box margin="auto">
        <Button variant="outlined"  sx={{mr:2, color:"#21b6ae"}}>Partager votre experience</Button>
        <Button   LinkComponent={Link} to="/journal" variant="contained" sx={{ml:2, backgroundColor:"#21b6ae", ':hover': {"backgroundColor":"#85ffbe83" }}}>Voir le journal</Button>
    </Box>
     </Box>
    </Box>
  );
};

export default Home;
