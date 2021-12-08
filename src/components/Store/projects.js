export const initialState = () => ({
	currentProjectId: 1,
	data: [{
		id: 1,
		name: 'project name 1',
	}, {
		id: 19,
		name: 'project name 19',
	}],
});

const projects = (currentState = initialState(), action) => {
	return (action.type === 'projects')
		? action.payload()
		: currentState;

};

export	default projects;