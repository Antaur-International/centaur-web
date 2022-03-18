
import React from 'react';

// Importing the components
import RightDrawer from './components/LeftDrawer';
import Dashboard from './components/Dashboard';
import Department from './components/departments/Department';
import MyWork from './layout/lyt-myWork';
import axios from 'axios';
import SubjectLayout from './layout/_lyt_deartment_subject';
import SettingsLayout from './layout/_lyt_settings';

// CSS files
import "./css/global.css";
import './App.css';

/*
Importing the packages
*/

function App() {

  const [activeTab, setActiveTab] = React.useState("dashboard");
  const [instanceUser, setInstanceUser] = React.useState({});

  React.useEffect(() => {
    if (sessionStorage.getItem('user')) {
      const userFetch = {
        userid: JSON.parse(sessionStorage.getItem('user')).userid,
        userEmail: JSON.parse(sessionStorage.getItem('user')).userEmail
      };

      console.log(userFetch);

      axios.post(`${process.env.REACT_APP_DEV_URL}/user/getUser`, userFetch)
        .then(res => {
          setInstanceUser(res.data.user);
          console.log('Running', res.data);
          setActiveTab(sessionStorage.getItem("activeTab") !== null ? sessionStorage.getItem("activeTab") : "dashboard");
        })
        .catch(err => {
          console.log(err);
        });
    } else {
      window.location.href = "/login";
    }
  }, []);

  const handleTabChange = (tab) => {
    setActiveTab(tab);

    sessionStorage.setItem('activeTab', tab);
  }

  return (
    <div className="App">
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
