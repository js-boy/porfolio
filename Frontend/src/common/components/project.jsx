import { Grid, Typography } from '@mui/material';
import { BasicTab } from '../utilities/tabs';


const isCentered = true;

const tabContent = [
  {
    title: 'All',
    data: [
      {
        thumbnail:
          'https://res.cloudinary.com/dwz5lx2k7/image/upload/v1668510229/ipyfsdigmsu12t28xs0i.jpg',
        title: 'React Portfolio 1',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
        links: [
          {
            title: 'GitHub',
            url: 'https://github.com',
          },
          {
            title: 'GitHub',
            url: 'https://github.com',
          },
        ],
      },
      {
        thumbnail:
          'https://res.cloudinary.com/dwz5lx2k7/image/upload/v1668510229/ipyfsdigmsu12t28xs0i.jpg',
        title: 'React Portfolio 2',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
        links: [
          {
            title: 'GitHub',
            url: 'https://github.com',
          },
          {
            title: 'GitHub',
            url: 'https://github.com',
          },
        ],
      },
      {
        thumbnail:
          'https://res.cloudinary.com/dwz5lx2k7/image/upload/v1668510229/ipyfsdigmsu12t28xs0i.jpg',
        title: 'React Portfolio 3',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
        links: [
          {
            title: 'GitHub',
            url: 'https://github.com',
          },
          {
            title: 'GitHub',
            url: 'https://github.com',
          },
        ],
      },
      {
        thumbnail:
          'https://res.cloudinary.com/dwz5lx2k7/image/upload/v1668510229/ipyfsdigmsu12t28xs0i.jpg',
        title: 'React Portfolio 4',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
        links: [
          {
            title: 'GitHub',
            url: 'https://github.com',
          },
          {
            title: 'GitHub',
            url: 'https://github.com',
          },
        ],
      },
      {
        thumbnail:
          'https://res.cloudinary.com/dwz5lx2k7/image/upload/v1668510229/ipyfsdigmsu12t28xs0i.jpg',
        title: 'React Portfolio 5',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
        links: [
          {
            title: 'GitHub',
            url: 'https://github.com',
          },
          {
            title: 'GitHub',
            url: 'https://github.com',
          },
        ],
      },
    ],
  },
  {
    title: 'Web',
    data: [
      {
        thumbnail:
          'https://res.cloudinary.com/dwz5lx2k7/image/upload/v1668510229/ipyfsdigmsu12t28xs0i.jpg',
        title: 'React web',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
        links: [
          {
            title: 'GitHub',
            url: 'https://github.com',
          },
          {
            title: 'GitHub',
            url: 'https://github.com',
          },
        ],
      },
    ],
  },
  {
    title: 'Mobile',
    data: [
      {
        thumbnail:
          'https://res.cloudinary.com/dwz5lx2k7/image/upload/v1668510229/ipyfsdigmsu12t28xs0i.jpg',
        title: 'React Portfolio',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
        links: [
          {
            title: 'GitHub',
            url: 'https://github.com',
          },
          {
            title: 'GitHub',
            url: 'https://github.com',
          },
        ],
      },
    ],
  },
];

export const ProjectSection = () => {
  return (
    <Grid
      container
      direction="column"
      gap={2}
      sx={{
        minHeight: '100vh',
        alignItems: 'center',
        padding: { xs: 1, sm: 1, md: 1 },
      }}
    >
      <Typography align="center" variant="h5">
        My Projects
      </Typography>
      <BasicTab
        centered={isCentered}
        tabPanel={tabContent}
        tabSection="Project"
      />
    </Grid>
  );
};
