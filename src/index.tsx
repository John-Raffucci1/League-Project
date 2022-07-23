import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./Components/Header";
import { Champions } from "./Pages/Champions";
import { Home } from "./Pages/Home";
import { ServerStatus } from "./Pages/ServerStatus";
import { ChampionStats } from "./Pages/ChampionStats";
import { UseChampionsContext } from "./Contexts/ChampionsContext";
import styled from "styled-components";
import { ItemList } from "./Pages/ItemList";
import { UseItemsContext } from "./Contexts/ItemsContext";
import { Item } from "./Pages/Item";

const AppContainer = styled.div`
  background-color: #212222;
  margin-top: 50px;
  height: calc(100vh - 50px);
`;

export const App = () => {
  const ChampionsContext = UseChampionsContext;
  const ItemsContext = UseItemsContext;

  return (
    <AppContainer>
      <ChampionsContext>
        <ItemsContext>
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path={"/"} element={<Home />} />
              <Route path={"/status"} element={<ServerStatus />} />
              <Route path={"/item_list"} element={<ItemList />} />
              <Route path={"/champions"} element={<Champions />} />
              <Route
                path={"/champions/:championId"}
                element={<ChampionStats />}
              />
              <Route path={"/item_list/:itemId"} element={<Item />} />
            </Routes>
          </BrowserRouter>
        </ItemsContext>
      </ChampionsContext>
    </AppContainer>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
