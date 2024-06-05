import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { RankTitle } from "../rank/RankTitle";
import { SportTitle } from "../sport/SportTitle";
import { UserTitle } from "../user/UserTitle";

export const TeamEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Admin" source="admin" />
        <TextInput label="name" source="name" />
        <ReferenceArrayInput
          source="ranks"
          reference="Rank"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={RankTitle} />
        </ReferenceArrayInput>
        <ReferenceInput source="sport.id" reference="Sport" label="Sport">
          <SelectInput optionText={SportTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="users"
          reference="User"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={UserTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
