import axios from 'axios';
import Store from '../../components/Store';

const onMount = async () => {
	const projectId = window
		.location
		.pathname
		.substring(window.location.pathname.lastIndexOf('/') + 1);

	const response = await axios.get('http://0.0.0.0:3001/columns/'+ projectId);
	const columns = Store().getState().columns;

	columns.data = response.data;

	Store().dispatch({
		type: 'columns',
		payload: () => ({ ...columns }),
	});
};

export default onMount;
