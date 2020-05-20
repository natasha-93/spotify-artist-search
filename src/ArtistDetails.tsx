import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { fetchArtistDetails } from "./api";

type ArtistDetails = {
  genres: string[];
  followers: {
    href: unknown;
    total: number;
  };
  popularity: number;
  name: string;
  external_urls: {
    spotify: string;
  };
};

export default function ArtistDetails() {
  let { artistID } = useParams();
  const [artistDetails, setArtistDetails] = useState<null | ArtistDetails>(
    null
  );

  useEffect(() => {
    fetchArtistDetails(artistID).then((data: any) => setArtistDetails(data));
  }, []);

  if (artistDetails == null) {
    return <div> Loading... </div>;
  }
  console.log(artistDetails);
  return (
    <div>
      <h1>Artist Details : {artistDetails.name}</h1>
      <p>Followers: {artistDetails.followers.total}</p>
      <p>Popularity: {artistDetails.popularity}</p>
      Genres:
      <ul>
        {artistDetails.genres.map((genre) => (
          <li key={genre}>{genre}</li>
        ))}
      </ul>
      <p>
        <a href={artistDetails.external_urls.spotify}>
          See Artist Page on Spotify
        </a>
      </p>
    </div>
  );
}
