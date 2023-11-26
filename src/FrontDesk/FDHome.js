import React from 'react';

import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link, Route, BrowserRouter as  Routes } from 'react-router-dom';
import FrontdeskHeader from './FDHeader';


function FDHome() {
  return (
    
      <div>
        <FrontdeskHeader />
      </div>
  );
}

export default FDHome;
