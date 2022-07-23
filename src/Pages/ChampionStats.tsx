import React, { useEffect } from "react";
import styled, { css } from "styled-components";
import { useParams } from "react-router";
import { ChampionsContext } from "../Contexts/ChampionsContext";
import { IChampionStats, ISpell } from "../Types/ChampionTypes";
import { getFormatedKey } from "../utils";
import { Slider } from "../Components/Slider";
import championFullJson from "../../championFull.json";

const ChampionStatsStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  position: relative;
  overflow: hidden;
`;

const BackgroundImage = styled.img`
  width: 100%;
  filter: blur(8px);
  position: absolute;
  top: 0;
  z-index: 0;
`;

const ChampionImage = styled.img``;

const ChampionStatsBlock = styled.div`
  display: grid;
  color: white;
  padding: 10px;
`;

const ChampionInfo = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  color: white;
  width: min-content;
  z-index: 1;
  margin-top: 100px;
  margin-bottom: 100px;
  position: relative;
`;

const ChampionStatsInnerContainer = styled.div`
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }
  z-index: 1;
`;

const ChampionInfoBox = styled.div`
  margin-top: -200px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 100px;
  background: linear-gradient(
    rgba(0, 9, 19, 0),
    rgba(0, 9, 19, 0.7) 5%,
    rgba(0, 9, 19, 1) 10%
  );
  height: 1500px;
  position: relative;
  padding-top: 100px;
`;

const ChampionName = styled.div`
  left: 50%;
  transform: translate(-50%, -50%);
  top: 0;
  font-size: 50px;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  font-family: GoodFont;
`;

const ChampionBlurbStyle = styled.div`
  font-size: 25px;
  width: 50%;
  letter-spacing: -0.03em;
`;
const ChampionStatBlockStyle = styled.div`
  align-items: right;
  justify-content: space-between;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  font-size: 25px;
`;

const ChampionLevel = styled.div`
  font-size: 25px;
`;

const ChampionAbilities = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 25px;
`;

const ChampionSpellImage = styled.img<{ isSelected: boolean }>`
  transition: all 0.25s;
  filter: grayscale(1);
  ${(props) =>
    props.isSelected &&
    css`
      filter: grayscale(0);
      /* transform: translateY(-15px); */
      /* border: solid 3px #d0a85c; */
      /* border-radius: 10px; */
    `};
  :hover {
    transform: translateY(-8px);
  }
`;

const ChampionPassiveContainer = styled.div``;

const ChampionAbilityInfoContainer = styled.div<{ isSelected: boolean }>`
  opacity: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  animation: ease-in 1s animate-in;
  ${(props) =>
    props.isSelected &&
    css`
      opacity: 1;
      border: solid 5px #d0a85c;
      padding: 10px;
      border-radius: 15px;
      font-size: 25px;
    `};
  @keyframes animate-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes animate-out {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;

const ChampionSpellName = styled.div``;

const ChampionSpellDescription = styled.div`
  max-width: 500px;
  letter-spacing: -0.03em;
`;

const ChampionDescription = (props) => {
  useEffect(() => {
    console.log("rerender");
  }, []);
  return (
    <ChampionAbilityInfoContainer
      isSelected={props.selectedSpell !== ""}
      key={props.description.slice(0 - 5)}
    >
      <ChampionSpellName>
        <i>{props.selectedSpell}</i>
      </ChampionSpellName>
      <ChampionSpellDescription
        dangerouslySetInnerHTML={{ __html: props.description }}
      />
    </ChampionAbilityInfoContainer>
  );
};

export const ChampionStats = (props: any) => {
  const params = useParams();

  const { champions } = React.useContext(ChampionsContext);
  const [championLevel, setChampionLevel] = React.useState(1);
  const [championSkinId, setChampionSkinId] = React.useState(0);
  const [selectedSpell, setSelectedSpell] = React.useState("");
  const [description, setDescription] = React.useState("");

  const championId = params.championId || "";
  const { blurb, stats, name, title } = champions[championId];
  const fullChampionData = championFullJson.data[championId];
  const championAbilities = fullChampionData.spells;

  const championSkinSetter = () => {};

  return (
    <ChampionStatsStyle>
      <BackgroundImage
        src={`/images/champion/splash/${championId}_0.jpg`}
      ></BackgroundImage>
      <ChampionStatsInnerContainer>
        <ChampionInfo>
          <ChampionImage
            src={`/images/champion/splash/${championId}_0.jpg`}
          ></ChampionImage>
          <ChampionInfoBox>
            <ChampionName>
              <div>{name.toUpperCase()}</div> <div>{title.toUpperCase()}</div>
            </ChampionName>
            <ChampionBlurbStyle>{fullChampionData.lore}</ChampionBlurbStyle>
            <ChampionLevel> Level: {championLevel}</ChampionLevel>
            <Slider
              onChange={(percentage) => {
                setChampionLevel(Math.ceil(percentage * 18) || 1);
              }}
            />
            <ChampionStatBlockStyle>
              {Object.keys(stats)
                .filter((stat) => !stat.includes("perlevel"))
                .map((key) => {
                  return (
                    <ChampionStatsBlock>
                      {getFormatedKey(key, championLevel - 1, stats)}
                    </ChampionStatsBlock>
                  );
                })}
            </ChampionStatBlockStyle>
            <ChampionAbilities>
              <ChampionPassiveContainer>
                <ChampionSpellImage
                  isSelected={fullChampionData.passive.name === selectedSpell}
                  onClick={() => {
                    setSelectedSpell(fullChampionData.passive.name);
                    setDescription(fullChampionData.passive.description);
                  }}
                  src={`/images/passive/${fullChampionData.passive.image.full}`}
                ></ChampionSpellImage>
              </ChampionPassiveContainer>
              {championAbilities.map((spell: ISpell) => {
                return (
                  <div>
                    <ChampionSpellImage
                      isSelected={spell.name === selectedSpell}
                      onClick={() => {
                        setDescription(spell.description);
                        setSelectedSpell(spell.name);
                      }}
                      src={`/images/spell/${spell.image.full}`}
                    ></ChampionSpellImage>
                  </div>
                );
              })}
            </ChampionAbilities>
            <ChampionDescription
              description={description}
              selectedSpell={selectedSpell}
            />
          </ChampionInfoBox>
        </ChampionInfo>
      </ChampionStatsInnerContainer>
    </ChampionStatsStyle>
  );
};
