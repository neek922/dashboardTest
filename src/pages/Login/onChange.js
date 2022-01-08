import Store from '../../components/Store';
import { useSelector } from 'react-redux';
import React from 'react';
import { connect } from 'react-redux';

const onChange = (e) =>  {
	const currentState = Store().getState().users;
	const data = Store().getState().users.data;
	let valueName = document.querySelector('#enterLogin').value;
	let valuePass = document.querySelector('#enterPassword').value;
	const user = data.find(user => user.name === valueName);
	
	Store().dispatch({
		type: 'users',
		payload: () => {
			if (user && user.password === valuePass) {
				currentState.access = true;
				currentState.currentUserId = user.id;
				return {...currentState};
			} else 
				currentState.access = false;
				return {...currentState};
		}
	});
}

export default onChange;