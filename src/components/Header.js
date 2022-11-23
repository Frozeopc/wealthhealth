import React from "react";
import { Link } from "react-router-dom";



export default function Header() {
  return (
    <div className="header">
      
      <Link to="/employees" className="employeesList">
        <button type="button" className="button employeeslist">
          View Current Employees  
        </button>
      </Link>
    </div>
  );
}