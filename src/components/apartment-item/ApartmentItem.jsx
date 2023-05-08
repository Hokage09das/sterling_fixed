import React from 'react';

import styles from './aparment_item.module.scss';

export const ApartmentItem = ({
	img,
	desc,
	area,
	holl,
	subImg,
	loggia,
	kitchen,
	bedroom,
	bathroom,
	wardrobe,
	toilet,
	toiletSecond,
	loggiaSecond,
	bedroomSecond,
	bedroomThird,
}) => {
	return (
		<div className={styles.aparment_item}>
			<div>
				<div className={styles.aparment_item_first_container}>
					<img
						src={img}
						alt='1photo'
						className={styles.first_photo}
					/>
				</div>
				<div className={styles.aparment_item_second_container}>
					<img
						src={subImg}
						alt='2photo'
						className={styles.second_photo}
					/>
				</div>
			</div>
			<div className={styles.aparment_item_third_container}>
				<p className={styles.title}>{desc}</p>
				<ul>
					<li>{area}</li>
					<li>{holl}</li>
					<li>{kitchen}</li>
					<li>{bedroom}</li>
					<li>{bedroomSecond}</li>
					<li>{bedroomThird}</li>
					<li>{bathroom}</li>
					<li>{loggia}</li>
					<li>{loggiaSecond}</li>
					<li>{wardrobe}</li>
					<li>{toilet}</li>
					<li>{toiletSecond}</li>
				</ul>
			</div>
		</div>
	);
};
