import React from 'react';
import { Alert } from 'reactstrap';
import Page from '../../components/Page';

export default function index() {
  return (
    <Page title="Homepage">
      <Alert color="primary">
        A simple primary alert—check it out!
      </Alert>
    </Page>
  );
}
