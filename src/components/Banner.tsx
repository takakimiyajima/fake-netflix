import React, { useState, useEffect } from "react"
import axios from "./../axios"
import "./Banner.scss"
import { ENDPOINTS } from './../constants'

type movieProps = {
  title?: string
  name?: string
  original_name?: string
  backdrop_path?: string
  overview?: string
}

export const Banner = () => {
  const [movie, setMovie] = useState<movieProps>({})

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(ENDPOINTS.fetchNetflixOriginals)

      //apiからランダムで値を取得している
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      )
      return request
    }

    fetchData()
  }, [])
  console.log(movie)

  // descriptionの切り捨て関数
  const truncate = (str: any, n: number) => {
    if (!!str) {
      return str.length > n ? str.substr(0, n - 1) + "..." : str
    }
  }

  return (
    <header
      className="Banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="Banner-contents">
        <h1 className="banner-title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="Banner-buttons">
          <button className="Banner-button">Play</button>
          <button className="Banner-button">My List</button>
        </div>

        <h1 className="Banner-description">{truncate(movie?.overview, 150)}</h1>
      </div>

      <div className="Banner-fadeBottom" />
    </header>
  )
}
