import { SportWhereUniqueInput } from "./SportWhereUniqueInput";
import { SportUpdateInput } from "./SportUpdateInput";

export type UpdateSportArgs = {
  where: SportWhereUniqueInput;
  data: SportUpdateInput;
};
