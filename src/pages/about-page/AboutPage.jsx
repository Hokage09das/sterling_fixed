import React, { useEffect } from 'react';

import { Layout } from '../../components';

import { HomeAboutSection } from '../../widgets/home_about_section/HomeAboutSection';

import { AboutSecondSection } from '../../widgets/about_second_section/AboutSecondSection';

export const AboutPage = () => {
	useEffect(() => {
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: 'smooth',
		});
	}, []);

	return (
		<div>
			<Layout>
				<div style={{ marginTop: '50px' }}>
					<HomeAboutSection />
					<AboutSecondSection />
				</div>
			</Layout>
		</div>
	);
};
