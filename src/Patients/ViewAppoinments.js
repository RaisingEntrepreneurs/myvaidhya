import React, { useState } from 'react';
import {
  Container,
  Typography,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from '@mui/material';

const Appointments = () => {
  // Sample data for appointments
  const [appointments, setAppointments] = useState([
    {
      id: 1,
      date: '2023-11-10',
      time: '09:00 AM',
      doctor: 'Dr. Smith',
      hospital: 'City Hospital',
    },
    {
      id: 2,
      date: '2023-11-15',
      time: '02:30 PM',
      doctor: 'Dr. Johnson',
      hospital: 'County Medical Center',
    },
    // Add more appointments as needed
  ]);

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Appointments
      </Typography>

      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Date</TableCell>
              <TableCell>Time</TableCell>
              <TableCell>Doctor</TableCell>
              <TableCell>Hospital</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {appointments.map((appointment) => (
              <TableRow key={appointment.id}>
                <TableCell>{appointment.date}</TableCell>
                <TableCell>{appointment.time}</TableCell>
                <TableCell>{appointment.doctor}</TableCell>
                <TableCell>{appointment.hospital}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </Container>
  );
};

export default Appointments;
