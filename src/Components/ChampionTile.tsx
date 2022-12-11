import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { IChampion } from "../Types/ChampionTypes";

export const ChampionTileWidth = "18vw";

const RandomBox = styled.div`
  width: 90%;
  transition: width 0.25s;
`;

const ChampionImage = styled.img`
  width: ${ChampionTileWidth};
  transition: border-radius 0.25s;
`;

const ChampionName = styled.div`
  display: flex;
  align-items: flex-start;
  text-align: left;
  justify-content: center;
  width: ${ChampionTileWidth};
  background-color: #531010;
  color: white;
  font-size: 30px;
  font-family: GoodFont;
  transition: text-align 2s;
`;

const ChampionTileContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0px;
  overflow: hidden;
  :hover {
    opacity: 0.75;
    border-radius: 15px;
  }
  &:hover ${RandomBox} {
    width: 85%;
  }
  &:hover ${ChampionImage} {
    border-radius: 20px 20px 0px 0px;
  }
`;

interface IChampionTileProps {
  champion: IChampion;
}

export const ChampionTile = ({ champion: { id } }: IChampionTileProps) => {
  return (
    <Link style={{ textDecoration: "none" }} to={`/champions/${id}`}>
      <ChampionTileContainer>
        <ChampionImage src={`/images/champion/tiles/${id}_0.jpg`} />
        <ChampionName>
          <RandomBox>{id}</RandomBox>
        </ChampionName>
      </ChampionTileContainer>
    </Link>
  );
};
