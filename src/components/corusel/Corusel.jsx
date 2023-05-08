import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import './style.scss';

import { corusel } from './constants';

export const Corusel = () => {
	return (
		<Swiper
			modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
			slidesPerView={1}
			navigation
			loop={true}
			autoplay={true}
			pagination={{ clickable: true }}
			scrollbar={{ draggable: true }}
		>
			{corusel.map((item) => {
				return (
					<SwiperSlide
						key={item.id}
						className='swiper_class'
					>
						<img
							src={item.src}
							className='swiper_class_img'
							alt=''
						/>
					</SwiperSlide>
				);
			})}
		</Swiper>
	);
};
