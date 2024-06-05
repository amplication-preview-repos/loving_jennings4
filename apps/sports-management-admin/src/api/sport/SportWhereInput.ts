import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { TeamListRelationFilter } from "../team/TeamListRelationFilter";

export type SportWhereInput = {
  id?: StringFilter;
  isMultiplayer?: BooleanNullableFilter;
  name?: StringNullableFilter;
  teams?: TeamListRelationFilter;
};
