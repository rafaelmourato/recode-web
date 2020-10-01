import React from 'react';
import { Button } from 'reactstrap';
import Page from '../../components/Page';
import api from '../../services/api';

export default function Edit(props) {
  const { match: { params: { id } } } = props;
  const isNewProfessor = id === 'new';

  const onSubmit = () => {
    if (isNewProfessor) {
      api.post('/professor', { email: '....' }).then().catch();
    } else {
      api.put(`/professor/${id}`, { email: '....' }).then().catch();
    }
  };

  return (
    <Page title={isNewProfessor ? 'Create Professor' : 'Edit Professor'}>
      <div>
        Edit Professor Page
      </div>
      <Button onClick={onSubmit}>Save</Button>
    </Page>
  );
}
