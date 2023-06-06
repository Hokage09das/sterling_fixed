import React from "react";

import styles from "./aparment_item.module.scss";
import { ListBlueCircle } from "../../assets/icons";

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
			<div
				className={styles.aparment_item_third_container}
				style={{ background: `url(${bg_image})` }}
			>
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
					<li style={{ display: holl ? "flex" : "none" }}>
						<ListBlueCircle /> {holl}
					</li>
					<li style={{ display: kitchen ? "flex" : "none" }}>
						<ListBlueCircle />
						{kitchen}
					</li>
					<li style={{ display: bedroom ? "flex" : "none" }}>
						<ListBlueCircle />
						{bedroom}
					</li>
					<li style={{ display: kabinet ? "flex" : "none" }}>
						<ListBlueCircle />
						{kabinet}
					</li>
					<li style={{ display: bedroomSecond ? "flex" : "none" }}>
						<ListBlueCircle />
						{bedroomSecond}
					</li>
					<li style={{ display: bedroomThird ? "flex" : "none" }}>
						<ListBlueCircle />
						{bedroomThird}
					</li>
					<li style={{ display: bathroom ? "flex" : "none" }}>
						<ListBlueCircle />
						{bathroom}
					</li>
					<li style={{ display: loggia ? "flex" : "none" }}>
						<ListBlueCircle />
						{loggia}
					</li>
					<li style={{ display: loggiaSecond ? "flex" : "none" }}>
						<ListBlueCircle />
						{loggiaSecond}
					</li>
					<li style={{ display: loggiaThird ? "flex" : "none" }}>
						<ListBlueCircle />
						{loggiaThird}
					</li>
					<li style={{ display: wardrobe ? "flex" : "none" }}>
						<ListBlueCircle />
						{wardrobe}
					</li>
					<li style={{ display: toilet ? "flex" : "none" }}>
						<ListBlueCircle />
						{toilet}
					</li>
					<li style={{ display: toiletSecond ? "flex" : "none" }}>
						<ListBlueCircle />
						{toiletSecond}
					</li>
					<li style={{ display: terrace ? "flex" : "none" }}>
						<ListBlueCircle />
						{terrace}
					</li>
					<li style={{ display: wardrobeSecond ? "flex" : "none" }}>
						<ListBlueCircle />
						{wardrobeSecond}
					</li>
					<li style={{ display: wardrobeThird ? "flex" : "none" }}>
						<ListBlueCircle />
						{wardrobeThird}
					</li>
					<li style={{ display: bathroomSecond ? "flex" : "none" }}>
						<ListBlueCircle />
						{bathroomSecond}
					</li>
				</ul>
			</div>
		</div>
	);
};
