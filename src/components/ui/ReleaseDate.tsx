import dayjs from 'dayjs';
import { DISPLAY_DATE_FORMAT } from '@/constants';
import { Event } from '@mui/icons-material';
import { Box, Tooltip, Typography } from '@mui/material';

const ReleaseDate = ({ date }: { date: string }) => (
  <Box display="flex" alignItems="center" gap={1} color="text.secondary">
    <Tooltip title="Release Date">
      <Event fontSize="small" sx={{ verticalAlign: 'middle' }} />
    </Tooltip>
    <Typography data-testid="release-date" variant="body2">
      {dayjs(date).format(DISPLAY_DATE_FORMAT)}
    </Typography>
  </Box>
);

export default ReleaseDate;
