import { useState } from "react";
import "./App.css";

function App() {
  const [active, setActive] = useState(null);

  return (
    <div className="app-container">
      <div className="navbar">
        <div className="navbar-content">
          <div className="hamburger-menu">
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
          <span className="logo">Employee</span>
        </div>
      </div>
      <div className="sidebar">
        <ul className="menu">
          <li className={`menu-item`}>Employee List</li>
          <li className={`menu-item`}>Roles</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
