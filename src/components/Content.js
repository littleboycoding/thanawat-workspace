import styled from "styled-components/macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faMedium } from "@fortawesome/free-brands-svg-icons";
import { faComment } from "@fortawesome/free-solid-svg-icons";

const Content = styled.main`
  grid-area: main;
  align-self: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 0.67em;

  @media (max-width: 640px) {
    & {
      justify-content: flex-start;
    }
  }

  a {
    text-decoration: none;
    color: white;
  }
`;

const Card = styled.div`
  font-weight: bold;

  .title {
    font-weight: 900;
    font-size: 2em;
    display: block;
    margin-bottom: 0.67em;
  }

  padding: 0.67em;
  border-radius: 5px;
  transition: all 0.1s;

  &:hover {
    background-color: rgba(255, 255, 255, 0.9);
    color: #555;
    cursor: pointer;
    transition: all 0.1s;
  }
`;

function ContentStyled() {
  return (
    <Content>
      <a
        href="https://littleboycoding.medium.com/"
        target="_blank"
        rel="noreferrer"
      >
        <Card>
          <span className="title">
            <FontAwesomeIcon icon={faMedium} /> What I do
          </span>
          <span>I develop web and stuff, Blog writer at Medium</span>
        </Card>
      </a>
      <a
        href="https://github.com/littleboycoding"
        target="_blank"
        rel="noreferrer"
      >
        <Card>
          <span className="title">
            <FontAwesomeIcon icon={faGithub} /> GitHub
          </span>
          <span>
            Let's build something together
          </span>
        </Card>
      </a>
      <a href="mailto:littleboycoding@gmail.com">
        <Card>
          <span className="title">
            <FontAwesomeIcon icon={faComment} /> Feel like talking ?
          </span>
          <span>littleboycoding@gmail.com</span>
        </Card>
      </a>
    </Content>
  );
}

export default ContentStyled;
