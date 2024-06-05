import { TeamWhereUniqueInput } from "../team/TeamWhereUniqueInput";

export type RankCreateInput = {
  score?: number | null;
  team?: TeamWhereUniqueInput | null;
  winStreak?: number | null;
};
