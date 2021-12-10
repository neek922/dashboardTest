import React from 'react';
import { render } from 'react-dom';
import {
	BrowserRouter,
	Switch,
	Route,
} from 'react-router-dom';
import DashboardPage from './pages/Dashboard';
import ProjectPage from './pages/Project';
import { Provider as StoreProvider} from './components/Store';


render(<StoreProvider>
	<BrowserRouter>
		<Switch>
			<Route 
				exact
				path="/">
				<DashboardPage />
			</Route>
			<Route 
				exact
				path="/project/:projectId/">
				<ProjectPage />
			</Route>
		</Switch>
	</BrowserRouter>
</StoreProvider>, document.getElementById('root'));
