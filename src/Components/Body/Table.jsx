import { useEffect, useState } from "react";
import axios from "axios";
import Form from "../Head/Form";
import "./Table.css";

function Table ()
{
  //useState Hook for getting data from the server and then putting it in the table  
  const [data, setData] = useState ( [] );

  // useState Hook for Searching the data from the table
  const [search, setSearch] = useState ("");

  //useState Hook for displaying the form in the page
  const [showForm, setShowForm] = useState ( false );

  // Function for displaying the form on the page
  function formHandler ()
  {
    setShowForm (true);
  }

  //useEffect hook when page reloads the data is fetched from the server
  useEffect (
    () => {
      axios.get("employees.json")
        .then( (result) => setData(result.data) )
        .catch( (error) => console.error("Error:", error) );
    },
    [setData]
  )

  // Function for Deleteing a row from the table
  function deleteData (targetIndex)
  {
    setData ( data.filter ( (_, index) => index !== targetIndex) );
  }

  return (
    <div>

      <div>
        <img src = "/src/Assets/Search-button.png" alt = "Search" className = "search-button"/>
        <input type = "text" className = "search-box" name = "search-box" id = "search-box" placeholder = "Search" onChange = { (e) => setSearch (e.target.value) } />

        <img className='add-button-icon' src="/src/Assets/Add-button.png" onClick = { formHandler } />
        { showForm && <Form closeform = { () => { setShowForm (false) } } /> } 
      </div>

      <div className="container">

        <table className = "employee-display-table" >

          <thead>
            <tr>
              <th> ID </th>
              <th> First Name </th>
              <th> Last Name </th>
              <th> Email </th>
              <th> Phone </th>
              <th> Gender </th>
              <th> Age </th>
              <th> Job Title </th>
              <th> Years of Experience </th>
              <th> Salary </th>
              <th> Department </th>
              <th> Action </th>
            </tr>
          </thead>

          <tbody>  
            {
              data.filter( (employee) => (
                search.trim().toLowerCase() === "" ||
                  employee.first_name.toLowerCase().includes(search.toLowerCase()) ||
                  employee.last_name.toLowerCase().includes(search.toLowerCase()) ||
                  employee.email.toLowerCase().includes(search.toLowerCase()) ||
                  employee.phone.toLowerCase().includes(search.toLowerCase()) ||
                  employee.gender.toLowerCase().includes(search.toLowerCase()) ||
                  employee.job_title.trim().toLowerCase().includes(search.toLowerCase()) ||
                  employee.department.trim().toLowerCase().includes(search.toLowerCase())
              ) )
              .map ( (employee, index) => (
                <tr key = {index}>
                  <td> {employee.id} </td>
                  <td> {employee.first_name} </td>
                  <td> {employee.last_name} </td>
                  <td> {employee.email} </td>
                  <td> {employee.phone} </td>
                  <td> {employee.gender} </td>
                  <td> {employee.age} </td>
                  <td> {employee.job_title} </td>
                  <td> {employee.years_of_experience} </td>
                  <td> {employee.salary} </td>
                  <td> {employee.department} </td>
                  <td> <img src="/src/Assets/Delete-button.png" alt="Delete Button" className = "delete-button" onClick = { () => deleteData (index) } /> </td>
                </tr>
              ) )
            }  
          </tbody>

        </table>

      </div>

    </div>
  )
}

export default Table;
