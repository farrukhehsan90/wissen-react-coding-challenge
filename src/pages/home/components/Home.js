import React from "react";
import Navbar from "../../../components/navbar/Navbar";
import Table from "../../../components/Table/Table";

export default function Home({ handleLogOut, users }) {
  return (
    <div>
      <Navbar handleLogOut={handleLogOut} />
      <Table users={users} />
    </div>
  );
}
