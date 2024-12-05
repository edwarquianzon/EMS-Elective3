import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import EmployeeList from "./employee/employeeList"; // Import EmployeeList component

function App() {
  return (
    <Router>
      <div className="app-container">
        {/* Render the navbar and sidebar for routes other than '/employee-list' */}
        <Routes>
          <Route
            path="/employee-list"
            element={<EmployeeList />} // Directly renders the Hello World page without navbar/sidebar
          />
          <Route
            path="/"
            element={
              <>
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
                    <li className="menu-item">
                      <Link to="/employee-list">Employee List</Link>
                    </li>
                    <li className="menu-item">
                      <Link to="/roles">Roles</Link>
                    </li>
                  </ul>
                </div>
                <div className="content">
                  <h1>Welcome to the App!</h1>
                </div>
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
