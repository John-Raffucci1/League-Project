import React, { useState } from "react";
import styled from "styled-components";
import { GetServerStatus } from "../Clients/LeagueClient";
import { Region } from "../Types/LeaugeClient";

const TextDiv = styled.div`
  color: white;
`;

const LabelColor = styled.div`
  color: white;
`;

export const ServerStatus = () => {
  const [region, setRegion] = useState<Region>(Region.NA);
  const [serverStatus, setServerStatus] = useState("");
  const getData = async () => {
    const serverStatusResponse = await GetServerStatus(region);
    const currentServerStatus = serverStatusResponse.services.find(
      (item) => item.name === "Game"
    )?.status;
    setServerStatus(currentServerStatus || "");
  };
  return (
    <div>
      <LabelColor>Choose a Region</LabelColor>
      <select
        onChange={(e) => {
          setServerStatus("");
          setRegion(e.target.value as Region);
        }}
        name="region-list"
        id="region-list"
      >
        <option value={Region.NA}>{Region.NA}</option>
        <option value={Region.EUW}>{Region.EUW}</option>
        <option value={Region.EUNE}>{Region.EUNE}</option>
        <option value={Region.BR}>{Region.BR}</option>
      </select>
      <button onClick={getData}>What is the Server Status?</button>
      <TextDiv>
        {region} Status:{serverStatus}
      </TextDiv>
    </div>
  );
};
