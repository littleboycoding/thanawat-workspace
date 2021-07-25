import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useQuery } from "react-query";
import styled from "styled-components/macro";
import { getGithubUser } from "../api";
import { setIcon } from "../utils/favicon.js";
import {
  faFacebook,
  faGithub,
  faMedium,
} from "@fortawesome/free-brands-svg-icons";
import { useEffect } from "react";

const Navbar = styled.div`
  grid-area: navbar;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;

  big {
    font-weight: 900;
  }

  .avatar {
    border-radius: 50%;
    height: 32px;
  }

  a {
    color: white;
  }

  a:hover,
  a:active {
    color: #777;
  }
`;

function NavbarStyled() {
  const { error, data, isLoading, isError } = useQuery(
    ["user", "littleboycoding"],
    getGithubUser
  );

  useEffect(() => {
    if (data?.avatar_url) {
      setIcon(data.avatar_url);
    }
  }, [data]);

  if (isLoading) return null;
  if (isError) return error;

  return (
    <Navbar>
      <img src={data.avatar_url} alt="avatar" className="avatar" />
      <big>{data.name}</big>
      <span>Happy developer</span>
      <a target="_blank" href="https://github.com/littleboycoding">
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <a target="_blank" href="https://facebook.com/littleboycoding">
        <FontAwesomeIcon icon={faFacebook} />
      </a>
      <a target="_blank" href="https://littleboycoding.medium.com/">
        <FontAwesomeIcon icon={faMedium} />
      </a>
    </Navbar>
  );
}

export default NavbarStyled;
