import React, { useEffect, useState } from 'react';
///import axios from 'axios';
import { Container, Typography, Paper, Avatar, Box } from '@mui/material';
import FrontdeskHeader from './FDHeader';
const FDMyProfile = () => {
  const [FrontdeskData, setFrontdeskData] = useState(null);

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
        setFrontdeskData(data[0]);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  return (
    <div>
      <FrontdeskHeader />
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
            src={FrontdeskData?.img || 'default_image.jpg'}
            sx={{ width: 100, height: 100 }}
          />
          <Box>
            <Typography variant="h6">
              {`${FrontdeskData?.firstname} ${FrontdeskData?.lastname}`}
            </Typography>
            <Typography>
              Date of Birth: {new Date(FrontdeskData?.dob).toLocaleDateString()}
            </Typography>
            <Typography>
              Username: {FrontdeskData?.username}
            </Typography>
            <Typography>
              Gender: {FrontdeskData?.gender}
            </Typography>
            <Typography>
              Qualification: {FrontdeskData?.qua}
            </Typography>
          </Box>
          <Box>
            <Typography>
              Address: {FrontdeskData?.address}
            </Typography>
            <Typography>
              City: {FrontdeskData?.city}
            </Typography>
            <Typography>
              State: {FrontdeskData?.sts}
            </Typography>
            <Typography>
              Zip Code: {FrontdeskData?.zip_code}
            </Typography>
            <Typography>
              Phone Number: {FrontdeskData?.ph_no}
            </Typography>
            <Typography>
              Alternate Phone Number: {FrontdeskData?.alt_phn_no}
            </Typography>
            
          </Box>
        </Box>
      </Paper>
    </Container>
    </div>
  );
};

export default FDMyProfile;
