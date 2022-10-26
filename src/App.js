import { useEffect } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'

import { faCoins } from '@fortawesome/free-solid-svg-icons'

import useMousePosition from './hooks/useMousePosition';

import coin from './static/coin.svg';

import './App.css';

library.add(fab, faCoins)

function App() {
	const [ref, mousePosition] = useMousePosition();

	useEffect(() => {
		document.documentElement.style.setProperty('--x', `${mousePosition.left}px`);
		document.documentElement.style.setProperty('--y', `${mousePosition.top}px`);
	}, [mousePosition]);

	return (
		<HelmetProvider>
			<Helmet>
				<title>cosanostra</title>
				<meta property="og:title" content="cosanostra" />
				<meta name="twitter:title" content="cosanostra" />

				<meta name="description" content="a collective building value-driven on-chain primitives." />
				<meta property="og:description" content="a collective building value-driven on-chain primitives." />
				<meta name="twitter:description" content="a collective building value-driven on-chain primitives." />
			</Helmet>

			<div className="App" ref={ref}>
				<div className="navbar container">
					<h2>
						<img src={coin} alt="coin" />	
						cosanostra
					</h2>
					<div className="links">
						<a href="https://discord.gg/TASvMj4vyk" target="_blank" rel="noreferrer">
							<FontAwesomeIcon icon={['fab', 'discord']} />
						</a>
						<a href="https://twitter.com/0xcosanostra" target="_blank" rel="noreferrer">
							<FontAwesomeIcon icon={['fab', 'twitter']} />
						</a>
					</div>
				</div>

				<div className="content">
					<div className="content__layer__text">
						<div className="container">
							<h1>a collective building value-driven on-chain primitives.</h1>
						</div>
					</div>
					<div className="content__layer__one"></div>
				</div>
			</div>
		</HelmetProvider>
	);
}

export default App;
