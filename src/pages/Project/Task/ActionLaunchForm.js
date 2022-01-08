import React from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import { connect } from 'react-redux';
import onEdit from './onEdit';
import onEditDescription from './onEditDescription';
import styled from 'styled-components';
import { Typography,
		 Button,
		 Icon,
		 Card,
		 IconButton,
		 Dialog,
		 DialogContent,
		 DialogContentText } from '@material-ui/core/';
import LaunchIcon from '@material-ui/icons/Launch';
import DashboardIcon from '@material-ui/icons/Dashboard';
import EventNoteIcon from '@material-ui/icons/EventNote';
import CommentIcon from '@material-ui/icons/Comment';
import Close from '@material-ui/icons/Close';
import Coment from './Coment';
import onAddComent from './onAddComent';

const ButtonContainer = styled(Button)`
	text-transform: none !important;
	font-size: 1rem !important;
	font-family: "Roboto", "Helvetica", "Arial", sans-serif !important;
	font-weight: 400 !important;
	line-height: 1.5 !important;
	letter-spacing: 0.00938em !important;
	text-align: justify !important;
`;

const IconContainer = styled(IconButton)`
	color: rgba(0,0,0,.15) !important;
	float: right !important;
	padding: 3px !important;
`;

const DialogContentContainer = styled(DialogContent)`
	background-color: #a39b9b;
	padding: 10px !important;
	height: 400px !important;
	width: 550px !important;
	
`;

const IconContainer1 = styled(IconButton)`
	color: rgba(0,0,0,.15) !important;
	float: right !important;
	padding: 3px !important;
`;

const DivWrapper = styled.div`
	width: 100%;
	height: 100%;
	
`;

const TextWrapper = styled.div`
	text-align: center;
	font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Noto Sans,Ubuntu,Droid Sans,Helvetica Neue,sans-serif;
	font-size: 25px;
	font-weight: 400;
	line-height: 35px;
	opacity: 0.8;
`;

class ActionLaunchForm extends React.Component {


	state = {
		formOpen: false,
		text: '',
		textDescription: '',
		textComent: '',
	};

	openForm = () => {
		const { value, description } = this.props;
		this.setState({
			formOpen: true,
			text: value,
			textDescription: description
		})
	};

	closeForm = (e) => {
		this.setState({
			formOpen: false
		})
	};

	handleInputChange = (e) => {
		this.setState({
			text: e.target.value
		});
		const { text } = this.state;
		const { index, type } = this.props;
		onEdit(e, index, text, type);
		return;
		
	}

	handleEditText = (e) => {
		const { text } = this.state;
		const { index, type } = this.props;

		onEdit(e, index, text, type);

		return;
	}

	handleInputChangeDescription = (e) => {
		this.setState({
			textDescription: e.target.value
		});

		const { textDescription } = this.state;
		const { index, type } = this.props;
		onEditDescription(e, index, textDescription, type);
		
		return;
	}

	handleEditDescription = (e) => {
		const { textDescription } = this.state;
		const { index, type } = this.props;

		onEditDescription(e, index, textDescription, type);

		return;
	}

	handleAddComent = (e) => {
		const { textComent } = this.state;
		const { index, type } = this.props;
		this.setState({
			textComent: "",
		})
		onAddComent(e, index, textComent, type);

		return;
	}

	handleInputChangeComent = (e) => {
		this.setState({
			textComent: e.target.value
		});
		
	}


	renderAddButton = () => {
		const { value } = this.props;
		
		return (
			<IconContainer 
				onClick={this.openForm}>
 				<LaunchIcon/>
    		</IconContainer>
		)
	}

	renderForm = () => {

		const { value, coments, title, description } = this.props;
		const { textComent } = this.state;
		console.log('textComent', textComent);
		return (<div>
			<Dialog open={this.openForm} onClose={this.closeForm} aria-labelledby="form-dialog-title">
				<DialogContentContainer>
					<IconContainer1 
						onClick={this.closeForm}>
				       		<Close />
			      	</IconContainer1>
					<div style={{backgroundColor: '#a39b9b', width: '100%'}}>
	 						<DashboardIcon style={{color: 'rgba(0,0,0,.19)'}}/>	
						<TextareaAutosize 
							value={this.state.text}
							onChange={this.handleInputChange}
							style={{
								resize: 'none',
								backgroundColor: 'inherit',
								outline: 'none',
								border: 'none',
								overflow: 'hiden',
								fontSize: '20px',								
								}}
							/> 
							{(value !== this.state.text)
								? <div style={styles.formButtonGroup}>
									<Button 
										onChange={this.handleInputChange}
										onClick={this.handleEditText}
										variant="contained" 
										style={{color: 'white', backgroundColor: '#5aac44'}}
									> Изменить</Button>
									</div>
								: <React.Fragment/>}
						<DialogContentText>
							в колонке {title}	
						</DialogContentText>
					</div>
					<div>
						<TextWrapper style={{display: 'flex', alignItems: 'center', paddingBottom: '5px'}}>
							<EventNoteIcon style={{color: 'rgba(0,0,0,.19)'}}/>
							Описание
						</TextWrapper>
						<Card style={{minHeight: '100px'}}>
							<TextareaAutosize
								placeholder={'Добавить более подробное описание...'}
								value={this.state.textDescription}
								onChange={this.handleInputChangeDescription} 
								style={{
									resize: 'none',
									width: '90%',
									outline: 'none',
									border: 'none',
									overflow: 'hiden',
									padding: '5px',
									}}
								/>
								{(this.state.textDescription !== description)
									? <div style={styles.formButtonGroup}>
										<Button 
											onMouseDown={this.handleEditDescription}
											onClick={this.handleEditDescription}
											variant="contained" 
											style={{color: 'white', backgroundColor: '#5aac44'}}
										> Добавить</Button>
										</div>
									: <React.Fragment/>}
						</Card>
					</div>
					<div style={{paddingTop: '10px'}}>
						<TextWrapper style={{display: 'flex', alignItems: 'center', paddingBottom: '5px'}}>
						<CommentIcon style={{color: 'rgba(0,0,0,.19)'}}/>
						Коментарии
						</TextWrapper>
						<Card style={{minHeight: '50px'}}>
							<TextareaAutosize
									value={this.state.textComent}
									placeholder={'Добавить коментарий'}
									onChange={this.handleInputChangeComent}
									style={{
										resize: 'none',
										width: '90%',
										outline: 'none',
										border: 'none',
										overflow: 'hiden',
										padding: '5px',
										}}
									/>
						</Card>
						<div style={styles.formButtonGroup}>
							<Button
								onMouseDown={this.handleAddComent} 
								
								variant="contained" 
								style={{color: 'white', backgroundColor: '#5aac44'}}
								> Добавить</Button>
						</div>
						<DivWrapper>
							{coments.map((coment, i) => {
								return <Coment 
									key={i}
									coment={coment} />;
							})}
						</DivWrapper>
					</div>
				</DialogContentContainer>
			</Dialog>
		</div>
		)
	}


	render(){
		return this.state.formOpen ? this.renderForm() : this.renderAddButton();
	}
}

const styles = {
	openFormButtonGroup: {
		display: 'flex',
		alignItems: 'center',
		cursor: 'pointer',
		borderRadius: 3,
		height: 36,
		width: 272,
		paddingLeft: 10
	},
	formButtonGroup: {
		marginTop: 8,
		display: 'flex',
		alignItems: 'center'
	}
}



export default connect()(ActionLaunchForm);