import React from 'react';
import { useSelector } from 'react-redux';
import Box from '@material-ui/core/Box';



let Task = ({ index }) => {
	const tasks = useSelector((currentState)=> currentState.tasks.data);
	

	return <React.Fragment>
		{tasks.map((item, i) => {
			return <div
					key={i}
					index={i}>
						<p>
							{item.text}
						</p>
					</div>
			})}
	</React.Fragment>;
};

Task = React.memo(Task);
Task.defaultProps = {
};

export default Task;