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
			className='swiper_class'
		>
			{corusel.map((item) => {
				return (
					<SwiperSlide
						key={item.id}
						className='swiper_class'
					>
						<div className='carousel_image_container'>
							<img
								src={item.src}
								className='swiper_class_img'
								alt=''
							/>
						</div>
						<div
							className='bg_image'
							style={{ backgroundImage: `url(${item.bg_image})` }}
						/>
					</SwiperSlide>
				);
			})}
		</Swiper>
	);
};
