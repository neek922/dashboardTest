export const initialState = () => ({
	taskID: 11000,
	editIndex: 0,
	data: [
	/*{
		id: 2222222,
		column_id: 1,
		text: 'text 1',
		editIndex: 0,
		description: 'd',
		coments: [0, 1, 2],	
	}, {
		id: 33333333333,
		column_id: 2,
		text: 'text 2',
		editIndex: 0,
		description: 'd',
		coments: [0, 1, 2],

	}*/],
	dataTest: [
		{
			id: 2222222,
			column_id: 1,
			text: 'Изучить основы JS',
			editIndex: 0,
			description: 'd',
			coments: [0, 1, 2],	
		},{
			id: 33333333333,
			column_id: 2,
			text: 'Изучить CSS',
			editIndex: 0,
			description: 'd',
			coments: [0, 1, 2],

		},{
			id: 44444,
			column_id: 3,
			text: 'Изучить HTML',
			editIndex: 0,
			description: 'd',
			coments: [0, 1, 2],

		}
	],
});

const tasks = (currentState = initialState(), action) => {
	return (action.type === 'tasks')
		? action.payload()
		: currentState;

};

export	default tasks;