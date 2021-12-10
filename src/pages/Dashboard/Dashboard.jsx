import React from 'react';
import { useSelector } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ButtonWrapper = styled(Button)`
 	height: 100px;
}
`;

let Dashboard = () => {
	const data = useSelector((reduxState)=> reduxState.projects.data);

	return <Grid 
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
	</Grid>;
	
};

Dashboard = React.memo(Dashboard);
Dashboard.defaultProps = {
};

export default Dashboard;

