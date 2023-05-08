import React, { useCallback } from 'react';

import classes from './comfort_list.module.scss';

export const ComfortList = ({
	img,
	secondImg,
	titleArr,
	headerTitle,
	variant = 'left',
}) => {
	const dynamicClasses = useCallback(
		() =>
			variant === 'left'
				? classes.comfort_list_container
				: classes.comfort_list_container_reverse,
		[variant],
	);

	return (
		<div className={dynamicClasses()}>
			<div className={classes.text_container}>
				<h4>{headerTitle}</h4>
				{titleArr?.map((el) => (
					<p key={el.id}>{el.title}</p>
				))}
			</div>

			<div className={classes.img_main_container}>
				<div className={classes.comfort_image_container}>
					<img
						src={img}
						alt='comfort_photo'
					/>
				</div>
				{secondImg && (
					<div className={classes.second_photo}>
						<img
							src={secondImg}
							alt='second_photo'
						/>
					</div>
				)}
			</div>
		</div>
	);
};
