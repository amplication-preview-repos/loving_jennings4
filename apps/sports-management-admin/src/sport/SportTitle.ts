import { Sport as TSport } from "../api/sport/Sport";

export const SPORT_TITLE_FIELD = "name";

export const SportTitle = (record: TSport): string => {
  return record.name?.toString() || String(record.id);
};
