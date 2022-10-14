//import de schema depuis mongoose
import mongoose, { model, Schema } from "mongoose";

// Définition d'un nouveau schema
const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      minLength: 3,
      maxLength: 55,
      // Un seul pseudo
      unique: true,
      // retire les espaces
      trim: true,
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      minLength: 6,
      max: 1024,
    },
    bio: {
      type: String,
      max: 1024,
    },
    followers: {
      //tableau des utilisateurs qui nous suivent avec des ID
      type: [String],
    },
    following: {
      //tableau des utilisateurs suivis avec des ID
      type: [String],
    },
    likes: {
      // J'aime avec id du post
      type: [String],
    },
    posts: [{ type: mongoose.Types.ObjectId, ref: "Post"}]
  },
  {
    timestamps: true,
  }
);

export default model("User", userSchema);
