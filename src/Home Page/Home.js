import React from "react";
import Login from "./Login";
import Doctorhome from "../Doctor/Doctorhome";
///import DoctorHeader from "../Doctor/Doctorheader";
import { Routes, Route } from 'react-router-dom';


//import Doctorhome from "../Doctor/Doctorhome";
function VaidhyaHome() {
    return (
        <div>
        <Routes>
            <Route path="*" element={<Login />} /> 
            <Route path="/Doctorhome" element={<Doctorhome />} /> 
  {/* Add more routes as needed */}
        </ Routes>
      </div>
    );
  }

  export default VaidhyaHome;