import { Route, Routes } from 'react-router-dom';

import Meta from './seo/Meta';
import Navbar from './navbar/Navbar';

import Home from './home/Home';
import Application from './applications/Application';
import Papers from './papers/Papers';
import Paper from './papers/Paper';

import './App.css';

function App() {
	const title = 'cosanostra';
	const description = 'cosanostra is a community of developers, designers, and entrepreneurs who are passionate about building the future of the internet.';

	return (
		<>
			<Meta title={title} description={description} />

			<Navbar />

			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="application/" element={<Application />} />
				<Route path="papers/" element={<Papers />} />
				<Route path="/papers/:slug" element={<Paper />} />
			</Routes>
		</>
	);
}

export default App;
