import React, { useState, useEffect } from "react"
import YouTube from "react-youtube";
import { ENDPOINTS } from "../constants";
import axios from "./../axios"
import "./Row.scss"

const base_url = "https://image.tmdb.org/t/p/original"

type Props = {
  title: string
  endpoint: string
  isLargeRow?: boolean
}

type Movie = {
  id: string
  name: string
  title: string
  original_name: string
  poster_path: string
  backdrop_path: string
}

/** trailerのoption */
type Options = {
  height: string;
  width: string;
  playerVars: {
    autoplay: 0 | 1 | undefined;
  };
};

export const Row = ({ title, endpoint, isLargeRow }: Props) => {
  const [movies, setMovies] = useState<Array<Movie>>([])

  const [trailerUrl, setTrailerUrl] = useState<string | null>("");

  /** 映画データを取得する */
  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(endpoint)
      setMovies(request.data.results)

      return request
    }

    fetchData()
  }, [endpoint])

  const opts: Options = {
    height: "390",
    width: "640",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const handleClick = async (movie: Movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      const endpoint = ENDPOINTS.fetchTrailer.replace('$movieId', movie.id)
      const trailer = await axios.get(endpoint);
    
      setTrailerUrl(trailer.data.results[0]?.key);
    }
  };

  return (
    <div className="Row">
      <h2>{title}</h2>
      <div className="Row-posters">
        {/* ポスターコンテンツ */}
        {movies.map((movie) => (
          <img
            key={movie.id}
            className={`Row-poster ${isLargeRow && "Row-poster-large"}`}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
            onClick={() => handleClick(movie)}
          />
        ))}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  )
}