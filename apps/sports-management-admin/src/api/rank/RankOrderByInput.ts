import { SortOrder } from "../../util/SortOrder";

export type RankOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  score?: SortOrder;
  teamId?: SortOrder;
  updatedAt?: SortOrder;
  winStreak?: SortOrder;
};
