import React from 'react';
import { useSelector } from 'react-redux';
import { Typography,
		 Card,
		 CardContent,
		 Button } from '@material-ui/core/';
import { Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';
import ActionLaunchForm from './ActionLaunchForm';
import ActionEditText from './ActionEditText';

const DivWrapper = styled.div`
	text-align: left !important;
`;

const CardContainer = styled.div`
	margin-bottom: 8px;
`;



let Task = ({
	task, 
	index,
	title,
	type,
}) => {
	
	const _onEdit = React.useCallback((e) => onEdit(e, index), [
		index,
	]);
	
	return (<Draggable draggableId={String(type+task.id)} index={index}>
				{provided => (
				<CardContainer ref={provided.innerRef} 
				{...provided.draggableProps} 
				{...provided.dragHandleProps}>
					<Card>
						<CardContent>
							<ActionLaunchForm 
									index = {index}
									value = {task.text}
									title = {title}
									description={task.description}
									coments={task.coments}
									type={type}/>
							    <ActionEditText index= {index}
									value = {task.text}
									type={type}/>		
						</CardContent>
				    </Card>
				</CardContainer>
				)}
			</Draggable>
	);
};

Task = React.memo(Task);
Task.defaultProps = {
};

export default Task;