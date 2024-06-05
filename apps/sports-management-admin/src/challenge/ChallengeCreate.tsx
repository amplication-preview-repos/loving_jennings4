import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const ChallengeCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="ChallengingTeam" source="challengingTeam" />
        <TextInput label="OpponentTeam" source="opponentTeam" />
        <TextInput label="status" source="status" />
        <TextInput label="Winner" source="winner" />
      </SimpleForm>
    </Create>
  );
};
