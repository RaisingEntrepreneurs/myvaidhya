import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link, Routes, Route ,useNavigate} from 'react-router-dom';
import vaidhyalogo from "../images/vaidhya_header_img.jpg";
import MyCalendar from "./doccalendar"; 
import PatientForm from "./PatientForm";
import Todo from "./Todo";
import StaffList from "./Staff";
///import AdminPage from "../AdminPage/AdminMain";
import PatientSearch from "./PatientSearch";
import "../Home Page/Homepage.css";
import "./Doctorhome.css";

function 
DoctorHeader() {
  const navigate = useNavigate();
  const handleLogoClick = () => {
    navigate('/Doctorhome');
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
                        <Button color="inherit" component={Link} to="/Todo">To-do</Button>
                        <Button color="inherit" component={Link} to="/PatientSearch">PatientSearch</Button>
                        <Button color="inherit" component={Link} to="/PatientForm">New Patient</Button>
                        <Button color="inherit" component={Link} to="/Staff">Staff</Button>
                        <Button color="inherit">Billing</Button>
                       {/*   <Button color="inherit"component={Link} to="/AdminPage">Admin</Button>*/}
                        <Button color="inherit" component={Link} to="/MyCalendar">Calendar</Button>
                        <Button color="inherit" onClick={handleLogout}>Logout</Button>
          {/* Add other buttons as needed */}
        </Toolbar>
      </AppBar>

      <Routes>
        <Route path="/MyCalendar" element={<MyCalendar />} />
        <Route path="/PatientForm" element={<PatientForm />} />
        <Route path="/Staff" element={<StaffList />} />
        <Route path="/Todo" element={<Todo />} />
       {/* <Route path="/AdminPage" element={<AdminPage />} />*/}
        <Route path="/PatientSearch" element={<PatientSearch />} />
      </Routes>
    </div>
  )
}

export default DoctorHeader;
