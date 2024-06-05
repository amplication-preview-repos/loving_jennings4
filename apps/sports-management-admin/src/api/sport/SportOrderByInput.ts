import { SortOrder } from "../../util/SortOrder";

export type SportOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  isMultiplayer?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
};
