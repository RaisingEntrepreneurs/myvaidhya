
import React, { useState } from 'react';
import { useNavigate  } from 'react-router-dom';
import FrontdeskHeader from './FDHeader';

const PatientManagement = () => {
  const history = useNavigate ();

  const [patients, setPatients] = useState([
    { id: 1, firstName: 'John', lastName: 'Doe', phoneNumber: '123-456-7890' },
    { id: 2, firstName: 'Jane', lastName: 'Doe', phoneNumber: '987-654-3210' },
    // Add more patients as needed
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  //const [newPatientName, setNewPatientName] = useState('');

  const handleSearch = () => {
    const results = patients.filter(
      (patient) =>
        patient.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        patient.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        patient.phoneNumber.includes(searchTerm)
    );
    setSearchResults(results);
  };

  const handleCreatePatient = () => {
    history('/new-patient');
  };

  return (
    <div>
      <FrontdeskHeader />
      <div>
        <h2>Patient Search</h2>
        <input
          type="text"
          placeholder="Search Patient"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      {/* New Patient Button */}
      <div>
        <h2>New Patient</h2>
        <button onClick={handleCreatePatient}>New Patient</button>
      </div>

      {/* Display search results */}
      <div>
        <h2>Search Results</h2>
        <ul>
          {searchResults.map((patient) => (
            <li key={patient.id}>{`${patient.firstName} ${patient.lastName} - ${patient.phoneNumber}`}</li>
          ))}
        </ul>
      </div>

      {/* Display all patients */}
      <div>
        <h2>All Patients</h2>
        <ul>
          {patients.map((patient) => (
            <li key={patient.id}>{`${patient.firstName} ${patient.lastName} - ${patient.phoneNumber}`}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PatientManagement;
