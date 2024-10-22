import React from "react";

interface DisplayProps {
  result: number | string;
}

const Display: React.FC<DisplayProps> = ({ result }) => {
  return (
    <h3
      id="output"
      style={{
        color: typeof result === "number" && result < 0 ? "red" : "black",
      }}
    >
      {result}
    </h3>
  );
};

export default Display;
