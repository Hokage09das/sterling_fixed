import React from 'react';

import { AvenueDescWithLogo } from '../avenue-desc-with-logo/AvenueDescWithLogo';
import { AvenueDesc } from '../avenue-desc/AvenueDesc';

import building from '../../assets/images/corusel4.png';

import classes from './avenue-desc-one.module.scss';

export const AvenueDescOne = () => {
	return (
		<AvenueDesc>
			<div className={classes.left}>
				<AvenueDescWithLogo>
					<div className={classes.text_container}>
						<p className={classes.text}>
							ЖИЛОЙ ДОМ “ЭРКИНДИК АВЕНЮ” В ДЕТАЛЯХ:
						</p>
						<p className={classes.text}>15 этажей 2 подъезда</p>
						<p className={classes.text}>Площади квартир: от 55 м2 до 350 м2</p>
						<p className={classes.text}>
							По 2 лифта в каждом подъезде 2 уровня подземного паркинга Все
							коммуникации центральные
						</p>
					</div>
				</AvenueDescWithLogo>
			</div>
			<div className={classes.right}>
				<img
					src={building}
					alt='building'
				/>
			</div>
		</AvenueDesc>
	);
};
