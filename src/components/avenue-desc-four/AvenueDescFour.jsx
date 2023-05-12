import React from 'react';

import { AvenueDesc } from '../avenue-desc/AvenueDesc';
import { AvenueDescWithLogo } from '../avenue-desc-with-logo/AvenueDescWithLogo';

import avenue_desc_four_1 from '../../assets/images/avenue_desc_zero.jpg';
import avenue_desc_four_2 from '../../assets/images/avenue-desc-four-2.jpg';

import classes from './style.module.scss';

const description_text = [
	{
		id: 1,
		text: 'Территорию закрытого двора жилого дома будет обустроено озеленениями и различными деревьями и тщательно выбранными растениями. Здесь вы будете любоваться садом, который гармонично вписывается в общую концепцию проекта.',
	},
	{
		id: 2,
		text: 'Близость основных магистралей от жилого дома “Эркиндик авеню” дают возможность быстро добраться до нужного места и быть всегда в центре культурной жизни столицы.',
	},
];

export const AvenueDescFour = () => {
	return (
		<AvenueDesc>
			<div className={classes.left}>
				<AvenueDescWithLogo>
					<div className={classes.left_description}>
						{description_text.map((item) => (
							<p key={item.id}>{item.text}</p>
						))}
					</div>
				</AvenueDescWithLogo>
			</div>
			<div className={classes.right}>
				<img
					src={avenue_desc_four_1}
					alt='building1'
				/>
				<img
					src={avenue_desc_four_2}
					alt='building2'
				/>
			</div>
		</AvenueDesc>
	);
};
