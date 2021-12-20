import React from 'react';
import { useSelector } from 'react-redux';
import Box from '@material-ui/core/Box';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import FormDialogEdit from '../Task/FormDialogEdit.js';

const DivWrapper = styled.div`
	text-align: left !important;
	textTransform: none !important;
`;

let Task = ({ 
	index,
}) => {
	const tasks = useSelector((currentState)=> currentState.tasks.data);
	const _onEdit = React.useCallback((e) => onEdit(e, index), [
		index,
	]);

	return <React.Fragment>
				<DivWrapper key={index}>
							<FormDialogEdit 
								index= {index}
								value= {tasks[index].text}/>
					</DivWrapper>
	</React.Fragment>;
};

Task = React.memo(Task);
Task.defaultProps = {
};

export default Task;