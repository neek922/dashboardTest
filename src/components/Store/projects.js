export const initialState = () => ({

	});

const projects = (currentState = initialState(), action) => {
	return (action.type === 'projects')
		? action.payload()
		: currentState;

};

export	default projects;