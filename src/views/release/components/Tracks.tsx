import { useTranslation } from 'react-i18next';
import { Artists } from '@/components/ui';
import { TSpotifyAlbumInfo } from '@/types';
import {
  Link,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import { calculateTrackDuration } from '../util';

const Tracks = ({ release }: { release: TSpotifyAlbumInfo }) => {
  const { t } = useTranslation('releaseInfo');
  const { tracks, name } = release;

  if (!tracks?.items) return null;

  const tableCellStyle = {
    color: 'text.primary',
    fontWeight: 'medium',
  };

  return (
    <TableContainer
      component={Paper}
      sx={{ bgcolor: 'background.paper', color: 'text.primary' }}
      data-testid="tracks"
    >
      <Table sx={{ minWidth: 650 }}>
        <TableHead>
          <TableRow>
            <TableCell sx={tableCellStyle}>{t('tracksList.no')} </TableCell>
            <TableCell sx={tableCellStyle}>{t('tracksList.name')}</TableCell>
            <TableCell sx={tableCellStyle}>{t('tracksList.artists')}</TableCell>
            <TableCell sx={tableCellStyle}>{t('tracksList.album')}</TableCell>
            <TableCell sx={tableCellStyle}>
              {t('tracksList.duration')}
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tracks.items.map((track, index) => (
            <TableRow
              key={track.id}
              sx={{
                bgcolor:
                  index % 2 === 0 ? 'background.default' : 'background.paper',
                '&:hover': {
                  bgcolor: 'action.hover',
                },
              }}
              data-testid="tracks-row"
            >
              <TableCell>{index + 1}</TableCell>
              <TableCell>
                <Link
                  href={track.external_urls.spotify}
                  target="_blank"
                  rel="noopener noreferrer"
                  underline="hover"
                  data-testid="track-name"
                >
                  <Typography variant="body2">{track.name}</Typography>
                </Link>
              </TableCell>
              <TableCell data-testid="track-artists">
                <Artists artists={track.artists} separator=", " />
              </TableCell>
              <TableCell data-testid="track-album">
                <Typography variant="body2">{name}</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="body2" data-testid="track-duration">
                  {calculateTrackDuration(track.duration_ms)}
                </Typography>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Tracks;
