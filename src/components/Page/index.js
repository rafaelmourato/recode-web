import React from 'react';
import {
  Card, CardHeader, CardBody, CardTitle,
} from 'reactstrap';

export default function index({ children, title }) {
  return (
    <Card className="m-4">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardBody>
        {children}
      </CardBody>
    </Card>
  );
}
