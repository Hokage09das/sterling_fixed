import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper";

import { AvenueDescOne } from "../../components/avenue-desc-one/AvenueDescOne";
import { AvenueDescTwo } from "../../components/avenue-desc-two/AvenueDescTwo";
import { AvenueDescThree } from "../../components/avenue-desc-three/AvenueDescThree";
import { AvenueDescFour } from "../../components/avenue-desc-four/AvenueDescFour";

export const AvenueCarousel = () => {
	return (
		<Swiper
			modules={[Navigation, Pagination, Scrollbar, A11y]}
			slidesPerView={1}
			navigation
			loop={true}
			pagination={{ clickable: true }}
			scrollbar={{ draggable: true }}
			style={{height: 'auto'}}
		>
			<SwiperSlide>
				<AvenueDescThree />
			</SwiperSlide>
			<SwiperSlide>
				<AvenueDescTwo />
			</SwiperSlide>
			<SwiperSlide>
				<AvenueDescFour />
			</SwiperSlide>
			<SwiperSlide>
				<AvenueDescOne />
			</SwiperSlide>
		</Swiper>
	);
};
