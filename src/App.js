
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
import Calender from "./components/calendar/Calendar";
// CSS files
import "./css/global.css";
import './App.css';
import Helmet from 'react-helmet';
import LiveClassesLyt from './layout/_lyt_live_classes';
import JoinMeeting from './layout/_lyt_joinMeeting';
import { Search } from './components/Search/Search';
import { useNavigation } from './data/Context/NavigationContext';
import { FacultyDetails } from "./layout/_lyt_facutlyDetails";
/*
Importing the packages
*/

function App() {

  const [instanceUser, setInstanceUser] = useState({});

  const { activeTab, updateNavigation } = useNavigation();

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
          updateNavigation(sessionStorage.getItem("activeTab") !== null ? sessionStorage.getItem("activeTab") : "dashboard");
        })
        .catch(err => {
          console.log(err);
        });
    } else {
      window.location.href = './#/login';
    }

  }, []);

  const handleTabChange = (tab) => {
    updateNavigation(tab);

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
        {activeTab === "department" && <Department user={instanceUser} />}
        {activeTab === "department-subject" && <SubjectLayout user={instanceUser} />}
        {activeTab === "calender" && <Calender />}
        {activeTab === "myWork" && <MyWork user={instanceUser} />}
        {activeTab === "settings" && <SettingsLayout user={instanceUser} />}
        {activeTab === "live-classes" && <LiveClassesLyt user={instanceUser} />}
        {activeTab === "joinClasses" && <JoinMeeting user={instanceUser} />}
        {activeTab === "search" && <Search />}
        {activeTab === "faculty" && <FacultyDetails />}
      </main>
    </div>

  );
}

export default App;
