import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const ChallengeEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="ChallengingTeam" source="challengingTeam" />
        <TextInput label="OpponentTeam" source="opponentTeam" />
        <TextInput label="status" source="status" />
        <TextInput label="Winner" source="winner" />
      </SimpleForm>
    </Edit>
  );
};
