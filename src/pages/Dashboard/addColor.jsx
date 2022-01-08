import Store from '../../components/Store';
import { useSelector } from 'react-redux';

const addColor = (color) =>  {
	const currentState = Store().getState().projects;
	
	Store().dispatch({
		type: 'projects',
		payload: () => {
				currentState.currentColor = color;
				return { ...currentState};
			}
	});
}

export default addColor;