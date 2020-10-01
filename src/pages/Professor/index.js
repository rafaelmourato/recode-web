import React, { useState, useEffect } from 'react';
import { Table, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import Page from '../../components/Page';
import api from '../../services/api';

export default ({ history }) => {
  const [professors, setProfessors] = useState([]);

  useEffect(() => {
    api.get('/professor').then((response) => {
      const { data } = response;
      setProfessors(data);
    }).catch((error) => {
      console.log(error);
    });
  }, []);

  const onDelete = () => {
    // implemente a lógica para remover um professor
  };

  return (
    <Page title="Professor">
      <Link className="btn btn-primary" to="/professor/new">Create Professor</Link>
      <Table className="mt-4">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>CPF</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {professors.map((professor, index) => (
            <tr key={index}>
              <td>{professor.id}</td>
              <td><Link to={`/professor/${professor.id}`}>{professor.name}</Link></td>
              <td>{professor.cpf}</td>
              <td>
                <Button onClick={() => history.push(`/professor/${professor.id}`)} className="mr-2">Edit</Button>
                <Button onClick={onDelete} color="danger">Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Page>
  );
};
