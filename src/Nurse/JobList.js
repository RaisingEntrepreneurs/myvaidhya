import React, { useState } from 'react';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Typography,
} from '@mui/material';
import NurseHeader from './NurseHeader';

const JobListPage = () => {
  const [jobs, setJobs] = useState([
    { id: 1, description: 'Checkup for Patient A', status: 'Pending' },
    { id: 2, description: 'Review lab results for Patient B', status: 'InProgress' },
    { id: 3, description: 'Follow-up with Patient C', status: 'Completed' },
    // Add more job tasks as needed
  ]);

  const [filter, setFilter] = useState('All');

  const handleChangeFilter = (event) => {
    setFilter(event.target.value);
  };

  const filteredJobs = filter === 'All' ? jobs : jobs.filter((job) => job.status === filter);

  const pendingAndInProgressJobs = filteredJobs.filter((job) => job.status !== 'Completed');
  const completedJobs = filteredJobs.filter((job) => job.status === 'Completed');

  return (
    <div>
      <NurseHeader />
      <Typography variant="h4" gutterBottom>
        Job List
      </Typography>
      <FormControl sx={{ marginBottom: 2 }}>
        <InputLabel id="filter-label">Filter By Status</InputLabel>
        <Select
          labelId="filter-label"
          id="filter"
          value={filter}
          onChange={handleChangeFilter}
          label="Filter By Status"
        >
          <MenuItem value="All">All</MenuItem>
          <MenuItem value="Pending">Pending</MenuItem>
          <MenuItem value="InProgress">In Progress</MenuItem>
          <MenuItem value="Completed">Completed</MenuItem>
        </Select>
      </FormControl>
      <Paper elevation={3}>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Description</TableCell>
                <TableCell>Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {pendingAndInProgressJobs.map((job) => (
                <TableRow key={job.id}>
                  <TableCell>{job.id}</TableCell>
                  <TableCell>{job.description}</TableCell>
                  <TableCell>
                    <FormControl fullWidth>
                      <Select
                        value={job.status}
                        onChange={(event) => {
                          const updatedJobs = jobs.map((j) =>
                            j.id === job.id ? { ...j, status: event.target.value } : j
                          );
                          setJobs(updatedJobs);
                        }}
                        label="Status"
                      >
                        <MenuItem value="Pending">Pending</MenuItem>
                        <MenuItem value="InProgress">In Progress</MenuItem>
                        <MenuItem value="Completed">Completed</MenuItem>
                      </Select>
                    </FormControl>
                  </TableCell>
                </TableRow>
              ))}
              {filter === 'All' && (
                <TableRow>
                  <TableCell colSpan={3}>
                    <Typography variant="h6" align="center" gutterBottom>
                      Completed Jobs
                    </Typography>
                  </TableCell>
                </TableRow>
              )}
              {filter === 'All' &&
                completedJobs.map((job) => (
                  <TableRow key={job.id}>
                    <TableCell>{job.id}</TableCell>
                    <TableCell>{job.description}</TableCell>
                    <TableCell>{job.status}</TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </div>
  );
};

export default JobListPage;
