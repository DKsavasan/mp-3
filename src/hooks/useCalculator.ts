import { useState, useCallback } from "react";

export const useCalculator = () => {
  const [num1, setNum1] = useState<number | string>("");
  const [num2, setNum2] = useState<number | string>("");
  const [result, setResult] = useState<number | string>("");

  const handleInput1 = useCallback((value: string) => {
    setNum1(parseFloat(value));
  }, []);

  const handleInput2 = useCallback((value: string) => {
    setNum2(parseFloat(value));
  }, []);

  const add = useCallback(() => {
    setResult(Number(num1) + Number(num2));
  }, [num1, num2]);

  const subtract = useCallback(() => {
    setResult(Number(num1) - Number(num2));
  }, [num1, num2]);

  const multiply = useCallback(() => {
    setResult(Number(num1) * Number(num2));
  }, [num1, num2]);

  const divide = useCallback(() => {
    if (Number(num2) === 0) {
      setResult("Error! Division by zero.");
    } else {
      setResult(Number(num1) / Number(num2));
    }
  }, [num1, num2]);

  const power = useCallback(() => {
    setResult(Math.pow(Number(num1), Number(num2)));
  }, [num1, num2]);

  const clear = useCallback(() => {
    setNum1("");
    setNum2("");
    setResult("");
  }, []);

  return {
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
  };
};
