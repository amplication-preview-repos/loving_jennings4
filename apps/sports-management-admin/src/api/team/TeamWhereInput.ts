import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { RankListRelationFilter } from "../rank/RankListRelationFilter";
import { SportWhereUniqueInput } from "../sport/SportWhereUniqueInput";
import { UserListRelationFilter } from "../user/UserListRelationFilter";

export type TeamWhereInput = {
  admin?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  ranks?: RankListRelationFilter;
  sport?: SportWhereUniqueInput;
  users?: UserListRelationFilter;
};
