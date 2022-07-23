import React from "react";
import styled from "styled-components";
import { useState } from "react";
import itemJson from "../../item.json";
import { ItemGrid } from "../Components/ItemGrid";
import { QuickFilter } from "../Components/QuickFilter";
import { getFormatedFilter } from "../utils";
import { format } from "path";
import { IItem } from "../Types/ItemTypes";

const ItemListStyle = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: repeat(13, 1fr);
  padding-top: 15px;
  background-color: #212222;
  gap: 15px;
`;

export const ItemList = () => {
  const [selectedFilter, setSelectedFilter] = React.useState("All");
  const formatedFilter = getFormatedFilter(selectedFilter);
  const itemInfo = itemJson.data;
  return (
    <>
      <QuickFilter
        selectedFilter={selectedFilter}
        setSelectedFilter={setSelectedFilter}
        filters={["ARAM", "Summoners Rift", "All"]}
      />
      <ItemListStyle>
        {Object.keys(itemInfo)
          .filter((key) => {
            const item: IItem = itemInfo[key];
            const maps = item.maps;
            return (
              (maps[formatedFilter] || formatedFilter === "All") &&
              item.gold.purchasable
            );
          })
          .map((key) => {
            return <ItemGrid id={key} />;
          })}
      </ItemListStyle>
    </>
  );
};
