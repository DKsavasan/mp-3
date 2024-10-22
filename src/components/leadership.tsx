import React from "react";
import styled from "styled-components";
import huntsmanLogo from "../assets/huntsman_cancer_foundation_logo.jpeg";
import arlbostonLogo from "../assets/arlboston_logo.jpeg";
import heartLogo from "../assets/american_heart_association_logo.jpeg";

const LeadershipContainer = styled.div`
  h2 {
    text-align: center;
    color: #9c0b0b;
    margin-bottom: 1rem;
  }

  p {
    color: black;
  }

  .edu {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
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

  @media (max-width: 750px) {
    .edu > div {
      width: 100%;
    }
  }
`;

const Leadership: React.FC = () => {
  return (
    <LeadershipContainer>
      <h2>Leadership</h2>
      <div className="edu">
        <div className="high">
          <img src={huntsmanLogo} alt="Huntsman Foundation" />
          <p>Huntsman Cancer Foundation</p>
          <p>Sep 2022</p>
          <p>
            <b>Fundraising Leadership</b>
          </p>
        </div>
        <div className="high2">
          <img src={arlbostonLogo} alt="Animal Rescue Boston" />
          <p>Animal Rescue League of Boston</p>
          <p>Mar 2023</p>
          <p>
            <b>Volunteering Leadership</b>
          </p>
        </div>
        <div className="uni">
          <img src={heartLogo} alt="American Heart Association" />
          <p>American Heart Association</p>
          <p>Apr 2023</p>
          <p>
            <b>Fundraising Leadership</b>
          </p>
        </div>
      </div>
    </LeadershipContainer>
  );
};

export default Leadership;
