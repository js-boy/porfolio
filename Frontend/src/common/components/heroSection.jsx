import { Link } from 'react-router-dom';
import { Grid, Typography, IconButton, ButtonBase } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { icons } from '../constant/icons';

const achievements = [
  {
    title: 'Projects',
    number: '+20',
  },
  {
    title: 'Users',
    number: '+10',
  },
  {
    title: 'Years',
    number: '+4',
  },
];

export const HeroSection = () => {
  const [profileText, setProfile] = useState("Chargement...");

  useEffect(() => {
    axios.get('http://localhost:8000/api/profile/')
      .then((res) => setProfile(res.data.profileText))
      .catch(() => setProfile('Erreur de chargement...'));
  }, []);

  return (
    <Grid
      container
      component="div"
      alignItems="center"
      direction="column"
      justifyContent="flex-start"
      sx={{
        minHeight: '100vh',
        paddingTop: { xs: '40px', md: '50px' }, // Réduction supplémentaire du paddingTop
        background: '#fff',
      }}
      gap={{
        xs: 3,
        sm: 5,
      }}
    >
      <Grid item>
        <Typography variant="h6" color="primary.light" textAlign="center">
          Hello, I&apos;m
        </Typography>
        <Typography variant="h2" color="primary.main" textAlign="center">
          Full Stack Developer
        </Typography>
      </Grid>
      <Grid item>
        <Typography textAlign="center" variant="body2">
          {profileText}
        </Typography>
      </Grid>
      <Grid item container justifyContent="center" gap={6}>
        {achievements.map((item) => (
          <Grid
            item
            key={item.title}
            container
            direction="column"
            alignItems="center"
            gap={1}
            xs={3}
            sm={2}
          >
            <Typography align="center" variant="body2" color="primary.light">
              {item.title}
            </Typography>
            <Typography variant="h3">{item.number}</Typography>
          </Grid>
        ))}
      </Grid>
      <Grid item container flexDirection="column" alignItems="center" gap={5}>
        <Grid item container direction="row" gap={2} justifyContent="center">
          {icons.map((item) => (
            <IconButton
              key={item.id}
              component={Link}
              to={item.link}
              target="_blank"
              rel="noopener"
              aria-label={item.name}
              disableRipple
              sx={{
                opacity: { md: 0.5 },
                '&:hover': {
                  opacity: 1,
                },
              }}
            >
              {item.icon}
            </IconButton>
          ))}
        </Grid>
        <ButtonBase variant="main">Contact me</ButtonBase>
      </Grid>
    </Grid>
  );
};
