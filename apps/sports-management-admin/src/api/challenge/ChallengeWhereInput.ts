import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type ChallengeWhereInput = {
  challengingTeam?: StringNullableFilter;
  id?: StringFilter;
  opponentTeam?: StringNullableFilter;
  status?: StringNullableFilter;
  winner?: StringNullableFilter;
};
