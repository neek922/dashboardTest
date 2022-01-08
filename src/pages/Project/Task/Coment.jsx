import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Store from '../../../components/Store';


const DivWrapper = styled.div`
	display: flex;
	align-items: center;
	font-family: arial;
	cursor: pointer;

	&:hover {
		background-color: rgba(0,0,0,.19) !important;
		opacity: 0.9 !important;
	}

	& > div {
		padding: 14px;
	}
	& img {
		width: 48px;
		height: 48px;
	}
`;

let Coment = ({ 
	coment,
}) => {
	
	return <React.Fragment>
		<DivWrapper>
			<div>
				<img 
					src={"https://img2.akspic.ru/previews/4/9/4/6/6/166494/166494-igra_v_kalmara_squid_game-x750.jpg"}
					/>
			</div>
			<div>
				{coment}
			</div>
		</DivWrapper>
	</React.Fragment>;
};

Coment = React.memo(Coment);
Coment.defaultProps = {
};

export default Coment;