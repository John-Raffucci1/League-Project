export interface IServerStatusResponse {
  name: string;
  slug: string;
  locales: string[];
  hostname: string;
  region_tag: string;
  services: IServer[];
}

interface IServer {
  name: string;
  slug: string;
  status: string;
  incidents: IIncidents[];
}

interface IIncidents {
  id: number;
  active: boolean;
  created_at: string;
  updates: unknown[];
}

export enum Region {
  NA = "NA1",
  EUW = "EUW1",
  EUNE = "EUNE1",
  BR = "BR1",
}
