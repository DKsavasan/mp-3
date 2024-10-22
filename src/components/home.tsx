import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import ProfileImage from "../assets/IMG_2716.png";

const HomeContainer = styled.div`
  h2 {
    text-align: center;
    color: #9c0b0b;
    margin-bottom: 1rem;
  }

  .description {
    .img-text {
      display: flex;
      align-items: center;
      margin: 5%;

      img {
        max-width: 30%;
      }

      .next {
        padding: 2%;
      }
    }

    p {
      margin: 5% 0;
    }
  }

  @media (max-width: 750px) {
    .description {
      .img-text {
        display: block;

        img {
          max-width: 100%;
        }
      }

      p {
        margin: 5% 0;
        text-align: center;
      }
    }
  }
`;

const Home: React.FC = () => {
  return (
    <HomeContainer>
      <h2>Home</h2>
      <div className="description">
        <div className="img-text">
          <img src={ProfileImage} alt="Profile" />
          <p className="next">
            My name is Doruk Savasan, and I am a Computer Science undergraduate
            at Boston University.
          </p>
        </div>
        <p>
          Welcome to my website, here you will find my{" "}
          <Link to="/education">
            <b>Educational</b>
          </Link>{" "}
          and my{" "}
          <Link to="/experiences">
            <b>Employment</b>
          </Link>{" "}
          history; as well as other information that might be of interest to
          you.
        </p>
      </div>
    </HomeContainer>
  );
};

export default Home;
