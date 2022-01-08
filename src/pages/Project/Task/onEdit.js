import Store from '../../../components/Store';
import { useSelector } from 'react-redux';

const onEdit = (e, index, text, type) =>  {
	const currentState = Store().getState().tasks;
	const correctData = (type === 'test') ? 'dataTest' : 'data';
	
	console.log(index, text, type)
	Store().dispatch({
		type: 'tasks',
		payload: () => { 
			if(text){
				console.log(currentState)
			    currentState[correctData][index].text = text;
			    currentState[correctData][index] = { ...currentState[correctData][index]};
				currentState[correctData] = [ ...currentState[correctData] ];
				return { ...currentState};
			} else {
				currentState[correctData].splice(index, 1);
				currentState[correctData] = [ ...currentState[correctData] ];
				return { ...currentState};
			}
		}
	});
}

export default onEdit;