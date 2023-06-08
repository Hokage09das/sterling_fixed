import React from "react";

import classes from "./sterling_map.module.scss";

export const SterlingMap = () => {
	return (
		<div className={classes.map_container}>
			<div className={classes.map}>
				<iframe
					title='yandex'
					src='https://yandex.ru/map-widget/v1/?um=constructor%3A73819908c7fb764a6f34f86d7d06daeeb9852aebd5f82312b6c78331e91e4a56&amp;source=constructor'
					width='100%'
					height='100%'
					className={classes.map_card}
				></iframe>
			</div>
			<div className={classes.map_description}>
				<div className={classes.map_description_border}>
					<h4 className={classes.map_description_title}>ЖК "Эркиндик авеню"</h4>
					<p className={classes.map_description_sub_title}>
						Мы находимся на пересечении Жоомарта Боконбаева и Раззакова в бизнес
						центре Альтаир.
					</p>
					<p className={classes.map_description_sub_title}>
						Адрес: ул. Боконбаева 113
					</p>
				</div>
			</div>
		</div>
	);
};
