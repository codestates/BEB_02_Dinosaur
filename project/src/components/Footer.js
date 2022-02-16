import React from "react";
import styled from "styled-components";
import GitHubIcon from "./imgs/GitHub.png";

const StyledFooter = styled.div`
  width: 100%;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Gitimg = styled.img`
  margin-left: 5px;
  width: 20px;
  height: 20px;
`;

export default function Footer() {
  return (
    <StyledFooter>
      <span> © Created by Team Dinosaur </span>
      <a
        href="https://github.com/codestates/BEB_02_Dinosaur"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Gitimg src={GitHubIcon} />
      </a>
    </StyledFooter>
  );
}
