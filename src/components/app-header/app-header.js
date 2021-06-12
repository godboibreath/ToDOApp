import React from 'react';

import './app-header.css';

const AppHeader = ({postsCount, liked}) => {
	return (
		<div className="app-header d-flex">
			<h1>Rubtsov Oleg</h1>
			<h2>{postsCount} записей, из них понравилось { liked }</h2>
		</div>
	);
}

export default AppHeader;