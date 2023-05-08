import React from 'react';
import { apartments } from '../../utils/constants';
import { ApartmentItem } from '../apartment-item/ApartmentItem';

import classes from './apartment_list.module.scss';

export const ApartmenList = () => {
	return (
		<div className={classes.apartment_list}>
			{apartments.map((apartment) => {
				return (
					<ApartmentItem
						{...apartment}
						key={apartment.id}
					/>
				);
			})}
		</div>
	);
};
