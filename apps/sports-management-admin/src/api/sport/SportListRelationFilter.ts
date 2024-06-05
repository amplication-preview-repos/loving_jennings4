import { SportWhereInput } from "./SportWhereInput";

export type SportListRelationFilter = {
  every?: SportWhereInput;
  some?: SportWhereInput;
  none?: SportWhereInput;
};
