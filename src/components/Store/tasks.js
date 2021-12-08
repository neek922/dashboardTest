export const initialState = () => ({

	});

const tasks = (currentState = initialState(), action) => {
	return (action.type === 'tasks')
		? action.payload()
		: currentState;

};

export	default tasks;