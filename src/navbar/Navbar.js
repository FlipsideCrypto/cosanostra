import { useState } from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'

import coin from '../static/coin.svg';

library.add(fab)

const Navbar = () => {
	const [darkMode, setDarkMode] = useState(true);

    const [collapsed, setCollapsed] = useState(true);

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
        <div className={`App ${darkMode ? '' : 'light'}`}>
            <div className={`navbar container ${collapsed ? 'collapsed': ''}`}>
                <Link to="/">
                    <h2>
                        <img src={coin} alt="coin" />
                        cosanostra
                    </h2>
                </Link>

                <div className="hamburger">
                    <button onClick={() => setCollapsed(!collapsed)}>
                        {collapsed ? '☰' : '✕'}
                    </button>
                </div>

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
    )
}

export default Navbar;