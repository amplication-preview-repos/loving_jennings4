import { JsonValue } from "type-fest";
import { Team } from "../team/Team";

export type User = {
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  isPlayer: boolean | null;
  lastName: string | null;
  roles: JsonValue;
  team?: Team | null;
  typeField: string | null;
  updatedAt: Date;
  username: string;
};
