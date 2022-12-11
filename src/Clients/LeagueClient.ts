import { IServerStatusResponse, Region } from "../Types/LeaugeClient";

export const GetServerStatus = async (
  region: Region
): Promise<any> => {
  const request = await fetch(
    getURLFromRegion("lol/status/v4/platform-data", region),
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
  return `https://${region}.api.riotgames.com/${path}?api_key=RGAPI-38f43661-5386-411d-9e31-2ee038b6deb7`;
};
