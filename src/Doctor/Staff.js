import React, { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import DoctorHeader from './Doctorheader';

import './StaffList.css'; // Custom CSS

const StaffList = () => {
  const [staff, setStaffMembers] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:3010/getdocdtls')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setStaffMembers(data);
      })
      .catch(error => {
        console.error('Error:', error);
        fetch('http://127.0.0.1:3010/getdocdtls')
          .then(response => response.text())
          .then(text => console.error('Response:', text))
          .catch(error => console.error('Error fetching response:', error));
      });
  }, []);

  return (
    <div className="container mt-4">
      <DoctorHeader>
          
      <h2 className="text-center mb-4">Staff Members</h2>
      </DoctorHeader>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Date of Birth</TableCell>
              <TableCell>Degree Type</TableCell>
              <TableCell>Created Timestamp</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {staff.map((member, index) => (
              <TableRow key={index}>
                <TableCell>{member.first_name} {member.last_name}</TableCell>
                <TableCell>{new Date(member.dob).toLocaleDateString()}</TableCell>
                <TableCell>{member.degree_type}</TableCell>
                <TableCell>{new Date(member.creat_timestamp).toLocaleString()}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default StaffList;
