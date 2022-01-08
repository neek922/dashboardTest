import React from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Typography,
		 Button,
		 Icon,
		 Card,
		 IconButton } from '@material-ui/core/';
import EditIcon from '@material-ui/icons/Edit';
import Store from '../../../components/Store';
import onEditTitle from './onEditTitle';

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

class ActionEditTitle extends React.Component {


	state = {
		formOpen: false,
		text: ''
	};

	openForm = () => {
		const { title } = this.props;
		
		this.setState({
			formOpen: true,
			text: title
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

	}

	handleEditText = (e) => {
		const { text } = this.state;
		const { index } = this.props;

		onEditTitle(e, index, text);

		return;
	}


	renderAddButton = () => {
		const { value } = this.props;
		
		return (
			<IconContainer 
				onClick={this.openForm}>
 				<EditIcon />
    		</IconContainer>
		)
	}

	renderForm = () => {

		const { value } = this.props;

		return <div>
			<Card 
				style={{
					minHeight: 20,
					padding: '6px 8px 2px'
				}}
			>
				<TextareaAutosize 
					autoFocus
					onBlur={this.closeForm}
					value={this.state.text}
					onChange={this.handleInputChange}
					style={{
						resize: 'none',
						width: '100%',
						outline: 'none',
						border: 'none',
						overflow: 'hiden',
					}}
				/>
			</Card>
			<div style={styles.formButtonGroup}>
				<Button
					onMouseDown={this.handleEditText} 
					variant="contained" 
					style={{color: 'white', backgroundColor: '#5aac44'}}
				> Изменить{" "} </Button>
			</div>
		</div>
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
		position: 'absolute',
		display: 'flex',
		alignItems: 'center'
	}
}



export default connect()(ActionEditTitle);