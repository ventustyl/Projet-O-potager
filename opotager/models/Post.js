// import de mongoose
import mongoose from "mongoose";

const postSchema = new mongoose.Schema ({
    titre: {
        type:String,
        required: true,
    }, 
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true
    },
    user: {
        type: mongoose.Types.ObjectId,
        ref:"User",
        required: true,
    },        video: {
        type: String,
    },
    likers: {
        type: [String],
        required: true,
    },
    comments: {
        type: [
            {
                commenterId:String,
                commenterPseudo: String,
                text: String,
                timestamp: Number,
            }
        ], 
        require: true,
    },
})

export default mongoose.model("Post", postSchema)