export const initialState = () => ({
	data: [{
		id: 1,
		column_id: 1,
		text: 'text 1'
	}, {
		id: 1,
		column_id: 2,
		text: 'text 2'
	}],
});

const tasks = (currentState = initialState(), action) => {
	return (action.type === 'tasks')
		? action.payload()
		: currentState;

};

export	default tasks;