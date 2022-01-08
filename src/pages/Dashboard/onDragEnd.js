import React from 'react';
import { useSelector } from 'react-redux';
import Store from '../../components/Store';



const onDragEnd = (result) => {

	const { destination, source, draggableId, type  } = result;
	const currentStateColumn = Store().getState().columns.data;
	const currentStateColumnTest = Store().getState().columns.testData;
	const currentStateColumnAll = Store().getState().columns;
	const currentStateTask = Store().getState().tasks.data;
	const currentStateTaskTest = Store().getState().tasks.dataTest;
	const currentStateTaskAll = Store().getState().tasks;
	/*const currentStateProject = Store().getState().projects.data;*/
	const currentStateProjectAll = Store().getState().projects;
	
	

	Store().dispatch({
		type: type,
		payload: () => {
			

			if(!destination && type === 'columns') {
			return currentStateColumnAll;
				}

			if(!destination && type === 'tasks') {
			return currentStateTaskAll;
				}

			if(!destination && type === 'projects') {
			return currentStateProjectAll;
				}

			if(!destination && source.droppableId === 'testColumn') {
			return currentStateColumnAll;
				}

			if(!destination && draggableId.startsWith('test')) {
			return currentStateTaskAll;
				}

			const droppableIdStart = source.droppableId;
			const droppableIdEnd = destination.droppableId;
			const droppableIndexStart = source.index;
			const droppableIndexEnd = destination.index;


			if(type === 'columns' && droppableIdStart === droppableIdEnd && droppableIdStart !== 'testColumn'){
				const columns = currentStateColumn.splice(droppableIndexStart, 1);
				currentStateColumn.splice(droppableIndexEnd, 0, ...columns);
				return {...currentStateColumnAll};
			}

			if(droppableIdStart === 'testColumn' && droppableIdStart === droppableIdEnd ){
				const columns = currentStateColumnTest.splice(droppableIndexStart, 1);
				currentStateColumnTest.splice(droppableIndexEnd, 0, ...columns);
				return {...currentStateColumnAll};
			}

			if(type === 'projects' && droppableIdStart === droppableIdEnd && droppableIdStart === 'all-projects' ){
				const projects = currentStateProjectAll.data.splice(droppableIndexStart, 1);
				currentStateProjectAll.data.splice(droppableIndexEnd, 0, ...projects);
				currentStateProjectAll.data = [ ...currentStateProjectAll.data ];
				return {...currentStateProjectAll};
	
			}

			if(type === 'projects' && droppableIdStart === droppableIdEnd && droppableIdStart === 'favorit' ){
				const projects = currentStateProjectAll.favorites.splice(droppableIndexStart, 1);
				currentStateProjectAll.favorites.splice(droppableIndexEnd, 0, ...projects);
				currentStateProjectAll.favorites = [ ...currentStateProjectAll.favorites];
				return {...currentStateProjectAll};
	
			}

			if(type === 'projects' && droppableIdStart !== droppableIdEnd && droppableIdStart === 'all-projects' ){
				const projects = currentStateProjectAll.data.splice(droppableIndexStart, 1);
				currentStateProjectAll.favorites.splice(droppableIndexEnd, 0, ...projects);
				currentStateProjectAll.favorites = [ ...currentStateProjectAll.favorites];
				currentStateProjectAll.data = [ ...currentStateProjectAll.data];
				return {...currentStateProjectAll};
	
			}

			if(type === 'projects' && droppableIdStart !== droppableIdEnd && droppableIdStart === 'favorit' ){
				const projects = currentStateProjectAll.favorites.splice(droppableIndexStart, 1);
				currentStateProjectAll.data.splice(droppableIndexEnd, 0, ...projects);
				currentStateProjectAll.favorites = [ ...currentStateProjectAll.favorites];
				currentStateProjectAll.data = [ ...currentStateProjectAll.data];
				return {...currentStateProjectAll};
	
			}

			if(type === 'tasks' && droppableIdStart === droppableIdEnd && !draggableId.startsWith('test')){
				const tasks = currentStateTask.splice(droppableIndexStart, 1);
				currentStateTask.splice(droppableIndexEnd, 0, ...tasks);
				
				return {...currentStateTaskAll};
			}

			if(type === 'tasks' && droppableIdStart !== droppableIdEnd && !draggableId.startsWith('test')){
				const tasks = currentStateTask.splice(droppableIndexStart, 1);
				tasks[0].column_id = droppableIdEnd;
				currentStateTask.splice(droppableIndexEnd, 0, ...tasks);
				
				return {...currentStateTaskAll};
			}

			if(type === 'tasks' && droppableIdStart === droppableIdEnd && draggableId.startsWith('test')){
				const tasks = currentStateTaskTest.splice(droppableIndexStart, 1);
				currentStateTaskTest.splice(droppableIndexEnd, 0, ...tasks);
				
				return {...currentStateTaskAll};
			}

			if(type === 'tasks' && droppableIdStart !== droppableIdEnd && draggableId.startsWith('test')){
				const tasks = currentStateTaskTest.splice(droppableIndexStart, 1);
				tasks[0].column_id = droppableIdEnd;
				currentStateTaskTest.splice(droppableIndexEnd, 0, ...tasks);
				
				return {...currentStateTaskAll};
			}
			
				
		}
	})
		
}
		
export default onDragEnd;