import Store from '../../../components/Store';
import { useSelector } from 'react-redux';

const onAddComent = (e, index, textComent, type) =>  {
	const currentState = Store().getState().tasks;
	const correctData = (type === 'test') ? 'dataTest' : 'data';

	Store().dispatch({
		type: 'tasks',
		payload: () => { 
			if(textComent){
				currentState[correctData][index].coments.push(textComent);
				currentState[correctData][index].coments = [...currentState[correctData][index].coments];
				currentState[correctData][index] = {...currentState[correctData][index]};
				currentState[correctData] = [ ...currentState[correctData] ];
				return { ...currentState};
			} else {
				return { ...currentState};
			}
		}
	});
}

export default onAddComent;