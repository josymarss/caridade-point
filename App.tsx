import { StatusBar } from 'expo-status-bar';
import React from 'react';

import { Container } from '../global'
import Routes from '../Routes'

export default function App() {
  return (
    <Container>
      <Routes />
    </Container>
  );
}