import React, { useState, useEffect } from 'react';
import { Table } from 'reactstrap';
import Page from '../../components/Page';
import api from '../../services/api';

export default () => {
  const [professors, setProfessors] = useState([]);

  useEffect(() => {
    api.get('/professor').then((response) => {
      const { data } = response;
      setProfessors(data);
    }).catch((error) => {
      console.log(error);
    });
  }, []);

  return (
    <Page title="Professor">
      Professor
      <Table className="mt-4">
        <thead>
          <tr>
            <th>Name</th>
            <th>CPF</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {professors.map((professor, index) => (
            <tr key={index}>
              <td>{professor.name}</td>
              <td>{professor.cpf}</td>
              <td>Aaa</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Page>
  );
};
