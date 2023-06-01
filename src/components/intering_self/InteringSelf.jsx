import React from "react";

import quote from "../../assets/images/quote.png";
import avatar from "../../assets/images/avatar.jpg";

import classes from "./intering_selt.module.scss";

export const InteringSelf = () => {
	return (
		<div className={classes.main_container}>
			<div className={classes.title_container}>
				<div className={classes.sub_title}>
					<img
						src={quote}
						alt='/'
						className={classes.quote}
					/>
					<p className={classes.paragraf}>
						Здравствуйте, я — <span> Умаров Айбек</span>, основатель и
						руководитель девелоперской компании “Стерлинг групп”, специалист в
						международной строительной отрасли с 14 летним опытом
					</p>
					<p className={classes.paragraf}>
						Под моим руководством были построены объекты международного класса:
						<span>
							Royal Atlantis и Uptown Tower в Дубае, Hilton в Минске и Ritz
							Carlton в Астане
						</span>
					</p>
					<p className={classes.paragraf}>
						Используя весь накопленный опыт за рубежом, мы хотим показать какими
						технологиями, методами и новыми строительными материалами можно
						воспользоваться кроме традиционных, что сегодня используются на
						рынке Кыргызстана
					</p>
				</div>
				<div className={classes.second_title}>
					<span>Цель нашей команды</span>
					изменить строительный сектор, внедрить современные технологии
					международного стандарта, использовать инновационные методы в
					строительстве и вывести на рынок недвижимость высокого класса и
					качества
				</div>
			</div>
			<div className={classes.avatar}>
				<img
					src={avatar}
					alt='/'
				/>
			</div>
		</div>
	);
};
