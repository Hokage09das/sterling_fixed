import React from 'react';

import classes from './button.module.scss';

export const Button = ({ children, onClick, type }) => {
	return (
		<button
			onClick={onClick}
			type={type}
			className={classes.button}
		>
			{children}
		</button>
	);
};
