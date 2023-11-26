import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link, Route,useNavigate, Routes } from 'react-router-dom';
import vaidhyalogo from '../images/vaidhya_header_img.jpg';
//import ViewAppointments from './ViewAppointments'; // Correct the import path

// Import the components for My Profile, Documents, Reports, and Payment Mode



function AdminHeader() {

  const navigate = useNavigate();
  const handleLogoClick = () => {
    navigate('/AdminHome');
  };
  const handleLogout = () => {
    localStorage.clear();
    // Logic to handle logout, such as clearing session, removing tokens, etc.
    // Replace this with your logout logic
    ////console.log('Logged out');
    // Redirect to the login page or another landing page after logout
    navigate('/');
  };
  return (
    
      <div>
        <AppBar position="static">
          <Toolbar>
          <img src={vaidhyalogo} alt="Vaidhya Logo" width="100" onClick={handleLogoClick} style={{ cursor: 'pointer' }} />
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Vaidhya Health Care
            </Typography>
            <Button color="inherit" >
              My Profile
            </Button>
            <Button color="inherit" >
              Create Users
            </Button>
            <Button color="inherit" >
              System
            </Button>
            <Button color="inherit"  >
              Password reset
            </Button>
            <Button color="inherit" onClick={handleLogout}>
              Logout
            </Button>
          </Toolbar>
        </AppBar>
      

      <Routes>
        <Route path="/NurseProfile"/>
        <Route path="/PatientReportsPage"  />
        <Route path="/JobListPage"  />
        <Route path="/DoctorCalendarPage"  />
      </Routes>
      </div>
  );
}

export default AdminHeader;
