export const initialState = () => ({
	deleteIndex: 0,
	currentColor: "rgba(206, 174, 230, 1)",
	totalProject: 50000,
	data: [],

	favorites: [
		
	],

});

const projects = (currentState = initialState(), action) => {
	return (action.type === 'projects')
		? action.payload()
		: currentState;

};

export	default projects;