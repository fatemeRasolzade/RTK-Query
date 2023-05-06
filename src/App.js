import AddPost from "./components/AddPost";
import EditPost from "./components/EditPost";
import PostsElements from "./components/PostsElements";
import { useGetPostsQuery } from "./services/postsApi";

function App() {
  const { data = [], error, isLoading, isFetching, isSuccess } = useGetPostsQuery();
  return (
    <div>
      <h1>Learning Redux Toolkit RTK Query</h1>
      <AddPost />
      <EditPost />
      {isLoading && <p>...Loading</p>}
      {isFetching && <p>...Fetching</p>}
      {error && <p>Something went wrong</p>}
      {isSuccess && data?.map((post) => <PostsElements key={post.id} post={post} />)}
    </div>
  );
}

export default App;
