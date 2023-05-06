import { useDeletePostMutation } from "../services/postsApi";

const DeletePost = () => {
  const [deletePost] = useDeletePostMutation();
  const handleDeletePost = () => deletePost(100).then(() => alert("Delete last post"));
  return <button onClick={handleDeletePost}>Delete last post</button>;
};

export default DeletePost;
