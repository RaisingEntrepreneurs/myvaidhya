import React, { useState } from 'react';
import { Grid, Paper, Button, Select, MenuItem, InputLabel, FormControl } from '@mui/material';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const ScheduleAppointment = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState('');
  const [doctor, setDoctor] = useState('Doctor Name');
  const [hospital, setHospital] = useState('Select Hospital');

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleTimeChange = (time) => {
    setSelectedTime(time);
  };

  const handleDoctorChange = (event) => {
    setDoctor(event.target.value);
  };

  const handleHospitalChange = (event) => {
    setHospital(event.target.value);
  };

  const handleSubmit = () => {
    if (selectedDate && selectedTime && doctor !== 'Doctor Name' && hospital !== 'Select Hospital') {
      console.log('Appointment scheduled:');
      console.log('Date:', selectedDate.toDateString());
      console.log('Time:', selectedTime);
      console.log('Doctor:', doctor);
      console.log('Hospital:', hospital);
    } else {
      alert('Please fill in all the fields.');
    }
  };

  return (
        <Grid item xs={12} md={6}>
          <Paper style={{ padding: '1rem' }}>
            <h2>Schedule an Appointment</h2>
            {selectedDate && (
              <p>Selected Date: {selectedDate.toDateString()}</p>
            )}
            <InputLabel htmlFor="date-select">Select a Date</InputLabel>
            <FormControl fullWidth variant="outlined" style={{ marginBottom: '1rem' }}>
              
              <DatePicker id="date-select" selected={selectedDate} onChange={handleDateChange} dateFormat="yyyy-MM-dd" />
            </FormControl>
            <InputLabel htmlFor="hospital-select">Select a Hospital</InputLabel>
            <FormControl variant="outlined" fullWidth>
              <Select
                labelId="hospital-select-label"
                id="hospital-select"
                value={hospital}
                onChange={handleHospitalChange}
                label="Select a Hospital"
              >
                <MenuItem value="Select Hospital">Select Hospital</MenuItem>
                <MenuItem value="Hospital 1">Hospital 1</MenuItem>
                <MenuItem value="Hospital 2">Hospital 2</MenuItem>
                {/* Add more hospital options as needed */}
              </Select>
            </FormControl>
            <InputLabel htmlFor="doctor-select">Select a Doctor</InputLabel>
            <FormControl variant="outlined" fullWidth>
              <Select
                labelId="doctor-select-label"
                id="doctor-select"
                value={doctor}
                onChange={handleDoctorChange}
                label="Select a Doctor"
              >
                <MenuItem value="Doctor Name">Doctor Name</MenuItem>
                <MenuItem value="Doctor 1">Doctor 1</MenuItem>
                <MenuItem value="Doctor 2">Doctor 2</MenuItem>
                {/* Add more doctor options as needed */}
              </Select>
            </FormControl>
            <InputLabel htmlFor="time-select">Select a Time</InputLabel>
            <input
              type="time"
              value={selectedTime}
              onChange={(e) => handleTimeChange(e.target.value)}
            />
            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={handleSubmit}
              style={{ marginTop: '1rem' }}
            >
              Schedule
            </Button>
          </Paper>
        </Grid>
      
  );
};

export default ScheduleAppointment;
