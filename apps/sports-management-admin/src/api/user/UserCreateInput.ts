import { InputJsonValue } from "../../types";
import { TeamWhereUniqueInput } from "../team/TeamWhereUniqueInput";

export type UserCreateInput = {
  email?: string | null;
  firstName?: string | null;
  isPlayer?: boolean | null;
  lastName?: string | null;
  password: string;
  roles: InputJsonValue;
  team?: TeamWhereUniqueInput | null;
  typeField?: string | null;
  username: string;
};
