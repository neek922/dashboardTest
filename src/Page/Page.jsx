import React from 'react';
import { useSelector } from 'react-redux';
import container from './container.jsx';

let Page = () => {

	return <container />
};



Page = React.memo(Page);
Page.defaultProps = {
};

export default Page;

