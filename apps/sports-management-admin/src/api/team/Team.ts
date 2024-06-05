import { Rank } from "../rank/Rank";
import { Sport } from "../sport/Sport";
import { User } from "../user/User";

export type Team = {
  admin: string | null;
  createdAt: Date;
  id: string;
  name: string | null;
  ranks?: Array<Rank>;
  sport?: Sport | null;
  updatedAt: Date;
  users?: Array<User>;
};
