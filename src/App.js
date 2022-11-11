import { useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async'

import { QueryClient, QueryClientProvider } from 'react-query'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'

import { faCoins, faMoon, faSun } from '@fortawesome/free-solid-svg-icons'

import Home from './home/Home';
import Application from './applications/Application';
import Papers from './papers/Papers';
import Paper from './papers/Paper';

import Meta from './seo/Meta';

import coin from './static/coin.svg';

import './App.css';

const queryClient = new QueryClient()

library.add(fab, faCoins)

function App() {
	const [darkMode, setDarkMode] = useState(true);

	const toggleDarkMode = () => {
		// Change the background of the html element
		document.documentElement.classList.toggle('light');
		document.documentElement.classList.toggle('light-bg');

		// Add the class to the body element
		document.body.classList.toggle('light');
		document.body.classList.toggle('light-bg');

		setDarkMode(!darkMode);
	}

	return (
		<HelmetProvider>
            <Meta title="cosanostra" description="a collective of web3-passionate individuals focusing on research & development of primitives & protocols for on-chain organizations, defi, and everything in-between." />

			<QueryClientProvider client={queryClient}>
				<div className={`App ${darkMode ? '' : 'light'}`}>
					<div className="navbar container">
						<Link to="/">
							<h2>
								<img src={coin} alt="coin" />	
								cosanostra
							</h2>
						</Link>

						<div className="links">
							<Link to="/papers">papers</Link>
							<Link to="/application">apply</Link>
						</div>

						<div className="links">
							<Link onClick={toggleDarkMode}>
								<FontAwesomeIcon icon={!darkMode ? faMoon : faSun} />
							</Link>

							<a href="https://discord.gg/TASvMj4vyk" target="_blank" rel="noreferrer">
								<FontAwesomeIcon icon={['fab', 'discord']} />
							</a>
							<a href="https://twitter.com/0xcosanostra" target="_blank" rel="noreferrer">
								<FontAwesomeIcon icon={['fab', 'twitter']} />
							</a>
						</div>
					</div>
				</div>

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
