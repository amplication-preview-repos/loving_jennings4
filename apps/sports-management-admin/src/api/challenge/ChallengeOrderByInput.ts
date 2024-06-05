import { SortOrder } from "../../util/SortOrder";

export type ChallengeOrderByInput = {
  challengingTeam?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  opponentTeam?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
  winner?: SortOrder;
};
