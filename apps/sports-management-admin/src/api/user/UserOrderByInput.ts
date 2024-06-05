import { SortOrder } from "../../util/SortOrder";

export type UserOrderByInput = {
  createdAt?: SortOrder;
  email?: SortOrder;
  firstName?: SortOrder;
  id?: SortOrder;
  isPlayer?: SortOrder;
  lastName?: SortOrder;
  password?: SortOrder;
  roles?: SortOrder;
  teamId?: SortOrder;
  typeField?: SortOrder;
  updatedAt?: SortOrder;
  username?: SortOrder;
};
