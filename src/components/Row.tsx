
import axios from "./../axios"
import React, { useState, useEffect } from "react"
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

export const Row = ({ title, endpoint, isLargeRow }: Props) => {
  const [movies, setMovies] = useState<Array<Movie>>([])

  /** 映画データを取得する */
  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(endpoint)
      setMovies(request.data.results)

      return request
    }

    fetchData()
  }, [endpoint])

  console.log(movies)

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
          />
        ))}
      </div>
    </div>
  )
}