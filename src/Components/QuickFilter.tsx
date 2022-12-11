import React from "react";
import styled, { css } from "styled-components";

const FilterStyle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 15px;
  padding: 15px;
`;

const FilterButton = styled.div<{
  isSelected: boolean;
}>`
  color: #d0a85c;
  border: solid 3px #d0a85c;
  padding: 10px 30px;
  border-radius: 30px;
  cursor: pointer;
  user-select: none;
  ${(props) =>
    props.isSelected &&
    css`
      background-color: #d0a85c;
      color: black;
      cursor: default;
    `}
`;

interface IProps {
  selectedFilter: string;
  filters: string[];
  setSelectedFilter: React.Dispatch<string>;
}

export const QuickFilter = (props: IProps) => {
  const setSelectedFilter = props.setSelectedFilter;
  const selectedFilter = props.selectedFilter;
  const filters = props.filters;
  return (
    <FilterStyle>
      {filters.map((filter) => {
        return (
          <FilterButton
            onClick={() => setSelectedFilter(filter)}
            isSelected={selectedFilter === filter}
          >
            {filter}
          </FilterButton>
        );
      })}
    </FilterStyle>
  );
};
