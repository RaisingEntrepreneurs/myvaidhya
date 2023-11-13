import React, { useState } from 'react';
import { Container, TextField, Button } from '@mui/material';
import { useNavigate  } from 'react-router-dom';
import './Homepage.css';

import { Navigate  } from 'react-router-dom'; // Add this import
//import DoctorHeader from '../Doctor/Doctorheader';
///import { Navigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const [loginStatus, setLoginStatus] = useState(null);
  const [redirectToDoctorHome, setRedirectToDoctorHome] = useState(false);
  const [redirectToPatientHome,setRedirectToPatientHome]= useState(false);  // Add this line

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3010/Users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log('data.success:', data.result.rows[0].typ);
      if (data.success) {
        setLoginStatus('success');
        if (data.result.rows[0].typ === 'D') {
          setRedirectToDoctorHome(true); // Redirect to Doctor home
        } else if ( data.result.rows[0].typ === 'P') {
          setRedirectToPatientHome(true); // Redirect to Patient home
        }
        ////setRedirectToDoctorHome(true); // Set the flag to redirect
      } else {
        setLoginStatus('fail');
      }
    } catch (error) {
      setLoginStatus('error');
      console.error('Error:', error);
    }
  };

  if (redirectToDoctorHome) {
    return <Navigate to="/Doctorhome" />;
  };
  if (redirectToPatientHome) {
    return <Navigate to="/PatientHome" />;
  };

  return (
    <div className="login-background">
  
      <Container maxWidth="sm" className="login-container">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <h2>Login</h2>
            {loginStatus === 'success' && <p>Login Successful!</p>}
            {loginStatus === 'fail' && <p>Login Failed. Please try again.</p>}
            {loginStatus === 'error' && <p>Login error. Please try again.</p>}
            <TextField
              fullWidth
              label="Username"
              name="username"
              value={formData.username}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <TextField
              fullWidth
              label="Password"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <Button variant="contained" type="submit">
            Submit
          </Button>
        </form>
      </Container>
    </div>
  );
};

export default Login;
