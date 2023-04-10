
import React, { useEffect } from "react";

import { API_HOST } from "./API/constant";

// Importing the components
import RightDrawer from "./components/LeftDrawer";
import Dashboard from "./components/Dashboard";
import Department from "./components/departments/Department";
import MyWork from "./layout/lyt-myWork";
import axios from "axios";
import SubjectLayout from "./layout/_lyt_deartment_subject";
import SettingsLayout from "./layout/_lyt_settings";
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

import Snackbar from "./components/Snackbar/Snackbar";
/*
Importing the packages
*/

function App() {

  const [meetings, setMeetings] = React.useState([]);
  const [snackbarState, setSnackbarState] = React.useState(false);
  const [message, setMessage] = React.useState("");
  const { activeTab } = useNavigation();

  React.useEffect(() => {


    axios
      .get(`${API_HOST}/meet`)
      .then(res => {
        setMeetings(res.data.meets);
      })
      .catch(err => {
        console.log(err);
      });

  }, []);

  useEffect(() => {

  }, []);

  return (
    <div className="App">
      <Helmet>
        <title>Dashboard - Centaur</title>
        <meta name="description" content="Manage all your resource at one stop" />
      </Helmet>
      <RightDrawer />
      <main className='main'>
        {activeTab === "dashboard" && <Dashboard meetings={meetings} />}
        {activeTab === "department" && <Department />}
        {activeTab === "department-subject" && <SubjectLayout />}
        {activeTab === "calender" && <Calender />}
        {activeTab === "myWork" && <MyWork setSnackbarOpenState={setSnackbarState} openState={snackbarState} setMessage={setMessage} />}
        {activeTab === "settings" && <SettingsLayout />}
        {activeTab === "live-classes" && <LiveClassesLyt />}
        {activeTab === "joinClasses" && <JoinMeeting />}
        {activeTab === "search" && <Search />}
        {activeTab === "faculty" && <FacultyDetails />}
      </main>
      <Snackbar message={message} setState={setSnackbarState} openState={snackbarState} />
    </div>

  );
}

export default App;
