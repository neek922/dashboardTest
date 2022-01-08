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
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import onDrag from './onDrag';


const ButtonWrapper = styled(Button)`
 	height: 100px;
 	text-transform: none !important;
}
`;

const IconButtonWrapper = styled(IconButton)`
	position: absolute;
	padding: 0px;
}
`;

let ProjFormired = ({
	index,
	projectID,
}) => {
	const value = useSelector((currentState)=> currentState.projects.data[index]);
	const _onDeleteProject = React.useCallback((e) => onDeleteProject(e, index), [
		index,
	]);
	
	return ( <Draggable draggableId={String(projectID)} index={index}>
				{provided => (
				<div {...provided.draggableProps} ref={provided.innerRef} {...provided.dragHandleProps}>
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
						color="primary"
						variant="outlined" 
						onClick={_onDeleteProject}>
		       				<DeleteRoundedIcon/>
		      		</IconButtonWrapper>
		      	</div>
	      	)}
	    </Draggable>
			
		)
	
};
ProjFormired = React.memo(ProjFormired);
ProjFormired.defaultProps = {
};




let Dashboard = () => {
	const data = useSelector((reduxState)=> reduxState.projects.data);
	const favorites = useSelector((reduxState)=> reduxState.projects.favorites);
	console.log('data', data);
	React.useEffect(() => {
		onMount();
	}, []);

	
	

	return (<DragDropContext onDragEnd={onDrag}>
				<Droppable droppableId="all-projects" direction="horizontal" type="projects">
					{provided => (
					<div {...provided.droppableProps} ref={provided.innerRef}>
						<Typography variant="h3">Мои доски</Typography>
							<div>
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
														index={i}
														projectID={item.id}
														 />
											</Grid>;
										})}
								<FormDialog style={{position: 'relative',
													left: '-3px',
													top: '47px'}}/>
								</Grid>
							</div>			
					<hr/>
					<div>
						<Typography variant="h3">Избранное</Typography>
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
				{provided.placeholder}
			</div>
		)}
		</Droppable>
	</DragDropContext>
	);
};

Dashboard = React.memo(Dashboard);
Dashboard.defaultProps = {
};

export default Dashboard;

