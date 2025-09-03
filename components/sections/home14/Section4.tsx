
'use client'
import { swiperGroupSlideText } from '@/util/swiperOptions'
import { Swiper, SwiperSlide } from "swiper/react"
export default function Section4() {
	return (
		<>

			<div className="box-swiper">
				<Swiper {...swiperGroupSlideText} className="swiper-container swiper-group-slide-text wow fadeInUp">
					<div className="swiper-wrapper">
						<SwiperSlide>
							<div className="text-slide-white">
								<svg width={30} height={30} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M15 0L17.1926 9.70664L25.6066 4.3934L20.2934 12.8074L30 15L20.2934 17.1926L25.6066 25.6066L17.1926 20.2934L15 30L12.8074 20.2934L4.3934 25.6066L9.70664 17.1926L0 15L9.70664 12.8074L4.3934 4.3934L12.8074 9.70664L15 0Z" fill="#33393B" />
								</svg>
								<h4 className="heading-3xl dark-950 text-uppercase d-inline-block">Global Business</h4>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="text-slide-white">
								<svg width={30} height={30} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M15 0L17.1926 9.70664L25.6066 4.3934L20.2934 12.8074L30 15L20.2934 17.1926L25.6066 25.6066L17.1926 20.2934L15 30L12.8074 20.2934L4.3934 25.6066L9.70664 17.1926L0 15L9.70664 12.8074L4.3934 4.3934L12.8074 9.70664L15 0Z" fill="#33393B" />
								</svg>
								<h4 className="heading-3xl dark-950 text-uppercase d-inline-block">Corporate Business</h4>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="text-slide-white">
								<svg width={30} height={30} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M15 0L17.1926 9.70664L25.6066 4.3934L20.2934 12.8074L30 15L20.2934 17.1926L25.6066 25.6066L17.1926 20.2934L15 30L12.8074 20.2934L4.3934 25.6066L9.70664 17.1926L0 15L9.70664 12.8074L4.3934 4.3934L12.8074 9.70664L15 0Z" fill="#33393B" />
								</svg>
								<h4 className="heading-3xl dark-950 text-uppercase d-inline-block">Marketing Analytics</h4>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="text-slide-white">
								<svg width={30} height={30} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M15 0L17.1926 9.70664L25.6066 4.3934L20.2934 12.8074L30 15L20.2934 17.1926L25.6066 25.6066L17.1926 20.2934L15 30L12.8074 20.2934L4.3934 25.6066L9.70664 17.1926L0 15L9.70664 12.8074L4.3934 4.3934L12.8074 9.70664L15 0Z" fill="#33393B" />
								</svg>
								<h4 className="heading-3xl dark-950 text-uppercase d-inline-block">Marketing Research</h4>
							</div>
						</SwiperSlide>
					</div>
				</Swiper>
			</div>
		</>
	)
}
