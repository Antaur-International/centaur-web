import React from 'react';

// Importing the components
import RightDrawer from './components/RightDrawer';
import Dashboard from './components/Dashboard';
import Department from './components/departments/Department';

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
      </main>
    </div>

  );
}

export default App; 
