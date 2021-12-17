
// http://our.backend.api.test.local/project/all

export const initialState = () => ({
	data: [],
});

const columns = (currentState = initialState(), action) => {
	return (action.type === 'columns')
		? action.payload()
		: currentState;

};

export	default columns;