export const fetchSpotify = <T>(
  input: RequestInfo,
  init?: RequestInit | undefined
): Promise<T> => {
  const options = init ?? {};

  return fetch(input, {
    ...options,
    headers: {
      ...(options?.headers ?? {}),
      Accept: "application/json",
      Authorization: `Bearer ${process.env.REACT_APP_SPOTIFY_ACCESS_TOKEN}`,
      "Content-Type": "application/json",
    },
  }).then((response) => response.json() as Promise<T>);
};

export const fetchArtists = (artist: string) =>
  fetchSpotify(`https://api.spotify.com/v1/search?q=${artist}&type=artist`);

export const fetchArtistDetails = (artistID: string) =>
  fetchSpotify(`https://api.spotify.com/v1/artists/${artistID}`);
