import { useEffect } from 'react';
import { TFunction } from 'i18next';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { Link as RouterLink, useParams } from 'react-router';
import { NotFound } from '@/components/template';
import { Spinner } from '@/components/ui';
import { AppDispatch, RootState } from '@/store';
import { getReleaseInfo, resetRelease } from '@/store/slices/releaseInfoSlice';
import { Home } from '@mui/icons-material';
import { Box, Breadcrumbs, Link, Typography } from '@mui/material';
import { ReleaseCard, Tracks } from './components';

const getBreadcrumbs = (release: string, t: TFunction) => {
  const breadcrumbs = [
    <Link
      component={RouterLink}
      underline="hover"
      sx={{ display: 'flex', alignItems: 'center' }}
      color="inherit"
      to="/"
    >
      <Home sx={{ mr: 0.5 }} fontSize="inherit" />
      {t('breadcrumb.home')}
    </Link>,
    <Typography fontSize="inherit" key="2" color="primary">
      {release}
    </Typography>,
  ];

  return breadcrumbs;
};

const ReleaseInfo = () => {
  const { t } = useTranslation('releaseInfo');
  const { id } = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const { release, loading, error } = useSelector(
    (state: RootState) => state.releaseInfo
  );

  useEffect(() => {
    dispatch(getReleaseInfo(id!));
    return () => {
      dispatch(resetRelease());
    };
  }, [dispatch, id]);

  if (loading) return <Spinner />;
  if (!release || error) return <NotFound />;

  const { name } = release;

  return (
    <Box
      p={3}
      sx={{
        bgcolor: 'background.default',
        color: 'text.primary',
      }}
    >
      <Breadcrumbs
        separator="›"
        aria-label="breadcrumb"
        sx={{ mb: 2, fontSize: '14px' }}
      >
        {getBreadcrumbs(name, t)}
      </Breadcrumbs>
      <ReleaseCard release={release} />
      <Tracks release={release} />
    </Box>
  );
};

export default ReleaseInfo;
