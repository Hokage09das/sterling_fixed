import React, { useEffect } from 'react';
import { Layout, ApartmenList } from '../../components';

export const BuildPage = () => {
	useEffect(() => {
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: 'smooth',
		});
	}, []);

	return (
		<div>
			<Layout>
				<ApartmenList />
			</Layout>
		</div>
	);
};
