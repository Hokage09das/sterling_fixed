import React from 'react';
import { Layout } from '../../components/layout/Layout';
import { useNavigate } from 'react-router-dom';

import { navigation } from './constants';

import logo from '../../assets/images/logo.png';
import whatsapp from '../../assets/images/whatsapp.png';
import instagram from '../../assets/images/insta.png';
import telegram from '../../assets/images/telegram.png';

import classes from './footer.module.scss';

export const Footer = ({ className }) => {
	const navigate = useNavigate();
	const goto = (path) => {
		navigate(path);
	};
	return (
		<footer className={`${className} ${classes.footer}`}>
			<Layout>
				<div className={classes.main_container}>
					<div className={classes.logo}>
						<img
							src={logo}
							alt='logo'
						/>
					</div>
					<div>
						<h3>Информация</h3>
						<ul className={classes.navigation}>
							{navigation.map((item) => {
								return (
									<li
										key={item.title}
										onClick={() => goto(item.path)}
									>
										{item.title}
									</li>
								);
							})}
						</ul>
					</div>
					<div>
						<h3>contact</h3>

						<ul
							style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}
						>
							<li>adress</li>
							<li>email</li>
						</ul>
					</div>
					<div className={classes.messenger_container}>
						<div className={classes.messenger_wrapper}>
							<img
								src={whatsapp}
								alt=''
								className={classes.messenger}
							/>
						</div>
						<div className={classes.messenger_wrapper}>
							<img
								src={telegram}
								alt=''
								className={classes.messenger}
							/>
						</div>
						<div className={classes.messenger_wrapper}>
							<img
								src={instagram}
								alt=''
								className={classes.messenger}
							/>
						</div>
					</div>
				</div>
			</Layout>
		</footer>
	);
};
