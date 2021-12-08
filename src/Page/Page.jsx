import React from 'react';
import { useSelector } from 'react-redux';
import container from './container.jsx';

let Page = () => {

	return "Hello"
};



Page = React.memo(Page);
Page.defaultProps = {
};

export default Page;

