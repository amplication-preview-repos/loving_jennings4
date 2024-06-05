import { Team } from "../team/Team";

export type Sport = {
  createdAt: Date;
  id: string;
  isMultiplayer: boolean | null;
  name: string | null;
  teams?: Array<Team>;
  updatedAt: Date;
};
