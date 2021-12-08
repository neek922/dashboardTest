
// http://our.backend.api.test.local/project/all

export const initialState = () => ({
	project_id: 1,
	data: [{
		id: 1,
		name: 'column1',
	}, {
		id: 2,
		name: 'column2',
	}, {
		id: 3,
		name: 'column3',
	}],
});

const columns = (currentState = initialState(), action) => {
	return (action.type === 'columns')
		? action.payload()
		: currentState;

};

export	default columns;