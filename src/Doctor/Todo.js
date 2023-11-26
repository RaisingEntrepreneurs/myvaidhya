import React, { useState, useEffect } from 'react';
import { Box,TextField, Button, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import DoctorHeader from './Doctorheader';

const Todo = () => {
  const [task, setTask] = useState('');
  const [selectedStaff, setSelectedStaff] = useState('');
  const [tasks, setTasks] = useState([]);
  const [staffMembers, setStaffMembers] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:3010/getdocdtls')
      .then(response => response.json())
      .then(data => {
        setStaffMembers(data);
      })
      .catch(error => {
        console.error('Error fetching staff members:', error);
      });
  }, []);

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const handleStaffChange = (e) => {
    setSelectedStaff(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim() !== '' && selectedStaff !== '') {
      setTasks([...tasks, { task, assignedTo: selectedStaff }]);
      setTask('');
      setSelectedStaff('');
    }
  };

  return (
    <div>
      <DoctorHeader />
      <Box>
         <h2>To-Do List</h2>
         </Box>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Task"
          variant="outlined"
          fullWidth
          value={task}
          onChange={handleChange}
        />
        <FormControl fullWidth variant="outlined" sx={{ marginTop: 2 }}>
          <InputLabel>Assign To</InputLabel>
          <Select
            value={selectedStaff}
            onChange={handleStaffChange}
            label="Assign To"
          >
            <MenuItem value="">Select Staff</MenuItem>
            {staffMembers.map((staff, index) => (
              <MenuItem key={index} value={`${staff.first_name} ${staff.last_name}`}>
                {`${staff.first_name} ${staff.last_name}`}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Button
          type="submit"
          variant="contained"
          sx={{ marginTop: 2 }}
        >
          Add Task
        </Button>
      </form>
      <ul>
        {tasks.map((t, index) => (
          <li key={index}>{t.task} (Assigned to: {t.assignedTo})</li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
