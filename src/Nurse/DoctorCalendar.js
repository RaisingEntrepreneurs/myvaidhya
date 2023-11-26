import React, { useState } from 'react';
import { Box, Typography, TextField, MenuItem } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import NurseHeader from './NurseHeader';

// Sample data - Doctors and their availability
const doctors = [
  { id: 1, name: 'Dr. Smith', availability: { '8 AM': true, '9 AM': false, '10 AM': true /* ... */ } },
  { id: 2, name: 'Dr. Johnson', availability: { '8 AM': false, '9 AM': true, '10 AM': false /* ... */ } },
  // Add more doctor objects with their availability data
];

const DoctorCalendarPage = () => {
  const [selectedDoctor, setSelectedDoctor] = useState('');
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDoctorChange = (event) => {
    setSelectedDoctor(event.target.value);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <Box mt={3}>
      <NurseHeader />
      <Typography variant="h5" mb={2}>
        Doctor Availability Calendar
      </Typography>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Box mb={4}>
          <Typography variant="h6" mb={2}>
            Select Doctor:
          </Typography>
          <TextField
            select
            label="Select Doctor"
            value={selectedDoctor}
            onChange={handleDoctorChange}
            fullWidth
          >
            {doctors.map((doctor) => (
              <MenuItem key={doctor.id} value={doctor.id}>
                {doctor.name}
              </MenuItem>
            ))}
          </TextField>
        </Box>
        {selectedDoctor && (
          <Box mb={4}>
            <Typography variant="h6" mb={2}>
              Select Date:
            </Typography>
            <DatePicker
              label="Select Date"
              value={selectedDate}
              onChange={handleDateChange}
              renderInput={(params) => <TextField {...params} />}
            />
          </Box>
        )}

        {selectedDoctor && selectedDate && (
          <Box>
            <Typography variant="h6">
              Doctor's Availability on {selectedDate.toDateString()} for {doctors.find((doc) => doc.id === selectedDoctor).name}:
            </Typography>
            <Typography variant="body1">Available Hours:</Typography>
            {Object.entries(doctors.find((doc) => doc.id === selectedDoctor).availability).map(([hour, available], index) => (
              <Typography key={index} variant="body2">
                {hour}: {available ? 'Available' : 'Not Available'}
              </Typography>
            ))}
          </Box>
        )}
      </LocalizationProvider>
    </Box>
  );
};

export default DoctorCalendarPage;
