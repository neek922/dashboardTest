import React from 'react';
import { useSelector } from 'react-redux';
import { 	Grid,
			Button,
			Typography,
			IconButton, 
} from '@material-ui/core';
import { 
	// Link,
	withRouter, 
} from 'react-router-dom';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import onMount from './onMount.js';
import FormDialog from './FormDialog.js';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import onDragEnd from './onDragEnd';
import ProjFormired from './ProjFormired';


const ListContainer = styled.div`
	display: flex;
	flex-direction: row;
	padding: 0px 0 8px 0;
	margin: 40px 0 15px 0;
	overflow-y: hidden;
`;

const ButtonWrapper = styled(Button)`
 	height: 100px;
 	text-transform: none;

`;

const TextWrapper = styled.div`
	background-color: #172b4d; 
	color: white;
	text-align: center;
	width: 100%;
	position: absolute;
	top: 0px;
	left: 0px;
	font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Noto Sans,Ubuntu,Droid Sans,Helvetica Neue,sans-serif;
	font-size: 25px;
	font-weight: 400;
	line-height: 35px;
	opacity: 0.9;
`;

const TextContainer = styled.div` 
	color: black;
	font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Noto Sans,Ubuntu,Droid Sans,Helvetica Neue,sans-serif;
	font-size: 40px;
	font-weight: 400;
	line-height: 35px;
	opacity: 0.9;
	margin: 0 0 0 10px;
`;

let Dashboard = (history) => {
	const data = useSelector((reduxState)=> reduxState.projects.data);
	const favorites = useSelector((reduxState)=> reduxState.projects.favorites);
	const currentState = useSelector((reduxState)=> reduxState.projects);
	const id = history.location.pathname.substring(history.location.pathname.lastIndexOf('/')+1);

	
	/*React.useEffect(() => {
		onMount();
	}, []);*/

	
	

	return (<DragDropContext onDragEnd={onDragEnd}>
				<div>
					<TextWrapper>TrelloBoard</TextWrapper>
						<Droppable droppableId="all-projects" direction="horizontal" type="projects">
							{provided => (
								<ListContainer {...provided.droppableProps} ref={provided.innerRef}>
									{data.map((item, i) => (
										(item.userId == id) 
											?	<ProjFormired item={item} index={i} key={i} type='all'/>
											:	<React.Fragment/>
									))}
									{provided.placeholder}
									<FormDialog userId={id} style={{position: 'relative', top: '47px'}}/>
									
								</ListContainer>	
							)}		
						</Droppable>
						<hr/>
						<TextContainer>Favorits</TextContainer>
						<Droppable droppableId="favorit" direction="horizontal" type="projects">
							{provided => (
								<ListContainer {...provided.droppableProps} ref={provided.innerRef}>
									{favorites.map((item, i) => (
										(item.userId == id) 
											?	<ProjFormired item={item} index={i} key={i} type='favorit'/>
											:	<React.Fragment/>
									))}
									{provided.placeholder}
								</ListContainer>
							)}
						</Droppable>
					</div>
		</DragDropContext>
	);
};

Dashboard = React.memo(Dashboard);
Dashboard.defaultProps = {
};

export default withRouter(Dashboard);

