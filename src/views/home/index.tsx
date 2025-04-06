import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/store';
import { getNewReleases, resetReleases } from '@/store/slices/musicSlice';
import { Box, Grid, Typography } from '@mui/material';
import { Releases, SkeletonLoader } from './components';

const Home = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { t } = useTranslation('home');

  const { releases, loading, error, offset, hasMore, hasError } = useSelector(
    (state: RootState) => state.music
  );

  const observerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    dispatch(resetReleases());
    dispatch(getNewReleases(0));
  }, [dispatch]);

  useEffect(() => {
    if (!hasMore || loading || hasError) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          dispatch(getNewReleases(offset));
        }
      },
      { threshold: 1.0 }
    );

    if (observerRef.current) observer.observe(observerRef.current);

    return () => observer.disconnect();
  }, [dispatch, offset, hasMore, loading, hasError]);

  return (
    <Box
      p={3}
      sx={{
        bgcolor: 'background.default',
        minHeight: '100vh',
        color: 'text.primary',
      }}
    >
      <Typography variant="h6" gutterBottom align="left">
        {t('title')}
      </Typography>

      {!loading && !error && releases.length === 0 && (
        <Typography variant="h5" gutterBottom align="center">
          {t('noRecords')}
        </Typography>
      )}

      {error && (
        <Typography color="error" align="center" mt={4}>
          {error}
        </Typography>
      )}

      <Grid container spacing={3}>
        <Releases releases={releases} />
        {loading && <SkeletonLoader cards={10} />}
        {hasMore && (
          <div ref={observerRef} data-testid="observer" style={{ height: 1 }} />
        )}
      </Grid>
    </Box>
  );
};

export default Home;
