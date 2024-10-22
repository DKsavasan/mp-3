import React from "react";
import styled from "styled-components";

const ExperienceContainer = styled.div`
  h2 {
    text-align: center;
    color: #9c0b0b;
    margin-bottom: 1rem;
  }

  p {
    color: black;
  }

  li {
    color: black;
  }

  .experience {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .job {
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    padding: 1rem;
  }

  .job h3 {
    color: #9c0b0b;
    margin-bottom: 0.5rem;
  }

  .job .location,
  .job .position,
  .job .date {
    font-style: italic;
    margin-bottom: 0.25rem;
  }

  .job ul {
    margin-top: 0.5rem;
    padding-left: 1.5rem;
  }

  @media (max-width: 750px) {
    main {
      padding: 3%;
    }
  }
`;

const Experience: React.FC = () => {
  return (
    <ExperienceContainer>
      <h2>Experiences</h2>
      <div className="experience">
        <div className="job">
          <h3>MadByte Games</h3>
          <p className="location">Istanbul, Turkey</p>
          <p className="position">Software Engineer Intern</p>
          <p className="date">Jun 2024 – Aug 2024</p>
          <ul>
            <li>
              Built the front and backend of a referral system in ASP.NET Core
              for a game with over 33 million accounts created
            </li>
            <li>
              Engineered a reward system that grants users prizes for verifying
              their phone numbers and emails, fostering account security
            </li>
            <li>
              Resolved captcha and cookies errors through intensive unit
              testing, enhancing system reliability and decreasing vulnerability
            </li>
          </ul>
        </div>
        <div className="job">
          <h3>Boston University School of Medicine</h3>
          <p className="location">Boston, MA</p>
          <p className="position">Web Developer</p>
          <p className="date">Feb 2024 - present</p>
          <ul>
            <li>
              Directing the development and maintenance of 4 department-specific
              websites, enhancing user experience and functionality
            </li>
            <li>
              Serving as the primary contact for all web-related requests,
              achieving a 50% faster completion rate by strategic management
            </li>
          </ul>
        </div>
      </div>
    </ExperienceContainer>
  );
};

export default Experience;
