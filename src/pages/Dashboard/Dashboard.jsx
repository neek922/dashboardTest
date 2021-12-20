import React from 'react';
import { useSelector } from 'react-redux';
import { 	Grid,
			Button,
			Typography,
			IconButton, } from '@material-ui/core';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import onMount from './onMount.js';
import FormDialog from './FormDialog.js';
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded';
import onDeleteProject from './onDeleteProject.js';
import { useDrag } from 'react-dnd';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const ButtonWrapper = styled(Button)`
 	height: 100px;
}
`;

const IconButtonWrapper = styled(IconButton)`
	position: relative;
	top: -125px;
	left: 284px;
}
`;
let ProjFormired = ({
	index,
}) => {
	const value = useSelector((currentState)=> currentState.projects.data[index]);
	const _onDeleteProject = React.useCallback((e) => onDeleteProject(e, index), [
		index,
	]);
	
	return <div>
			<ButtonWrapper
				component={Link}
				to={`project/${value.id}`}
				fullWidth
				variant="contained" 
				color="primary">
				{value.name}
			</ButtonWrapper>
			<IconButtonWrapper 
				key={index}
				variant="outlined" 
				color="primary" 
				onClick={_onDeleteProject}>
       				<DeleteRoundedIcon/>
      		</IconButtonWrapper>
	</div>;
};
ProjFormired = React.memo(ProjFormired);
ProjFormired.defaultProps = {
};

let Dashboard = () => {
	const data = useSelector((reduxState)=> reduxState.projects.data);
	const favorites = useSelector((reduxState)=> reduxState.projects.favorites);
	
	React.useEffect(() => {
		onMount();
	}, []);
	
	return (<DndProvider backend={HTML5Backend}>
				<div>
					<Typography variant="h3">Мои доски</Typography>
					<Grid 
						container
						spacing={3}>
						{data.map((item, i) => {
							return <Grid
									key={i}
									index={i} 
									item
									xs={3}>
										<ProjFormired
											key={i}
											index={i} />
									</Grid>;
							})}
						<FormDialog/>
					</Grid>
				<div><hr/>
					<Typography variant="h3" gutterTop>Избранное</Typography>
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
	</DndProvider>
	);
};

Dashboard = React.memo(Dashboard);
Dashboard.defaultProps = {
};

export default Dashboard;

