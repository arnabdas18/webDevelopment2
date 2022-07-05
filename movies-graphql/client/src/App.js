import MovieList from "./components/MovieList";
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';
import AddMovie from "./components/AddMovie";

const client = new ApolloClient({
  uri: 'http://localhost:5500/graphql',
  cache: new InMemoryCache()
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div>
        <h1>Watch List</h1>
        <MovieList />
        <AddMovie />
      </div>
    </ApolloProvider>
  );
}

export default App;