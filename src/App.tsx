import React from "react";
import UserTable from "./Components/UserTable/UserTable";
import NavBar from "./Components/Nav/Navbar";

const App: React.FC = () => {
  return (
    <>
      <NavBar />
      <div style={{ padding: 20 }}>
        <h2>Liste des utilisateurs</h2>
        <UserTable />
      </div>
    </>
  );
};

export default App;
