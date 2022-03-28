
import React, { useContext, useEffect, useState } from 'react';

import { API_HOST } from './API/constant';

// Importing the components
import RightDrawer from './components/LeftDrawer';
import Dashboard from './components/Dashboard';
import Department from './components/departments/Department';
import MyWork from './layout/lyt-myWork';
import axios from 'axios';
import SubjectLayout from './layout/_lyt_deartment_subject';
import SettingsLayout from './layout/_lyt_settings';
import { UserContext } from './data/Context/UserContext';

// CSS files
import "./css/global.css";
import './App.css';
import Helmet from 'react-helmet';

/*
Importing the packages
*/

function App() {

  const [activeTab, setActiveTab] = useState("");
  const [instanceUser, setInstanceUser] = useState({});


  React.useEffect(() => {

    if (sessionStorage.getItem('user')) {
      const userFetch = {
        userid: JSON.parse(sessionStorage.getItem('user')).userid,
        userEmail: JSON.parse(sessionStorage.getItem('user')).userEmail
      };

      console.log(userFetch);
      console.log(API_HOST);


      axios.post(`${API_HOST}/user/getUser`, userFetch)
        .then(res => {
          setInstanceUser(res.data.user);
          sessionStorage.setItem('instanceUser', JSON.stringify(res.data.user));
          console.log('Running', res.data);
          console.log(instanceUser);
        })
        .then(() => {
          setActiveTab(sessionStorage.getItem("activeTab") !== null ? sessionStorage.getItem("activeTab") : "dashboard");
        })
        .catch(err => {
          console.log(err);
        });
    } else {
      window.location.href = './#/login';
    }

  }, []);

  const handleTabChange = (tab) => {
    setActiveTab(tab);

    sessionStorage.setItem('activeTab', tab)

  }

  useEffect(() => {

  }, []);

  return (
    <div className="App">
      <Helmet>
        <title>Dashboard - Centaur</title>
        <meta name="description" content="Manage all your resource at one stop" />
      </Helmet>
      <RightDrawer activeTab={activeTab} setActiveTab={handleTabChange} />
      <main className='main'>
        {activeTab === "dashboard" && <Dashboard user={instanceUser} />}
        {activeTab === "department" && <Department user={instanceUser} setActiveTab={setActiveTab} />}
        {activeTab === "department-subject" && <SubjectLayout user={instanceUser} />}
        {activeTab === "myWork" && <MyWork user={instanceUser} />}
        {activeTab === "settings" && <SettingsLayout user={instanceUser} />}
      </main>
    </div>

  );
}

export default App;
