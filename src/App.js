import "./App.css";
import Row from "./components/Row";
import requests from "./request";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      {/* {Navbar} */}
      <Navbar />
      {/* {Banner} */}
      <Banner fetchUrl={requests.topRated} />
      {/* {Rows} */}
      <Row title="Trending Now" fetchUrl={requests.trending} isLargeRow />
      <Row title="Popular" fetchUrl={requests.popular} />
      <Row title="Up-Coming " fetchUrl={requests.upcomming} />
      <Row title="Top Rated " fetchUrl={requests.topRated} />
      <Row title="Now Playing" fetchUrl={requests.nowPlaying} />
      {/* <Row title="Latest" fetchUrl={requests.latest} /> */}
    </div>
  );
}

export default App;
