
'use client'
import { Swiper, SwiperSlide } from "swiper/react"
import { sliderGroup3 } from '@/util/swiperOptions'
export default function Section5() {
	return (
		<>

			<section className="position-relative overflow-hidden box-testimonial-2">
				<div className="container" data-aos="fade-up">
					<div className="row position-relative align-items-end">
						<div className="col-lg-9">
							<h6 className="banner-small-title-white mb-20" data-aos="fade-up">TESTIMONIALS</h6>
							<h3 className="heading-ag-3xl color-white" data-aos="fade-up">
								Clients Feedback With<br className="d-none d-lg-block" />
								Our Services
							</h3>
						</div>
						<div className="col-lg-3 text-end">
							<div className="box-button-slider" data-aos="fade-up">
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
					<div className="box-testimonials-lists mt-5" data-aos="fade-up">
						<div className="box-swiper">
							<Swiper {...sliderGroup3} className="swiper-container slider-group-3">
								<div className="swiper-wrapper">
									<SwiperSlide>
										<div className="card-testimonials-2">
											<div className="card-author">
												<div className="author-image">
													<img src="/assets/imgs/pages/home2/author.png" alt="Vatech" />
												</div>
												<div className="author-info">
													<div className="rating">
														<img src="/assets/imgs/template/icons/star.svg" alt="Vatech" />
														<img src="/assets/imgs/template/icons/star.svg" alt="Vatech" />
														<img src="/assets/imgs/template/icons/star.svg" alt="Vatech" />
														<img src="/assets/imgs/template/icons/star.svg" alt="Vatech" />
														<img src="/assets/imgs/template/icons/star.svg" alt="Vatech" />
													</div>
													<h5 className="sub-heading-ag-xl">Esther Howard</h5>
													<p className="paragraph-rubik-r">Ux Architect</p>
												</div>
											</div>
											<div className="comment-text">Lorem ipsum dolor sit amet consectetur. In non sodales elementum et te pus ac platea velit semper. Non morbi aliqu alesuada.</div>
										</div>
									</SwiperSlide>
									<SwiperSlide>
										<div className="card-testimonials-2">
											<div className="card-author">
												<div className="author-image">
													<img src="/assets/imgs/pages/home2/author2.png" alt="Vatech" />
												</div>
												<div className="author-info">
													<div className="rating">
														<img src="/assets/imgs/template/icons/star.svg" alt="Vatech" />
														<img src="/assets/imgs/template/icons/star.svg" alt="Vatech" />
														<img src="/assets/imgs/template/icons/star.svg" alt="Vatech" />
														<img src="/assets/imgs/template/icons/star.svg" alt="Vatech" />
														<img src="/assets/imgs/template/icons/star.svg" alt="Vatech" />
													</div>
													<h5 className="sub-heading-ag-xl">Esther Howard</h5>
													<p className="paragraph-rubik-r">Ux Architect</p>
												</div>
											</div>
											<div className="comment-text">Lorem ipsum dolor sit amet consectetur. In non sodales elementum et te pus ac platea velit semper. Non morbi aliqu alesuada.</div>
										</div>
									</SwiperSlide>
									<SwiperSlide>
										<div className="card-testimonials-2">
											<div className="card-author">
												<div className="author-image">
													<img src="/assets/imgs/pages/home2/author3.png" alt="Vatech" />
												</div>
												<div className="author-info">
													<div className="rating">
														<img src="/assets/imgs/template/icons/star.svg" alt="Vatech" />
														<img src="/assets/imgs/template/icons/star.svg" alt="Vatech" />
														<img src="/assets/imgs/template/icons/star.svg" alt="Vatech" />
														<img src="/assets/imgs/template/icons/star.svg" alt="Vatech" />
														<img src="/assets/imgs/template/icons/star.svg" alt="Vatech" />
													</div>
													<h5 className="sub-heading-ag-xl">Esther Howard</h5>
													<p className="paragraph-rubik-r">Ux Architect</p>
												</div>
											</div>
											<div className="comment-text">Lorem ipsum dolor sit amet consectetur. In non sodales elementum et te pus ac platea velit semper. Non morbi aliqu alesuada.</div>
										</div>
									</SwiperSlide>
									<SwiperSlide>
										<div className="card-testimonials-2">
											<div className="card-author">
												<div className="author-image">
													<img src="/assets/imgs/pages/home2/author4.png" alt="Vatech" />
												</div>
												<div className="author-info">
													<div className="rating">
														<img src="/assets/imgs/template/icons/star.svg" alt="Vatech" />
														<img src="/assets/imgs/template/icons/star.svg" alt="Vatech" />
														<img src="/assets/imgs/template/icons/star.svg" alt="Vatech" />
														<img src="/assets/imgs/template/icons/star.svg" alt="Vatech" />
														<img src="/assets/imgs/template/icons/star.svg" alt="Vatech" />
													</div>
													<h5 className="sub-heading-ag-xl">Esther Howard</h5>
													<p className="paragraph-rubik-r">Ux Architect</p>
												</div>
											</div>
											<div className="comment-text">Lorem ipsum dolor sit amet consectetur. In non sodales elementum et te pus ac platea velit semper. Non morbi aliqu alesuada.</div>
										</div>
									</SwiperSlide>
								</div>
						</Swiper>
					</div>
				</div>
			</div>
		</section >
		</>
	)
}
