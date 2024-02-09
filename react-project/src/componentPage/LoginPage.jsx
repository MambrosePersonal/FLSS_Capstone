import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { NavBar } from '../components/NavBar';

export function LoginPage(){

  const navigate = useNavigate();

  // Define state variables to hold form data
  const [formData, setFormData] = useState({
    name: '',
    password: ''
  });

  // Event handler to update form data state on input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Event handler to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name = 'nicky' && formData.password == 'password') {
      navigate('/projects', { replace: true } )
      //Add in the route to manager page
    } else {
      alert('Form validation failed')
    }

    console.log(formData);
    // Reset form fields
    setFormData({
      name: '',
      password: ''
    });
  };


    return(
        <>
        <NavBar/>
        <h1>Login Page</h1>
        <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" value={formData.password} onChange={handleInputChange} />
      </div>
   
      <button type="submit">Submit</button>
    </form>

      </>
    )
}