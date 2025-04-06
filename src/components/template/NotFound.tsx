import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';
import { Box, Button, Typography } from '@mui/material';

const NotFound = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <Box
      data-testid="not-found"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '90vh',
        textAlign: 'center',
        bgcolor: 'background.default',
        color: 'text.primary',
        overflow: 'hidden',
        p: 3,
      }}
    >
      <Typography variant="h1" fontWeight="bold" gutterBottom>
        {t('notfound.title')}
      </Typography>
      <Typography variant="h5" color="text.secondary" gutterBottom>
        {t('notfound.description')}
      </Typography>
      <Button
        variant="contained"
        sx={{ mt: 3, borderRadius: '20px' }}
        onClick={() => navigate('/')}
      >
        {t('notfound.back')}
      </Button>
    </Box>
  );
};

export default NotFound;
