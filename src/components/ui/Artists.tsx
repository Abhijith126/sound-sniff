import { Typography, Link } from '@mui/material';

interface Artist {
  id: string;
  name: string;
  external_urls: { spotify: string };
}

interface ArtistsProps {
  artists: Artist[];
  separator?: string;
}

const Artists: React.FC<ArtistsProps> = ({ artists, separator = ' • ' }) => {
  return (
    <Typography variant="body2">
      {artists.map((artist, index) => (
        <span key={artist.id}>
          <Link
            href={artist.external_urls.spotify}
            target="_blank"
            rel="noopener noreferrer"
            underline="hover"
            data-testid="artist-link"
          >
            {artist.name}
          </Link>
          {index < artists.length - 1 && <span>{separator}</span>}
        </span>
      ))}
    </Typography>
  );
};

export default Artists;
