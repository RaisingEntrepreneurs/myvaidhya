import React from 'react';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import vaidhyalogo from '../images/vaidhya_header_img.jpg';
import ScheduleAppointment from './ScheduleAppointment'; // Correct the import path
//import ViewAppointments from './ViewAppointments'; // Correct the import path
import ViewAppointments from './ViewAppoinments';
// Import the components for My Profile, Documents, Reports, and Payment Mode
import MyProfile from './MyProfile';
import Documents from './Documents';
import Reports from './Reports';
import PaymentMode from './PaymentMode';

const Dropdown = () => {
  const [selectedOption, setSelectedOption] = React.useState('view');
  const navigate = useNavigate();
  
  
  const handleSelect = (event) => {
    setSelectedOption(event.target.value);
    if (event.target.value === 'view') {
      navigate('/ViewAppointments'); // Correct the navigation path
    } else if (event.target.value === 'schedule') {
      navigate('/ScheduleAppointments'); // Correct the navigation path
    }
  };

  return (
    <Select
      label="Appointment Options"
      value={selectedOption}
      onChange={handleSelect}
    >
      <MenuItem value="view">View Appointments</MenuItem>
      <MenuItem value="schedule">Schedule Appointment</MenuItem>
    </Select>
  );
};

function Patientheader() {
  const navigate = useNavigate();
  const handleLogoClick = () => {
    navigate('/PatientHome');
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
            <Button color="inherit" component={Link} to="/MyProfile">
              My Profile
            </Button>
            <Button color="inherit" component={Link} to="/Documents">
              Documents
            </Button>
            <Button color="inherit" component={Link} to="/Reports">
              Reports
            </Button>
            <Button color="inherit" component={Link} to="/Paymentmode">
              Payment Mode
            </Button>
            <Dropdown />
            <Button color="inherit" onClick={handleLogout}>
              Logout
            </Button>
          </Toolbar>
        </AppBar>
      

      <Routes>
        <Route path="/MyProfile" element={<MyProfile />} />
        <Route path="/Documents" element={<Documents />} />
        <Route path="/Reports" element={<Reports />} />
        <Route path="/Paymentmode" element={<PaymentMode />} />
        <Route path="/ScheduleAppointments" element={<ScheduleAppointment />} /> {/* Correct the route path */}
        <Route path="/ViewAppointments" element={<ViewAppointments />} /> {/* Correct the route path */}
      </Routes>
      </div>
  );
}

export default Patientheader;
