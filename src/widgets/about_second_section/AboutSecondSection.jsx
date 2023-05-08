import React from 'react';
import { ComfortList } from '../../components';
import { aboutSecondSectionData } from './constants';

import classes from './about_second_section.module.scss';

export const AboutSecondSection = () => {
	return (
		<div className={classes.about_second_section}>
			<h4 className={classes.about_second_section_title}>Благоустройство</h4>
			{aboutSecondSectionData.map((el) => (
				<ComfortList
					img={el.img}
					key={el.headerTitle}
					titleArr={el.titleArr}
					secondImg={el.secondImg}
					headerTitle={el.headerTitle}
				/>
			))}
		</div>
	);
};
