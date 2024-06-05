import { RankCreateNestedManyWithoutTeamsInput } from "./RankCreateNestedManyWithoutTeamsInput";
import { SportWhereUniqueInput } from "../sport/SportWhereUniqueInput";
import { UserCreateNestedManyWithoutTeamsInput } from "./UserCreateNestedManyWithoutTeamsInput";

export type TeamCreateInput = {
  admin?: string | null;
  name?: string | null;
  ranks?: RankCreateNestedManyWithoutTeamsInput;
  sport?: SportWhereUniqueInput | null;
  users?: UserCreateNestedManyWithoutTeamsInput;
};
