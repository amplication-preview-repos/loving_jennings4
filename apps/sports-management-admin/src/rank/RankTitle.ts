import { Rank as TRank } from "../api/rank/Rank";

export const RANK_TITLE_FIELD = "id";

export const RankTitle = (record: TRank): string => {
  return record.id?.toString() || String(record.id);
};
