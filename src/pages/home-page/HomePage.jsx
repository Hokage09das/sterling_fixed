import React, { useEffect } from 'react';
import { Corusel, Layout } from '../../components';

export const HomePage = () => {
	useEffect(() => {
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: 'smooth',
		});
	}, []);

	return (
		<>
			<Corusel />
			<Layout></Layout>
		</>
	);
};
