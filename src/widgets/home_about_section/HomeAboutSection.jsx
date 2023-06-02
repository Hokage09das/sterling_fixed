import { InteringSelf } from "../../components";

import sub_photo_1 from "../../assets/images/avatar_sub_photo_1.jpg";
import sub_photo_2 from "../../assets/images/avatar_sub_photo_2.jpg";
import sub_photo_3 from "../../assets/images/about_hotel.jpg";
import sub_photo_4 from "../../assets/images/about_hotel_2.jpg";

import classes from "./home_about_section.module.scss";

export const HomeAboutSection = () => {
	return (
		<div className={classes.main_container}>
			<h2 className={classes.main_title}> О нас </h2>
			<div className={classes.content_container}>
				<InteringSelf />
				<div className={classes.content_container_second}>
					<div className={classes.img_first_container}>
						<div className={classes.second_sub_container}>
							<img
								src={sub_photo_3}
								alt='dasd'
							/>
							<div className={classes.img_container_title}>
								<h4>Uptown Tower</h4>
								<p>В Дубае</p>
							</div>
						</div>
						<div className={classes.first_sub_container}>
							<div className={classes.img_container}>
								<img
									src={sub_photo_2}
									alt='dsf'
								/>
								<div className={classes.img_container_title}>
									<h4>Hilton</h4>
									<p>в Минске</p>
								</div>
							</div>
							<div className={classes.img_container}>
								<img
									src={sub_photo_1}
									alt='/'
								/>
								<div className={classes.img_container_title}>
									<h4>Ritz Carlton</h4>
									<p>в Астане</p>
								</div>
							</div>
						</div>
					</div>
					<div className={classes.img_second_container}>
						<img
							src={sub_photo_4}
							alt='dsad'
						/>
						<div className={classes.img_container_title}>
							<h4>Royal Atlantis</h4>
							<p>в Дубаи</p>{" "}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
