import React from "react";
import { Link } from "react-router-dom";
import  logo  from "../assets/logo.png";


export default function Header() {
  return (
    <div className="header">
      <img src={logo} height='150'/>
      <Link to="/employees" className="employeesList">
        <button type="button" className="button employeeslist">
          View Current Employees  
        </button>
      </Link>
    </div>
  );
}