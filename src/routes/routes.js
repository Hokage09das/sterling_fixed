import {
	AboutPage,
	AvenuePage,
	BuildPage,
	HomePage,
	MainPage,
	NewsPage,
} from '../pages';

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
				{
					path: routes.AVENUE_PAGE,
					element: <AvenuePage />,
				},
				{
					path: routes.NEWS_PAGE,
					element: <NewsPage />,
				},
			],
		},
	];
};
