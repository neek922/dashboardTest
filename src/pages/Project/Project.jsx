import React from 'react';
import { useSelector } from 'react-redux';
import { 
	// Link,
	withRouter, 
} from 'react-router-dom';
import Column from './Column';
import onMount from './onMount.js';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';
import TrelloActionButton from './Task/TrelloActionButton';
import onDragEnd from '../Dashboard/onDragEnd';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';


const BackgroundFon = styled.div`
	min-width: 100%;
	min-height: 100%;
	position: absolute;
	top: 0px;
	left: 0px;
`;

const ListContainer = styled.div`
	display: flex;
	flex-direction: row;
	position: absolute;
	padding-top: 40px;
	padding-left: 8px;
	overflow-y: hidden;
	width: calc(100% - 20px);
	user-select: none;
	white-space: nowrap;
`;

/*const DivWrapper = styled.div`

	height: 100%;
	width: 100%
	overflow: auto;
`;*/

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


let Project = (history) => {
	const projects = useSelector((currentState)=> currentState.projects.data);
	const columns = useSelector((currentState)=> currentState.columns.data);
	const projectId = history.location.pathname.substring(history.location.pathname.lastIndexOf('/')+1);
	const projectsData = useSelector((currentState)=> currentState.projects.data);
	const projectsFavorit = useSelector((currentState)=> currentState.projects.favorites);
	const curentProject = projectsData.find(item => item.id == projectId) || projectsFavorit.find(item => item.id == projectId);
	const backgroundColor = curentProject.backgroundColor;
	
	
	/*React.useEffect(() => {
		onMount();
	}, []);
	*/
	
	return (<DragDropContext onDragEnd={onDragEnd}>
				<BackgroundFon style={{backgroundColor: backgroundColor, }}>
						<TextWrapper>TrelloBoard</TextWrapper>
							<Droppable droppableId="all-column" direction="horizontal" type="columns">
							{provided => (
								<ListContainer {...provided.droppableProps} ref={provided.innerRef}>
										{columns.map((column, i) => {
											if(column.project_id === projectId)
												return <Column
													key={column.id} 
													index={i}
													projectId={projectId}
													column={column}
													/>
										})}
										{provided.placeholder}
									<TrelloActionButton column projectId={projectId}/>
								</ListContainer>
								)}
							</Droppable>	
				</BackgroundFon>
		</DragDropContext>
	);
};

Project = React.memo(Project);
Project.defaultProps = {
};

export default withRouter(Project);
