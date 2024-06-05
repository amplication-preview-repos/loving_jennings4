import { TeamCreateNestedManyWithoutSportsInput } from "./TeamCreateNestedManyWithoutSportsInput";

export type SportCreateInput = {
  isMultiplayer?: boolean | null;
  name?: string | null;
  teams?: TeamCreateNestedManyWithoutSportsInput;
};
