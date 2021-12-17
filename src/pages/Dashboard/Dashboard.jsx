import React from 'react';
import { useSelector } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import onMount from './onMount.js';
import FormDialog from './FormDialog.js'

const ButtonWrapper = styled(Button)`
 	height: 100px;
}
`;

let Dashboard = ({
	index,
}) => {
	const data = useSelector((reduxState)=> reduxState.projects.data);
	const favorites = useSelector((reduxState)=> reduxState.projects.favorites);

	React.useEffect(() => {
		onMount();
	}, []);
	
	return (<div><h1>Мои доски</h1>
				<Grid 
					container
					spacing={3}>
					{data.map((item, i) => {
						return <Grid
							key={item.id} 
							item
							xs={3}>
							<ButtonWrapper
								component={Link}
								to={`project/${item.id}`}
								fullWidth
								variant="contained" 
								color="primary">
								{item.name}
							</ButtonWrapper>
						</Grid>;
					})}
				<FormDialog/>
				</Grid>
			<div>
				<h1>Избранное</h1>
				<Grid 
				container
				spacing={3}>
				{favorites.map((item, i) => {
					return <Grid
						key={item.id} 
						item
						xs={3}>
						<ButtonWrapper
							component={Link}
							to={`project/${item.id}`}
							fullWidth
							variant="contained" 
							color="primary">
							{item.name}
						</ButtonWrapper>
					</Grid>;
			})}
			</Grid>
		</div>
	</div>
	);
};

Dashboard = React.memo(Dashboard);
Dashboard.defaultProps = {
};

export default Dashboard;

