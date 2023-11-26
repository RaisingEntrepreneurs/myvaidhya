import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Paper, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import './Homepage.css';
import Footer from './Footer';
import { Navigate } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const [loginStatus, setLoginStatus] = useState(null);
  const [redirectToDoctorHome, setRedirectToDoctorHome] = useState(false);
  const [redirectToPatientHome, setRedirectToPatientHome] = useState(false);
  const [redirectToNurseHome, setRedirectToNurseHome] = useState(false);
  const [redirectToFDHome, setRedirectToFDHome] = useState(false);
  const Navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Replace the fetch URL with your actual login API endpoint
      const response = await fetch('http://localhost:3010/Users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (data.success) {
        setLoginStatus('success');
        if (data.result.rows[0].typ === 'D') {
          setRedirectToDoctorHome(true); // Redirect to Doctor home
        } else if (data.result.rows[0].typ === 'P') {
          setRedirectToPatientHome(true); // Redirect to Patient home
        } else if (data.result.rows[0].typ === 'N') {
          setRedirectToNurseHome(true); // Redirect to Nurse home
        } else if (data.result.rows[0].typ === 'FD') {
          setRedirectToFDHome(true); // Redirect to FD home
        }
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
  }
  if (redirectToPatientHome) {
    return <Navigate to="/PatientHome" />;
  }
  if (redirectToNurseHome) {
    return <Navigate to="/NurseHome" />;
  }
  if (redirectToFDHome) {
    return <Navigate to="/FDHome" />;
  }
  return (
    <div className="login-background">
      <Container component="main" maxWidth="xs">
        <Paper elevation={3} sx={{ padding: 3, marginTop: 4 }}>
          <Typography component="h1" variant="h5" align="center">
            Login
          </Typography>
          <form onSubmit={handleSubmit} sx={{ mt: 2 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Username"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Password"
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
            <Button variant="contained" type="submit" fullWidth sx={{ mt: 3 }}>
              Submit
            </Button>
            {loginStatus === 'fail' && (
              <Typography variant="body2" color="error" align="center" sx={{ mt: 1 }}>
                Login Failed. Please try again.
              </Typography>
            )}
            {loginStatus === 'error' && (
              <Typography variant="body2" color="error" align="center" sx={{ mt: 1 }}>
                Login error. Please try again.
              </Typography>
            )}
          </form>
        </Paper>
      </Container>
      <Footer />
    </div>
  );
};

export default Login;
