import React from 'react';

import { navbar } from './constants';
import { useLocation, useNavigate } from 'react-router-dom';
import { Layout } from '../../components/layout/Layout';
import { BurgerMenu } from '../../components/burger-menu/BurgerMenu';

import logo from '../../assets/images/sterling-white-logo.png';

import styles from './header.module.scss';

export const Header = () => {
	const [scroll, setScroll] = React.useState(false);

	const navigate = useNavigate();
	const location = useLocation();

	const goTo = (path) => {
		navigate(path);
	};

	const handleScroll = () => {
		window.scrollY > 100 ? setScroll(true) : setScroll(false);
	};

	const path =
		location.pathname === '/'
			? scroll
				? styles.header_fixed
				: styles.main_header_style
			: styles.header1;

	React.useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<header className={path}>
			<Layout>
				<div className={styles.header}>
					<div
						className={styles.logo}
						onClick={() => goTo('/')}
					>
						<img
							className={styles.logo_img}
							src={logo}
							alt='logo'
						/>
					</div>
					<nav className={styles.navigation}>
						{navbar.map((item) => {
							return (
								<div
									className={styles.navigation_item}
									key={item.id}
									onClick={() => goTo(item.path)}
								>
									{item.title}
								</div>
							);
						})}
					</nav>
					<div className={styles.burger_menu}>
						<BurgerMenu />
					</div>
				</div>
			</Layout>
		</header>
	);
};
