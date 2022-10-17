// Appel de express
import express from "express";

// Appel de mongoose pour la base de donnée
import mongoose from "mongoose";

//Appel de dotenv pour les variable d'environnement
import dotenv from "dotenv";

// On appel la fonction userRouter
import userRouter from "./routing/user-routes";
import postRouter from "./routing/post-routes";

// Appel de Cors
import cors from "cors"

const app = express();
dotenv.config();

// middlewares
//Utilisation de cors 
app.use(cors());
//bodyparser est inclu dans express donc on peut lire le json et appeler le body
app.use(express.json());
// Si la route est /user voir tous les utilisateurs
app.use("/user", userRouter);
app.use("/posts", postRouter);




// Connexion à la base de données Mongodb
mongoose
  .connect(
    `mongodb+srv://Noxy:${process.env.BDD_PASSWORD}@cluster0.zj87sas.mongodb.net/Projet-Opatager`
  )
  .then(
    () =>
      // Port d'écoute pour le back
      app.listen(5000, () =>
        console.log("Connexion Reussi  & Ecoute localhost Port 5000")
      )
    // Si echec console log erreur
  )
  .catch((err) => console.log(err));


// ------------------------------------------------------------------//
// MongoDB                                                           //
// Pseudo : Noxy                                                     //
// Mot de passe : fcilteam                                           //
// Mongo Atlas                                                       //
// mongodb+srv://Noxy:fcilteam@cluster0.zj87sas.mongodb.net/test     //
// ------------------------------------------------------------------//
