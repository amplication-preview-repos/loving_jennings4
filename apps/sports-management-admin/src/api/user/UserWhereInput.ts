import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { TeamWhereUniqueInput } from "../team/TeamWhereUniqueInput";

export type UserWhereInput = {
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  isPlayer?: BooleanNullableFilter;
  lastName?: StringNullableFilter;
  team?: TeamWhereUniqueInput;
  typeField?: StringNullableFilter;
  username?: StringFilter;
};
