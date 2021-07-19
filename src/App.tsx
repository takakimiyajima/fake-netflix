import React from 'react';
import './App.css';
import { Row } from './components/Row'
import { Banner } from './components/Banner'
import { Nav } from "./components/Nav";
import { ENDPOINTS } from "./constants";

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={ENDPOINTS.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Top Rated" fetchUrl={ENDPOINTS.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={ENDPOINTS.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={ENDPOINTS.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={ENDPOINTS.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={ENDPOINTS.fetchRomanceMovies} />
      <Row title="DOcumentaries" fetchUrl={ENDPOINTS.fetchDocumentMovies} />
    </div>
  )
}

export default App
