import styled from "styled-components/macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faSync } from "@fortawesome/free-solid-svg-icons";
import { BACKGROUND_KEYWORDS } from "../App";
import { useQueryClient } from "react-query";

const Controller = styled.div`
  grid-area: control;
  align-self: flex-end;
  display: flex;
  justify-content: flex-start;
  gap: 10px;
  align-items: center;
`;

const Button = styled.div`
  width: 38px;
  height: 38px;
  text-align: center;
  color: #555;
  padding: 10px;
  border-radius: 50%;
  background-color: white;
  user-select: none;
  transition: all 0.1s;

  &:hover {
    cursor: pointer;
    background-color: #999;
    transition: all 0.1s;
  }
`;

function ControllerStyled() {
  const queryClient = useQueryClient();
  const FILTER = ["background", BACKGROUND_KEYWORDS];

  const reloadBackground = () => {
    if (!queryClient.isFetching(FILTER)) queryClient.refetchQueries(FILTER);
  };

  const openBackgroundURL = () => {
    if (!queryClient.isFetching(FILTER))
      window.open(
        queryClient.getQueryData(["background", BACKGROUND_KEYWORDS])
      );
  };

  return (
    <Controller>
      <Button onClick={reloadBackground}>
        <FontAwesomeIcon icon={faSync} />
      </Button>
      <Button onClick={openBackgroundURL}>
        <FontAwesomeIcon icon={faDownload} />
      </Button>
      <span>
        Photos from{" "}
        <a target="_blank" rel="noreferrer" href="https://unsplash.com">
          Unsplash.com
        </a>
      </span>
    </Controller>
  );
}

export default ControllerStyled;
