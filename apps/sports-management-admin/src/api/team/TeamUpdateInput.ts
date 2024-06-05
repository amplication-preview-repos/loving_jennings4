import { RankUpdateManyWithoutTeamsInput } from "./RankUpdateManyWithoutTeamsInput";
import { SportWhereUniqueInput } from "../sport/SportWhereUniqueInput";
import { UserUpdateManyWithoutTeamsInput } from "./UserUpdateManyWithoutTeamsInput";

export type TeamUpdateInput = {
  admin?: string | null;
  name?: string | null;
  ranks?: RankUpdateManyWithoutTeamsInput;
  sport?: SportWhereUniqueInput | null;
  users?: UserUpdateManyWithoutTeamsInput;
};
