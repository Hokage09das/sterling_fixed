import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper';

import { AvenueDescOne } from '../avenue-desc-one/AvenueDescOne';
import { AvenueDescTwo } from '../avenue-desc-two/AvenueDescTwo';
import { AvenueDescThree } from '../avenue-desc-three/AvenueDescThree';
import { AvenueDescFour } from '../avenue-desc-four/AvenueDescFour';

export const AvenueCarousel = () => {
	return (
		<Swiper
			modules={[Navigation, Pagination, Scrollbar, A11y]}
			slidesPerView={1}
			navigation
			loop={true}
			pagination={{ clickable: true }}
			scrollbar={{ draggable: true }}
		>
			<SwiperSlide>
				<AvenueDescOne />
			</SwiperSlide>
			<SwiperSlide>
				<AvenueDescTwo />
			</SwiperSlide>
			<SwiperSlide>
				<AvenueDescThree />
			</SwiperSlide>
			<SwiperSlide>
				<AvenueDescFour />
			</SwiperSlide>
		</Swiper>
	);
};
