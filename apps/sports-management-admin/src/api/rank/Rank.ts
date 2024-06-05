import { Team } from "../team/Team";

export type Rank = {
  createdAt: Date;
  id: string;
  score: number | null;
  team?: Team | null;
  updatedAt: Date;
  winStreak: number | null;
};
