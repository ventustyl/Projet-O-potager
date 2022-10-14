import mongoose from "mongoose";
import Post from "../models/Post";
import User from "../models/User";

export const getAllPosts = async (req, res) => {
  let posts;
  try {
    posts = await Post.find();
  } catch (err) {
    return console.log(err);
  }
  if (!posts) {
    return res.status(500).json({ message: "Erreur inatendu " });
  }
  return res.status(200).json({ posts });
};

export const addPost = async (req, res) => {
  const { titre, description, location, date, image, user } = req.body;

  if (
    !titre &&
    titre.trim() === "" &&
    !description &&
    !description.trim() === "" &&
    !location &&
    location.trim() === "" &&
    !date &&
    !user &&
    !image &&
    !image.trim() === ""
  ) {
    return res.status(422).json({ message: "Données invalides" });
  }
  let existingUser;

  try {
    existingUser = await User.findById(user);
  } catch (err) {
    return console.log(err);
  }
  if (!existingUser) {
    return res.status(404).json({ message: " Utilisateur introuvable" });
  }

  let post;
  try {
    post = new Post({
      titre,
      description,
      image,
      location,
      date: new Date(`${date}`),
      user,
    });

    const session = await mongoose.startSession();

    session.startTransaction();

    existingUser.posts.push(post);
    existingUser.save({ session });
    post = await post.save();
    
  } catch (err) {
    return console.log(err);
  }
  if (!post) {
    return res.status(500).json({ message: "Erreur inatendu" });
  }
  return res.status(201).json({ post, message: "post créé" });
};

export const getPostId = async (req, res) => {
  const id = req.params.id;

  let post;

  try {
    post = await Post.findById(id);
  } catch (err) {
    return console.log(err);
  }
  if (!post) {
    return res.status(404).json({ message: "Post introuvable" });
  }
  return res.status(200).json({ post });
};

export const updatePost = async (req, res) => {
  const id = req.params.id;
  const { titre, description, location, date, image, user } = req.body;

  if (
    !titre &&
    titre.trim() === "" &&
    !description &&
    !description.trim() === "" &&
    !location &&
    location.trim() === "" &&
    !date &&
    !user &&
    !image &&
    !image.trim() === ""
  ) {
    return res.status(422).json({ message: "Données invalides" });
  }
  let post;
  try {
    post = await Post.findByIdAndUpdate(id, {
      titre,
      description,
      image,
      date: new Date(`${date}`),
      image,
      location,
    });
  } catch (err) {
    return console.log(err);
  }
  if (!post) {
    return res.status(500).json({ message: "Impossible a upload" });
  }
  return res.status(200).json({ message: "Mise à jour reussi" });
};

export const deletePost = async (req, res) => {
  const id = req.params.id;
  let post;
  try {
    post = await Post.findByIdAndDelete(id);
  } catch (err) {
    return console.log(err);
  }
  if (!post) {
    return res.status(500).json({ message: "Suppression Impossible" });
  }
  return res.status(200).json({ message: "Article supprimé" });
};
