'use client'
import { sliderGroup1 } from '@/util/swiperOptions'
import { Swiper, SwiperSlide } from "swiper/react"
import Link from "next/link"

export default function Section1() {
	return (
		<>

			<section className="position-relative overflow-hidden box-banner-9">
				<div className="banner-7" data-aos="fade-up">
					<div className="box-swiper">
						<div className="swiper-button-prev swiper-button-inline swiper-button-prev-style-1 swiper-button-prev-style-5">
							<svg width={30} height={18} viewBox="0 0 30 18" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M10 1.31134e-06C10 0.954001 9.08375 2.37857 8.15625 3.57429C6.96375 5.11714 5.53875 6.46329 3.905 7.49057C2.68 8.26071 1.195 9 -1.18021e-06 9M-1.18021e-06 9C1.195 9 2.68125 9.73929 3.905 10.5094C5.53875 11.538 6.96375 12.8841 8.15625 14.4244C9.08375 15.6214 10 17.0486 10 18M-1.18021e-06 9L30 9" stroke="currentColor" strokeWidth={2} />
							</svg>
						</div>
						<div className="swiper-button-next swiper-button-inline swiper-button-next-style-1 swiper-button-next-style-5">
							<svg width={30} height={16} viewBox="0 0 30 16" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M20 16C20 15.152 20.9162 13.8857 21.8438 12.8229C23.0363 11.4514 24.4613 10.2549 26.095 9.34171C27.32 8.65714 28.805 8 30 8M30 8C28.805 8 27.3188 7.34286 26.095 6.65829C24.4613 5.744 23.0363 4.54743 21.8438 3.17828C20.9163 2.11428 20 0.845713 20 -1.15237e-06M30 8L3.49691e-07 8" stroke="currentColor" strokeWidth={2} />
							</svg>
						</div>
						<Swiper {...sliderGroup1} className="swiper-container slider-group-1">
							<div className="swiper-wrapper">
								<SwiperSlide>
									<div className="slide-banner-home-9">
										<div className="container" data-aos="fade-up">
											<div className="text-center">
												<span className="text-border-square mb-3 d-inline-block">Guaranteed satisfaction</span>
												<h1 className="display-2xl color-white text-uppercase mb-4">Creating Business With Amazing Consulting</h1>
												<div className="box-buttons">
													<Link href="#" className="btn btn-primary-500 me-3 mb-3">
														Explore Services
														<svg width={19} height={15} viewBox="0 0 19 15" fill="none" xmlns="http://www.w3.org/2000/svg">
															<path d="M12.6667 14.5C12.6667 13.758 13.247 12.65 13.8344 11.72C14.5896 10.52 15.4921 9.473 16.5268 8.674C17.3027 8.075 18.2432 7.5 19 7.5M19 7.5C18.2432 7.5 17.3019 6.925 16.5268 6.326C15.4921 5.526 14.5896 4.479 13.8344 3.281C13.247 2.35 12.6667 1.24 12.6667 0.500001M19 7.5L-1.70857e-07 7.5" stroke="currentColor" strokeWidth={2} />
														</svg>
													</Link>
													<Link href="#" className="btn btn-white-border mb-3">
														Contact Us
														<svg width={19} height={15} viewBox="0 0 19 15" fill="none" xmlns="http://www.w3.org/2000/svg">
															<path d="M12.6667 14.5C12.6667 13.758 13.247 12.65 13.8344 11.72C14.5896 10.52 15.4921 9.473 16.5268 8.674C17.3027 8.075 18.2432 7.5 19 7.5M19 7.5C18.2432 7.5 17.3019 6.925 16.5268 6.326C15.4921 5.526 14.5896 4.479 13.8344 3.281C13.247 2.35 12.6667 1.24 12.6667 0.500001M19 7.5L-1.70857e-07 7.5" stroke="currentColor" strokeWidth={2} />
														</svg>
													</Link>
												</div>
											</div>
										</div>
									</div>
								</SwiperSlide>
								<SwiperSlide>
									<div className="slide-banner-home-9">
										<div className="container" data-aos="fade-up">
											<div className="text-center">
												<span className="text-border-square mb-3 d-inline-block">Guaranteed satisfaction</span>
												<h1 className="display-2xl color-white text-uppercase mb-4">Creating Business With Amazing Consulting</h1>
												<div className="box-buttons">
													<Link href="#" className="btn btn-primary-500 me-3 mb-3">
														Explore Services
														<svg width={19} height={15} viewBox="0 0 19 15" fill="none" xmlns="http://www.w3.org/2000/svg">
															<path d="M12.6667 14.5C12.6667 13.758 13.247 12.65 13.8344 11.72C14.5896 10.52 15.4921 9.473 16.5268 8.674C17.3027 8.075 18.2432 7.5 19 7.5M19 7.5C18.2432 7.5 17.3019 6.925 16.5268 6.326C15.4921 5.526 14.5896 4.479 13.8344 3.281C13.247 2.35 12.6667 1.24 12.6667 0.500001M19 7.5L-1.70857e-07 7.5" stroke="currentColor" strokeWidth={2} />
														</svg>
													</Link>
													<Link href="#" className="btn btn-white-border mb-3">
														Contact Us
														<svg width={19} height={15} viewBox="0 0 19 15" fill="none" xmlns="http://www.w3.org/2000/svg">
															<path d="M12.6667 14.5C12.6667 13.758 13.247 12.65 13.8344 11.72C14.5896 10.52 15.4921 9.473 16.5268 8.674C17.3027 8.075 18.2432 7.5 19 7.5M19 7.5C18.2432 7.5 17.3019 6.925 16.5268 6.326C15.4921 5.526 14.5896 4.479 13.8344 3.281C13.247 2.35 12.6667 1.24 12.6667 0.500001M19 7.5L-1.70857e-07 7.5" stroke="currentColor" strokeWidth={2} />
														</svg>
													</Link>
												</div>
											</div>
										</div>
									</div>
								</SwiperSlide>
							</div>
						</Swiper>
					</div>
				</div>
			</section>
		</>
	)
}
