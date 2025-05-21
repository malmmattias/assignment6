"use client";

import Button, { SubmitButton } from "../SubmitButton/SubmitButton";
import React, { useState } from "react";

export function Movieform({ addMovie }) {
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState("0");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title === "") {
      alert("Fyll i titel");
      return;
    }

    if (rating === "" || rating === "0" || rating === "Välj betyg här...") {
      alert("Fyll i rating");
      return;
    }

    addMovie({ title, rating });

    setTitle("");
    setRating("0");
  };

  return (
    <form id="add-movie-form" onSubmit={handleSubmit}>
      <label htmlFor="title-field">Titel:</label>
      <input
        type="text"
        id="title-field"
        className="form-control"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <label htmlFor="rating-field">Betyg:</label>

      <select
        type="text"
        id="rating-field"
        className="form-control"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
      >
        <option value="0">Välj betyg här...</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
      <SubmitButton value="Lägg till film" />
    </form>
  );
}

export default Movieform;
