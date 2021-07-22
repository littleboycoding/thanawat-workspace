import { faMusic } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components/macro";

const SPOTIFY_URL =
  "https://open.spotify.com/embed/playlist/0vvXsWCC9xrXsKd4FyS8kM?theme=0";

const Spotify = styled.iframe`
  border-radius: 5px;
  width: 100%;
  height: 80px;
  border: none;
  margin-top: 10px;
`;

const SpotifyArea = styled.div`
  grid-area: spotify;
  @media (max-width: 1007px) {
    display: none;
  }
`;

function SpotifyStyled() {
  return (
    <SpotifyArea>
      <span>
        <FontAwesomeIcon icon={faMusic} /> Some Lo-fi ?
      </span>
      <Spotify
        title="spotify"
        src={SPOTIFY_URL}
        allowtransparency="true"
        allow="encrypted-media"
      ></Spotify>
    </SpotifyArea>
  );
}

export default SpotifyStyled;
