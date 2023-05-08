import { AboutPage, BuildPage, HomePage, MainPage } from '../pages';

import { routes } from './constants.routes';

export const router = () => {
	return [
		{
			path: routes.HOME_PAGE,
			element: <MainPage />,
			children: [
				{
					path: '',
					element: <HomePage />,
				},
				{
					path: routes.ABOUT_PAGE,
					element: <AboutPage />,
				},
				{
					path: routes.BUILDING_PAGE,
					element: <BuildPage />,
				},
			],
		},
	];
};
