import React from 'react';

import classes from './home_about_section.module.scss';
import { aboutUsTitle } from './constants';
import { Button } from '../../components';
import avatar from '../../assets/images/avatar.jpg';

import sub_photo_1 from '../../assets/images/avatar_sub_photo_1.jpg';
import sub_photo_2 from '../../assets/images/avatar_sub_photo_2.jpg';
import sub_photo_3 from '../../assets/images/avatar_sub_photo_3.jpg';
import sub_photo_4 from '../../assets/images/avatar_sub_photo_5.jpg';
import { useNavigate } from 'react-router-dom';
import { routes } from '../../routes/constants.routes';

export const HomeAboutSection = ({ variant }) => {
	const navigate = useNavigate(); 

	return (
		<div className={classes.main_container}>
			<h2 className={classes.main_title}> О нас </h2>
			<div className={classes.content_container}>
				<div className={classes.content_container_first}>
					<div className={classes.avatar}>
						<img
							src={avatar}
							alt='/'
						/>
					</div>
					<div className={classes.title_container}>
						{aboutUsTitle.map((el) => (
							<p key={el.id}>{el.title}</p>
						))}
					</div>
				</div>
				<div className={classes.content_container_second}>
					<div className={classes.img_first_container}>
						<div className={classes.first_sub_container}>
							<div className={classes.img_container}>
								<img
									src={sub_photo_1}
									alt='/'
								/>
								<div className={classes.img_container_title}>Ritz Carlton</div>
							</div>
							<div className={classes.img_container}>
								<img
									src={sub_photo_2}
									alt='dsf'
								/>
								<div className={classes.img_container_title}> Hilton</div>
							</div>
						</div>
						<div className={classes.second_sub_container}>
							<img
								src={sub_photo_3}
								alt='dasd'
							/>
							<div className={classes.img_container_title}> Uptown Tower </div>
						</div>
					</div>
					<div className={classes.img_second_container}>
						<img
							src={sub_photo_4}
							alt='dsad'
						/>
						<div className={classes.img_container_title}> Royal Atlantis </div>
					</div>
				</div>
			</div>
			{variant === 'withButton' && (
				<div
					className={classes.about_button}
					onClick={() => navigate(routes.ABOUT_PAGE)}
				>
					<Button> Узнать Подробнее </Button>
				</div>
			)}
		</div>
	);
};
