import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import TimePicker from 'react-time-picker';
import 'react-time-picker/dist/TimePicker.css';
import { Container, Grid, Paper, Button } from '@mui/material';
import DoctorHeader from './Doctorheader';

const MyCalendar = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [time, setTime] = useState('12:00');

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleTimeChange = (newTime) => {
    setTime(newTime);
  };

  const handleScheduleAppointment = () => {
    if (selectedDate !== null) {
      const formattedDate = selectedDate.toLocaleDateString();
      const formattedTime = time;

      // Use formattedDate and formattedTime to save the appointment

      alert(`Appointment scheduled for ${formattedDate} at ${formattedTime}`);
    } else {
      alert('Please select a date first.');
    }
  };

  return (
    <div>
      <DoctorHeader />       
    <Container maxWidth="lg" style={{ marginTop: '2rem' }}>
    <h2>Calendar</h2>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Calendar onChange={handleDateChange} value={selectedDate} />
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper style={{ padding: '1rem' }}>
            <h2>Schedule Appointment</h2>
            {selectedDate && (
              <div>
                <h3>Selected Date: {selectedDate.toLocaleDateString()}</h3>
                <TimePicker onChange={handleTimeChange} value={time} />
                <h3>Selected Time: {time}</h3>
                <Button variant="contained" color="primary" onClick={handleScheduleAppointment}>
                  Schedule Appointment
                </Button>
              </div>
            )}
          </Paper>
        </Grid>
      </Grid>
    </Container>
    </div>
  );
};

export default MyCalendar;
