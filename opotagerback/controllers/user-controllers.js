// import du schema user
import User from "../models/User";

// import de hashSync de bcryptjs
import { compareSync, hashSync } from "bcryptjs";

// Fonction pour lire tous les utlisateurs
export const getAllUsers = async (req, res) => {
  let users;

  try {
    // On essai de retrouver l'utilisateur
    users = await User.find();
  } catch (err) {
    return console.log(err);
  }

  if (!users) {
    // Message si une erreur 500
    return res
      .status(500)
      .json({ message: "Une erreur inattendue s'est produite" });
  }
  // l'utilisateur est lu
  return res.status(200).json({ users });
};

// Fonction pour l'inscription
export const signUp = async (req, res, next) => {
  const { name, email, password } = req.body;
  if (
    !name &&
    name.trim() === "" &&
    !email &&
    email.trim() === "" &&
    !password &&
    password.length < 6
  ) {
    return res.status(422).json({ message: "Données invalides" });
  }

  //on hash le mot de passe
  const hashPassword = hashSync(password);

  // Creation de la variable user
  let user;
  try {
    user = new User({ email, name, password: hashPassword });
    await user.save();
  } catch (err) {
    return console.log(err);
  }
  if (!user) {
    return res.statut(500).json({ message: " Erreur inatendu" });
  }
  return res.status(201).json({ user });
};

// Fonction pour le login
export const logIn = async (req, res, next) => {
  const { name, email, password } = req.body;
  if (
    !name &&
    name === "" &&
    !email &&
    email === "" &&
    !password &&
    password.length < 6
  ) {
    return res.status(422).json({ message: "Données invalides" });
  }
  //Declaration de variable Utilisateur existant
  let existingUser;
  try {
    existingUser = await User.findOne({ email });
  } catch (err) {
    return console.log(err);
  }
  if (!existingUser) {
    return res.status(404).json({ message: "Utilisateur introuvable" });
  }
  const passwordCorrect = compareSync(password, existingUser.password);

  if (!passwordCorrect) {
    return res.status(400).json({ message: "Mot de passe incorrect" });
  }
  return res
    .status(200)
    .json({ id: existingUser._id, message: "Identification réussi" });
};
