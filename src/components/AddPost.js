import { useAddPostMutation, useGetPostsQuery } from "../services/postsApi";

const AddPost = () => {
  const [addPost] = useAddPostMutation();
  // we use tagTypes inner postApi for fetch new data
//   const { refetch } = useGetPostsQuery();
  const newPost = {
    title: "New Post",
    body: "This is new post for test and practice",
    userId: 1,
  };
  const handleAddPost = async () => {
    await addPost(newPost).then(() => {
      alert("add post");
    //   refetch();
    });
  };
  return <button onClick={handleAddPost}>AddPost</button>;
};

export default AddPost;
