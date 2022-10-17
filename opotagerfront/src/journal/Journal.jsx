import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { getAllPosts } from "../LiensApi/Api";
import JournalElement from "./JournalElement";

const Journal = () => {
const [posts, setPosts] = useState()
  useEffect(() => {
    getAllPosts()
      .then((data) =>  setPosts(data?.posts))
      .catch((err) => console.log(err));
  }, []);
  return (
    <Box    
      display="flex" 
      padding="10px"
      justifyContent="center"
      alignItems="center"
      flexWrap="wrap"
    >
      {" "}
      {posts &&
        posts.map((item, index) => (
          <JournalElement
            date={new Date(`${item.date}`).toLocaleDateString()}
            description={item.description}
            image={item.image}
            id={item._id}
            location={item.location}
            title={item.title}
            key={index}
            user={item.user._id}
            name={item.user.name}
          />
        ))}
    </Box>
  );
};

export default Journal;
