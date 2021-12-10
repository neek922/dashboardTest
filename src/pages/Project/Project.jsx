import React from 'react';
import { useSelector } from 'react-redux';
import { 
	// Link,
	withRouter, 
} from 'react-router-dom';
import Box from '@material-ui/core/Box';
import Column from './Column';



let Project = ({ history }) => {
	const a = history.location.pathname.substring(history.location.pathname.lastIndexOf('/')+1);
	
	const columns = useSelector((currentState)=> currentState.columns.data);
	const projects = useSelector((currentState)=> currentState.columns.project_id);
	console.log(columns[0].toProj == a);

	return <React.Fragment>
		{columns.map((item, i) => {
			if (a == item.toProj) {
				<Box display="flex">
					{ columns.map((item1, i1) => {
						return <Column
						key={i1}
						index={i1} />
						}
					)}
				</Box> 
			}})}
	</React.Fragment>;
};

Project = React.memo(Project);
Project.defaultProps = {
};

export default withRouter(Project);
