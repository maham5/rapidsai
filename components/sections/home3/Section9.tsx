'use client'
import { sliderGroup1 } from '@/util/swiperOptions'
import { Swiper, SwiperSlide } from "swiper/react"
import Link from "next/link"

export default function Section9() {
	return (
		<>

			<section className="position-relative overflow-hidden box-latest-blog-3">
				<div className="container" data-aos="fade-up">
					<div className="row position-relative align-items-end" data-aos="fade-up">
						<div className="col-lg-9">
							<h6 className="sub-heading-ag-sm primary-home text-uppercase mb-2">Latest blog</h6>
							<h3 className="heading-3xl dark-950">
								Our Latest Trending<br className="d-none d-lg-block" />
								Blogs &amp; News
							</h3>
						</div>
						<div className="col-lg-3 text-center text-lg-end">
							<div className="box-button-slider">
								<div className="swiper-button-prev swiper-button-inline swiper-button-prev-style-1 swiper-button-prev-style-6">
									<svg width={18} height={12} viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M6 2.62268e-07C6 0.636 5.45025 1.58571 4.89375 2.38286C4.17825 3.41143 3.32325 4.30886 2.343 4.99371C1.608 5.50714 0.717 6 -2.62268e-07 6M-2.62268e-07 6C0.717 6 1.60875 6.49286 2.343 7.00629C3.32325 7.692 4.17825 8.58943 4.89375 9.61629C5.45025 10.4143 6 11.3657 6 12M-2.62268e-07 6L18 6" stroke="currentColor" strokeWidth="1.5" />
									</svg>
								</div>
								<div className="swiper-button-next swiper-button-inline swiper-button-next-style-1 swiper-button-next-style-6">
									<svg width={18} height={12} viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M12 12C12 11.364 12.5498 10.4143 13.1063 9.61714C13.8218 8.58857 14.6768 7.69114 15.657 7.00629C16.392 6.49286 17.283 6 18 6M18 6C17.283 6 16.3913 5.50714 15.657 4.99371C14.6768 4.308 13.8218 3.41057 13.1063 2.38371C12.5498 1.58571 12 0.634285 12 -3.81478e-07M18 6L2.62268e-07 6" stroke="currentColor" strokeWidth="1.5" />
									</svg>
								</div>
							</div>
						</div>
					</div>
					<div className="box-swiper mt-60" data-aos="fade-up">
						<Swiper {...sliderGroup1} className="swiper-container slider-group-1">
							<div className="swiper-wrapper">
								<SwiperSlide>
									<div className="row position-relative">
										<div className="col-lg-6">
											<div className="card-blog card-blog-3">
												<div className="card-image">
													<Link href="#"><img src="/assets/imgs/pages/home3/news.png" alt="Vatech" /></Link>
													<span className="card-date">25 January</span>
												</div>
												<div className="card-info">
													<div className="card-meta">
														<span className="comment">Comments</span>
														<span className="by-user">By Admin</span>
													</div>
													<div className="card-title">
														<Link href="#" className="link-title heading-ag-lg">Dive into Our Consulting Agency's Blog for Visionary Content</Link>
														<div className="desc-news paragraph-rubik-r">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu Ut enim ad minima veniam.</div>
														<Link href="#" className="link-readmore">Read More
															<svg width={15} height={10} viewBox="0 0 15 10" fill="none" xmlns="http://www.w3.org/2000/svg">
																<path d="M10 10C10 9.47 10.4581 8.67857 10.9219 8.01429C11.5181 7.15714 12.2306 6.40929 13.0475 5.83857C13.66 5.41071 14.4025 5 15 5M15 5C14.4025 5 13.6594 4.58929 13.0475 4.16143C12.2306 3.59 11.5181 2.84214 10.9219 1.98643C10.4581 1.32143 10 0.528572 10 3.7749e-07M15 5L2.18557e-07 5" stroke="currentColor" strokeWidth="1.5" />
															</svg>
														</Link>
													</div>
												</div>
											</div>
										</div>
										<div className="col-lg-6">
											<div className="card-blog card-blog-4">
												<div className="card-image">
													<Link href="#"><img src="/assets/imgs/pages/home3/img-news.png" alt="Vatech" /></Link>
												</div>
												<div className="card-info">
													<div className="card-meta">
														<span className="comment">Comments</span>
														<span className="by-user">By Admin</span>
													</div>
													<div className="card-title">
														<Link href="#" className="link-title">Insights from Our Consulting Experts</Link>
														<Link href="#" className="link-readmore">Read More
															<svg width={15} height={10} viewBox="0 0 15 10" fill="none" xmlns="http://www.w3.org/2000/svg">
																<path d="M10 10C10 9.47 10.4581 8.67857 10.9219 8.01429C11.5181 7.15714 12.2306 6.40929 13.0475 5.83857C13.66 5.41071 14.4025 5 15 5M15 5C14.4025 5 13.6594 4.58929 13.0475 4.16143C12.2306 3.59 11.5181 2.84214 10.9219 1.98643C10.4581 1.32143 10 0.528572 10 3.7749e-07M15 5L2.18557e-07 5" stroke="currentColor" strokeWidth="1.5" />
															</svg>
														</Link>
													</div>
												</div>
											</div>
											<div className="card-blog card-blog-4">
												<div className="card-image">
													<Link href="#"><img src="/assets/imgs/pages/home3/news3.png" alt="Vatech" /></Link>
												</div>
												<div className="card-info">
													<div className="card-meta">
														<span className="comment">Comments</span>
														<span className="by-user">By Admin</span>
													</div>
													<div className="card-title">
														<Link href="#" className="link-title">Insights from Our Consulting Experts</Link>
														<Link href="#" className="link-readmore">Read More
															<svg width={15} height={10} viewBox="0 0 15 10" fill="none" xmlns="http://www.w3.org/2000/svg">
																<path d="M10 10C10 9.47 10.4581 8.67857 10.9219 8.01429C11.5181 7.15714 12.2306 6.40929 13.0475 5.83857C13.66 5.41071 14.4025 5 15 5M15 5C14.4025 5 13.6594 4.58929 13.0475 4.16143C12.2306 3.59 11.5181 2.84214 10.9219 1.98643C10.4581 1.32143 10 0.528572 10 3.7749e-07M15 5L2.18557e-07 5" stroke="currentColor" strokeWidth="1.5" />
															</svg>
														</Link>
													</div>
												</div>
											</div>
										</div>
									</div>
								</SwiperSlide>
								<SwiperSlide>
									<div className="row position-relative">
										<div className="col-lg-6">
											<div className="card-blog card-blog-3">
												<div className="card-image">
													<Link href="#"><img src="/assets/imgs/pages/home1/blog.png" alt="Vatech" /></Link>
													<span className="card-date">25 January</span>
												</div>
												<div className="card-info">
													<div className="card-meta">
														<span className="comment">Comments</span>
														<span className="by-user">By Admin</span>
													</div>
													<div className="card-title">
														<Link href="#" className="link-title heading-ag-lg">Dive into Our Consulting Agency's Blog for Visionary Content</Link>
														<div className="desc-news paragraph-rubik-r">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu Ut enim ad minima veniam.</div>
														<Link href="#" className="link-readmore">Read More
															<svg width={15} height={10} viewBox="0 0 15 10" fill="none" xmlns="http://www.w3.org/2000/svg">
																<path d="M10 10C10 9.47 10.4581 8.67857 10.9219 8.01429C11.5181 7.15714 12.2306 6.40929 13.0475 5.83857C13.66 5.41071 14.4025 5 15 5M15 5C14.4025 5 13.6594 4.58929 13.0475 4.16143C12.2306 3.59 11.5181 2.84214 10.9219 1.98643C10.4581 1.32143 10 0.528572 10 3.7749e-07M15 5L2.18557e-07 5" stroke="currentColor" strokeWidth="1.5" />
															</svg>
														</Link>
													</div>
												</div>
											</div>
										</div>
										<div className="col-lg-6">
											<div className="card-blog card-blog-4">
												<div className="card-image">
													<Link href="#"><img src="/assets/imgs/pages/home3/img-news.png" alt="Vatech" /></Link>
												</div>
												<div className="card-info">
													<div className="card-meta">
														<span className="comment">Comments</span>
														<span className="by-user">By Admin</span>
													</div>
													<div className="card-title">
														<Link href="#" className="link-title">Insights from Our Consulting Experts</Link>
														<Link href="#" className="link-readmore">Read More
															<svg width={15} height={10} viewBox="0 0 15 10" fill="none" xmlns="http://www.w3.org/2000/svg">
																<path d="M10 10C10 9.47 10.4581 8.67857 10.9219 8.01429C11.5181 7.15714 12.2306 6.40929 13.0475 5.83857C13.66 5.41071 14.4025 5 15 5M15 5C14.4025 5 13.6594 4.58929 13.0475 4.16143C12.2306 3.59 11.5181 2.84214 10.9219 1.98643C10.4581 1.32143 10 0.528572 10 3.7749e-07M15 5L2.18557e-07 5" stroke="currentColor" strokeWidth="1.5" />
															</svg>
														</Link>
													</div>
												</div>
											</div>
											<div className="card-blog card-blog-4">
												<div className="card-image">
													<Link href="#"><img src="/assets/imgs/pages/home3/img-news.png" alt="Vatech" /></Link>
												</div>
												<div className="card-info">
													<div className="card-meta">
														<span className="comment">Comments</span>
														<span className="by-user">By Admin</span>
													</div>
													<div className="card-title">
														<Link href="#" className="link-title">Insights from Our Consulting Experts</Link>
														<Link href="#" className="link-readmore">Read More
															<svg width={15} height={10} viewBox="0 0 15 10" fill="none" xmlns="http://www.w3.org/2000/svg">
																<path d="M10 10C10 9.47 10.4581 8.67857 10.9219 8.01429C11.5181 7.15714 12.2306 6.40929 13.0475 5.83857C13.66 5.41071 14.4025 5 15 5M15 5C14.4025 5 13.6594 4.58929 13.0475 4.16143C12.2306 3.59 11.5181 2.84214 10.9219 1.98643C10.4581 1.32143 10 0.528572 10 3.7749e-07M15 5L2.18557e-07 5" stroke="currentColor" strokeWidth="1.5" />
															</svg>
														</Link>
													</div>
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
