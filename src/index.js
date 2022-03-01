import React from 'react';
import ReactDOM from 'react-dom';
// Importing the css files
import './index.css';

// Importing the components
import NotFound from './layout/_lyt-not_found';
import Landing from './layout/lyt-landing';
import Login from './layout/lyt-login';
import Register from './layout/lyt-register';
import App from './App';

// Importing packages
import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom';

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<App />} />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </Router>,
  document.getElementById('root')
);