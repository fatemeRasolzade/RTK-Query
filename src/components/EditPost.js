import React from "react";
import { useEditPostMutation } from "../services/postsApi";

const EditPost = () => {
  const [editPost] = useEditPostMutation();
  const newPost = {
    id: 1,
    title: "Edit Post",
    body: "This is new post for test and practice",
    userId: 1,
  };
  const handleEditPost = () => {
    editPost(newPost).then(() => alert("Edit first post"));
  };
  return <button onClick={handleEditPost}>Edit first post</button>;
};

export default EditPost;
