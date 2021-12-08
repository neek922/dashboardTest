import React from 'react';
import { render } from 'react-dom';
import Page from './Page';
import { Provider as StoreProvider} from './components/Store';


render(<StoreProvider><Page /></StoreProvider>, document.getElementById('root'));
