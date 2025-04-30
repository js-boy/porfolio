/* eslint-disable import/extensions */
import  { useRef, useState} from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

import {
	AppBar,
	Grid,
	IconButton,
	// Toolbar,
	Typography,
	Link as MuiLink,
	ButtonBase,
} from '@mui/material';
import SegmentOutlinedIcon from '@mui/icons-material/SegmentOutlined';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import { Link } from 'react-router-dom';
import { DrawerBar } from '../utilities/drawer';
import { navLinks } from '../constant/navLink';



export const Navbar = ({activeSection, setActiveSection}) => {

	const [open, setOpen] = useState(false);

	const handleNavClick = (section) => {
		try {
			axios.get(`http://localhost:8000/api/active-sections/?section=${section}`);
			setActiveSection(section);
		} catch (error) {
			console.error("Erreur mise a jour :", error);
		}
	}


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

	return (
		<AppBar
			position="fixed"
			elevation={0}
			component="nav"
			style={{
				background: !navBack.current ? `rgb(0, 0, 0,0)` : `hsla(0,0%,7%,.10)`,
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
			sx={
				{
					// marginInline: 'auto',
				}
			}
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
							color : activeSection === page.name ? 'secondary.main' : 'black',
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
			<Grid item sx={{ display: { xs: 'none', md: 'flex' } }}>
				<ButtonBase
					aria-label="My resume"
					to="#"
					sx={{
						margin: '15px 0px',
						textTransform: 'capitalize',
						// borderRadius: 2,
						// padding: '10px 30px',
					}}
						color="secondary"
						variant="main"
						component={Link}
					>
						My Resume
				</ButtonBase>
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
	setActiveSection: PropTypes.func.isRequired,
};