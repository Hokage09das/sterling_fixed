import React from "react";

import { AvenueDesc } from "../avenue-desc/AvenueDesc";
import avenue_territory_background from '../../assets/images/avenue_territory_image.png';

import classes from "./style.module.scss";

export const AvenueDescFour = () => {
	return (
		<AvenueDesc>
			<div className={classes.container} style={{backgroundImage: `url(${avenue_territory_background})`}}>
					<div className={classes.container_description}>
						<h2>
							ТЕРРИТОРИЯ
						</h2>
						<p>
							Территорию закрытого двора жилого дома будет обустроено озеленениями и различными деревьями и тщательно выбранными растениями. Здесь вы будете любоваться садом, который гармонично вписывается в общую концепцию проекта
						</p>
						<p>
							Близость основных магистралей от жилого дома “Эркиндик авеню” дают возможность быстро добраться до нужного места и быть всегда в центре культурной жизни столицы
						</p>
					</div>
			</div>
		</AvenueDesc>
	);
};
