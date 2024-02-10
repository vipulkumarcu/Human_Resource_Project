/* eslint-disable react/prop-types */
import { useState } from "react";
import "./Form.css"

function Form ( { closeform } )
{

  // useState Hook for storing inputs by the user
  let [fname, setFname] = useState ("");
  let [lname, setLname] = useState ("");
  let [email, setEmail] = useState ("");
  let [phone, setPhone] = useState ("");
  let [gender, setGender] = useState ("");
  let [age, setAge] = useState ("");
  let [jobTitle, setJobTitle] = useState ("");
  let [experience, setExperience] = useState ("");
  let [salary, setSalay] = useState ("");
  let [department, setDepartment] = useState ("");

  //Function to save data by the user in the table
  function saveEmployee (event)
  {
    event.preventDefault();
    resetFields();
  }

  // Function to reset fields of the form
  function resetFields ()
  {
    setFname ("");
    setLname ("");
    setEmail ("");
    setPhone ("");
    setAge ("");
    setGender ("");
    setJobTitle ("");
    setExperience ("");
    setSalay ("");
    setDepartment ("");
  }

  return (
    <div className = "form-div">

        <div className = "close-button-div" onClick = { closeform }>
          <img src = "/src/Assets/Close-button.png" className = "close-button"/>
        </div>

      <div className="modal-div">

        <div>
          <label htmlFor = "first_name"> First Name </label>
          <input type = "text" name = "first_name" id = "first_name" placeholder = "Enter First Name" value = { fname } onChange = { (e) => setFname (e.target.value) } />
        </div>

        <div>
          <label htmlFor = "last_name"> Last Name </label>
          <input type = "text" name = "last_name" id = "last_name" placeholder = "Enter Last Name" value = { lname } onChange = { (e) => setLname (e.target.value) } />
        </div>

        <div>
          <label htmlFor="email"> Email ID </label>
          <input type = "text" name = "email" id = "email" placeholder = "Enter Email ID" value = { email } onChange = { (e) => setEmail (e.target.value) } />
        </div>

        <div>
          <label htmlFor="phone"> Phone Number </label>
          <input type = "text" name = "phone" id = "phone" placeholder = "Enter Phone Number" value = { phone } onChange = { (e) => setPhone (e.target.value) } />
        </div>

        <div>

          <label htmlFor = "gender"> Gender </label>

          <select name = "gender" id = "gender" value = { gender } className = "select-box" onChange = { (e) => setGender (e.target.value) } >
            <option value = "male"> Male </option>
            <option value = "female"> Female </option>
            <option value =  "other"> Other </option>
          </select>

        </div>

        <div>
          <label htmlFor = "age"> Age </label>
          <input type = "text" name = "age" id = "age" placeholder = "Enter Age" value = { age } onChange = { (e) => setAge (e.target.value) } />
        </div>

        <div>
          <label htmlFor = "job_title"> Job Title </label>
          <input type = "text" name = "job_title" id = "job_title" placeholder = "Enter Job Title" value = { jobTitle } onChange = { (e) => setJobTitle (e.target.value) } />
        </div>

        <div>
          <label htmlFor = "experience"> Years of Experience </label>
          <input type = "text" name = "experience" id = "experience" placeholder = "Enter Years of Experience" value = { experience } onChange = { (e) => setExperience (e.target.value) } />
        </div>

        <div>
          <label htmlFor = "salary"> Salary </label>
          <input type = "text" name = "salary" id = "salary" placeholder = "Enter Salary" value = { salary } onChange = { (e) => setSalay (e.target.value) } />
        </div>

        <div>
          <label htmlFor = "department"> Department Name </label>
          <input type = "text" name = "department" id = "department" placeholder = "Enter Department Name" value = { department } onChange = { (e) => setDepartment (e.target.value) } />
        </div>

        <div>
          <img src="/src/Assets/Save-button.png" className = "save-button" onClick = { saveEmployee }/>
          <img src="/src/Assets/Reset-button.jpg" className = "reset-button" onClick = { resetFields }/>
        </div>

      </div>

    </div>
  )
}

export default Form;