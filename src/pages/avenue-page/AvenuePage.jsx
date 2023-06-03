import React, { useEffect } from "react";
import { WelcomingSection } from "../../widgets/welcoming_section/WelcomingSection";
import { AvenueCarousel, Layout } from "../../components";

import classes from "./avenu_page.module.scss";
import { ImprovementAvenue } from "../../widgets/improvement_avenue/ImprovementAvenue";
import {AvenueDescTwo} from '../../components/avenue-desc-two/AvenueDescTwo';

export const AvenuePage = () => {
	useEffect(() => {
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: "smooth",
		});
	}, []);

	return (
		<div className={classes.main_container}>
			<Layout>
				<WelcomingSection />
				<AvenueCarousel />
				<ImprovementAvenue />
			</Layout>
		</div>
	);
};
