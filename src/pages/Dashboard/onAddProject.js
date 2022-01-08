import Store from '../../components/Store';
import { useSelector } from 'react-redux';
import React from 'react';

const onAddProject = (e, id ) =>  {
	const currentState = Store().getState().projects;
	const textarea = document.getElementById('textFieldName');
	const value = textarea.value;
	let currentColor = Store().getState().projects.currentColor;
	
	Store().dispatch({
		type: 'projects',
		payload: () => {
			if (value){
				currentState.data.push({
					id: `project${currentState.totalProject}`, 
					name: `Project ${value}`,
					backgroundColor: currentColor,
					userId: id,
				});
				currentState.totalProject+=1;
				currentState.currentColor = "rgba(206, 174, 230, 1)";
				currentState.data = [ ...currentState.data ];
				return { ...currentState};
			}
			else {
				currentState.data.push({
					id: `project${currentState.totalProject}`, 
					name: `Project ${currentState.totalProject}`,
					backgroundColor: currentColor,
					userId: id,
				});
				currentState.totalProject+=1;
				currentState.currentColor = "rgba(206, 174, 230, 1)";
				currentState.data = [ ...currentState.data ];
				return { ...currentState};
			}
		} 
	});
}

export default onAddProject;