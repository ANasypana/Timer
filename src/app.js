import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

//Navigation
import { Routes } from './navigation';

//Styles
import './styles/index.scss';


export const App = () => {
  return (
    <Router >
      <Routes/>
    </Router>
  )
};
