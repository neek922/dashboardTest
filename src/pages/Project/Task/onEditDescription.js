import Store from '../../../components/Store';
import { useSelector } from 'react-redux';

const onEditDescription = (e, index, textDescription, type) =>  {
	const currentState = Store().getState().tasks;
	const correctData = (type === 'test') ? 'dataTest' : 'data';
	
	
	Store().dispatch({
		type: 'tasks',
		payload: () => { 
			
			    currentState[correctData][index].description = textDescription;
			    currentState[correctData][index] = {...currentState[correctData][index]};
				currentState[correctData] = [ ...currentState[correctData] ];
				return { ...currentState};
			
		}
	});
}

export default onEditDescription;


