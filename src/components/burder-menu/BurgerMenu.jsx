import React, { useState } from 'react';
import { useNavigate } from 'react-router';

import classes from './burger_menu.module.scss';
import { burderNavbar } from './constants';
import logo from '../../assets/images/logo.png';

export const BurgerMenu = () => {
	const [isBurgerVisible, setIsBurgerVisible] = useState(false);

	const navigate = useNavigate();

	const toggleBergerMenu = () => {
		setIsBurgerVisible((prev) => !prev);
	};

	return (
		<div>
			{isBurgerVisible ? (
				<div
					onClick={toggleBergerMenu}
					className={classes.burger_menu_active}
				>
					<div className={classes.logo}>
						<img
							alt='logo_bergerMenu'
							src={logo}
						/>
					</div>
					{burderNavbar.map((el) => (
						<div
							key={el.id}
							onClick={() => navigate(el.path)}
						>
							{el.title}
						</div>
					))}
				</div>
			) : (
				<div onClick={toggleBergerMenu}>icon</div>
			)}
		</div>
	);
};
