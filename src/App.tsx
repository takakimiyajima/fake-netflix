import React from 'react';
import './App.css';
import { Row } from './components/Row'
import { Banner } from './components/Banner'
import { Nav } from "./components/Nav";
import { ENDPOINTS } from "./constants";

function App() {
  return (
    <div className="App">
      {/* <Nav />
      <Banner /> */}
      <Row
        title="NETFLIX ORIGINALS"
        endpoint={ENDPOINTS.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Top Rated" endpoint={ENDPOINTS.fetchTopRated} />
      <Row title="Action Movies" endpoint={ENDPOINTS.fetchActionMovies} />
      <Row title="Comedy Movies" endpoint={ENDPOINTS.fetchComedyMovies} />
      <Row title="Horror Movies" endpoint={ENDPOINTS.fetchHorrorMovies} />
      <Row title="Romance Movies" endpoint={ENDPOINTS.fetchRomanceMovies} />
      <Row title="DOcumentaries" endpoint={ENDPOINTS.fetchDocumentMovies} />
    </div>
  )
}

export default App
