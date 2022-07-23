import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ItemList } from "../Pages/ItemList";

const ItemGridStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ItemImage = styled.img`
  width: calc((70vw / 13) - 10px - (15px));
  border: solid 1px #d0a85c;
  padding: 5px;
`;

export const ItemGrid = ({ id }: any) => {
  return (
    <Link style={{ textDecoration: "none" }} to={`/item_list/${id}`}>
      <ItemGridStyle>
        <ItemImage src={`/item/${id}.png`} />
      </ItemGridStyle>
    </Link>
  );
};
