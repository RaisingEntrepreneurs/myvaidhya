import React, { useState, useEffect } from 'react';
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import DoctorHeader from './Doctorheader';
import './StaffList.css'; // Custom CSS

const StaffList = () => {
  const [staff, setStaffMembers] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:3010/getdocdtls')
      .then(response => response.json())
      .then(data => {
        setStaffMembers(data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);

  return (
    <div className="full-width"> {/* Added a class for full width */}
      <DoctorHeader />
      <Box className="content-width"> {/* Added a class for content width */}
        <h2 className="text-center mb-4">Staff Members</h2>
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
      </Box>
    </div>
  );
};

export default StaffList;
