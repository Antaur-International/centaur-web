
import React from 'react';

// Importing the components
import RightDrawer from './components/LeftDrawer';
import Dashboard from './components/Dashboard';
import Department from './components/departments/Department';
import MyWork from './layout/lyt-myWork';
import axios from 'axios';

// CSS files
import "./css/global.css";
import './App.css';

/*
Importing the packages
*/


window.process = { env: { NODE_ENV: "production" } };

function App() {

  const [activeTab, setActiveTab] = React.useState("dashboard");
  const [instanceUser, setInstanceUser] = React.useState({});

  React.useEffect(()=>{
    if (sessionStorage.getItem('user')) {
        const userFetch = {
            userid: JSON.parse(sessionStorage.getItem('user')).userid,
            userEmail: JSON.parse(sessionStorage.getItem('user')).userEmail
        };

        console.log(userFetch);

        axios.post('http://localhost:5000/user/getUser', userFetch)
            .then(res => {
                setInstanceUser(res.data.user);
                console.log('Running', res.data);
            })
            .catch(err => {
                console.log(err);
            })
    } else {
        window.location.href = "/login";
    }
  },[]);

  return (
    <div className="App">
      <RightDrawer activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className='main'>
        {activeTab === "dashboard" && <Dashboard user={instanceUser} />}
        {activeTab === "department" && <Department user={instanceUser} />}
        {activeTab === "myWork" && <MyWork user={instanceUser} />}
      </main>
    </div>

  );
}

export default App;
