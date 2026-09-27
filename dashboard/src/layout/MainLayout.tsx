import type { ReactNode } from 'react';

import { Box, Toolbar } from '@mui/material';

import Header from './Header';
import Sidebar from './Sidebar';

interface MainLayoutProps {
  children: ReactNode;
}

function MainLayout({ children }: MainLayoutProps) {
  return (
    <Box sx={{ display: 'flex' }}>
      <Header />
      <Sidebar />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          minHeight: '100vh',
          bgcolor: 'background.default',
          p: 3,
        }}
      >
        <Toolbar />

        {children}
      </Box>
    </Box>
  );
}

export default MainLayout;