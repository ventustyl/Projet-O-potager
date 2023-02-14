const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema(
    {
        posterId: {
            type: String,
            required: true
        },
        message: {
            type: String,
            trim: true,
            maxlength: 1000,
        },
        picture: {
            type: String,
            required:false
        },
        video: {
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
    },
    {
        timestamps : true,
    }
);

module.exports = mongoose.model('post', PostSchema)