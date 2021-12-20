import Store from '../../../components/Store';
import { useSelector } from 'react-redux';

const onDeleteColumn = (e, index) =>  {
	const currentState = Store().getState().columns;
	
	Store().dispatch({
		type: 'columns',
		payload: () => {
				currentState.data.splice(index, 1);
				currentState.data = [ ...currentState.data ];
				return { ...currentState};
			}
	});
}

export default onDeleteColumn;