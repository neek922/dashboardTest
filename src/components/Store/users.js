export const initialState = () => ({
	access: false,
	currentUserId: 0, 
	userID: 2,
	data: [
		{
			id: `id${1}`,
			name: 'admin',
			password: 'admin',

		}, 
	],
});

const users = (currentState = initialState(), action) => {
	return (action.type === 'users')
		? action.payload()
		: currentState;

};

export	default users;