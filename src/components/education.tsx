import sb from "../assets/sb.jpg";
import ise from "../assets/ise.png";
import bu from "../assets/bu.png";
import styled from "styled-components";

const HomeContainer = styled.div`
  h2 {
    text-align: center;
    color: #9c0b0b;
    margin-bottom: 1rem;
  }

  .edu {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    width: 100%;
    padding: 1rem;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  .edu > div {
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    padding: 1rem;
    margin: 1rem;
    width: calc(33.333% - 2rem);
    text-align: center;
  }

  .edu img {
    max-width: 100%;
    height: 150px;
    object-fit: contain;
    margin-bottom: 1rem;
  }

  p {
    color: black;
  }

  @media (max-width: 750px) {
    img {
      max-width: 100%;
    }
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
    .edu > div {
      width: 100%;
    }
  }
`;

const Education: React.FC = () => {
  return (
    <>
      <HomeContainer>
        <h2>Education</h2>
        <div className="edu">
          <div className="high">
            <img src={sb} alt="" />
            <p>Saint Benoit High School</p>
            <p>2016 - 2021</p>
          </div>
          <div className="high2">
            <img src={ise} alt="" />
            <p>International School of Eindhoven</p>
            <p>2019 - 2020</p>
          </div>
          <div className="uni">
            <img src={bu} alt="" />
            <p>Boston University</p>
            <p>2021 - 2025</p>
          </div>
        </div>
      </HomeContainer>
    </>
  );
};

export default Education;
