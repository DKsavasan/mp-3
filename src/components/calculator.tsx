import React from "react";
import { useCalculator } from "../hooks/useCalculator";
import NumberInput from "./numberInput";
import Button from "./button";
import Display from "./display";

const Calculator: React.FC = () => {
  const {
    num1,
    num2,
    result,
    handleInput1,
    handleInput2,
    add,
    subtract,
    multiply,
    divide,
    power,
    clear,
  } = useCalculator();

  return (
    <div className="calculator">
      <h2>Calculator</h2>
      <NumberInput value={num1} onChange={handleInput1} placeholder="Num 1" />
      <NumberInput value={num2} onChange={handleInput2} placeholder="Num 2" />
      <div className="buttons">
        <Button onClick={add} label="+" />
        <Button onClick={subtract} label="-" />
        <Button onClick={multiply} label="*" />
        <Button onClick={divide} label="/" />
        <Button onClick={power} label="Power" />
        <Button onClick={clear} label="Clear" />
      </div>
      <Display result={result} />
    </div>
  );
};

export default Calculator;
