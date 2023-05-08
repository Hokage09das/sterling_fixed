import React from 'react';

import classes from './style.module.scss';

export const AvenueDescWithLogo = ({ children }) => {
	return <div className={classes.container}>{children}</div>;
};
