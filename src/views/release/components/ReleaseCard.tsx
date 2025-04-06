import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { SpotifyIcon } from '@/components/icons';
import { Artists, ReleaseDate } from '@/components/ui';
import { TSpotifyAlbumInfo } from '@/types';
import {
  Box,
  Button,
  Card,
  CardMedia,
  Tooltip,
  Typography,
} from '@mui/material';
import { totalTrackDuration } from '../util';

const ReleaseCard = memo(({ release }: { release: TSpotifyAlbumInfo }) => {
  const { t } = useTranslation('releaseInfo');

  const { name, images, artists, tracks, release_date, external_urls } =
    release;

  const imageUrl = images[0]?.url ?? '/placeholder.jpg';
  const trackCount = tracks?.items.length ?? 0;

  return (
    <Box
      display="flex"
      alignItems="center"
      flexDirection={{ md: 'row', xs: 'column' }}
      gap={3}
      mb={4}
      data-testid="release-card"
    >
      <Card sx={{ maxWidth: 300, bgcolor: 'background.paper' }}>
        <CardMedia
          component="img"
          image={imageUrl}
          alt={name}
          sx={{
            width: { xs: '100%', md: 300 },
            height: 'auto',
            objectFit: 'cover',
          }}
        />
      </Card>

      <Box pl={3}>
        <Box
          sx={{
            pl: 1,
            gap: 1,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Typography variant="h5" gutterBottom data-testid="release-name">
            {name}
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Typography variant="body2" color="text.secondary">
              {trackCount} {t('card.tracks')} •
            </Typography>
            <Box
              px={1}
              py={0.5}
              borderRadius="30px"
              bgcolor="background.paper"
              display="inline-block"
            >
              <Typography
                variant="body2"
                color="primary"
                sx={{ fontSize: '10px' }}
                data-testid="toatal-duration"
              >
                {totalTrackDuration(tracks)}
              </Typography>
            </Box>
          </Box>
          <Artists artists={artists} />
          <ReleaseDate date={release_date} />
        </Box>

        <Tooltip title="Opens Spotify in a new tab">
          <Button
            variant="contained"
            color="primary"
            startIcon={<SpotifyIcon />}
            onClick={() => window.open(external_urls.spotify, '_blank')}
            sx={{
              textTransform: 'none',
              borderRadius: '50px',
              mt: 2,
            }}
            data-testid="spotifyButton"
          >
            {t('card.spotifyButton')}
          </Button>
        </Tooltip>
      </Box>
    </Box>
  );
});

export default ReleaseCard;
