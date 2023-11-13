import React, { useEffect, useState } from 'react';
///import axios from 'axios';
import { Container, Typography, Paper, Avatar, Box } from '@mui/material';

const MyProfile = () => {
  const [patientData, setPatientData] = useState(null);

  useEffect(() => {
    const apiUrl = 'http://127.0.0.1:3010';
    const requestData = {
      "patients_id": 5
    };
  
    fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestData)
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        console.log('Received data:', data);
        setPatientData(data[0]);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        My Profile
      </Typography>
      <Paper elevation={3}>
        <Box
          p={3}
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
        >
          <Avatar
            alt="Patient Image"
            src={patientData?.img || 'default_image.jpg'}
            sx={{ width: 100, height: 100 }}
          />
          <Box>
            <Typography variant="h6">
              {`${patientData?.firstname} ${patientData?.lastname}`}
            </Typography>
            <Typography>
              Date of Birth: {new Date(patientData?.dob).toLocaleDateString()}
            </Typography>
            <Typography>
              Username: {patientData?.username}
            </Typography>
            <Typography>
              Gender: {patientData?.gender}
            </Typography>
            <Typography>
              Marital Status: {patientData?.martial_sts}
            </Typography>
          </Box>
          <Box>
            <Typography>
              Address: {patientData?.address}
            </Typography>
            <Typography>
              City: {patientData?.city}
            </Typography>
            <Typography>
              State: {patientData?.sts}
            </Typography>
            <Typography>
              Zip Code: {patientData?.zip_code}
            </Typography>
            <Typography>
              Phone Number: {patientData?.ph_no}
            </Typography>
            <Typography>
              Alternate Phone Number: {patientData?.alt_phn_no}
            </Typography>
            <Typography>
              Primary Physician: {patientData?.prmy_phyn}
            </Typography>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
};

export default MyProfile;
