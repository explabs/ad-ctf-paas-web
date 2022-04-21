import { useState } from 'react';
import {
  Box,
} from '@mui/material';
import Navbar from './Navbar';

const Layout = ({ children }) => {
  const [user, setUser] = useState(null);

  function logOut() {
    setUser(null);
  }

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100%',
        overflow: 'hidden',
      }}
    >
      <Navbar user={user} logOut={logOut} />

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexGrow: 1,
          overflow: 'auto',
          minHeight: 'calc(100vh - 72px)',
          paddingTop: '48px',
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
