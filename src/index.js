import React from 'react';
import ReactDOM from 'react-dom';
// Importing the css files
import './index.css';

// Importing the components
import Landing from './layout/lyt-landing';
import Login from './layout/lyt-login';
import App from './App';

// Importing packages
import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom';

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<App />} />
    </Routes>
  </Router>,
  document.getElementById('root')
);