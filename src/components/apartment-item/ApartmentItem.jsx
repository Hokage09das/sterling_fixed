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
	terrace,
	wardrobe,
	toilet,
	kabinet,
	toiletSecond,
	loggiaSecond,
	bedroomSecond,
	bedroomThird,
	wardrobeSecond,
	wardrobeThird,
	bathroomSecond,
	areaOfFloor,
}) => {
	return (
		<div className={styles.aparment_item}>
			<div className={styles.image_container}>
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
					<li>{areaOfFloor}</li>
					<li>{area}</li>
					<li>{holl}</li>
					<li>{kitchen}</li>
					<li>{bedroom}</li>
					<li>{kabinet}</li>
					<li>{bedroomSecond}</li>
					<li>{bedroomThird}</li>
					<li>{bathroom}</li>
					<li>{loggia}</li>
					<li>{loggiaSecond}</li>
					<li>{wardrobe}</li>
					<li>{toilet}</li>
					<li>{toiletSecond}</li>
					<li>{terrace}</li>
					<li>{wardrobeSecond}</li>
					<li>{wardrobeThird}</li>
					<li>{bathroomSecond}</li>
				</ul>
			</div>
		</div>
	);
};
