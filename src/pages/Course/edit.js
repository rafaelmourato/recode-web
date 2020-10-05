import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import {
  FormGroup, Label, Form, Input, Button,
} from 'reactstrap';
import Page from '../../components/Page/index';
import api from '../../services/api';

export default function Edit(props) {
  const [form, setForm] = useState({ name: '' });
  const [Course, setCourse] = useState([]);

  const { history, match: { params: { id } } } = props;
  const isNewCourse = id === 'new';

  const onError = () => {
    toast.error('unexpected error');
  };

  useEffect(() => {
    if (!isNewCourse) {
      api.get(`/course/${id}`).then(({ data }) => {
        setForm({
          name: data.name,
        });
      }).catch(onError);
    }
  }, [id, isNewCourse]);

  const onSuccess = () => {
    const action = isNewCourse ? 'Created' : 'Updated';
    toast.info(`${action} with Success`);
    history.push('/course');
  };

  const onChange = (event) => {
    const { target: { name, value } } = event;
    setForm({
      ...form,
      [name]: value,
    });
  };
  const onSubmit = () => {
    if (isNewCourse) {
      api.post('/course', form)
        .then(onSuccess)
        .catch(onError);
    } else {
      api.put(`/course/${id}`, form)
        .then(onSuccess)
        .catch(onError);
    }
  };

  return (
    <Page title={isNewCourse ? 'Create course' : 'Edit course'}>
      <Form className="mt-4">
        <FormGroup>
          <Label>Name</Label>
          <Input
            value={form.name}
            name="name"
            type="text"
            onChange={onChange}
          />
        </FormGroup>
      </Form>
      <Button onClick={onSubmit}>Submit</Button>
    </Page>
  );
}
