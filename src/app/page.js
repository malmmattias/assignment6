"use client";

import Image from "next/image";
import styles from "./page.module.css";
import Movieform from "./components/Movieform/Movieform";
import "bootstrap/dist/css/bootstrap.min.css";
import Movielist from "./components/Movielist/Movielist";
import { Button } from "./components/Button/Button";
import { useState } from "react";

export default function Home() {
  const [movies, setMovies] = useState([]);

  const addMovie = (movie) => {
    setMovies((prevMovies) => [...prevMovies, movie]);
  };

  const deleteItem = (id) => {
    setMovies((prevMovies) => prevMovies.filter((movie) => movie.title !== id));
  };

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1 className={styles.title}>Min filmlista</h1>
        <hr></hr>
        <legend>Lägg till en film</legend>
        <Movieform addMovie={addMovie} />
        <hr></hr>
        <h2>Filmer</h2>
        <Movielist movies={movies} />
        <Button value="Alfabetisk ordning" />
        <Button value="Betygsordning" />
      </main>
    </div>
  );
}
