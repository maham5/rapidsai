
'use client'
import { sliderGroup1 } from '@/util/swiperOptions'
import { Swiper, SwiperSlide } from "swiper/react"
export default function Section8() {
	return (
		<>

			<section className="position-relative overflow-hidden box-section box-testimonial-12">
				<div className="container" data-aos="fade-up">
					<div className="box-slider-testimonials-11 mt-5">
						<div className="box-swiper pt-3 pb-6">
							<Swiper {...sliderGroup1} className="swiper-container slider-group-1">
								<div className="swiper-wrapper">
									<SwiperSlide>
										<div className="card-testimonials-2 card-testimonials-9">
											<div className="card-image">
												<img src="/assets/imgs/pages/home12/review.png" alt="Vatech" />
											</div>
											<div className="card-info">
												<div className="rating">
													<img src="/assets/imgs/pages/home8/star.svg" alt="Vatech" />
													<img src="/assets/imgs/pages/home8/star.svg" alt="Vatech" />
													<img src="/assets/imgs/pages/home8/star.svg" alt="Vatech" />
													<img src="/assets/imgs/pages/home8/star.svg" alt="Vatech" />
													<img src="/assets/imgs/pages/home8/star.svg" alt="Vatech" />
												</div>
												<div className="comment-text heading-ag-lg-medium dark-950">“What truly sets Vatech apart is their strategic approach. They took the time to fully comprehend our industry. Apart is their strategic approach. truly sets Vatech apart”</div>
												<div className="card-author">
													<div className="author-info">
														<h5 className="sub-heading-ag-xl dark-950">Mrs.Diannel Russell</h5>
														<p className="sub-heading-ag-xl-light dark-950">Fluxi Agency</p>
													</div>
												</div>
											</div>
										</div>
									</SwiperSlide>
									<SwiperSlide>
										<div className="card-testimonials-2 card-testimonials-9">
											<div className="card-image">
												<img src="/assets/imgs/pages/home12/review.png" alt="Vatech" />
											</div>
											<div className="card-info">
												<div className="rating">
													<img src="/assets/imgs/pages/home8/star.svg" alt="Vatech" />
													<img src="/assets/imgs/pages/home8/star.svg" alt="Vatech" />
													<img src="/assets/imgs/pages/home8/star.svg" alt="Vatech" />
													<img src="/assets/imgs/pages/home8/star.svg" alt="Vatech" />
													<img src="/assets/imgs/pages/home8/star.svg" alt="Vatech" />
												</div>
												<div className="comment-text heading-ag-lg-medium dark-950">“What truly sets Vatech apart is their strategic approach. They took the time to fully comprehend our industry. Apart is their strategic approach. truly sets Vatech apart”</div>
												<div className="card-author">
													<div className="author-info">
														<h5 className="sub-heading-ag-xl dark-950">Mrs.Diannel Russell</h5>
														<p className="sub-heading-ag-xl-light dark-950">Fluxi Agency</p>
													</div>
												</div>
											</div>
										</div>
									</SwiperSlide>
								</div>
							</Swiper>
							<div className="box-button-slider box-button-slider-testimonials box-button-slider-red">
								<div className="swiper-button-prev swiper-button-inline swiper-button-prev-style-1 swiper-button-prev-style-3">
									<svg width={18} height={12} viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M6 2.62268e-07C6 0.636 5.45025 1.58571 4.89375 2.38286C4.17825 3.41143 3.32325 4.30886 2.343 4.99371C1.608 5.50714 0.717 6 -2.62268e-07 6M-2.62268e-07 6C0.717 6 1.60875 6.49286 2.343 7.00629C3.32325 7.692 4.17825 8.58943 4.89375 9.61629C5.45025 10.4143 6 11.3657 6 12M-2.62268e-07 6L18 6" stroke="currentColor" strokeWidth="1.5" />
									</svg>
								</div>
								<div className="swiper-button-next swiper-button-inline swiper-button-next-style-1 swiper-button-next-style-3">
									<svg width={18} height={12} viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M12 12C12 11.364 12.5498 10.4143 13.1063 9.61714C13.8218 8.58857 14.6768 7.69114 15.657 7.00629C16.392 6.49286 17.283 6 18 6M18 6C17.283 6 16.3913 5.50714 15.657 4.99371C14.6768 4.308 13.8218 3.41057 13.1063 2.38371C12.5498 1.58571 12 0.634285 12 -3.81478e-07M18 6L2.62268e-07 6" stroke="currentColor" strokeWidth="1.5" />
									</svg>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
