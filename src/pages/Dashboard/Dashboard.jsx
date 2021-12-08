import React from 'react';
import { useSelector } from 'react-redux';
import Box from '@material-ui/core/Box';

let Dashboard = () => {
	return <Box 
		width={100}
		height={100}
		style={{
			backgroundColor: 'red',
		}} />;
};

Dashboard = React.memo(Dashboard);
Dashboard.defaultProps = {
};

export default Dashboard;

