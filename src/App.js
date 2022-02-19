import { useState } from 'react';
import './App.css';
import RightDrawer from './components/RightDrawer';
import Dashboard from './components/Dashboard';
import Department from './components/departments/Department';
import "./css/global.css"


window.process = { env: { NODE_ENV: "production" } };
function App() {
  const [contentShow, setContentShow] = useState("dashboard");
  return (
    <div className="App">
      <RightDrawer contentShow={contentShow} setContentShow={setContentShow} />
      <main className='main'>
        {/* <Department /> */}
        <Dashboard />
      </main>
    </div>
  );
}

export default App; 
