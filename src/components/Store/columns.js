
// http://our.backend.api.test.local/project/all

export const initialState = () => ({
	columnID: 10000,
	testData: [	
		{
			id: 1,
			name: 'Что нужно сделать',
			editIndex: 0,
		}, {
			id: 2,
			name: 'В работе',
			editIndex: 0,
		}, {
			id: 3,
			name: 'Выполнено',
			editIndex: 0,
		},
	],
	data: [	
		/*{
			id: 1,
			project_id: 1,
			name: 'text 1',
			editIndex: 0,
	}, {
			id: 2,
			project_id: 1,
			name: 'text 2',
			editIndex: 0,
	}*/
	],
	
	
});

const columns = (currentState = initialState(), action) => {
	return (action.type === 'columns')
		? action.payload()
		: currentState;

};

export	default columns;