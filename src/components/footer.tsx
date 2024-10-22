import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  background-color: #9c0b0b;
  color: white;
  padding: 1rem;

  a {
    color: white;
    text-decoration: underline;
  }
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <p>
        All Rights Reserved by Doruk Savasan <a href="#">Credits</a> &#169;
      </p>
    </FooterContainer>
  );
};

export default Footer;
