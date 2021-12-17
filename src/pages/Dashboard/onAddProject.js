import Store from '../../components/Store';
import { useSelector } from 'react-redux';
import React from 'react';
import FormDialog from './FormDialog.js'

const onAddProject = (e) =>  {
	const currentState = Store().getState().projects;
	const textarea = document.getElementById('textFieldName');
	const value = textarea.value;
	
	Store().dispatch({
		type: 'projects',
		payload: () => {
			if (value){
				currentState.data.push({
					id: Date.now(), 
					name: `Project ${value}
				`});
				currentState.data = [ ...currentState.data ];
				
				return { ...currentState};
			}
			else {
				currentState.data.push({
					id: Date.now(), 
					name: `Project ${Date.now()}
				`});
				currentState.data = [ ...currentState.data ];

				return { ...currentState};
			}
		} 
	});
}

export default onAddProject;