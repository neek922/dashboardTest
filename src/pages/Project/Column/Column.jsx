import React from 'react';
import { useSelector } from 'react-redux';
import { 
	// Link,
	withRouter, 
} from 'react-router-dom';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Task from '../Task';
import styled from 'styled-components';
import FormDialog from './FormDialog.js'

const BoxWrapper = styled(Box)`
	color: white;
	height: auto;
	display: flow-root;
	min-width: 200px;
	min-height: 200px;
	background-color: palevioletred;
	text-align: center;
`;

let Column = ({ history }) => {
	const projectId = history.location.pathname.substring(history.location.pathname.lastIndexOf('/')+1);
	const columns = useSelector((currentState)=> currentState.columns.data);
	
	return <React.Fragment>
		<Grid
			container
			spacing={3}>
			{columns.map((item, i) => {
					return <Grid
						key={item.id} 
						item
						xs={3}>
						<BoxWrapper
							key={i}
							index={i}>  
							{item.name}
							<Task index={item.id}/>
						</BoxWrapper>
					</Grid>
			})}
			<FormDialog/>
		</Grid>
	</React.Fragment>;
};

Column = React.memo(Column);
Column.defaultProps = {
};

export default withRouter(Column);