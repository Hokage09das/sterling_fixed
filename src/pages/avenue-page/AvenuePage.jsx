import React from 'react';
import { WelcomingSection } from '../../widgets/welcoming_section/WelcomingSection';
import { AvenueCarousel, Layout } from '../../components';

import classes from './avenu_page.module.scss';

export const AvenuePage = () => {
	return (
		<div className={classes.main_container}>
			<Layout>
				<WelcomingSection />
				<AvenueCarousel />
			</Layout>
		</div>
	);
};
