import React, { useEffect } from 'react';

import { AvenueCarousel, Corusel, Layout, SterlingMap } from '../../components';

import { HomeAboutSection } from '../../widgets/home_about_section/HomeAboutSection';
import { WelcomingSection } from '../../widgets/welcoming_section/WelcomingSection';

export const HomePage = () => {
	useEffect(() => {
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: 'smooth',
		});
	}, []);

	return (
		<>
			<Corusel />
			<Layout>
				<HomeAboutSection variant='withButton' />
				<WelcomingSection />
				<AvenueCarousel />
				<SterlingMap />
			</Layout>
		</>
	);
};
