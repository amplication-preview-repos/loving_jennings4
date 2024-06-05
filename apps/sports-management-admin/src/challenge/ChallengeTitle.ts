import { Challenge as TChallenge } from "../api/challenge/Challenge";

export const CHALLENGE_TITLE_FIELD = "challengingTeam";

export const ChallengeTitle = (record: TChallenge): string => {
  return record.challengingTeam?.toString() || String(record.id);
};
