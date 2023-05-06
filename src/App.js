import UsersElements from "./components/UsersElements";
import { useGetUsersQuery } from "./services/usersApi";

function App() {
  const { data, error, isLoading, isFetching, isSuccess } = useGetUsersQuery();
  return (
    <div>
      <h1>Learning Redux Toolkit RTK Query</h1>
      {isLoading && <p>...Loading</p>}
      {isFetching && <p>...Fetching</p>}
      {error && <p>Something went wrong</p>}
      {isSuccess && data.map((user) => <UsersElements key={user.id} user={user} />)}
    </div>
  );
}

export default App;
