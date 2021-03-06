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
import UserProvider from './data/Context/UserContext';
import ForgotPasswordPage from './layout/_lyt_forgotPassword';
// Importing packages
import { Route, Routes, HashRouter } from 'react-router-dom';
import { NavigationProvider } from './data/Context/NavigationContext';

ReactDOM.render(

  <HashRouter >
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/dashboard" element={
        <UserProvider>
          <NavigationProvider>
            <App />
          </NavigationProvider>
        </UserProvider>
      } />
      <Route path="/login" element={<Login />} />
      <Route path='forgotPassword' element={<ForgotPasswordPage />} />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </HashRouter>,
  document.getElementById('root')
);