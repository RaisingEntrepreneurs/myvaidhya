import React, { useState } from 'react';
import {
  Container,
  Typography,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Select,
  MenuItem,
  Button,
} from '@mui/material';

function Document() {
  const [selectedDocument, setSelectedDocument] = useState('Document A');
  const [showHistory, setShowHistory] = useState(false);

  const documentData = {
    'Document A': {
      id: 'Document A',
      createDate: '01/01/2021',
      yourDocumentHistory: [
        { label: 'Reviewed Date', value: '01/02/2021' },
        { label: 'Review Status', value: 'Reviewed' },
        { label: 'Signed', value: 'Yes' },
        { label: 'Signed Date', value: '01/03/2021' },
      ],
    },
    'Document B': {
      id: 'Document B',
      createDate: '02/01/2021',
      yourDocumentHistory: [
        { label: 'Reviewed Date', value: '02/02/2021' },
        { label: 'Review Status', value: 'Reviewed' },
        { label: 'Signed', value: 'No' },
        { label: 'Signed Date', value: '' },
      ],
    },
  };

  const handleDocumentChange = (event) => {
    setSelectedDocument(event.target.value);
  };

  const handleRefresh = () => {
    // Implement your refresh logic here, e.g., fetch new document history.
  };

  const handleShowHistory = () => {
    setShowHistory(true);
  };

  return (
    <Container>
      <Typography variant="h4">Document Actions</Typography>
      <Select
        label="Select Document"
        value={selectedDocument}
        onChange={handleDocumentChange}
      >
        {Object.keys(documentData).map((doc) => (
          <MenuItem key={doc} value={doc}>
            {doc}
          </MenuItem>
        ))}
      </Select>
      <Button variant="outlined" onClick={handleRefresh}>
        Refresh
      </Button>
      <Button variant="outlined" onClick={handleShowHistory}>
        History
      </Button>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Id Document</TableCell>
            <TableCell>Create Date</TableCell>
            <TableCell>Your Document History</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow key={documentData[selectedDocument].id}>
            <TableCell>{documentData[selectedDocument].id}</TableCell>
            <TableCell>{documentData[selectedDocument].createDate}</TableCell>
            <TableCell>
              <Table>
                <TableBody>
                  {showHistory &&
                    documentData[selectedDocument].yourDocumentHistory.map((item) => (
                      <TableRow key={item.label}>
                        <TableCell>{item.label}</TableCell>
                        <TableCell>{item.value}</TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Container>
  );
}

export default Document;
