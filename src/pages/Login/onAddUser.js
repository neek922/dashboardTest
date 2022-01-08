import Store from '../../components/Store';
import { useSelector } from 'react-redux';
import React from 'react';
import { connect } from 'react-redux';

const onAddUser = (e) =>  {
	const currentState = Store().getState().users;
	const userName = document.querySelector('#textRegFormLogin').value;
	const userPassword = document.querySelector('#textRegFormPassword').value;
	
		
	Store().dispatch({
		type: 'users',
		payload: () => {
			
			currentState.data.push({
					id: `id${currentState.userID}`, 
					name: userName,
					password: userPassword,
				});

			currentState.userID+=1;
			currentState.data = [ ...currentState.data ];
			return { ...currentState};
			
		}
	});
}

export default onAddUser;