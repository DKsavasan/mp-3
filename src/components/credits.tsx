import React from "react";
import styled from "styled-components";
import CreditsImage from "../assets/credits.jpg";

const CreditsContainer = styled.div`
  padding: 2rem;
  text-align: center;

  img {
    max-width: 30%;
    margin: auto;
    margin-top: 2rem;
  }

  @media (max-width: 750px) {
    img {
      max-width: 100%;
    }
  }
`;

const Credits: React.FC = () => {
  return (
    <CreditsContainer>
      <h1>Credits</h1>
      <p>All rights reserved by Doruk Savasan</p>
      <p>If you have any inquiries, please contact me!</p>
      <img src={CreditsImage} alt="Credits Icon" />
    </CreditsContainer>
  );
};

export default Credits;
