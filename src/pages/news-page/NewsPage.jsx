import React, { useEffect } from 'react';

import { Layout } from '../../components';
import classes from './news_page.module.scss';

export const NewsPage = () => {
	useEffect(() => {
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: 'smooth',
		});
	}, []);

	return (
		<div className={classes.news_page_container}>
			<Layout>Страница новостей</Layout>
		</div>
	);
};
