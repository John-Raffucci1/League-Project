import React from "react";
import styled from "styled-components";
import { ChampionTile } from "../Components/ChampionTile";
import { IChampion } from "../Types/ChampionTypes";
import championJson from "../../champion.json";
import { ChampionsContext } from "../Contexts/ChampionsContext";
import { SearchBar } from "../Components/SearchBar";

const ChampionsContainer = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  padding-top: 15px;
  row-gap: calc((100vw - (18vw * 5)) / 5);
  background-color: #212222;
`;
const SearchBarContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px 0px;
`;

export const Champions = () => {
  const [value, setValue] = React.useState("");
  const { champions } = React.useContext(ChampionsContext);
  return (
    <>
      <SearchBarContainer>
        <SearchBar
          value={value}
          setValue={setValue}
          placeholder={"Champion Name"}
        />
      </SearchBarContainer>
      <ChampionsContainer>
        {Object.keys(champions)
          .filter((champion) => champion.includes(value))
          .map((key) => {
            return <ChampionTile champion={champions[key]} />;
          })}
      </ChampionsContainer>
    </>
  );
};
