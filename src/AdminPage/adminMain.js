import React, { useState, useEffect } from 'react';
import { TextField, Button, Container, Grid, Typography, Paper, FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const AdminPage = () => {
  const [doctors, setDoctors] = useState([]);
  const [staff, setStaff] = useState([]);
  const [nurses, setNurses] = useState([]);

  const [formData, setFormData] = useState({
    category: 'doctor', // Added category to distinguish between doctor, staff, and nurse
    first_name: '',
    last_name: '',
    dob: '',
    DOC_PIC: null,
    DEGREE_TYPE: '',
  });

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, DOC_PIC: file });
  };

  useEffect(() => {
    // Fetch doctors
    fetch('http://127.0.0.1:3010/doctor')
      .then(response => response.json())
      .then(data => {
        setDoctors(data);
      })
      .catch(error => {
        console.error('Error fetching doctors:', error);
      });

    // Fetch staff
    fetch('http://127.0.0.1:3010/staff')
      .then(response => response.json())
      .then(data => {
        setStaff(data);
      })
      .catch(error => {
        console.error('Error fetching staff:', error);
      });

    // Fetch nurses
    fetch('http://127.0.0.1:3010/nurse')
      .then(response => response.json())
      .then(data => {
        setNurses(data);
      })
      .catch(error => {
        console.error('Error fetching nurses:', error);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formDataToSubmit = new FormData();
    for (const key in formData) {
      formDataToSubmit.append(key, formData[key]);
    }

    let apiUrl;
    switch (formData.category) {
      case 'doctor':
        apiUrl = 'http://127.0.0.1:3010/doctor';
        break;
      case 'staff':
        apiUrl = 'http://127.0.0.1:3010/staff';
        break;
      case 'nurse':
        apiUrl = 'http://127.0.0.1:3010/nurse';
        break;
      default:
        return;
    }

    fetch(apiUrl, {
      method: 'POST',
      body: formDataToSubmit,
    })
    .then(response => response.json())
    .then(data => {
      switch (formData.category) {
        case 'doctor':
          setDoctors([...doctors, data]);
          break;
        case 'staff':
          setStaff([...staff, data]);
          break;
        case 'nurse':
          setNurses([...nurses, data]);
          break;
        default:
          return;
      }
      setFormData({
        category: formData.category,
        first_name: '',
        last_name: '',
        dob: '',
        DOC_PIC: null,
        DEGREE_TYPE: '',
      });
    })
    .catch(error => {
      console.error(`Error creating ${formData.category}:`, error);
    });
  };

  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h4" mb={2}>Admin Page</Typography>

      {/* Category Dropdown */}
      <FormControl fullWidth variant="outlined" mb={4}>
        <InputLabel>Category</InputLabel>
        <Select
          label="Category"
          value={formData.category}
          onChange={(e) => setFormData({ ...formData, category: e.target.value })}
        >
          <MenuItem value="doctor">Doctor</MenuItem>
          <MenuItem value="staff">Staff</MenuItem>
          <MenuItem value="nurse">Nurse</MenuItem>
        </Select>
      </FormControl>

      {/* Form for Adding */}
      <Paper sx={{ p: 3, mb: 4 }}>
        <Typography variant="h5" mb={2}>Add {formData.category.charAt(0).toUpperCase() + formData.category.slice(1)}</Typography>
        <form onSubmit={handleSubmit}>
          <input type="hidden" name="category" value={formData.category} />
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="First Name"
                name="first_name"
                value={formData.first_name}
                onChange={(e) => setFormData({ ...formData, first_name: e.target.value })}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Last Name"
                name="last_name"
                value={formData.last_name}
                onChange={(e) => setFormData({ ...formData, last_name: e.target.value })}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Date of Birth"
                type="date"
                name="dob"
                value={formData.dob}
                onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            {formData.category === 'doctor' && (
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  label="Degree Type"
                  name="DEGREE_TYPE"
                  value={formData.DEGREE_TYPE}
                  onChange={(e) => setFormData({ ...formData, DEGREE_TYPE: e.target.value })}
                />
              </Grid>
            )}
            <Grid item xs={12}>
              <input
                type="file"
                accept="image/*"
                name="DOC_PIC"
                onChange={handleFileChange}
              />
            </Grid>
          </Grid>
          <Button type="submit" variant="contained" mt={2}>
            Create {formData.category.charAt(0).toUpperCase() + formData.category.slice(1)}
          </Button>
        </form>
      </Paper>

      {/* Display Lists */}
      <Typography variant="h4" mb={2}>Doctors</Typography>
      <ul>
        {doctors.map((doctor, index) => (
          <li key={index}>{doctor.first_name} {doctor.last_name} - {doctor.DEGREE_TYPE}</li>
        ))}
      </ul>

      <Typography variant="h4" mb={2}>Staff</Typography>
      <ul>
        {staff.map((staffMember, index) => (
          <li key={index}>{staffMember.first_name} {staffMember.last_name}</li>
        ))}
      </ul>

      <Typography variant="h4" mb={2}>Nurses</Typography>
      <ul>
        {nurses.map((nurse, index) => (
          <li key={index}>{nurse.first_name} {nurse.last_name}</li>
        ))}
      </ul>
    </Container>
  );
};

export default AdminPage;
