import React from 'react';
import Icon from '@material-ui/core/Icon';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import TextareaAutosize from 'react-textarea-autosize';
import { connect } from 'react-redux';
import onAddTask from './onAddTask';
import onAddColumn from '../Column/onAddColumn';
import styled from 'styled-components';


const DivWrapper = styled.div`
	&:hover {
		background-color: rgba(0,0,0,.15) !important;
		opacity: 0.5 !important;
		color: white !important;
	}

`;


class TrelloActionButton extends React.Component {
	

	state = {
		formOpen: false,
		text: ""
	};

	openForm = () => {
		this.setState({
			formOpen: true
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

	handleAddList = (e) => {
		const { text } = this.state;
		const { projectId } = this.props;

		if(text){
			this.setState({
				text: ''
			});
			onAddColumn(e, text, projectId)
		}

		return;
	}

	handleAddCard = (e) => {
		const { columnID, type } = this.props;
		const { text } = this.state;
		
		if(text){
			this.setState({
				text: ''
			});
			onAddTask(e, columnID, text, type);
		}
	};


	renderAddButton = () => {
		const { column } = this.props;

		const buttonText = column ? 'Add another list' : 'Add another card';
		const buttonTextOpacity = column ? 1 : 0.5;
		const buttonTextColor = column ? 'white' : 'inherit';
		const buttonTextBackground = column ? 'rgba(0,0,0,.15)' : 'inherit';

		return (
			<DivWrapper
				onClick={this.openForm} 
				style={{
				...styles.openFormButtonGroup, 
					opacity: buttonTextOpacity, 
					color: buttonTextColor, 
					backgroundColor: buttonTextBackground,
					hover:'green' 
				}}
			>
				<Icon>add</Icon>
				<p>{buttonText}</p>
			</DivWrapper>
		)
	}

	renderForm = () => {

		const { column } = this.props;

		const placeholder = column 
			? 'Enter list title...' 
			: 'Enter a title for this card...';
		const buttonTitle = column ? 'Add list' : 'Add Card';

		return <div>
			<Card 
				style={{
					minHeight: 85,
					minWidth: 272,
					padding: '6px 8px 2px'
				}}
			>
				<TextareaAutosize 
					placeholder={placeholder}
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
					onMouseDown={column ? this.handleAddList : this.handleAddCard} 
					variant="contained" 
					style={{color: 'white', backgroundColor: '#5aac44'}}
				> {buttonTitle}{" "} </Button>
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
		verticalAlign: 'bottom',
	},
	formButtonGroup: {
		marginTop: 8,
		display: 'flex',
		alignItems: 'center'
	}
}



export default connect()(TrelloActionButton);