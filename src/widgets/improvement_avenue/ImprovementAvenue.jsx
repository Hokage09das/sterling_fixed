import React from "react";

import baby_photo from "../../assets/images/comfort_1.png";
import lift from "../../assets/images/comfort_2.png";
import security from "../../assets/images/comfort_3.png";
import wifi from "../../assets/images/wifi_line.png";
import arrow from "../../assets/images/arrow.png";
import camera from "../../assets/images/camera.png";

import classes from "./improvementa_avenue.module.scss";

export const ImprovementAvenue = () => {
	return (
		<div className={classes.main_container}>
			<h2>Благоустройство</h2>
			<div className={classes.content_container}>
				<div className={classes.title_container}>
					<h4>ШУМОИЗОЛЯЦИЯ</h4>
					<p>
						<span> Наслаждайтесь тишиной и гармонией </span>в жилом доме
						“Эркиндик авеню”. Теперь ремонт у соседей точно не будет помехой,
						ведь вы не услышите даже стук молотка
					</p>
					<p>
						Для качественной межквартирной шумоизоляции будут использованы
						звукоизоляционны материалы для стен и для пола. Материал
						производиться на основе <span>натуральных компонентов</span>, без
						использования фенол-формальдегидных и акриловых смол. Он не горит и
						не вызывает аллергию
					</p>
					<p>
						Такой материал является безопасным для здоровья человека и животных
						и обеспечивает звукоизоляцию до
					</p>
					<div className={classes.ficha}>
						60 дБ
						<img
							src={wifi}
							alt='/'
						/>
					</div>
				</div>
				<div className={classes.image_container}>
					<img
						src={baby_photo}
						alt='/'
					/>
				</div>
			</div>
			<div className={classes.content_container}>
				<div className={classes.title_container}>
					<h4>ЛИФТЫ</h4>
					<p>
						В жилом доме “Эркиндик Авеню” в каждом подъезде предусмотрено по
					</p>
					<div className={classes.ficha}>
						2 лифта{" "}
						<img
							src={arrow}
							alt='/'
						/>
					</div>
					<p>
						Их производитель —<span> финская компания Kone</span>. Это
						оборудование ценят во всем мире за надежную и бесперебойную работу,
						стильный дизайн, передовые технологии. Лифты Kone предусматривают
						<span>удаленное управление</span> Такая особенность позволяет в
						быстром темпе решать все задачи, возникающие в процессе эксплуатации
						оборудования, а также предупреждать их
					</p>
					<p>
						Лифты от финской компании Kone <span>работают бесшумно </span> и
						обладают высокой скоростью. Для того чтобы подняться вверх или
						спуститься вниз нужно всего пару секунд
					</p>
				</div>
				<div className={classes.image_container}>
					<img
						src={lift}
						alt='/'
					/>
				</div>
			</div>
			<div className={classes.content_container}>
				<div className={classes.title_container}>
					<h4>СИСТЕМА БЕЗОПАСНОСТИ</h4>
					<p>
						Жилой дом “Эркиндик авеню” идеально подходит для проживания семей с
						детьми. <span> Закрытая территория</span> практически исключает
						вероятность появления в вашем дворе постороннего человека, а это
						означает, что все, кто играют с детьми во дворе, являются
						резидентами “Эркиндик авеню”
					</p>
					<div className={classes.ficha_last}>
						Комплексная система видеонаблюдения
						<img
							src={camera}
							alt=''
						/>
					</div>
					<p>
						Позволяет контролировать весь периметр в режиме реального времени и
						в записи Помимо наружного наблюдения, видеокамерами оснащены также
						холл и лифты, так что вы можете не опасаться за свое имущество как
						на дворовой территории, так и внутри дома. Максимальный контроль за
						территорией также обеспечивают охранное агентство и консьерж
					</p>
				</div>
				<div className={classes.image_container}>
					<img
						src={security}
						alt='/'
					/>
				</div>
			</div>
		</div>
	);
};
