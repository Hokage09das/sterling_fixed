import React from 'react';

import classes from './style.module.scss';

export const AvenueDesc = ({ children }) => {
	return <div className={classes.avenue_desc}>{children}</div>;
};
