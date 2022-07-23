import { IServerStatusResponse, Region } from "../Types/LeaugeClient";

export const GetServerStatus = async (
  region: Region
): Promise<IServerStatusResponse> => {
  const request = await fetch(
    getURLFromRegion("lol/status/v3/shard-data", region),
    {
      headers: {
        "Content-Type": "application/json",
      },
      method: "GET",
    }
  );
  const response = await request.json();
  return response;
};

const getURLFromRegion = (path: string, region: Region) => {
  return `https://${region}.api.riotgames.com/${path}?api_key=RGAPI-580ad86b-b9a7-4189-98d6-6278700c52a9`;
};
