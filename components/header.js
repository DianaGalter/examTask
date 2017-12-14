import React from 'react';
import { Link } from 'react-router-dom'

import header__logo from '../images/header__logo.png';

const Header = () => (
	<header className="header">
		<a href="http://nytimes.com" target="_blank" rel="noopener noreferrer" className="header__url">
			<img src={header__logo} alt="logo NY Times" className="header__logo" />
		</a>
		<div className="header__container">
			<Link to="/all-sections" className="header-tags">All</Link>
			<Link to="/world" className="header-tags">World</Link>
			<Link to="/health" className="header-tags">Health</Link>
			<Link to="/business day" className="header-tags">Business</Link>
			<Link to="/sports" className="header-tags">Sports</Link>
		</div>
	</header>
);

export default Header;