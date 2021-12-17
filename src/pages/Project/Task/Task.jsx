import React from 'react';
import { useSelector } from 'react-redux';
import Box from '@material-ui/core/Box';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import FormDialog from './FormDialog.js'

const DivWrapper = styled.div`
	text-align: left !important;
`;

let Task = ({ index }) => {
	const tasks = useSelector((currentState)=> currentState.tasks.data);
	
	return <React.Fragment>
		{tasks.map((item, i) => {
			if(index == item.column_id){
			return <DivWrapper
					key={i}>
						<div>
							{item.text}
						</div>
					</DivWrapper>
				}
			})} <FormDialog index = {index}/>
	</React.Fragment>;
};

Task = React.memo(Task);
Task.defaultProps = {
};

export default Task;