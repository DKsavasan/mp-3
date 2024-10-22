import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.header`
  background-color: #9c0b0b;
  color: white;
  padding: 1%;

  h1 {
    font-size: calc(24px + 1vw);
  }

  p {
    font-size: calc(16px + 1vw);
  }

  @media (max-width: 750px) {
    text-align: center;
    max-width: 100%;
  }
`;

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <h1>Doruk Savasan</h1>
      <p>My Online Resume</p>
    </HeaderContainer>
  );
};

export default Header;
