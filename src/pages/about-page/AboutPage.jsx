import React from 'react';

import { AvenueCarousel, Layout } from '../../components';

import { HomeAboutSection } from '../../widgets/home_about_section/HomeAboutSection';
import { WelcomingSection } from '../../widgets/welcoming_section/WelcomingSection';
import { AboutSecondSection } from '../../widgets/about_second_section/AboutSecondSection';

export const AboutPage = () => {
	return (
		<div>
			<Layout>
				<HomeAboutSection />
				<WelcomingSection />
				<AvenueCarousel />
				<AboutSecondSection />
			</Layout>
		</div>
	);
};
