import React from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Doctorhome from "./Doctor/Doctorhome";
import MyCalendar from "./Doctor/doccalendar"; 
import PatientForm from "./Doctor/PatientForm";
import Todo from "./Doctor//Todo";
import StaffList from "./Doctor//Staff";
import AdminPage from "./AdminPage/AdminMain";
import PatientSearch from "./Doctor/PatientSearch";
//import VaidhyaHome from "./Home Page/Home";
import Login from "./Home Page/Login";
import Patienthome from './Patients/Patienthome';
import MyProfile from "./Patients/MyProfile";
import Documents from "./Patients/Documents";
import Reports from "./Patients/Reports";
import PaymentMode from "./Patients/PaymentMode";
import ScheduleAppointment from "./Patients/ScheduleAppointment";
import ViewAppointments from "./Patients/ViewAppoinments";
import NurseProfile from "./Nurse/Profile";
import PatientReportsPage from "./Nurse/patientHealthReports";
import JobListPage from "./Nurse/JobList";
import DoctorCalendarPage from "./Nurse/DoctorCalendar";
import NurseHome from "./Nurse/NurseHome";
import FDHome from "./FrontDesk/FDHome";
import FDMyProfile from "./FrontDesk/FDprofile";
import PatientManagement from './FrontDesk/FDPatients';
///import MyCalendar from "./Doctor/doccalendar";
import HospitalBill from './FrontDesk/FDBilling';
function Vaidhya() {
  return (
    <Router>
   <div>
      <Routes>
        <Route path="*" element={<Login />} /> 
        <Route path="/Doctorhome" element={<Doctorhome />} /> 
        <Route path="/MyCalendar" element={<MyCalendar />} />
        <Route path="/PatientForm" element={<PatientForm />} />
        <Route path="/Staff" element={<StaffList />} />
        <Route path="/Todo" element={<Todo />} />
        <Route path="/AdminPage" element={<AdminPage />} />
        <Route path="/PatientSearch" element={<PatientSearch />} />
        <Route path="/PatientHome" element={<Patienthome />} />
        <Route path="/MyProfile" element={<MyProfile />} />
        <Route path="/Documents" element={<Documents />} />
        <Route path="/Reports" element={<Reports />} />
        <Route path="/Paymentmode" element={<PaymentMode />} />
        <Route path="/ScheduleAppointments" element={<ScheduleAppointment />} /> {/* Correct the route path */}
        <Route path="/ViewAppointments" element={<ViewAppointments />} /> {/* Correct the route path */}
        <Route path="/NurseHome" element={<NurseHome />} />
        <Route path="/NurseProfile" element={<NurseProfile />} />
        <Route path="/PatientReportsPage" element={<PatientReportsPage />} />
        <Route path="/JobListPage" element={<JobListPage />} />
        <Route path="/DoctorCalendarPage" element={<DoctorCalendarPage />} />
        <Route path="/FDHome" element={<FDHome />} />
        <Route path="/FDMyProfile" element={<FDMyProfile />} />
        <Route path="/Patients" element={<PatientManagement />} />
        <Route path="/DoctorAppointment" element={<MyCalendar />} />
        <Route path="/Billing" element={<HospitalBill />} />
        
        {/*  <Route path="/Doctorhome" element={<Doctorhome />} /> */}
        {/* Add more routes as needed */}
      </Routes>
      </div>
    </Router>
   
  )
}

ReactDOM.render(<Vaidhya />, document.getElementById("root"));
