import React from 'react';
import { useSelector } from 'react-redux';
import { 
	// Link,
	withRouter, 
} from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Task from '../Task';
import styled from 'styled-components';
import FormDialog from '../Task/FormDialog.js';
import Typography from '@material-ui/core/Typography';
import onDeleteColumn from './onDeleteColumn.js';
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded';
import IconButton from '@material-ui/core/IconButton';

const PaperWrapper = styled(Paper)`
	color: white;
	height: auto;
	display: flow-root;
	min-width: 200px;
	min-height: 200px;
	background-color: palevioletred;
	text-align: center;
`;
const IconButtonWrapper = styled(IconButton)`
	position: relative;
	top: -214px;
	left: 284px;
}
`;

let Column = ({ index }) => {
	//const projectId = history.location.pathname.substring(history.location.pathname.lastIndexOf('/')+1);
	const columns = useSelector((currentState)=> currentState.columns.data);
	const _onDeleteColumn = React.useCallback((e) => onDeleteColumn(e, index), [
		index,
	]);
	const tasks = useSelector((currentState)=> currentState.tasks.data);
	
	return <React.Fragment>
				<PaperWrapper
					key={index}
					index={index}>  
						<Typography variant="h6">{columns[index].name}</Typography>
						{tasks.map((item, i) => {
							if(columns[index].id == item.column_id){
								return <Task
										key={i}
										index={i}
										delIndex={i}/>
									} else return <React.Fragment/>
						})}
					<FormDialog index = {columns[index].id}/>
				</PaperWrapper>
				<IconButtonWrapper 
					variant="outlined" 
					color="secondary" 
					onClick={_onDeleteColumn}>
	       				<DeleteRoundedIcon/>
      			</IconButtonWrapper>
	</React.Fragment>;
};

Column = React.memo(Column);
Column.defaultProps = {
};

export default withRouter(Column);