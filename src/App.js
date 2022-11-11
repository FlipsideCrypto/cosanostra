import { Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async'

import { QueryClient, QueryClientProvider } from 'react-query'

import Meta from './seo/Meta';
import Navbar from './navbar/Navbar';

import Home from './home/Home';
import Application from './applications/Application';
import Papers from './papers/Papers';
import Paper from './papers/Paper';


import './App.css';

const queryClient = new QueryClient()

function App() {
	return (
		<HelmetProvider>
            <Meta title="cosanostra" description="a collective of web3-passionate individuals focusing on research & development of primitives & protocols for on-chain organizations, defi, and everything in-between." />

			<QueryClientProvider client={queryClient}>
				<Navbar />

				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="application/" element={<Application />} />
					<Route path="papers/" element={<Papers />} />
					<Route path="/papers/:slug" element={<Paper  />} />
				</Routes>
			</QueryClientProvider>
		</HelmetProvider>
	);
}

export default App;
