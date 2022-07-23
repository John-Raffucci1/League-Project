import React from "react";

interface IProps {
  text: string;
}

export const TestComponent = ({ text }: IProps) => {
  return <div>{text}</div>;
};
