import React from "react";

import styles from "./aparment_item.module.scss";

export const ApartmentItem = ({
	img,
	desc,
	area,
	holl,
	subImg,
	bg_image,
	loggia,
	kitchen,
	bedroom,
	bathroom,
	terrace,
	wardrobe,
	toilet,
	kabinet,
	planning,
	number,
	countOfFloor,
	toiletSecond,
	loggiaSecond,
	loggiaThird,
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
			<div className={styles.aparment_item_third_container} style={{background:`url(${bg_image})`}}>
				<div className={styles.planning}>
					<p>{planning}</p>
					<p className={styles.floor_desc}>{countOfFloor}</p>
				</div>

				<div className={styles.title}>{desc}</div>
				{areaOfFloor ? (
					<div style={{ marginTop: "10px" }}>
						<p>{area}</p>
						<p className={styles.floor}>{areaOfFloor}</p>
						<div className={styles.numberofArea}>{number}</div>
					</div>
				) : (
					<div style={{ marginTop: "10px" }}>
						<p className={styles.area}>{area}</p>
						<div className={styles.numberofArea}>{number}</div>
					</div>
				)}

				<ul>
					<li style={{ display: holl ? "flex" : "none" }}>{holl}</li>
					<li style={{ display: kitchen ? "flex" : "none" }}>{kitchen}</li>
					<li style={{ display: bedroom ? "flex" : "none" }}>{bedroom}</li>
					<li style={{ display: kabinet ? "flex" : "none" }}>{kabinet}</li>
					<li style={{ display: bedroomSecond ? "flex" : "none" }}>
						{bedroomSecond}
					</li>
					<li style={{ display: bedroomThird ? "flex" : "none" }}>
						{bedroomThird}
					</li>
					<li style={{ display: bathroom ? "flex" : "none" }}>{bathroom}</li>
					<li style={{ display: loggia ? "flex" : "none" }}>{loggia}</li>
					<li style={{ display: loggiaSecond ? "flex" : "none" }}>
						{loggiaSecond}
					</li>
					<li style={{ display: loggiaThird ? "flex" : "none" }}>
						{loggiaThird}
					</li>
					<li style={{ display: wardrobe ? "flex" : "none" }}>{wardrobe}</li>
					<li style={{ display: toilet ? "flex" : "none" }}>{toilet}</li>
					<li style={{ display: toiletSecond ? "flex" : "none" }}>
						{toiletSecond}
					</li>
					<li style={{ display: terrace ? "flex" : "none" }}>{terrace}</li>
					<li style={{ display: wardrobeSecond ? "flex" : "none" }}>
						{wardrobeSecond}
					</li>
					<li style={{ display: wardrobeThird ? "flex" : "none" }}>
						{wardrobeThird}
					</li>
					<li style={{ display: bathroomSecond ? "flex" : "none" }}>
						{bathroomSecond}
					</li>
				</ul>
			</div>
		</div>
	);
};
