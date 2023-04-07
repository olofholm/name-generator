import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function Header(props) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Name & Image Generator
          </Typography>
          {props.user && <Typography>Welcome {props.user.name}!</Typography>}
          {props.user ? (<Button color="inherit" href="/api/auth/logout">Logout</Button>) : (<Button color="inherit" href="/api/auth/login">Login</Button>)}
        </Toolbar>
      </AppBar>
    </Box>
  );
}