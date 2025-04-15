import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router';
import { DarkMode, LightMode, Translate } from '@mui/icons-material';
import { Menu, MenuItem, Tooltip, useColorScheme } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Logo from '/logo.png';

function Header() {
  const { mode, setMode } = useColorScheme();
  const { t, i18n } = useTranslation();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const toggleTheme = () => {
    if (mode === 'light') {
      setMode('dark');
    } else {
      setMode('light');
    }
  };

  const handleLangMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleLangChange = (lang: string) => {
    i18n.changeLanguage(lang);
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" color="secondary">
      <Container maxWidth={false}>
        <Toolbar disableGutters>
          <Box sx={{ mr: 1 }}>
            <img src={Logo} alt={t('header.title')} loading="lazy" width={30} />
          </Box>
          <Typography
            variant="h5"
            noWrap
            component={Link}
            to="/"
            sx={{
              mr: 2,
              display: 'flex',
              alignItems: 'baseline',
              gap: 1,
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            {t('header.title')}
            <Typography
              variant="subtitle1"
              component="span"
              sx={{ fontWeight: 400 }}
            >
              {t('header.subtitle')}
            </Typography>
          </Typography>

          <Box
            sx={{
              flexGrow: 1,
              display: 'flex',
              justifyContent: 'flex-end',
            }}
          >
            <Tooltip title={t('translation.tooltip')}>
              <IconButton onClick={handleLangMenuClick} color="inherit">
                <Translate />
              </IconButton>
            </Tooltip>
            <Menu
              anchorEl={anchorEl}
              open={open}
              onClose={() => setAnchorEl(null)}
            >
              <MenuItem
                selected={i18n.language === 'en'}
                onClick={() => handleLangChange('en')}
              >
                {t('translation.english')}
              </MenuItem>
              <MenuItem
                selected={i18n.language === 'nl'}
                onClick={() => handleLangChange('nl')}
              >
                {t('translation.dutch')}
              </MenuItem>
            </Menu>
            <Tooltip title={t(`theme.${mode === 'light' ? 'dark' : 'light'}`)}>
              <IconButton onClick={toggleTheme}>
                {mode === 'light' ? <DarkMode /> : <LightMode />}
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
