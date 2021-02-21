import React, { useEffect, useState } from "react";
import axios from "axios";
import "../Row.css"

const basePosterUrl = "http://image.tmdb.org/t/p/original/";

function Row(props) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // console.log(props.fetchUrl)
    async function fetchData() {
      const request = await axios.get(props.fetchUrl);
      // console.log(request)
      console.log(request);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [props.fetchUrl]);

  return (
    <div>
      {/* {Title} */}
      <div className="row">
        <h1>{props.title}</h1>
        <div className="row-poster">
          {/* {Row Posters Here} */}
          {movies.map((movie) => {
            return (
              <img
                key={movie.id}
                className={`row-poster-image ${props.isLargeRow && "large"}`}
                src={`${basePosterUrl}${props.isLargeRow?movie.poster_path:movie.backdrop_path}`}
                alt={movie.original_title}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Row;
