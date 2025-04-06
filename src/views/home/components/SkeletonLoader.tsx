import { Card, CardContent, Grid, Skeleton } from '@mui/material';

const SkeletonLoader = ({ cards = 3 }: { cards: number }) => {
  return (
    <div data-testid="skeleton-loader">
      {Array.from(new Array(cards)).map((_, index) => (
        <Grid key={`skeleton-${index}`} size={{ xs: 12, sm: 4, md: 3, lg: 2 }}>
          <Card sx={{ bgcolor: 'background.paper', color: 'text.primary' }}>
            <Skeleton
              variant="rectangular"
              sx={{
                width: '100%',
                height: '100%',
                aspectRatio: '1 / 1',
              }}
            />
            <CardContent>
              <Skeleton width="80%" height={24} />
              <Skeleton width="60%" height={20} />
              <Skeleton width="60%" height={20} />
            </CardContent>
          </Card>
        </Grid>
      ))}
    </div>
  );
};

export default SkeletonLoader;
