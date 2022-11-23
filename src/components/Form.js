import React, { useContext } from "react";
import { DataContext } from "../utils/data";
import { useState } from "react";
import DatePicker from "react-date-picker";
import Header from "./Header";
import { statesData } from "../utils/states";
import { Modal } from "modal-vmoc";
import { useAbsoluteLayout } from "react-table";


export default function Form() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthDate, setBirthDate] = useState(new Date());
  const [startDate, setStartDate] = useState(new Date());
  const [street, setCity] = useState("");
  const [city, setStreet] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [ states, setStates] = useState("");
  const [department, setDepartment] = useState("");
  const [formDisplay, setFormDisplay] = useState(true);

  const { addData } = useContext(DataContext);
  
  const birthdateStr = birthDate.toDateString();
  const startDateStr = startDate.toDateString();
  const [toggle, setToggle] = useState(false)
  const closeModal = () => {
    setToggle(false)
}
  const handleSubmit = (e) => {
    e.preventDefault();
    setToggle(true)
    


    const employee = {
      firstName,
      lastName,
      birthdateStr,
      startDateStr,
      street,
      city,
      zipCode,
      states,
      department,
    };
    addData(employee);
  };

  return (
    <div className="form">
      <Header />
      <h2>Create Employee</h2>

      {formDisplay ? (
        <form className="create-employee" onSubmit={handleSubmit}>
          <label htmlFor="first-name">First Name</label>
          <input
            type="text"
            id="first-name"
            required="required"
            onChange={(e) => setFirstName(e.target.value)}
          />
          <label htmlFor="last-name">Last Name</label>
          <input
            type="text"
            required="required"
            id="last-name"
            onChange={(e) => setLastName(e.target.value)}
          />

          <label htmlFor="date-of-birth">Date of Birth</label>

          <DatePicker
            className="date-of-birth"
            onChange={setBirthDate}
            value={birthDate}
            required={true}
          />

          <label htmlFor="start-date">Start Date</label>
          <DatePicker
            className="start-date"
            onChange={setStartDate}
            value={startDate}
            required={true}
          />

          <fieldset className="address">
            <legend>Address</legend>

            <label htmlFor="street">Street</label>
            <input
              id="street"
              type="text"
              required="required"
              onChange={(e) => setStreet(e.target.value)}
            />

            <label htmlFor="city">City</label>
            <input
              id="city"
              type="text"
              required="required"
              onChange={(e) => setCity(e.target.value)}
            />
            <br />
           
            <label htmlFor="zip-code">Zip Code</label>
            <input
              id="zip-code"
              type="number"
              required="required"
              onChange={(e) => setZipCode(e.target.value)}
            />

            
              <label htmlFor="states">State</label>
              <select name="states" id="states" onChange={(e) => setStates(e.target.value)} required>
                  <option value="">-- Select a State --</option>
                  {statesData.map((state) => (
                    <option value={state.abbreviation} key={state.abbreviation}>
                      {state.name}
                    </option>
                  ))}
                </select>
              

            
            <label htmlFor="department">Department</label>
            <select name="department" id="department" onChange={(e) => setDepartment(e.target.value)} required>
              <option value="">-- Select a departement --</option>
              <option value="Sales">Sales</option>
              <option value="Marketing">Marketing</option>
              <option value="Engineering">Engineering</option>
              <option value="Human Resources">Human Resources</option>
              <option value="Legal">Legal</option>

            </select>
          
            
          </fieldset>

          <button className="button save">Save</button>
        </form>
      ) : null}

    {toggle ? 
      <Modal
        close = {closeModal}
        text = "employee Created!"
        />:null}
        </div>
      
  );
}