import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';

const MinimalLayout = () => {
  return (
    <Box>
      <Outlet />
    </Box>
  );
};

export default MinimalLayout;