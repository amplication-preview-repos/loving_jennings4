import { SportWhereInput } from "./SportWhereInput";
import { SportOrderByInput } from "./SportOrderByInput";

export type SportFindManyArgs = {
  where?: SportWhereInput;
  orderBy?: Array<SportOrderByInput>;
  skip?: number;
  take?: number;
};
