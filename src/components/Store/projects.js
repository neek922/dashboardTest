export const initialState = () => ({
	currentProjectId: 1,
	data: [],
	favorites: [{
	id: 1,
	name: 'project1',
}, {
	id: 4,
	name: 'project2',
}],

});

const projects = (currentState = initialState(), action) => {
	return (action.type === 'projects')
		? action.payload()
		: currentState;

};

export	default projects;