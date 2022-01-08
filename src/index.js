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
import LoginPage from './pages/Login';




render(<StoreProvider>
	<BrowserRouter>
		<Switch>
			<Route
				exact
				path="/">
				<LoginPage/>
			</Route>
			<Route 
				exact
				path="/:userId">
				<DashboardPage />
			</Route>
			<Route 
				exact
				path="/:userId/:projectId/">
				<ProjectPage />
			</Route>
		</Switch>
	</BrowserRouter>
</StoreProvider>, document.getElementById('root'));
/*
render(<StoreProvider><LoginPage/></StoreProvider>, document.getElementById('root'));
*/

/*<Route 
				exact
				path="/project">
				<DashboardPage />
			</Route>
			<Route 
				exact
				path="/project/:projectId/">
				<ProjectPage />
			</Route>*/