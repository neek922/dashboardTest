export const initialState = () => ({

	});

const columns = (currentState = initialState(), action) => {
	return (action.type === 'columns')
		? action.payload()
		: currentState;

};

export	default columns;