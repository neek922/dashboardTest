import React from 'react';
import { useSelector } from 'react-redux';
import Box from '@material-ui/core/Box';

let Column = ({ index }) => {

	return <React.Fragment>
		<Box 
			display="flex"
			minWidth="200px">
			{}
		</Box>
	</React.Fragment>;
};
Column = React.memo(Column);
Column.defaultProps = {
};

export default Column;