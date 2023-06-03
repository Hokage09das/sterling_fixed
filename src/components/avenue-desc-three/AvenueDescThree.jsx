import React from 'react';

import { AvenueDesc } from '../avenue-desc/AvenueDesc';

import architecture_background from '../../assets/images/architechture_image.png';

import classes from './style.module.scss';

export const AvenueDescThree = () => {
	return (
		<AvenueDesc>
			<div className={classes.container} style={{backgroundImage: `url(${architecture_background})`}}>
					<div className={classes.container_description}>
						<h2>
							АРХИТЕКТУРНЫЕ РЕШЕНИЯ
						</h2>
						<p>
							Над проектом жилого дома "Эркиндик авеню" работали архитекторы и инженеры из <span className={classes.bold_text}>Лондона и Дубая</span>. Авторы соединили в своей задумке динамичность, пластику и разнообразие стилистических решений
						</p>
						<p>
							Проект представляет просторные квартиры различных площадей, двухуровневые пентхаусы, откуда открывается великолепный <span className={classes.bold_text}>вид на город и горы</span>
						</p>
						<div>
							<p>
								Отделка фасада выполнена из клинкерного кирпича немецкого бренда Ströder. Этот материал выигрышно подчеркивает фасад здания. Преимущества клинкерного кирпича состоит и в <span className={classes.bold_text}>сильной морозоустойчивости</span>
							</p>
							<p>
								Для этого проекта авторы решили использовать широкоформатные окна. Они дарят много света и визуально увеличивают пространство. Не смотря на это летом в помещении будет прохладно, а зимой - тепло. Таковы преиму пластиковых окон из <span className={classes.bold_text}>немецкого профиля Schüco</span>, которые мы установим в жилом доме
							</p>
						</div>
					</div>
			</div>
		</AvenueDesc>
	);
};
