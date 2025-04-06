import { Box, CircularProgress } from '@mui/material';

const Spinner = () => (
  <Box
    sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
    }}
    data-testid="spinner"
  >
    <CircularProgress />
  </Box>
);
export default Spinner;
