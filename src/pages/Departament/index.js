import React, { useState, useEffect } from 'react';
import { Button, Table } from 'reactstrap';
import {Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import Page from '../../components/Page';
import api from '../../services/api';

export default () => {
  const [deapartaments, setDeapartments] = useState([]);

  useEffect(() => {
    api.get('/departament').then((response) => {
      const { data } = response;
      setDeapartments(data);
    }).catch((error) => {
      console.log(error);
    });
  }, []);

  const onDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this item?')) {
      api.delete(`/departament/${id}`).then(() => {
        const departmentlist = deapartaments.filter((deapartament) => deapartament.id !== id);
        setDeapartments(departmentlist);
        toast.success('department deleted with success!');
      }).catch(() => {
        toast.error('unexpected error');
      });
    }
  };
  return (
    <Page title="Departament">
      <Link to="/department/new"><Button>Create Department</Button></Link>
      <Table className="mt-4">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {deapartaments.map((deapartament) => (
            <tr>
              <th>{deapartament.id}</th>
              <th>{deapartament.name}</th>
              <th><Button onClick={() => onDelete(deapartament.id)} color="danger">Delete</Button></th>
            </tr>
          ))}
        </tbody>
      </Table>
    </Page>
  );
};
