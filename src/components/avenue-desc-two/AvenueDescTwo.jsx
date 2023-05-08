import React from 'react';
import { AvenueDesc } from '../avenue-desc/AvenueDesc';
import { AvenueDescWithLogo } from '../avenue-desc-with-logo/AvenueDescWithLogo';

import erkindik_image_on_the_map from '../../assets/images/erkindik-avenue.jpg';

import classes from './style.module.scss';

export const AvenueDescTwo = () => {
	return (
		<AvenueDesc>
			<div className={classes.left}>
				<AvenueDescWithLogo>
					<div className={classes.description}>
						<div className={classes.description_first}>
							<p className={classes.description_text}>
								Жилой дом “Эркиндик авеню” <br />
								расположен в “золотом квадрате” на пересечении улиц Раззакова и
								Чуйкова. 100м от Бульвара Эркиндик (парк имени Дзержинского) в
								Тихом уютном уголке.
							</p>
							<p className={classes.description_text}>
								Это дом премиум-класса, <br />
								новейший формат современного жилья.
							</p>
						</div>
						<div className={classes.description_second}>
							<p className={classes.description_text}>
								В ШАГОВОЙ ДОСТУПНОСТИ ОТ ЖИЛОГО ДОМА “ЭРКИНДИК АВЕНЮ”:
							</p>
							<ul className={classes.description_second_ul}>
								<li>Бульвар Эркиндик</li>
								<li>Детский сад No28</li>
								<li>АУВК школа-гимназия No6</li>
								<li>Средняя школа-лицей No28</li>
								<li>Мемориальный дом-музей И. Раззакова</li>
							</ul>
						</div>
					</div>
				</AvenueDescWithLogo>
			</div>
			<div className={classes.right}>
				<img
					src={erkindik_image_on_the_map}
					alt='of the building on the map'
				/>
			</div>
		</AvenueDesc>
	);
};
