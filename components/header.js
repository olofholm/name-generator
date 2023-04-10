import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import { signInWithGoogle, signOut } from "../pages/firebase"

export default function Header(props) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {props.title}
          </Typography>
          {props.user ? (<Button color="inherit" onClick={signOut}>Logout</Button>) : (<Button color="inherit" onClick={signInWithGoogle}>Login</Button>)}
        </Toolbar>
      </AppBar>
    </Box>
  );
}