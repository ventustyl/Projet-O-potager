// Appel du schema
const UserModel = require("../models/user.model.js");
const { uploadErrors } = require("../outils/errors.outils.js");

// import l'image de profil
module.exports.uploadProfil = async (req, res) => {
  // console.log(req.files.file.name);
  try {
    if (!req.files.file.name === null) {
      res.send({
        message: "No file uploaded",
      });
    } else if (
      // Validation du format d'image (*.jpg, *png, *.jpeg)
      req.files.file.mimetype !== "image/jpg" &&
      req.files.file.mimetype !== "image/png" &&
      req.files.file.mimetype !== "image/jpeg"
    ) {
      throw Error("invalid file");

      // Validation de la limite de la taille d'image
    } else if (req.files.file.size > 1000000) {
      throw Error("max size");

    } else {
      //Utilisez le nom du champ de saisie (c'est-à-dire "avatar") pour récupérer le fichier téléchargé
      let avatar = req.files.file;
      //Utilisez la méthode mv() pour placer le fichier dans le répertoire de téléchargement (c'est-à-dire "uploads")
      avatar.mv("../public/image/profil/" + avatar.name);

console.log(req.files.file.name )

      UserModel.findByIdAndUpdate(
        req.body.userId,
        { $set: { picture: "/" + req.files.file.name } },
        { new: true, upsert: true, setDefaultsOnInsert: true },
        (err, docs) => {
          if (!err)
            //send response
            res.send({
              status: true,
              message: "File is uploaded",
              data: {
                name: avatar.name,
                mimetype: avatar.mimetype,
                size: avatar.size,
              },
            });
        }
      );
    }
  } catch (err) {
    const errors = uploadErrors(err);
    return res.status(201).json({ errors });
  }
};
