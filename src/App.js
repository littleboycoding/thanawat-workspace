import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import "./App.css";
import { getGithubUser, getRandomUnsplashPhoto } from "./api/api";

const queryClient = new QueryClient();
const BACKGROUND_KEYWORDS = ["cloud"];

function Background(props) {
  const { data, error, isLoading, isError } = useQuery(
    ["background", props.keywords],
    getRandomUnsplashPhoto,
    {
      staleTime: 1000 * 60 * 5,
    }
  );

  if (isLoading) return null;
  if (isError) return error;

  return <img src={data} alt="background" className="background" />;
}

function SpotifyPlayer() {
  return (
    <iframe
      title="spotify"
      className="spotify"
      src="https://open.spotify.com/embed/playlist/0vvXsWCC9xrXsKd4FyS8kM?theme=0"
      width="25%"
      height="180"
      frameBorder="0"
      allowtransparency="true"
      allow="encrypted-media"
    ></iframe>
  );
}

function Navbar() {
  const { error, data, isLoading, isError } = useQuery(
    ["user", "littleboycoding"],
    getGithubUser
  );

  if (isLoading) return null;
  if (isError) return error;

  return (
    <div className="navbar">
      <img src={data.avatar_url} alt="avatar" className="avatar" />
      <big>{data.name}</big>
      <span>Happy developer</span>
      <span>☕ ⌨️💻🚀</span>
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Background keywords={BACKGROUND_KEYWORDS} />
      <div className="app">
        <Navbar />
        <SpotifyPlayer/>
      </div>
    </QueryClientProvider>
  );
}

export default App;
