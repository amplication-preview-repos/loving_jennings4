import { TeamWhereUniqueInput } from "../team/TeamWhereUniqueInput";

export type RankUpdateInput = {
  score?: number | null;
  team?: TeamWhereUniqueInput | null;
  winStreak?: number | null;
};
