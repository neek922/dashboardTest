import axios from 'axios';
import Store from '../../components/Store';

const onMount = async () => {
	const response = await axios.get('http://0.0.0.0:3001/projects');
	const projects = Store().getState().projects;

	projects.data = response.data;

	Store().dispatch({
		type: 'projects',
		payload: () => ({ ...projects }),
	});
};

export default onMount;
