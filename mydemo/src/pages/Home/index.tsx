import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Grid } from '@mui/material';

const Home = () => {
	return (
		<Container maxWidth="sm">
			<Grid container spacing={4}>
				<Grid item xs={12}>
					<Link to="/signup">Sign up</Link>
				</Grid>
				<Grid item xs={12}>
					<Link to="/users">Users</Link>
				</Grid>
			</Grid>
		</Container>
	);
};

export { Home };
