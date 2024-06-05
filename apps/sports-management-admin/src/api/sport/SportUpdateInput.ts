import { TeamUpdateManyWithoutSportsInput } from "./TeamUpdateManyWithoutSportsInput";

export type SportUpdateInput = {
  isMultiplayer?: boolean | null;
  name?: string | null;
  teams?: TeamUpdateManyWithoutSportsInput;
};
