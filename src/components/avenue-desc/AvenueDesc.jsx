import React from 'react';

import classes from './style.module.scss';

export const AvenueDesc = ({ children, style }) => {
	return <div style={style} className={classes.avenue_desc}>{children}</div>;
};
