// components/Certifications.tsx
import React from "react";
import styled from "styled-components";
import CodecademyLogo from "../assets/codecademy_logo.jpeg"; // Adjust the path based on your project structure

const CertificationsContainer = styled.div`
  width: 100%; /* Ensure the container takes the full width */
  height: 100%; /* Ensure the container takes the full height */
  background-color: #deb887; /* Match the main background color */

  p {
    color: black;
  }

  h2 {
    text-align: center;
    color: #9c0b0b;
    margin-bottom: 1rem;
  }

  .edu {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;

    > div {
      background-color: white;
      border-radius: 8px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      padding: 1rem;
      margin: 1rem;
      width: calc(33.333% - 2rem);
      text-align: center;

      img {
        max-width: 100%;
        height: 150px;
        object-fit: contain;
        margin-bottom: 1rem;
      }
    }
  }

  @media (max-width: 750px) {
    .edu > div {
      width: 100%;
    }
  }
`;

interface Certification {
  title: string;
  date: string;
  imageSrc: string;
}

const certifications: Certification[] = [
  {
    title: "Learn Intermediate Python 3",
    date: "Jun 2022",
    imageSrc: CodecademyLogo,
  },
  {
    title: "Learn SQL",
    date: "Aug 2023",
    imageSrc: CodecademyLogo,
  },
  {
    title: "Analyze Financial Data with Python 3",
    date: "Aug 2023",
    imageSrc: CodecademyLogo,
  },
  {
    title: "Intro to Cloud Computing",
    date: "Oct 2023",
    imageSrc: CodecademyLogo,
  },
];

const Certifications: React.FC = () => {
  return (
    <CertificationsContainer>
      <h2>Certifications</h2>
      <div className="edu">
        {certifications.map((cert, index) => (
          <div key={index}>
            <img src={cert.imageSrc} alt="Codecademy logo" />
            <p>{cert.title}</p>
            <p>{cert.date}</p>
          </div>
        ))}
      </div>
    </CertificationsContainer>
  );
};

export default Certifications;
