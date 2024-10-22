import React from "react";

interface NumberInputProps {
  value: number | string;
  onChange: (value: string) => void;
  placeholder: string;
}

const NumberInput: React.FC<NumberInputProps> = ({
  value,
  onChange,
  placeholder,
}) => {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
    />
  );
};

export default NumberInput;
