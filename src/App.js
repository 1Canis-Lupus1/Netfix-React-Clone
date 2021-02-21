import logo from './logo.svg';
import './App.css';
import Row from "./components/Row";
import requests from "./request"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Netflix Clone
      </header>
      <div className="App-body">
        {/* <h1>Trending Now</h1> */}
        <Row title="Trending Now" fetchUrl={requests.trending} />
        <Row title="Popular" fetchUrl={requests.popular} />
      </div>
    </div>
  );
}

export default App;
