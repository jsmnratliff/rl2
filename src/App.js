import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Form from './components/Form';
import Sidebar from './components/Sidebar';
import './App.css'; // Import the CSS file

function App() {
  const [hideSidebar, setHideSidebar] = useState(false);

  const toggleSidebar = () => {
    setHideSidebar(!hideSidebar);
  };

  return (
    <div className="App">
      <Navbar />
      <button onClick={toggleSidebar}>
        {hideSidebar ? 'Show Sidebar' : 'Hide Sidebar'}
      </button>
      <Sidebar visible={!hideSidebar} />
      <div>
        <Form />
      </div>
    </div>
  );
}

export default App;