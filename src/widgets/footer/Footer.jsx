import React from "react";
import { Layout } from "../../components/layout/Layout";
import { useNavigate } from "react-router-dom";

import { navigation } from "./constants";

import logo from "../../assets/images/sterling-white-logo.png";
import whatsapp from "../../assets/images/whatsapp.png";
import instagram from "../../assets/images/insta.png";

import classes from "./footer.module.scss";

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
						<h3>Контакты</h3>

						<ul
							style={{ display: "flex", flexDirection: "column", gap: "10px" }}
						>
							<li>Адрес: ул. Боконбаева 113</li>
							<li>
								<a
									href='mailto: Sales@streling.kg'
									className={classes.mail}
								>
									Почта: Sales@streling.kg
								</a>
							</li>
							<li style={{ display: "flex", gap: "10px" }}>
								Тел:
								<div>
									<div>0559 404444</div>
									<div>0709 404444</div>
								</div>
							</li>
						</ul>
					</div>
					<div className={classes.messenger_container}>
						<div className={classes.messenger_wrapper}>
							<a href='https://wa.me/+996559404444'>
								<img
									src={whatsapp}
									alt=''
									className={classes.messenger}
								/>
							</a>
						</div>
						<div className={classes.messenger_wrapper}>
							<a href='https://www.instagram.com/sterling_development_kg/?igshid=MzRlODBiNWFlZA%3D%3D'>
								<img
									src={instagram}
									alt=''
									className={classes.messenger}
								/>
							</a>
						</div>
					</div>
				</div>
			</Layout>
		</footer>
	);
};
