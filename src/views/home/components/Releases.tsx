import { useNavigate } from 'react-router';
import { Artists } from '@/components/ui';
import { TSpotifyAlbum } from '@/types';
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@mui/material';

const Releases = ({ releases }: { releases: TSpotifyAlbum[] }) => {
  const navigate = useNavigate();

  return releases.map((album) => (
    <Grid key={album.id} size={{ xs: 12, sm: 4, md: 3, lg: 2 }}>
      <Card
        sx={{ bgcolor: 'background.paper', color: 'text.primary' }}
        data-testid="release-card"
      >
        <CardActionArea onClick={() => navigate(`/release/${album.id}`)}>
          <CardMedia
            component="img"
            image={album.images[0]?.url}
            alt={album.name}
          />
          <CardContent>
            <Typography variant="body1" noWrap data-testid="release-name">
              {album.name}
            </Typography>
            <Artists artists={album.artists} />
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  ));
};

export default Releases;
