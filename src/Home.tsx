import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Home({ setSearchTerm, artistResults }: any) {
  const [inputText, setInputText] = useState("");
  return (
    <>
      <h1>Spotify Search</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setSearchTerm(inputText);
          setInputText("");
        }}
      >
        <input
          placeholder="Search for an artist..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <button>Search</button>
      </form>
      <ul>
        {artistResults.map((artist: any) => (
          <li key={artist.id}>
            <Link to={`/artists/${artist.id}`}> {artist.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Home;
