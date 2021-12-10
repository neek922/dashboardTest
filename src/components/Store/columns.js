
// http://our.backend.api.test.local/project/all

export const initialState = () => ({
	project_id: [1, 19, 20, 21],
	data: [{
		id: 1,
		name: 'column1',
		toProj: 1,
	}, {
		id: 2,
		name: 'column2',
		toProj: 19,
	}, {
		id: 3,
		name: 'column3',
		toProj: 20	,
	}],
});

const columns = (currentState = initialState(), action) => {
	return (action.type === 'columns')
		? action.payload()
		: currentState;

};

export	default columns;