import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import LanguageIcon from '@material-ui/icons/Language';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Avatar } from '@material-ui/core';
import { Link } from 'react-router-dom';

function Header() {
	return (
		<div className="header">
			<Link to = "/">
				<img
					src="https://blog.stronglogos.com/wp-content/uploads/2014/08/airbnb_horizontal_lockup_web.png"
					className="header__icon"
					alt=""
				/>
			</Link>

			<div className="header__center">
				<input type="text" />
				<SearchIcon />
			</div>

			<div className="header__right">
				<p>Become a host</p>
				<LanguageIcon />
				<ExpandMoreIcon />
				<Avatar />
			</div>
		</div>
	);
}

export default Header;
