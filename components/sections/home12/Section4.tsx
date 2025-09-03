'use client'
import { Swiper, SwiperSlide } from "swiper/react"
import { sliderGroup3 } from '@/util/swiperOptions'
import Link from "next/link"

export default function Section4() {
	return (
		<>

			<section className="position-relative overflow-hidden box-section box-case-study-12">
				<div className="container" data-aos="fade-up">
					<div className="row position-relative align-items-end">
						<div className="col-lg-9 mb-4">
							<p className="sub-heading-ag-sm color-white text-uppercase letter-space-4 text-line-up-down white mb-3">case studies</p>
							<h3 className="heading-ag-3xl color-white">
								Our Completed Latest<br className="d-block d-lg-none" />
								Project<br className="d-none d-lg-block" />
								Success
							</h3>
						</div>
						<div className="col-lg-3 text-center text-lg-end mb-4">
							<div className="box-button-slider box-button-slider-red">
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
				<div className="box-casestudy-lists mt-5">
					<div className="box-swiper">
						<Swiper {...sliderGroup3} className="swiper-container slider-group-3">
							<div className="swiper-wrapper">
								<SwiperSlide>
									<div className="card-case-study-3">
										<div className="card-image">
											<img src="/assets/imgs/pages/home12/case.png" alt="Vatech" />
										</div>
										<div className="card-info">
											<div className="card-info-left">
												<h5 className="heading-ag-lg">Business Consulting</h5>
												<p className="sub-heading-ag-xl-light">Lorem Ipsum is simply dummy</p>
											</div>
											<div className="card-info-right">
												<Link href="#">
													<svg width={17} height={17} viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
														<path d="M16.875 8.5C16.875 9.20312 16.2891 9.78906 15.625 9.78906H10V15.4141C10 16.0781 9.41406 16.625 8.75 16.625C8.04688 16.625 7.5 16.0781 7.5 15.4141V9.78906H1.875C1.17188 9.78906 0.625 9.20312 0.625 8.5C0.625 7.83594 1.17188 7.28906 1.875 7.28906H7.5V1.66406C7.5 0.960938 8.04688 0.375 8.75 0.375C9.41406 0.375 10 0.960938 10 1.66406V7.28906H15.625C16.2891 7.25 16.875 7.83594 16.875 8.5Z" fill="#B91202" />
													</svg>
												</Link>
											</div>
										</div>
									</div>
								</SwiperSlide>
								<SwiperSlide>
									<div className="card-case-study-3">
										<div className="card-image">
											<img src="/assets/imgs/pages/home12/case3.png" alt="Vatech" />
										</div>
										<div className="card-info">
											<div className="card-info-left">
												<h5 className="heading-ag-lg">Business Consulting</h5>
												<p className="sub-heading-ag-xl-light">Lorem Ipsum is simply dummy</p>
											</div>
											<div className="card-info-right">
												<Link href="#">
													<svg width={17} height={17} viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
														<path d="M16.875 8.5C16.875 9.20312 16.2891 9.78906 15.625 9.78906H10V15.4141C10 16.0781 9.41406 16.625 8.75 16.625C8.04688 16.625 7.5 16.0781 7.5 15.4141V9.78906H1.875C1.17188 9.78906 0.625 9.20312 0.625 8.5C0.625 7.83594 1.17188 7.28906 1.875 7.28906H7.5V1.66406C7.5 0.960938 8.04688 0.375 8.75 0.375C9.41406 0.375 10 0.960938 10 1.66406V7.28906H15.625C16.2891 7.25 16.875 7.83594 16.875 8.5Z" fill="#B91202" />
													</svg>
												</Link>
											</div>
										</div>
									</div>
								</SwiperSlide>
								<SwiperSlide>
									<div className="card-case-study-3">
										<div className="card-image">
											<img src="/assets/imgs/pages/home12/case2.png" alt="Vatech" />
										</div>
										<div className="card-info">
											<div className="card-info-left">
												<h5 className="heading-ag-lg">Business Consulting</h5>
												<p className="sub-heading-ag-xl-light">Lorem Ipsum is simply dummy</p>
											</div>
											<div className="card-info-right">
												<Link href="#">
													<svg width={17} height={17} viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
														<path d="M16.875 8.5C16.875 9.20312 16.2891 9.78906 15.625 9.78906H10V15.4141C10 16.0781 9.41406 16.625 8.75 16.625C8.04688 16.625 7.5 16.0781 7.5 15.4141V9.78906H1.875C1.17188 9.78906 0.625 9.20312 0.625 8.5C0.625 7.83594 1.17188 7.28906 1.875 7.28906H7.5V1.66406C7.5 0.960938 8.04688 0.375 8.75 0.375C9.41406 0.375 10 0.960938 10 1.66406V7.28906H15.625C16.2891 7.25 16.875 7.83594 16.875 8.5Z" fill="#B91202" />
													</svg>
												</Link>
											</div>
										</div>
									</div>
								</SwiperSlide>
								<SwiperSlide>
									<div className="card-case-study-3">
										<div className="card-image">
											<img src="/assets/imgs/pages/home12/case.png" alt="Vatech" />
										</div>
										<div className="card-info">
											<div className="card-info-left">
												<h5 className="heading-ag-lg">Business Consulting</h5>
												<p className="sub-heading-ag-xl-light">Lorem Ipsum is simply dummy</p>
											</div>
											<div className="card-info-right">
												<Link href="#">
													<svg width={17} height={17} viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
														<path d="M16.875 8.5C16.875 9.20312 16.2891 9.78906 15.625 9.78906H10V15.4141C10 16.0781 9.41406 16.625 8.75 16.625C8.04688 16.625 7.5 16.0781 7.5 15.4141V9.78906H1.875C1.17188 9.78906 0.625 9.20312 0.625 8.5C0.625 7.83594 1.17188 7.28906 1.875 7.28906H7.5V1.66406C7.5 0.960938 8.04688 0.375 8.75 0.375C9.41406 0.375 10 0.960938 10 1.66406V7.28906H15.625C16.2891 7.25 16.875 7.83594 16.875 8.5Z" fill="#B91202" />
													</svg>
												</Link>
											</div>
										</div>
									</div>
								</SwiperSlide>
							</div>
					</Swiper>
				</div>
			</div>
		</section >
		</>
	)
}
