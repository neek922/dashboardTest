import React from 'react';
import { useSelector } from 'react-redux';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Task from '../Task';

let Column = ({ index }) => {
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
					<Box 
						color="white" 
						bgcolor="palevioletred"
						display="flex"
						minWidth="200px"
						height="200px"
						key={i}
						index={i}> 
						{item.name}
						<Task></Task>
					</Box>
				</Grid>
			})}
		</Grid>
	</React.Fragment>;
};

Column = React.memo(Column);
Column.defaultProps = {
};

export default Column;