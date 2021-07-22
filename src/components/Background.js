import styled from "styled-components/macro";
import { getRandomUnsplashPhoto } from "../api";
import { fadeIn } from "../animation/fade";
import { useQuery } from "react-query";

const Background = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: fixed;
  z-index: 0;
  animation: ${fadeIn} 0.7s;

  filter: brightness(0.4) contrast(70%);
`;

export function BackgroundStyled(props) {
  const { data, error, isLoading, isFetching, isError } = useQuery(
    ["background", props.keywords],
    getRandomUnsplashPhoto,
    {
      staleTime: 1000 * 60 * 5,
    }
  );

  if (isLoading || isFetching) return null;
  if (isError) return error;

  return <Background src={data} alt="background" />;
}

export default BackgroundStyled;
