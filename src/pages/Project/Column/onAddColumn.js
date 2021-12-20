import Store from '../../../components/Store';
import { useSelector } from 'react-redux';
import React from 'react';

const onAddColumn = (e) =>  {
	const currentState = Store().getState().columns;
	const textarea = document.getElementById('textFieldNameColumns');
	const value = textarea.value;
	
	Store().dispatch({
		type: 'columns',
		payload: () => {
			if (value){
				currentState.data.push({
					id: currentState.data.length+1, 
					name: value 
				});
				currentState.data = [ ...currentState.data ];
				return { ...currentState};
			} else {
				currentState.data.push({
					id: currentState.data.length+1, 
					name: `Column${currentState.data.length+1}`
				});
				currentState.data = [ ...currentState.data ];
				return { ...currentState};
			}
		}
	});
}

export default onAddColumn;