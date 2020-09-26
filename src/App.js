import React from 'react';
import Router from './routes';
import Navbar from './components/Navbar';

export default function App() {
  return (
    <div>
      <Navbar />
      <Router />
    </div>
  );
}
