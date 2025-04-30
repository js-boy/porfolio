import { Grid, Typography, Avatar } from '@mui/material';
import { useState, useEffect} from 'react';
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

	const [About, setAbout] = useState([]);

	useEffect(() => {
		axios.get('http://localhost:8000/api/about/')
		.then(res => setAbout(res.data))
		.catch(() => setAbout([]));
	},[]);


	return (
		<Grid item container direction="column" gap={6} alignItems="center">
		<Grid item>
			<Typography variant="h2">About Me</Typography>
		</Grid>
		<Grid item>
			<Grid container justifyContent="space-between">
				<Grid
					xs={12}
					md={3}
					item
					sx={{
						display: {
							xs: 'none',
							sm: 'none',
							md: 'flex',
						},
					}}
				>
					<Avatar
						src="/images/img_user.JPG"
						sx={{
							width: { xs: 100, sm: 170 },
							height: { xs: 100, sm: 170 },
							objectFit : 'cover'
						}}
					/>
				</Grid>
				<Grid item xs={12} md={9} container direction="column" gap={3}>
				{ !About || !About.description ? (
						<Typography variant="body1" color="primary.light">
							Chargement des informations...
						</Typography>
					) : (
						<Typography key={About.id} variant="body1" color="primary.light">
							{About.description}
						</Typography>
					)
				}
					<BasicTab tabPanel={tabPanel} />
				</Grid>
			</Grid>
		</Grid>
	</Grid>
	);
	
};
