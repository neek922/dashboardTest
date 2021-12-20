import Store from '../../components/Store';
import { useSelector } from 'react-redux';

const onDeleteProject = (e, index) =>  {
	const currentState = Store().getState().projects;
	
	Store().dispatch({
		type: 'projects',
		payload: () => {
				currentState.data.splice(index, 1);
				currentState.data = [ ...currentState.data ];
				return { ...currentState};
			}
	});
}

export default onDeleteProject;