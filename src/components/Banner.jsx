import React, { useState, useEffect } from "react";
import axios from "axios";
import "../Banner.css";

function Banner(props) {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(props.fetchUrl);

      // request.data.results[Math.floor(Math.random()*request.data.results.length - 1)] => Will Display any random movie from the movie list
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );

      return request;
    }
    fetchData();
  }, [props.fetchUrl]);

  console.log(movie);

//   For Truncating the description
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + " ..." : str;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundImage: `url("http://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
      }}
    >
      {/*<==Background image */}
      <div className="banner-content">
        {/* {Title} */}
        <h1 className="banner-title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        {/* {div=>2 buttons} */}
        <div className="banner-btn">
          <button className="btn">Play</button>
          <button className="btn">My List</button>
        </div>
        {/* {description} */}
        <h1 className="banner-desc">{truncate(movie?.overview, 150)}</h1>
      </div>
    </header>
  );
}

export default Banner;
