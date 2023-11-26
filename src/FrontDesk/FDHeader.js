import React from 'react';

import { AppBar, Toolbar, Typography, Button } from '@mui/material';

import { Link, Route, Routes } from 'react-router-dom';
import vaidhyalogo from '../images/vaidhya_header_img.jpg';
import FDMyProfile from './FDprofile';
import PatientManagement from './FDPatients';
import DoctorAppointment from '../Doctor/doccalendar';
import HospitalBill from './FDBilling';


function FrontdeskHeader() {
  return (
    
      <div>
        <AppBar position="static">
          <Toolbar>
            <img src={vaidhyalogo} alt="Vaidhya Logo" width="100" />
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Vaidhya Health Care
            </Typography>
            <Button color="inherit" component={Link} to="/FDMyProfile">
             My Profile
            </Button>
            <Button color="inherit" component={Link} to="/Patients">
              Patients
            </Button>
            <Button color="inherit" component={Link} to="/DoctorAppointment">
              Doctor Appointment
            </Button>
            <Button color="inherit" component={Link} to="/Billing">
              Billing
            </Button>
          </Toolbar>
        </AppBar>
      

      <Routes>
        <Route path="/FDMyProfile" element={<FDMyProfile />} />
        <Route path="/Patients" element={<PatientManagement />} />
        <Route path="/DoctorAppointment" element={<DoctorAppointment />} />
        <Route path="/Billing" element={<HospitalBill />} />
      </Routes>
      </div>
  );
}

export default FrontdeskHeader;
