import React from 'react';
import { useSelector } from 'react-redux';
import { 
	Link,
	withRouter, 
} from 'react-router-dom';
import Store from '../../components/Store';
import styled from 'styled-components';
import Column from '../Project/Column';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import onDragEnd from '../Dashboard/onDragEnd';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import onChange from './onChange';
import RegistrForm from './RegistrForm';

const DivWrapper = styled.div`
	height: 100vh;
	width: 100%;
`;

const TextWrapper = styled.header`
	background-color: #172b4d; 
	color: white;
	text-align: center;
	width: 100%;
	font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Noto Sans,Ubuntu,Droid Sans,Helvetica Neue,sans-serif;
	font-size: 25px;
	font-weight: 400;
	line-height: 35px;
	opacity: 0.9;
`;


const Content = styled.div`
	height: auto;
	display: flex;
	flex-wrap: wrap;
	background-color: #fff; 	
`;

const MainContent = styled.div`
	background: ;
	flex: 8;
	display: flex;
	flex-wrap: wrap;
	width: 100%;
	height: auto;	
`;

const ListContainer = styled.div`
	display: flex;
	margin: 20px 10px 10px 10px;
	overflow-y: hidden;
	width: 100%;
	flex-wrap: wrap;
	height: auto;
`;

const ButtonWrapper = styled.div`
	display: flex;
`;

const Sidebar = styled.aside`
	background: rgba(20, 0, 255, 0.03);
	flex: 2;
	margin: 20px;
	padding: 10px;
	border-radius: 10px;
	white-space: normal;
	box-shadow: 1px 15px 10px 5px rgba(0,0,0,.5);
	height: 250px;
	width: 100px;


	& > div {
		color: #172b4d;
		font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Noto Sans,Ubuntu,Droid Sans,Helvetica Neue,sans-serif;
		font-size: 20px;
		font-weight: 400;
		line-height: 30px;
		opacity: 0.9;
		width: auto;
	}
`;

const EnterTitle = styled.h3`
	margin-bottom: 10px;
`;

const TextFieldWrapper = styled(TextField)`
	margin-bottom: 10px !important;
`;


let LoginPage = () => {
	const columns = useSelector((reduxState)=> reduxState.columns.testData);
	const _onChange = React.useCallback((e) => onChange(e), []);
	let access = useSelector((reduxState)=> reduxState.users.access);
	let userId = useSelector((reduxState)=> reduxState.users.currentUserId);
	
	
	function alerT() {
  		return alert( "не правильный логин, либо пароль. Попробуйте еще раз!" );
	}


	return ( 
		<DivWrapper> 
				<TextWrapper>TrelloBoard</TextWrapper>
				<Content>
					<DragDropContext onDragEnd={onDragEnd}>
						<Droppable droppableId="testColumn" direction="horizontal" type="columns">
						{provided => (
							<MainContent>
								<ListContainer {...provided.droppableProps} ref={provided.innerRef}>
										{columns.map((column, i) => {
												return <Column
															key={column.id} 
															index={i}
															column={column}
															type={'test'}
														/>
													})}
										{provided.placeholder}
								</ListContainer>
							</MainContent>
							)}
						</Droppable>
					</DragDropContext>

					<Sidebar>
						<div>
							<EnterTitle>Вход</EnterTitle>
							<TextFieldWrapper onChange={_onChange} id="enterLogin" label="Login" variant="outlined" />
							<TextFieldWrapper onChange={_onChange} id="enterPassword" label="Password" variant="outlined" />
							<ButtonWrapper>
								{access
									? <Button  
									component={Link}
									to={`/${userId}`} 
									color="primary">Log In</Button>
									: <Button onClick={alerT}
									color="primary">Log In</Button>}
								<RegistrForm/>
							</ButtonWrapper>
						</div>
					</Sidebar>
				</Content>
		</DivWrapper>

	);
};



LoginPage = React.memo(LoginPage);
LoginPage.defaultProps = {
};

export default withRouter(LoginPage);





