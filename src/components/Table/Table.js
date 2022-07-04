import React from "react";
import { Table as BootstrapTable } from "react-bootstrap";

export default function Table({ users }) {
  return (
    <BootstrapTable striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Year</th>
          <th>Color</th>
          <th>Pantone Value</th>
        </tr>
      </thead>
      <tbody>
        {users?.map((value, key) => {
          return (
            <tr key={key}>
              <td>{value.id}</td>
              <td>{value.name}</td>
              <td>{value.year}</td>
              <td>{value.color}</td>
              <td>{value.pantone_value}</td>
            </tr>
          );
        })}
      </tbody>
    </BootstrapTable>
  );
}
