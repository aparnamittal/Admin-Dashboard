// React Admin
import { Admin, Resource } from "react-admin";

// Provider
import restProvider from "ra-data-simple-rest";
// import simpleRestProvider from 'ra-data-simple-rest';

// Components
import { UserCreate, UserList, UserEdit } from "./components/Users";
// App
function App() {
  return (
    <Admin dataProvider={restProvider("http://localhost:3000")}>

      <Resource
        name="users"
        list={UserList}
        create={UserCreate}
        edit={UserEdit}
      />
    </Admin>
  );
}

export default App;
