import Store from '../../../components/Store';
import { useSelector } from 'react-redux';
import React from 'react';
import { connect } from 'react-redux';

const onAddColumn = (e, text, projectId) =>  {
	const currentState = Store().getState().columns;
			
	Store().dispatch({
		type: 'columns',
		payload: () => {
			if (text){
				currentState.data.push({
					id: `column-${currentState.columnID}`, 
					name: text,
					project_id: projectId,
					editIndex: 0,
				});
				currentState.columnID += 1;
				currentState.data = [ ...currentState.data ];
				return { ...currentState};
			} else {
				currentState.data.push({
					id: `column-${currentState.columnID}`, 
					name: `Column${currentState.data.length+1}`,
					project_id: projectId,
					editIndex: 0,
				});
				currentState.columnID += 1;
				currentState.data = [ ...currentState.data ];
				return { ...currentState};
			}
		}
	});
}

export default onAddColumn;