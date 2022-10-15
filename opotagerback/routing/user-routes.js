import { Router } from "express";
import { getAllUsers, signUp, logIn } from "../controllers/user-controllers";

const userRouter = Router();


// Get pour lire les utilisateurs
userRouter.get("/", getAllUsers)
// Post pour creer les utilisateurs
userRouter.post("/signup", signUp)
// Post pour se log
userRouter.post("/login", logIn)


export default userRouter