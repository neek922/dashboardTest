import Store from '../../../components/Store';
import { useSelector } from 'react-redux';

const onAddTask = (e, index) =>  {
	const currentState = Store().getState().tasks;
	const textarea = document.getElementById('textFieldNameTasks');
	const value = textarea.value;
	
	Store().dispatch({
		type: 'tasks',
		payload: () => { 
			if(value){
				currentState.data.push({id: currentState.data.length+1, column_id: index, text: value,  });
			
				currentState.data = [ ...currentState.data ];
				return { ...currentState};
			} else {
				return { ...currentState};
			}
		}
	});
}

export default onAddTask;