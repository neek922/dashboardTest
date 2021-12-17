import React from 'react';
import { useSelector } from 'react-redux';
import { 
	// Link,
	withRouter, 
} from 'react-router-dom';
import Box from '@material-ui/core/Box';
import Column from './Column';
import onMount from './onMount.js';

let Project = () => {
	const columns = useSelector((currentState)=> currentState.columns.data);
	let currentProj = useSelector((currentState)=> currentState.projects.currentProjectId);
	
	React.useEffect(() => {
		onMount();
	}, []);
	
	return <React.Fragment>
		<Column/>
	</React.Fragment>;
};

Project = React.memo(Project);
Project.defaultProps = {
};

export default Project;
