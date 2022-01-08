import Store from '../../../components/Store';
import { useSelector } from 'react-redux';

const onAddTask = (e, columnID, text, type) =>  {
	const currentState = Store().getState().tasks;
	const correctData = (type === 'test') ? 'dataTest' : 'data';

	Store().dispatch({
		type: 'tasks',
		payload: () => { 
			if(text){
				currentState[correctData].push({
					id: `task-${currentState.taskID}`, 
					column_id: columnID, 
					text: text,
					editIndex: 0,
					coments: [],  });
				currentState.taskID+=1;
				currentState[correctData] = [ ...currentState[correctData] ];
				return { ...currentState};
			} else {
				return { ...currentState};
			}
		}
	});
}

export default onAddTask;