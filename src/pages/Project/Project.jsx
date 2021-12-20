import React from 'react';
import { useSelector } from 'react-redux';
import { 
	// Link,
	withRouter, 
} from 'react-router-dom';
import Box from '@material-ui/core/Box';
import Column from './Column';
import onMount from './onMount.js';
import Grid from '@material-ui/core/Grid';
import FormDialog from './Column/FormDialog.js';

let Project = () => {
	const columns = useSelector((currentState)=> currentState.columns.data);
	let currentProj = useSelector((currentState)=> currentState.projects.currentProjectId);
	
	React.useEffect(() => {
		onMount();
	}, []);
	
	return <React.Fragment>
				<Grid
					container
					spacing={3}>
					{columns.map((item, i) => {
							return <Grid
									key={i} 
									item
									xs={3}>
										<Column
											key={i}
											index={i}/>
							</Grid>
					})}
					<FormDialog/>
				</Grid>
	</React.Fragment>;
};

Project = React.memo(Project);
Project.defaultProps = {
};

export default Project;
