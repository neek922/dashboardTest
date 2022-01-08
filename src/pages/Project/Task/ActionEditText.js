import React from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import { connect } from 'react-redux';
import { useSelector } from 'react-redux';
import Store from '../../../components/Store';
import onEdit from './onEdit';
import styled from 'styled-components';
import { Typography,
		 Button,
		 Icon,
		 Card } from '@material-ui/core/';
import EditIcon from '@material-ui/icons/Edit';


const ButtonContainer = styled(Button)`
	text-transform: none !important;
	font-size: 1rem !important;
	font-family: "Roboto", "Helvetica", "Arial", sans-serif !important;
	font-weight: 400 !important;
	line-height: 1.5 !important;
	letter-spacing: 0.00938em !important;
	text-align: justify !important;
`;

class ActionEditText extends React.Component {


	state = {
		formOpen: false,
		text: ''
	};

	openForm = () => {
		const { value } = this.props;
		
		this.setState({
			formOpen: true,
			text: value
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
		const { index, type } = this.props;

		onEdit(e, index, text, type);

		return;
	}


	renderAddButton = () => {
		const { value } = this.props;
		
		return (
			<Typography gutterBottom>
				<ButtonContainer
					onClick={this.openForm}>
						{value}
				</ButtonContainer>
			</Typography>
		)
	}

	renderForm = () => {

		const { value } = this.props;

		return <div>
			<Card 
				style={{
					minHeight: 85,
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
		paddingLeft: 10,
	},
	formButtonGroup: {
		marginTop: 8,
		display: 'flex',
		alignItems: 'center'
	}
}



export default connect()(ActionEditText);