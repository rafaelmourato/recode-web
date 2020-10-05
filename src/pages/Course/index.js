import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { Button, Table } from 'reactstrap';
import Page from '../../components/Page';
import api from '../../services/api';

export default () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    api.get('/course').then((response) => {
      const { data } = response;
      setCourses(data);
    }).catch((error) => {
      console.log(error);
    });
  }, []);
  const onDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this item?')) {
      api.delete(`/course/${id}`).then(() => {
        const courselist = courses.filter((course) => course.id !== id);
        setCourses(courselist);
        toast.success('course deleted with success!');
      }).catch(() => {
        toast.error('unexpected error');
      });
    }
  };

  return (
    <Page title="Course">
      <Link to="/course/new"><Button type="btn btn-secondary">Create course</Button></Link>
      <Table className="mt-4">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course) => (
            <tr key={course.id}>
              <th>{course.id}</th>
              <th>{course.name}</th>
              <th><Button onClick={() => onDelete(course.id)} color="danger">Delete</Button></th>
            </tr>
          ))}
        </tbody>
      </Table>
    </Page>
  );
};
