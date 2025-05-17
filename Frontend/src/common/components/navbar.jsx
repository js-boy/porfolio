import { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import {
  AppBar,
  Grid,
  IconButton,
  Typography,
  Link as MuiLink,
  ButtonBase,
} from '@mui/material';
import SegmentOutlinedIcon from '@mui/icons-material/SegmentOutlined';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import { Link } from 'react-router-dom';
import { DrawerBar } from '../utilities/drawer';
import { navLinks } from '../constant/navLink';

export const Navbar = ({ activeSection }) => {
  const [open, setOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const handleNavClick = (section) => {
    const el = document.getElementById(section.toLowerCase());
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navBack = useRef(false);
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 50,
  });

  navBack.current = trigger;

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    // Ajoutez ici la logique pour basculer entre les modes nuit et jour
  };

  return (
    <AppBar
      position="fixed"
      elevation={0}
      component="nav"
      style={{
        background: !navBack.current ? `rgb(0, 0, 0, 0)` : `hsla(0, 0%, 7%, .10)`,
        backdropFilter: 'blur(12px)',
      }}
      sx={{
        alignItems: 'center',
      }}
    >
      <Grid
        item
        container
        xs={11}
        md={8}
        xl={6}
        marginTop="20px"
        sx={{
          // marginInline: 'auto',
        }}
        justifyContent="space-between"
        alignContent="center"
      >
        <Typography variant="h3" color="primary.main">
          Portfolio
          <Typography variant="h3" color="secondary.main" component="span">
            .
          </Typography>
        </Typography>
        <Grid
          item
          sx={{
            display: { xs: 'none', md: 'flex' },
            maxWidth: 'fit-content',
          }}
          alignContent="center"
          container
          gap={2}
        >
          {navLinks.map((page) => (
            <MuiLink
              key={page.id}
              underline="none"
              textAlign="center"
              sx={{
                display: 'block',
                textTransform: 'none',
                fontWeight: 300,
                color: activeSection === page.name ? 'secondary.main' : 'black',
                cursor: 'pointer',
              }}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(page.name);
              }}
            >
              {page.name}
            </MuiLink>
          ))}
        </Grid>
        <Grid item sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 2 }}>
          <ButtonBase
            aria-label="My resume"
            to="#"
            sx={{
              margin: '15px 0px',
              textTransform: 'capitalize',
            }}
            color="secondary"
            variant="main"
            component={Link}
          >
            My Resume
          </ButtonBase>
          <IconButton
            aria-label="toggle dark mode"
            color="inherit"
            onClick={toggleDarkMode}
            sx={{ color: 'red' }}
          >
            {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
        </Grid>
        <Grid item sx={{ display: { xs: 'flex', md: 'none' } }}>
          <IconButton
            aria-label="menu"
            color="inherit"
            onClick={() => handleDrawerOpen()}
          >
            <SegmentOutlinedIcon sx={{ color: 'red' }} />
          </IconButton>
        </Grid>
      </Grid>
      <DrawerBar open={open} onClick={handleDrawerClose} />
    </AppBar>
  );
};

Navbar.propTypes = {
  activeSection: PropTypes.string.isRequired,
};
