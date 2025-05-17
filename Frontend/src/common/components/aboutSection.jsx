import { Grid, Typography, Avatar, Stack, Box } from '@mui/material';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { BasicTab } from '../utilities/tabs';

const tabPanel = [
  {
    title: 'Skills',
    data: [
      { id: '001', skill: 'Node.js' },
      { id: '002', skill: 'Express' },
      { id: '003', skill: 'JavaScript' },
      { id: '004', skill: 'React' },
      { id: '005', skill: 'Nextjs' },
    ],
  },
  {
    title: 'Education',
    data: [
      {
        id: '006',
        skill: 'Bachelor of Science, Computer Software Engineering',
      },
      { id: '007', skill: 'CCNA Cisco' },
    ],
  },
];

export const AboutSection = () => {
  const [about, setAbout] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:8000/api/about/')
      .then((res) => {
        setAbout(res.data);
      })
      .catch(() => setAbout([]));
  }, []);

  return (
    <Grid
      container
      direction="column"
      gap={2}
      alignItems="center"
      justifyContent="flex-start"
      sx={{
        minHeight: '100vh',
        paddingTop: { xs: '50px', md: '60px' },
        background: '#fafafa',
      }}
    >
      <Grid item>
        <Typography variant="h2">About Me</Typography>
      </Grid>
      <Grid item sx={{ width: '100%' }}>
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          spacing={2}
          alignItems="flex-start"
          justifyContent="center"
          sx={{ width: '100%' }}
        >
          <Avatar
            src="/images/img_user.JPG"
            sx={{
              width: { xs: 100, sm: 150 },
              height: { xs: 100, sm: 150 },
              objectFit: 'cover',
              marginTop: { xs: 0, md: 2 },
            }}
          />
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: { xs: 'center', md: 'flex-start' },
              gap: 1,
              maxWidth: 600,
            }}
          >
            {!about || !about.description ? (
              <Typography variant="body1" color="primary.light" textAlign={{ xs: 'center', md: 'left' }}>
                Chargement des informations...
              </Typography>
            ) : (
              <Typography key={about.id} variant="body1" color="primary.light" textAlign={{ xs: 'center', md: 'left' }}>
                {about.description}
              </Typography>
            )}
            <BasicTab tabPanel={tabPanel} />
          </Box>
        </Stack>
      </Grid>
    </Grid>
  );
};
