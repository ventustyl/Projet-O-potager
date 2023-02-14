import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../actions/post.action";
import Cards from "./Post/Cards";
import { isEmpty } from "./Utils";

const FilActu = () => {
  const [loadPost, setLoadPost] = useState(true);
  const [count, setCount] = useState(3)
  const dispatch = useDispatch();
  const posts = useSelector((state)=> state.rootReducer.postReducer)


  //Fonction qui mesure la taille globale et qui déclenche le setLoadPost
const loadMore = ()=> {
  if (window.innerHeight + document.documentElement.scrollTop + 1 > document.scrollingElement.scrollHeight) {
    setLoadPost(true)
  }
}


  useEffect(() => {
    if (loadPost) {
      dispatch(getPosts(count));
      setLoadPost(false);
      setCount(count + 3)
    }

    window.addEventListener('scroll', loadMore)
    return ()=> window.removeEventListener('scrool', loadMore)
  }, [loadPost, dispatch, count]);

  return (
  <div className="thread-container">
    <ul className="fa-3x">
        {!isEmpty(posts[0]) && 
        posts.map((post)=> {
            return <Cards post={post} key={post._id} />
        })}
    </ul>
  </div>
    );
};

export default FilActu;
