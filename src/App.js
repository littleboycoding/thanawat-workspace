import { QueryClient, QueryClientProvider } from "react-query";
import styled from "styled-components/macro";
import NavbarStyled from "./components/Navbar";
import BackgroundStyled from "./components/Background";
import ControllerStyled from "./components/Controller";
import SpotifyStyled from "./components/Spotify";
import ContentStyled from "./components/Content";

const queryClient = new QueryClient();
export const BACKGROUND_KEYWORDS = ["nature"];

const ContainerStyled = styled.div`
  display: grid;
  grid-template-areas:
    "navbar navbar navbar navbar"
    "main main main main"
    "control . . spotify";
  grid-template-rows: auto 1fr auto;
  z-index: 1;
  position: relative;
  height: 100vh;
  padding: 10px;

  @media (max-width: 1007px) {
    & {
      grid-template-areas:
        "navbar navbar navbar navbar"
        "main main main main"
        "control control control control";
    }
  }
`;

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BackgroundStyled keywords={BACKGROUND_KEYWORDS} />
      <ContainerStyled>
        <NavbarStyled />
        <ContentStyled />
        <SpotifyStyled />
        <ControllerStyled />
      </ContainerStyled>
    </QueryClientProvider>
  );
}

export default App;
