import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import FollowHandler from "../Admin/FollowHandler";
import { dateParser, isEmpty } from "../Utils";
import Message from "../../images/icon/message1.svg";
import Edit from "../../images/icon/edit.svg";

import LikeButton from "./LikeButton";
import { updatePost } from "../../actions/post.action";
import DeleteCards from "./DeleteCards";
import CardsComments from "./CardsComments";

const Cards = ({ post }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isUpdate, setIsUpdate] = useState(false);
  const [textUpdate, setTextUpdate] = useState(null);
  const [showComments, setShowComments] = useState(false);
  const userData = useSelector((state) => state.rootReducer.userReducer);
  const usersData = useSelector((state) => state.rootReducer.usersReducer);
  const dispatch = useDispatch();

  const updateItem = () => {
    if (textUpdate) {
      dispatch(updatePost(post._id, textUpdate));
    }
    setIsUpdate(false);
  };

  useEffect(() => {
    !isEmpty(usersData[0]) && setIsLoading(false);
  }, [usersData]);

  return (
    <li className="card-container" key={post._id}>
      {isLoading ? (
        <i className="fas fa-spinner fa-spin"></i>
      ) : (
        <>
          <div className="card-left">
            <img
              src={
                !isEmpty(usersData[0]) &&
                usersData
                  .map((user) => {
                    if (user._id === post.posterId)
                      return (
                        window.location.origin + "/image/profil" + user.picture
                      );
                    else return null;
                  })
                  .join("")
              }
              alt="poster-pic"
            />
          </div>
          <div className="card-right">
            <div className="card-header">
              <div className="pseudo">
                <h3>
                  {!isEmpty(usersData[0]) &&
                    usersData
                      .map((user) => {
                        if (user._id === post.posterId) return user.pseudo;
                        else return null;
                      })
                      .join("")}
                </h3>
                {post.posterId !== userData._id && (
                  <FollowHandler idToFollow={post.posterId} type={"card"} />
                )}
                <span>{dateParser(post.createdAt)}</span>
              </div>
              {isUpdate === false && (
                <p className="text-card">{post.message}</p>
              )}
              {isUpdate && (
                <div className="update-post">
                  <textarea
                    defaultValue={post.message}
                    onChange={(e) => setTextUpdate(e.target.value)}
                  />
                  <div className="button-container">
                    <button className="btn" onClick={updateItem}>
                      Valider les modications
                    </button>
                  </div>
                </div>
              )}

              {post.picture ? (
                <img
                  src={window.location.origin + "/image/post" + post.picture}
                  className="img-flux"
                  alt="perso"
                />
              ) : (
                <></>
              )}

              {post.video && (
                <iframe
                  width="500"
                  height="300"
                  src={post.video}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title={post._id}
                ></iframe>
              )}
              {userData._id === post.posterId && (
                
                <div className="button-container">
                  <div onClick={() => setIsUpdate(!isUpdate)}>
                    <img src={Edit} alt="btn-edit" />
                  </div>

                  <DeleteCards id={post._id} />
                </div>
              )}
              <div className="comment-icon">
                <img
                  onClick={() => setShowComments(!showComments)}
                  src={Message}
                  alt="icon-message"
                />
                <span>{post.comments.length}</span>

                <LikeButton post={post} />
              </div>

              {showComments && <CardsComments post={post} />}
            </div>
          </div>
        </>
      )}
    </li>
  );
};

export default Cards;
