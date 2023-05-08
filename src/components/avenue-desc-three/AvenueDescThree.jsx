import React from 'react';

import { AvenueDesc } from '../avenue-desc/AvenueDesc';
import { AvenueDescWithLogo } from '../avenue-desc-with-logo/AvenueDescWithLogo';

import image1 from '../../assets/images/avenue-desc-three-1.jpg';
import image2 from '../../assets/images/avenue-desc-three-2.jpg';

import classes from './style.module.scss';

const description_text = [
	{
		id: 1,
		text: 'АРХИТЕКТУРНЫЕ РЕШЕНИЯ',
	},
	{
		id: 2,
		text: 'Над проектом жилого дома "Эркиндик авеню" работали архитекторы и инженеры их Лондона и Дубая. Авторы соединили в своей задумке динамичность, пластику и разнообразие стилистических решений. Проект представляет просторные квартиры различных площадей, двухуровневые пентхаусы, откуда открывается великолепный вид на город и горы.',
	},
	{
		id: 3,
		text: 'Отделка фасада выполнена из клинкерного кирпича немецкого бренда Ströder. Этот материал выигрышно подчеркивает фасад здания. Преимущества клинкерного кирпича состоит и в сильной морозоустойчивости.',
	},
	{
		id: 4,
		text: 'Для этого проекта авторы решили использовать широкоформатные окна. Они дарят много света и визуально увеличивают пространство. Не смотря на это летом в помещении будет прохладно, а зимой - тепло. Таковы преиму пластиковых окон из немецкого профиля Schüco, которые мы установим в жилом доме "Эркиндик авеню".',
	},
];

export const AvenueDescThree = () => {
	return (
		<AvenueDesc>
			<div className={classes.left}>
				<AvenueDescWithLogo>
					<div className={classes.left_description}>
						{description_text.map((item) => (
							<p
								className={classes.text}
								key={item.id}
							>
								{item.text}
							</p>
						))}
					</div>
				</AvenueDescWithLogo>
			</div>
			<div className={classes.right}>
				<img
					src={image1}
					alt='building  1'
				/>
				<img
					src={image2}
					alt='building  2'
				/>
			</div>
		</AvenueDesc>
	);
};
