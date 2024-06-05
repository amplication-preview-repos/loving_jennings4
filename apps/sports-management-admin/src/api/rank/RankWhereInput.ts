import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { TeamWhereUniqueInput } from "../team/TeamWhereUniqueInput";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type RankWhereInput = {
  id?: StringFilter;
  score?: FloatNullableFilter;
  team?: TeamWhereUniqueInput;
  winStreak?: IntNullableFilter;
};
