import Store from '../../../components/Store';
import { useSelector } from 'react-redux';

const onEdit = (e, index) =>  {
	const currentState = Store().getState().tasks;
	const textarea = document.getElementById('textFieldNameTasksEdit');
	
	Store().dispatch({
		type: 'tasks',
		payload: () => { 
			if(textarea.value){
			    currentState.data[index].text = textarea.value;
				currentState.data = [ ...currentState.data ];
				return { ...currentState};
			} else {
				currentState.data.splice(index, 1);
				currentState.data = [ ...currentState.data ];
				return { ...currentState};
			}
		}
	});
}

export default onEdit;