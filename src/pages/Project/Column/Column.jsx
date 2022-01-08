import React from 'react';
import { useSelector } from 'react-redux';
import { 
	// Link,
	withRouter, 
} from 'react-router-dom';
import Task from '../Task';
import styled from 'styled-components';
import onDeleteColumn from './onDeleteColumn.js';
import TrelloActionButton from '../Task/TrelloActionButton';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import ActionEditTitle from './ActionEditTitle';

const ListContainer = styled.div`
		background-color: #dfe3e6;
		background: rgba(0, 0, 0, 0.2);
		border-radius: 3px;
		width: 300px;
		padding: 8px;
		margin-right: 8px;
		flex-wrap: wrap;
		

`;
const IconContainer = styled(IconButton)`
	color: rgba(0,0,0,.15) !important;
	float: right !important;
	padding: 3px !important;
`;

const TaskContainer = styled.div`
	padding: 0 4px;
	max-height: 400px;
	overflow: auto;

`;
const TitleContainer = styled(Typography)`
	font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Noto Sans,Ubuntu,Droid Sans,Helvetica Neue,sans-serif;
	font-size: 25px;
	font-weight: 400;
	line-height: 35px;
	color: white;
`;

let Column = ({ index, projectId, column, type }) => {
	
	const editIndex = column.editIndex;
	const tasks = useSelector((currentState)=> currentState.tasks.data);
	const tasksTest = useSelector((currentState)=> currentState.tasks.dataTest);
	const correctTask = (type === "test") ? tasksTest : tasks;
	const _onDeleteColumn = React.useCallback((e) => onDeleteColumn(e, index), [
		index,
	]);
	
	
	return ( <Draggable draggableId={String(column.id)} index={index}>
				{provided => (
				<div {...provided.draggableProps} ref={provided.innerRef} {...provided.dragHandleProps}>
					<Droppable droppableId={String(column.id)} type='tasks'>
						{provided => (
						<ListContainer {...provided.droppableProps} ref={provided.innerRef}>
							{type === 'test'
								? 	<TitleContainer variant="h6">{column.name }</TitleContainer>
								: 	<>
										<IconContainer 
											onClick={_onDeleteColumn}>
					       					<DeleteIcon />
				      					</IconContainer>
				      					<ActionEditTitle title={column.name} index={index}/>
				      						{editIndex == 0
				      							? <TitleContainer variant="h6">{column.name }</TitleContainer>
				      							: <React.Fragment/>}
			      					</>}			
			      			<TaskContainer>
								{correctTask.map((task, i) => {
									if(task.column_id == column.id)
										return <Task
											task={task}
											key={task.id} 
											index={i}
											delIndex={i}
											title={column.name}
											type={type}
										/>
								}
									)}
								{provided.placeholder}
							</TaskContainer>
							<TrelloActionButton columnID = {column.id} type={type}/>
						</ListContainer>
						)}
					</Droppable>
				</div>
				)}
			</Draggable>
	);
};

Column = React.memo(Column);
Column.defaultProps = {
};

export default withRouter(Column);