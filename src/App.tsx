import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Home";
import ArtistDetails from "./ArtistDetails";

import { fetchArtists } from "./api";

function App() {
  const [searchTerm, setSearchTerm] = useState("Muse");

  const [artistResults, setArtistResults] = useState<any[]>([]);

  useEffect(() => {
    fetchArtists(searchTerm).then((data: any) =>
      setArtistResults(data.artists.items)
    );
  }, [searchTerm]);

  return (
    <Router>
      <Switch>
        <Route path={`/`} exact={true}>
          <Home setSearchTerm={setSearchTerm} artistResults={artistResults} />
        </Route>
      </Switch>
      <Switch>
        <Route path={`/artists/:artistID`}>
          <ArtistDetails />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
