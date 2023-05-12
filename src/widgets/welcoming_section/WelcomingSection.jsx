import React from 'react';

import welcoming_photo from '../../assets/images/erkindik.jpg';
import welcoming_photo_2 from '../../assets/images/carusel1.jpg';
import logo from '../../assets/images/sterling-white-logo.png';

import classes from './welcoming_section.module.scss';

export const WelcomingSection = () => {
	return (
		<div className={classes.welcoming_wrapper}>
			<div className={classes.img_container}>
				<img
					src={welcoming_photo}
					alt='erkingik'
				/>
				<div className={classes.logo}>
					<img
						src={logo}
						alt=''
					/>
				</div>
				<div className={classes.border}></div>
			</div>
			<div className={classes.img}>
				<img
					src={welcoming_photo_2}
					alt=''
				/>
			</div>
		</div>
	);
};
