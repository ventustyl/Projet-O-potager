import React, { useContext, useEffect, useState } from "react";
import { UidContext } from "../AppContext";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { useDispatch } from "react-redux";
import { likePost, unlikePost } from "../../actions/post.action";


import HeartX from '../../images/icon/heart-filled.svg'
import Heart from '../../images/icon/heart.svg'


const LikeButton = ({ post }) => {
    
    const [liked, setLiked] = useState();
    const uid = useContext(UidContext);
    const dispatch = useDispatch();



    const like = () => {
    
      dispatch(likePost(post._id, uid))

      setLiked(true);
      // !! Ici une erreur en attendant rechargement de la page
    //  window.location.reload()
    };
  
    const unlike = () => {
      dispatch(unlikePost(post._id, uid))
      setLiked(false);
    };
  
    useEffect( () => {    
      if (post.likers.includes(uid)) setLiked(true);
      else setLiked(false);

    }, [uid, post.likers]);
  
    return (
      <div className="like-container">
      
        {uid === null && (
          <Popup
            trigger={<img src={Heart} alt="like" />}
            position={["bottom center", "bottom right", "bottom left"]}
            closeOnDocumentClick
          >
            <div>Connectez-vous pour aimer un post !  
            <a href="http://localhost:3000/connexion"> Cliquez ici!</a>
          </div>
          
          </Popup>
          
        )}
        {uid && liked === false && (
          <img src={Heart} onClick={like} alt="like" className="heart" />
        )}
        {uid && liked && (
          <img src={HeartX} onClick={unlike} alt="unlike" className="heart" />
        )}
 
        <span>{post.likers.length}</span>
      </div>
    );
  };
  
  export default LikeButton;