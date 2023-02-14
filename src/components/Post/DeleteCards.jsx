import React from "react";
import { useDispatch } from "react-redux";
import { deletePost } from "../../actions/post.action";
import Trash from "../../images/icon/trash.svg";

const DeleteCards = (props) => {
  const dispatch = useDispatch();

  const deleteQuote = () => dispatch(deletePost(props.id));

  return (
    <div
      onClick={() => {
        if (window.confirm("Voulez-vous supprimer cet article ?")) {
          deleteQuote();
        }
      }}
    >
      <img src={Trash} alt="corbeille" />
    </div>
  );
};

export default DeleteCards;
