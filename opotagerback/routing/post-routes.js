import { Router } from "express";

// fonction prendre tous les pots
import { addPost, deletePost, getAllPosts, getPostId, updatePost } from "../controllers/post-controllers";

const postRouter = Router();

// Fonction pour lire tous les posts
postRouter.get("/", getAllPosts)
// Fonction pour ajouter un post 
postRouter.post("/", addPost )
// Trouver un post par utilisateur
postRouter.get("/:id", getPostId )
// Modifié un post
postRouter.put("/:id", updatePost)
// Supprimer un post
postRouter.delete("/:id", deletePost)



export default postRouter