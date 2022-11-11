import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter as Router } from 'react-router-dom';

import { HelmetProvider } from 'react-helmet-async'
import { QueryClient, QueryClientProvider } from 'react-query'

import App from './App';


import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

const queryClient = new QueryClient()

root.render(
	<React.StrictMode>
		<Router>
			<HelmetProvider>
				<QueryClientProvider client={queryClient}>
					<App />
				</QueryClientProvider>
			</HelmetProvider>
		</Router>
	</React.StrictMode>
);