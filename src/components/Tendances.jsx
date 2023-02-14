import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTrends } from "../actions/post.action";
import { isEmpty } from "./Utils";
import { NavLink } from "react-router-dom";

const Trends = () => {
  const posts = useSelector((state) => state.rootReducer.allPostsReducer);
  const usersData = useSelector((state) => state.rootReducer.usersReducer);
  const trendList = useSelector((state) => state.rootReducer.trendingReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isEmpty(posts[0])) {
      const postsArr = Object.keys(posts).map((i) => posts[i]);
      let sortedArray = postsArr.sort((a, b) => {
        return b.likers.length - a.likers.length;
      });
      sortedArray.length = 3;
      dispatch(getTrends(sortedArray));
    }
  }, [posts, dispatch]);

  return (
    <div className="trending-container">
      <h4>Les posts les plus liker</h4>
      <NavLink to="/Journal">
        <ul>
          {trendList.length &&
            trendList.map((post) => {
              return (
                <li key={post._id}>
                  <div>
                    {post.picture && <img src={   window.location.origin + "/image/post" + post.picture} alt="post-pic" />}
                    {post.video && (
                      <iframe
                        src={post.video}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title={post._id}
                      ></iframe>
                    )}
                    {isEmpty(post.picture) && isEmpty(post.video) && (
                      <img src={usersData[0] && usersData.map((user) => {
                        if (user._id === post.posterId) {
                          return user.picture;
                        } else return null;
                      })
                      .join("")
                    } alt="profil-pic"/>
                    )}
                  </div>
                  <div className="trend-content">
                    <p>{post.message}</p>
                    <span>Prochainement (En lire +)</span>
                  </div>
                </li>
              );
            })}
        </ul>
      </NavLink>
    </div>
  );
};

export default Trends;