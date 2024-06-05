import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { TeamList } from "./team/TeamList";
import { TeamCreate } from "./team/TeamCreate";
import { TeamEdit } from "./team/TeamEdit";
import { TeamShow } from "./team/TeamShow";
import { SportList } from "./sport/SportList";
import { SportCreate } from "./sport/SportCreate";
import { SportEdit } from "./sport/SportEdit";
import { SportShow } from "./sport/SportShow";
import { ChallengeList } from "./challenge/ChallengeList";
import { ChallengeCreate } from "./challenge/ChallengeCreate";
import { ChallengeEdit } from "./challenge/ChallengeEdit";
import { ChallengeShow } from "./challenge/ChallengeShow";
import { RankList } from "./rank/RankList";
import { RankCreate } from "./rank/RankCreate";
import { RankEdit } from "./rank/RankEdit";
import { RankShow } from "./rank/RankShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"Sports Management"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Team"
          list={TeamList}
          edit={TeamEdit}
          create={TeamCreate}
          show={TeamShow}
        />
        <Resource
          name="Sport"
          list={SportList}
          edit={SportEdit}
          create={SportCreate}
          show={SportShow}
        />
        <Resource
          name="Challenge"
          list={ChallengeList}
          edit={ChallengeEdit}
          create={ChallengeCreate}
          show={ChallengeShow}
        />
        <Resource
          name="Rank"
          list={RankList}
          edit={RankEdit}
          create={RankCreate}
          show={RankShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
