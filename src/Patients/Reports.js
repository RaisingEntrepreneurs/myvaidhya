import React, { useState } from 'react';
import moment from 'moment';
import {
  Container,
  Typography,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TextField,
  Button,
  Box
} from '@mui/material';

const Reports = () => {
  const [report, setReport] = useState([]);
  const [beginDate, setBeginDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [title, setTitle] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newReport = {
      id: report.length + 1,
      beginDate,
      endDate,
      title,
    };

    setReport([...report, newReport]);
    setBeginDate('');
    setEndDate('');
    setTitle('');
  };

  const handleDateChange = (date, setState) => {
    setState(date);
  };

  const handleRefresh = () => {
    // Implement your refresh logic here.
  };

  return (
    <Container>
        <Typography variant="h4">Report History/Result</Typography>
        <Box display="flex" alignItems="center">
        <TextField
          label="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleRefresh}
          style={{ marginLeft: '16px' }}
        >
          Refresh
        </Button>
      </Box>

      <form onSubmit={handleSubmit}>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Box width="48%">
            <Typography variant="h6" gutterBottom>
              Begin Date:
            </Typography>
            <TextField
              type="date"
              value={beginDate}
              onChange={(e) => handleDateChange(e.target.value, setBeginDate)}
            />
          </Box>
          <Box width="48%">
            <Typography variant="h6" gutterBottom>
              End Date:
            </Typography>
            <TextField
              type="date"
              value={endDate}
              onChange={(e) => handleDateChange(e.target.value, setEndDate)}
            />
          </Box>
        </Box>
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </form>
      
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Title</TableCell>
            <TableCell>status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {report
            .filter(
              (report) =>
                report.title.toLowerCase().includes(searchTerm.toLowerCase())
            )
            .map((report) => (
              <TableRow key={report.id}>
                <TableCell>
                  {moment(report.beginDate).format('MM/DD/YYYY')}
                </TableCell>
                <TableCell>{report.title}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </Container>
  );
};

export default Reports;
