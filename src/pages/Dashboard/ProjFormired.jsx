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
import onDragEnd from './onDragEnd';


const ButtonWrapper = styled(Button)`
 	text-transform: none !important;
 	width: 150px !important;
 	height: 100%;
 	
 	
`;

const IconButtonWrapper = styled(IconButton)`
	z-index: 2;
	padding: 2px !important;
	align-items: flex-start !important;
	background-color: inherit !important;
	position: absolute !important;
	top: 5px;
	right: 5px;
}
`;

const ListContainer = styled.div`
	padding: 8px;
	height: 100px;
	position: relative;
`;
const ListContainertest = styled.div`
	padding: 8px;
	height: 100px;
	display: flex;
	flex-direction: row;
	position: relative;
`;

let ProjFormired = ({
	item,
	index,
	type
}) => {
	
	const _onDeleteProject = React.useCallback((e) => onDeleteProject(e, index), [
		index,
	]);
	const buttonTextColor = (item.backgroundColor === 'white') ? 'black' : 'white';
	const buttonIconColor = (item.backgroundColor === 'white') ? 'black' : 'white';
	
	return ( <Draggable draggableId={String(item.id)} index={index}>
				{provided => (
					<ListContainer {...provided.draggableProps} ref={provided.innerRef} {...provided.dragHandleProps}>
						
							<ButtonWrapper
								style={{backgroundColor: item.backgroundColor, color: buttonTextColor}}
								component={Link}
								to={`${item.userId}/${item.id}`}
								fullWidth
								variant="contained" 
								>
								{item.name}
							</ButtonWrapper>
							{type === 'all'
								?	<IconButtonWrapper
										style={{color: buttonIconColor}}
										key={index}
										onClick={_onDeleteProject}>
						    				<DeleteRoundedIcon/>
						    		</IconButtonWrapper>
						    	:	<React.Fragment/>}						
						
					</ListContainer>
				)}
			</Draggable>
				
		)
	
};
ProjFormired = React.memo(ProjFormired);
ProjFormired.defaultProps = {
};

export default ProjFormired;