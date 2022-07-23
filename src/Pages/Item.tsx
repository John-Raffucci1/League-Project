import React from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { ItemsContext } from "../Contexts/ItemsContext";

const BackgroundImage = styled.div`
  width: 100vw;
  height: 100%;
`;

const ItemContainer = styled.div`
  width: 100vw;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: white;
  gap: 10px;
  z-index: 1;
  :before {
    content: "";
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    background-image: url("/Images/217097.jpg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100%;
    opacity: 0.04;
    z-index: 0;
  }
`;

const ItemStats = styled.div`
  position: relative;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  color: white;
  gap: 10px;
  padding: 30px;
  border: solid 5px #d0a85c;
  border-radius: 15px;
`;

const ItemImg = styled.img`
  width: 100px; ;
`;

const InnerItemContainer = styled.div`
  position: relative;
  display: flex;
  align-items: left;
  justify-content: center;
  flex-direction: column;
`;

const ItemStatsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: column;
  flex-direction: column;
`;

const IntoImgContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  max-width: 500px;
`;

const FromImgContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  overflow-wrap: normal;
`;

const IntoImg = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border: solid 1px #d0a85c;
  padding: 5px;
`;

export const Item = (props: any) => {
  const { items } = React.useContext(ItemsContext);
  const { itemId = "" } = useParams();
  const item = items[itemId];
  const { name, plaintext, into, gold, from } = item;
  return (
    <ItemContainer>
      <FromImgContainer>
        {from?.map((id) => {
          return (
            <Link to={`/item_list/${id}`}>
              <IntoImg>
                <img src={`/item/${id}.png`} />
              </IntoImg>
            </Link>
          );
        })}
      </FromImgContainer>
      <ItemStats>
        <div>
          <div>
            <ItemImg src={`/item/${itemId}.png`} />
          </div>
        </div>
        <InnerItemContainer>
          {name}
          <div
            style={{ maxWidth: "500px" }}
            dangerouslySetInnerHTML={{ __html: item.description }}
          />
          {gold.total}G
        </InnerItemContainer>
      </ItemStats>
      <IntoImgContainer>
        {into?.map((id) => {
          return (
            <Link to={`/item_list/${id}`}>
              <IntoImg>
                <img src={`/item/${id}.png`} />
              </IntoImg>
            </Link>
          );
        })}
      </IntoImgContainer>
    </ItemContainer>
  );
};
