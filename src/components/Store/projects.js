export const initialState = () => ({
	currentProjectId: 1,
	data: [{
		id: 1,
		name: 'project 1',
	}, {
		id: 19,
		name: 'project 19',
	}, {
		id: 20,
		name: 'project 20',
	}, {
		id: 21,
		name: 'project 21',
	}],
});

const projects = (currentState = initialState(), action) => {
	return (action.type === 'projects')
		? action.payload()
		: currentState;

};

export	default projects;