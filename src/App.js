import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Routes from './routes'

export default function App() {

  return (
    <>
      <Router>
        <Routes />
      </Router>
    </>
  )
}




