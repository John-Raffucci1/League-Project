import React from "react";
import styled from "styled-components";

const SearchBarStyle = styled.div`
  width: 50px;
`;

interface IProps {
  value: string;
  setValue: React.Dispatch<string>;
  placeholder?: string;
}

export const SearchBar = ({
  value,
  setValue,
  placeholder = "Search Input",
}: IProps) => {
  return (
    <SearchBarStyle>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </SearchBarStyle>
  );
};
