import React from "react";
import styled from "styled-components";

const SliderContainer = styled.div`
  width: 400px;
  height: 10px;
  padding: 10px 0;
  cursor: pointer;
`;

const SliderButton = styled.div<{ x: number }>`
  height: 25px;
  width: 25px;
  background-color: #d0a85c;
  border-radius: 50%;
  position: absolute;
  left: ${(props) => props.x}px;
  transform: translateX(-50%);
  pointer-events: none;
`;

const SliderBackground = styled.div`
  width: 400px;
  height: 10px;
  background-color: white;
  border: solid 1px black;
  border-radius: 15px;
  align-items: center;
  display: flex;
  position: relative;
`;

interface IProps {
  onChange: (percentage: number) => void;
}

export const Slider = ({ onChange }: IProps) => {
  const [x, setX] = React.useState(0);
  const [dragging, setDragging] = React.useState(false);
  const handleUpdate = (e: React.MouseEvent) => {
    setX(e.nativeEvent.offsetX);
    onChange(
      parseFloat(
        (e.nativeEvent.offsetX / (e.target as any).clientWidth).toFixed(2)
      )
    );
  };
  return (
    <SliderContainer
      onClick={(e) => {
        handleUpdate(e);
      }}
      onMouseDown={() => setDragging(true)}
      onMouseUp={() => setDragging(false)}
      onMouseMove={(e) => {
        if (dragging) {
          handleUpdate(e);
        }
      }}
    >
      <SliderBackground>
        <SliderButton
          onClick={(e) => e.stopPropagation()}
          onMouseMove={(e) => e.stopPropagation()}
          x={x}
        />
      </SliderBackground>
    </SliderContainer>
  );
};
