import React from "react";
import { IChampion } from "../Types/ChampionTypes";
import championJson from "../../champion.json";

export const ChampionsContext = React.createContext<IChampionsContext>({
  champions: {},
  setChampions: () => {},
});

export interface IChampionData {
  [x: string]: IChampion;
}

export interface IChampionsContext {
  champions: IChampionData;
  setChampions: React.Dispatch<IChampionData>;
}

export const UseChampionsContext = ({
  children,
}: {
  children: React.ReactElement;
}) => {
  const mappedChampionJson: {
    [x: string]: IChampion;
  } = championJson.data;
  const [champions, setChampions] =
    React.useState<IChampionData>(mappedChampionJson);

  return (
    <ChampionsContext.Provider
      value={{
        champions,
        setChampions,
      }}
    >
      {children}
    </ChampionsContext.Provider>
  );
};
