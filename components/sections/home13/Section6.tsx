'use client'
import { Swiper, SwiperSlide } from "swiper/react"
import { sliderGroup2 } from '@/util/swiperOptions'

export default function Section6() {
	return (
		<>

			<section className="position-relative overflow-hidden box-testimonials-13">
				<div className="container" data-aos="fade-up">
					<div className="box-testimonials-lists mt-5">
						<div className="box-swiper">
							<Swiper {...sliderGroup2} className="swiper-container slider-group-2 pt-5 pb-5">
								<div className="swiper-wrapper">
									<SwiperSlide>
										<div className="card-testimonials-2 card-testimonials-10">
											<div className="card-author">
												<div className="author-image">
													<img src="/assets/imgs/pages/home13/author.png" alt="Vatech" />
												</div>
												<div className="author-info">
													<div>
														<h5 className="sub-heading-ag-xl secondery-600">Esther Howard</h5>
														<p className="paragraph-18-fitree secondery-600">Businessman</p>
													</div>
												</div>
											</div>
											<div className="comment-text">Financial planners help people to gain knowledge aboutw toio invest and save their money in the most efficient way ever. Many people all of across the coun us them Financial planners help people Financial know planners help people Financial planners=</div>
										</div>
									</SwiperSlide>
									<SwiperSlide>
										<div className="card-testimonials-2 card-testimonials-10">
											<div className="card-author">
												<div className="author-image">
													<img src="/assets/imgs/pages/home13/author2.png" alt="Vatech" />
												</div>
												<div className="author-info">
													<div>
														<h5 className="sub-heading-ag-xl secondery-600">Johnson Hamilton</h5>
														<p className="paragraph-18-fitree secondery-600">Businessman</p>
													</div>
												</div>
											</div>
											<div className="comment-text">Financial planners help people to gain knowledge aboutw toio invest and save their money in the most efficient way ever. Many people all of across the coun us them Financial planners help people Financial know planners help people Financial planners=</div>
										</div>
									</SwiperSlide>
									<SwiperSlide>
										<div className="card-testimonials-2 card-testimonials-10">
											<div className="card-author">
												<div className="author-image">
													<img src="/assets/imgs/pages/home13/author.png" alt="Vatech" />
												</div>
												<div className="author-info">
													<div>
														<h5 className="sub-heading-ag-xl secondery-600">Esther Howard</h5>
														<p className="paragraph-18-fitree secondery-600">Businessman</p>
													</div>
												</div>
											</div>
											<div className="comment-text">Financial planners help people to gain knowledge aboutw toio invest and save their money in the most efficient way ever. Many people all of across the coun us them Financial planners help people Financial know planners help people Financial planners=</div>
										</div>
									</SwiperSlide>
								</div>
							</Swiper>
						</div>
						<div className="swiper-button-prev swiper-button-inline swiper-button-prev-style-6">
							<svg width={11} height={18} viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M9.23804 0.500001C9.62644 0.5 9.97168 0.629467 10.2306 0.888401C10.7916 1.40627 10.7916 2.31253 10.2306 2.8304L4.31831 8.78587L10.2306 14.6982C10.7916 15.2161 10.7916 16.1223 10.2306 16.6402C9.71275 17.2012 8.80649 17.2012 8.28862 16.6402L1.38373 9.73529C0.822704 9.21743 0.822704 8.31116 1.38373 7.79329L8.28862 0.888401C8.54755 0.629467 8.89279 0.500001 9.23804 0.500001Z" fill="currentColor" />
							</svg>
						</div>
						<div className="swiper-button-next swiper-button-inline swiper-button-next-style-6">
							<svg width={11} height={18} viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M1.76196 17.5C1.37356 17.5 1.02831 17.3705 0.769381 17.1116C0.208358 16.5937 0.208358 15.6875 0.76938 15.1696L6.68169 9.21413L0.769379 3.30182C0.208357 2.78395 0.208356 1.87768 0.769379 1.35982C1.28725 0.798793 2.19351 0.798793 2.71138 1.35982L9.61627 8.26471C10.1773 8.78257 10.1773 9.68884 9.61627 10.2067L2.71138 17.1116C2.45245 17.3705 2.1072 17.5 1.76196 17.5Z" fill="currentColor" />
							</svg>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
