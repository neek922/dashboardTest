import Store from '../../../components/Store';
import { useSelector } from 'react-redux';

const onEditTitle = (e, index, text) =>  {
	const currentState = Store().getState().columns;
	
	
	Store().dispatch({
		type: 'columns',
		payload: () => { 
			
			    currentState.data[index].name = text;
			    currentState.data[index] = { ...currentState.data[index] };
				currentState.data = [ ...currentState.data ];
				return { ...currentState};
			}
	});
}

export default onEditTitle;