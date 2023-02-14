import React, { useContext, useEffect, useState } from "react";
import { UidContext } from "../AppContext";
import Editc from "../../images/icon/edit.svg";
import Deletec from "../../images/icon/trash.svg";
import { useDispatch } from "react-redux";
import { deleteComment, editComment } from "../../actions/post.action";

const EditDeleteComments = ({ comment, postId }) => {
  const [isAuthor, setIsAuthor] = useState(false);
  const [edit, setEdit] = useState(false);
  const [text, setText] = useState("");
  const uid = useContext(UidContext);
  const dispatch = useDispatch();

  const handleEdit = (e) => {
    e.preventDefault();
    if (text) {
      dispatch(editComment(postId, comment._id, text));
      setText("");
      setEdit(false);
    }
  };

  const handleDelete = () => {
    dispatch(deleteComment(postId, comment._id))
  };

  useEffect(() => {
    const checkAuteur = () => {
      if (uid === comment.commenterId) {
        setIsAuthor(true);
      }
    };
    checkAuteur();
  }, [uid, comment.commenterId]);

  return (
    <div className="edit-comment">
      {isAuthor && edit === false && (
        <div>
        <span onClick={() => setEdit(!edit)}>
          <img src={Editc} alt="edit-comment" />
            </span>
        <span>
                 
          <img
            src={Deletec}
            alt="delete-icon"
            onClick={() => {
              if (window.confirm("Voulez-vous supprimer le commentaire ?")) {
                handleDelete();
              }
            }}/>
        </span>
        </div>
      )}
      {isAuthor && edit && (
        <form action="" onSubmit={handleEdit} className="edit-comment-form">
          <label htmlFor="text" onClick={() => setEdit(!edit)}>
            Editer
          </label>
          <br />
          <input
            type="text"
            name="text"
            onChange={(e) => setText(e.target.value)}
            defaultValue={comment.text}
          />
          <br />
          <div className="btn">
            <span
              onClick={() => {
                if (window.confirm("Voulez-vous supprimer le commentaire ?")) {
                  handleDelete();
                }
              }}
            >
              <img src={Deletec} alt="delete-icon" />
            </span>
          </div>
          <input type="submit" value="valider les modifications" />
        </form>
      )}
    </div>
  );
};

export default EditDeleteComments;
