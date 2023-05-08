import React from 'react';
import { Outlet } from 'react-router-dom';

import styles from './main.module.scss';

export const MainPage = () => {
	return (
		<div className={styles.layout}>
			<div className={styles.content}>
				<Outlet />
			</div>
		</div>
	);
};
