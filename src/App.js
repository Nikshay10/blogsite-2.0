import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import PostList from './components/PostList';
import Sidebar from './components/Sidebar';
import Body from './components/Body';

const GQL_URI='https://api-ap-south-1.hygraph.com/v2/clja2cxwd24l001t2308g4tju/master';

const apolloClient=new ApolloClient({
  uri: GQL_URI,
  cache: new InMemoryCache()
})

function App() {
  return (
    <ApolloProvider client={apolloClient}>
    <div className="App">
      <Body/>
    </div>
    </ApolloProvider>
  );
}

export default App;
