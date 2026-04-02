import "../src/scss/App.scss";

import { Route, Routes } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import UsersPage from "./pages/usersPage/UsersPage";
import EditUserPage from "./pages/editUserPage/EditUserPage";
import { useInitUsers } from "./hooks/users/usersQuery";

function App() {
  const { isLoading, error } = useInitUsers();

  if (isLoading) {
    return <h1>Loading</h1>;
  }

  if (error) {
    return <h1>Error</h1>;
  }

  if (!isLoading && !error) {
    return (
      <>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<UsersPage />} />
            <Route path="/edit/:id" element={<EditUserPage />} />
          </Route>
        </Routes>
      </>
    );
  }

  return null;
}

export default App;
