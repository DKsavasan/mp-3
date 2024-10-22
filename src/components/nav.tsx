import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NavContainer = styled.nav`
  max-width: 30%;
  background-color: #d2691e;
  padding: 1rem;

  ul {
    list-style: none;
  }

  li {
    background-color: #fc9619;
    margin-bottom: 0.5rem;
  }

  a {
    text-decoration: none;
    color: white;
    font-size: calc(14px + 0.5vw);
    display: block;
    padding: 0.5rem;
  }

  @media (max-width: 750px) {
    max-width: 100%;

    ul {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }

    li {
      margin: 0.25rem;
    }

    a {
      font-size: calc(10px + 1vw);
      padding: 0.25rem 0.5rem;
    }
  }
`;

const Nav: React.FC = () => {
  return (
    <NavContainer>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/education">Education</Link>
        </li>
        <li>
          <Link to="/experiences">Experiences</Link>
        </li>
        <li>
          <Link to="/certifications">Certifications</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/leadership">Leadership</Link>
        </li>
      </ul>
    </NavContainer>
  );
};

export default Nav;
