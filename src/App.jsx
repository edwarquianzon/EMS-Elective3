import React from "react"; // Adjust the path if needed
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import Router components
import "./App.css";
import ViewEmployee from "./employee/viewEmployee.jsx"; // Adjust the import path if needed
import EditEmployee from "./employee/editEmployee.jsx"; // Make sure to import EditEmployee

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ViewEmployee />} />
        <Route path="/edit-employee" element={<EditEmployee />} />
      </Routes>
    </Router>
  );
}

export default App;
