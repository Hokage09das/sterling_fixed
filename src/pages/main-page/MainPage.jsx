import React from 'react';
import { Outlet } from 'react-router-dom';

import { Header } from '../../widgets/header/Header';
import { Footer } from '../../widgets/footer/Footer';

import styles from './main.module.scss';

export const MainPage = () => {
	return (
		<div className={styles.layout}>
			<Header />
			<div className={styles.content}>
				<Outlet />
			</div>
			<Footer className={styles.footer} />
		</div>
	);
};
