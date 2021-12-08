import React from 'react';
import { render } from 'react-dom';
import PageDashboard from './pages/Dashboard';
import { Provider as StoreProvider} from './components/Store';


render(<StoreProvider>
	<PageDashboard />
</StoreProvider>, document.getElementById('root'));
