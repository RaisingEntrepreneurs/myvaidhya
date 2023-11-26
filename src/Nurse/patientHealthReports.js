import React, { useState, useEffect } from 'react';
import { TextField, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';
import NurseHeader from './NurseHeader';
const patientHealthReports = [
  {
    id: 1,
    name: 'John Doe',
    age: 35,
    diagnosis: 'Fever',
    medication: 'Paracetamol',
    // Other health report fields...
  },
  // Add more patient health reports as needed...
];

const PatientReportsPage = () => {
  const [reports, setReports] = useState(patientHealthReports);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Fetch patient reports from an API using Axios or Fetch and update the 'reports' state
    // Example:
    // fetchPatientReports().then((data) => setReports(data));
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredReports = reports.filter((report) =>
    report.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleEdit = (id) => {
    // Logic to handle editing the patient health report based on the ID
    // For demonstration purposes, you can console.log the ID being edited
    console.log(`Editing health report with ID: ${id}`);
  };

  return (
    <div>
      <NurseHeader />
      <h1>Patient Reports</h1>
      <TextField
        label="Search by patient name"
        variant="outlined"
        value={searchTerm}
        onChange={handleSearch}
        fullWidth
        margin="normal"
      />
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Age</TableCell>
              <TableCell>Diagnosis</TableCell>
              <TableCell>Medication</TableCell>
              <TableCell>Edit</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredReports.map((report) => (
              <TableRow key={report.id}>
                <TableCell>{report.name}</TableCell>
                <TableCell>{report.age}</TableCell>
                <TableCell>{report.diagnosis}</TableCell>
                <TableCell>{report.medication}</TableCell>
                <TableCell>
                  <Button variant="outlined" onClick={() => handleEdit(report.id)}>
                    Edit
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default PatientReportsPage;
