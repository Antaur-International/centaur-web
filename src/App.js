import React from 'react';

// Importing the components
import RightDrawer from './components/LeftDrawer';
import Dashboard from './components/Dashboard';
import Department from './components/departments/Department';
import MyWork from './layout/lyt-myWork';

// CSS files
import "./css/global.css";
import './App.css';

/*
Importing the packages
*/


window.process = { env: { NODE_ENV: "production" } };

function App() {

  const [activeTab, setActiveTab] = React.useState("dashboard");

  return (
    <div className="App">
      <RightDrawer activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className='main'>
        {activeTab === "dashboard" && <Dashboard />}
        {activeTab === "department" && <Department />}
        {activeTab === "myWork" && <MyWork />}
      </main>
    </div>

  );
}

export default App; 
