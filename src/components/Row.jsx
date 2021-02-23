import React, { useEffect, useState } from "react";
import axios from "axios";
import "../Row.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer"

const basePosterUrl = "http://image.tmdb.org/t/p/original/";

function Row(props) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl,setTrailerUrl]=useState("");

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

  const opts={
    height:"390",
    width:"100%",
    playerVars:{
      autoplay:1,
    },
  };

  const handleClick=(movie)=>{
    console.log("Movies Are:",movie)
    if (trailerUrl){
      setTrailerUrl('');
    }
    else{
      movieTrailer(movie?.name || "").then(url=>{
        const urlParams= new URLSearchParams(new URL(url).search);
        setTrailerUrl(urlParams.get('v'));
      }).catch(err=>{
        console.err(err)
      })
    }
  }

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
                onClick={()=>handleClick(movie)}
                className={`row-poster-image ${props.isLargeRow && "large"}`}
                src={`${basePosterUrl}${props.isLargeRow?movie.poster_path:movie.backdrop_path}`}
                alt={movie.original_title}
              />
            );
          })}
        </div>
      </div>
          {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
}

export default Row;
