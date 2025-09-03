'use client'
import { sliderGroup1 } from '@/util/swiperOptions'
import Link from "next/link"
import { useState } from 'react'
import ModalVideo from 'react-modal-video'
import { Swiper, SwiperSlide } from "swiper/react"

export default function Section6() {
	const [isOpen, setOpen] = useState(false)
	return (
		<>

			<section className="position-relative overflow-hidden box-testimonials-9">
				<div className="container swipper-root" />
				<div className="container-testimonials" data-aos="fade-up">
					<div className="testimonial-left">
						<div className="testimonial-left-inner">
							<img src="/assets/imgs/pages/home9/img-client.png" alt="Vatech" className="wow img-custom-anim-top" />
							<a onClick={() => setOpen(true)} className="btn btn-play-3 popup-video">
								<img src="/assets/imgs/pages/home9/btn-play.svg" alt="Vatech" />
							</a>
							<div className="box-button-slider">
								<div className="swiper-button-prev swiper-button-inline swiper-button-prev-style-1">
									<svg width={18} height={12} viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M6 2.62268e-07C6 0.636 5.45025 1.58571 4.89375 2.38286C4.17825 3.41143 3.32325 4.30886 2.343 4.99371C1.608 5.50714 0.717 6 -2.62268e-07 6M-2.62268e-07 6C0.717 6 1.60875 6.49286 2.343 7.00629C3.32325 7.692 4.17825 8.58943 4.89375 9.61629C5.45025 10.4143 6 11.3657 6 12M-2.62268e-07 6L18 6" stroke="currentColor" strokeWidth="1.5" />
									</svg>
								</div>
								<div className="swiper-button-next swiper-button-inline swiper-button-next-style-1">
									<svg width={18} height={12} viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M12 12C12 11.364 12.5498 10.4143 13.1063 9.61714C13.8218 8.58857 14.6768 7.69114 15.657 7.00629C16.392 6.49286 17.283 6 18 6M18 6C17.283 6 16.3913 5.50714 15.657 4.99371C14.6768 4.308 13.8218 3.41057 13.1063 2.38371C12.5498 1.58571 12 0.634285 12 -3.81478e-07M18 6L2.62268e-07 6" stroke="currentColor" strokeWidth="1.5" />
									</svg>
								</div>
							</div>
						</div>
					</div>
					<div className="testimonial-right">
						<div className="box-swiper">
							<Swiper {...sliderGroup1} className="swiper-container slider-group-1">
								<div className="swiper-wrapper">
									<SwiperSlide>
										<div className="card-testimonial-9">
											<div className="card-info">
												<h3 className="heading-48-fitree color-white mb-3">Client’s Talk With Our Services</h3>
												<p className="paragraph-20-fitree color-white mb-40">“Deiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex eacommodo consequat. Duis aute irure dolor in reprehenderit in. tempor incididunt ut labore et dolore magna aliqua.’’</p>
												<div className="box-review-author">
													<div className="review-author">
														<div className="review-image">
															<img src="/assets/imgs/pages/home9/author.png" alt="Vatech" />
														</div>
														<div className="review-author-info">
															<h5 className="sub-heading-md color-white">Cameron Williamson</h5>
															<p className="paragraph-rubik-r color-white-70">Product Manager</p>
														</div>
													</div>
													<div className="review-rate">
														<img src="/assets/imgs/pages/home9/star.svg" alt="Vatech" />
														<img src="/assets/imgs/pages/home9/star.svg" alt="Vatech" />
														<img src="/assets/imgs/pages/home9/star.svg" alt="Vatech" />
														<img src="/assets/imgs/pages/home9/star.svg" alt="Vatech" />
														<img src="/assets/imgs/pages/home9/star.svg" alt="Vatech" />
													</div>
												</div>
											</div>
										</div>
									</SwiperSlide>
									<SwiperSlide>
										<div className="card-testimonial-9">
											<div className="card-info">
												<h3 className="heading-48-fitree color-white mb-3">Client’s Talk With Our Services</h3>
												<p className="paragraph-20-fitree color-white mb-40">“Deiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex eacommodo consequat. Duis aute irure dolor in reprehenderit in. tempor incididunt ut labore et dolore magna aliqua.’’</p>
												<div className="box-review-author">
													<div className="review-author">
														<div className="review-image">
															<img src="/assets/imgs/pages/home9/author.png" alt="Vatech" />
														</div>
														<div className="review-author-info">
															<h5 className="sub-heading-md color-white">Cameron Williamson</h5>
															<p className="paragraph-rubik-r color-white-70">Product Manager</p>
														</div>
													</div>
													<div className="review-rate">
														<img src="/assets/imgs/pages/home9/star.svg" alt="Vatech" />
														<img src="/assets/imgs/pages/home9/star.svg" alt="Vatech" />
														<img src="/assets/imgs/pages/home9/star.svg" alt="Vatech" />
														<img src="/assets/imgs/pages/home9/star.svg" alt="Vatech" />
														<img src="/assets/imgs/pages/home9/star.svg" alt="Vatech" />
													</div>
												</div>
											</div>
										</div>
									</SwiperSlide>
								</div>
							</Swiper>
						</div>
					</div>
				</div>
			</section>
			<ModalVideo channel='youtube' isOpen={isOpen} videoId="9HaU8NjH7bI" onClose={() => setOpen(false)} />
		</>
	)
}
