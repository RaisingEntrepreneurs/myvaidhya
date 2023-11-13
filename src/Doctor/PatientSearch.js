import React, { useState } from 'react';
import Modal from '@mui/material/Modal';
import { TextField, Button, Box } from '@mui/material';
import DoctorHeader from './Doctorheader';
const PatientSearch = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dob: '',
  });

  const [searchResults, setSearchResults] = useState([]);
  const [selectedPatient, setSelectedPatient] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSearch = () => {
    const apiUrl = `http://127.0.0.1:3010/?fst_nme=${formData.firstName}&lst_nme=${formData.lastName}&dob=${formData.dob}`;
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => setSearchResults(data.slice(0, 10)))
      .catch(error => console.error('Error fetching patients:', error));
  };

  const handlePatientClick = (patient) => {
    setSelectedPatient(patient);
  };

  const closeModal = () => {
    setSelectedPatient(null);
  };

  return (
    <div>
    <DoctorHeader>
      <h2>Patient Search</h2>
      </DoctorHeader>
    <Box sx={{ p: 2 }}>
      <h2>Patient Search</h2>
      <TextField
        fullWidth
        label="First Name"
        name="firstName"
        value={formData.fst_nme}
        onChange={handleInputChange}
        sx={{ mb: 2 }}
      />
      <TextField
        fullWidth
        label="Last Name"
        name="lastName"
        value={formData.lst_nme}
        onChange={handleInputChange}
        sx={{ mb: 2 }}
      />
      <TextField
        fullWidth
        label="Date of Birth"
        type="date"
        name="dob"
        value={formData.dob}
        onChange={handleInputChange}
        InputLabelProps={{
          shrink: true,
        }}
        sx={{ mb: 2 }}
      />
      <Button variant="contained" onClick={handleSearch} sx={{ mb: 2 }}>
        Search
      </Button>

      <ul>
        {searchResults.map((patient, index) => (
          <li key={index} onClick={() => handlePatientClick(patient)}>
            {patient.fst_nme} {patient.lst_nme} - {new Date(patient.dob).toLocaleDateString()}
          </li>
        ))}
      </ul>

      <Modal
        open={selectedPatient !== null}
        onClose={closeModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, bgcolor: 'background.paper', border: '2px solid #000', boxShadow: 24, p: 4 }}>
          <h2>Patient Details</h2>
          {selectedPatient && (
            <div>
              <p>First Name: {selectedPatient.first_name}</p>
              <p>Last Name: {selectedPatient.last_name}</p>
              <p>Date of Birth: {new Date(selectedPatient.dob).toLocaleDateString()}</p>
              {/* Add more details here */}
            </div>
          )}
          <Button onClick={closeModal}>Close</Button>
        </Box>
      </Modal>
    </Box>
    </div>
  );
};

export default PatientSearch;
