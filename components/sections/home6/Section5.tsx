'use client'
import { useState } from "react";
import { swiperGroupAuto } from '@/util/swiperOptions'
import { Swiper, SwiperSlide } from "swiper/react"
import Link from "next/link"

export default function Section5() {
	const [isTab, setIsTab] = useState(1)
	const handleTab = (i: number) => {
		setIsTab(i)
	}
	return (
		<>

			<section className="position-relative overflow-hidden box-case-study">
				<div className="container swipper-root" />
				<div className="box-swiper-padding" data-aos="fade-up">
					<div className="container">
						<div className="row position-relative align-items-end">
							<div className="col-lg-7" data-aos="fade-up">
								<h6 className="paragraph-base-fitree-bold text-uppercase mb-20">Case study</h6>
								<h3 className="heading-48-fitree text-uppercase secondery-500">Effective Case Study</h3>
							</div>
							<div className="col-lg-5 text-center text-lg-end" data-aos="fade-up">
								<ul className="nav nav-tabs nav-tabs-case" id="pills-tab" role="tablist">
									<li>
										<a className={`${isTab === 1 ? 'active' : ''}`} onClick={() => handleTab(1)} data-bs-toggle="tab" type="button" role="tab" aria-controls="all" aria-selected="true">All</a>
									</li>
									<li>
										<a className={`${isTab === 2 ? 'active' : ''}`} onClick={() => handleTab(2)} data-bs-toggle="tab" type="button" role="tab" aria-controls="business" aria-selected="false">Business</a>
									</li>
									<li>
										<a className={`${isTab === 3 ? 'active' : ''}`} onClick={() => handleTab(3)} data-bs-toggle="tab" type="button" role="tab" aria-controls="consulting" aria-selected="false">Consulting</a>
									</li>
									<li>
										<a className={`${isTab === 4 ? 'active' : ''}`} onClick={() => handleTab(4)} data-bs-toggle="tab" type="button" role="tab" aria-controls="digital" aria-selected="false">Digital Marketing</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<div className="box-content-portfolio">
					<div className="tab-content">
						<div className={isTab == 1 ? "tab-pane show active" : "tab-pane"} id="all">
							<div className="box-slider-testimonials box-swiper-padding mt-0" data-aos="fade-up">
								<div className="box-swiper">
									<Swiper {...swiperGroupAuto} className="swiper-container swiper-group-auto pt-70">
										<div className="swiper-wrapper">
											<SwiperSlide>
												<div className="card-case-study">
													<div className="card-image">
														<img src="/assets/imgs/pages/home6/case.png" alt="Vatech" />
													</div>
													<div className="card-info">
														<p className="paragraph-base-12-fitree text-uppercase mb-0 color-white">Software Development</p>
														<Link href="#" className="heading-24-fitree color-white">Essential Product Solutions Program</Link>
														<Link href="#" className="view-detail">
															<svg width={20} height={14} viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
																<path d="M13.3333 13.334C13.3333 12.6273 13.9442 11.5721 14.5625 10.6864C15.3575 9.54351 16.3075 8.54636 17.3967 7.78541C18.2133 7.21494 19.2033 6.66732 20 6.66732M20 6.66732C19.2033 6.66732 18.2125 6.1197 17.3967 5.54922C16.3075 4.78732 15.3575 3.79017 14.5625 2.64922C13.9442 1.76256 13.3333 0.705413 13.3333 0.000650711M20 6.66732L7.68246e-07 6.66732" stroke="currentColor" strokeWidth="1.5" />
															</svg>
														</Link>
													</div>
												</div>
											</SwiperSlide>
											<SwiperSlide>
												<div className="card-case-study">
													<div className="card-image">
														<img src="/assets/imgs/pages/home6/case2.png" alt="Vatech" />
													</div>
													<div className="card-info">
														<p className="paragraph-base-12-fitree text-uppercase mb-0 color-white">Software Development</p>
														<Link href="#" className="heading-24-fitree color-white">Essential Product Solutions Program</Link>
														<Link href="#" className="view-detail">
															<svg width={20} height={14} viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
																<path d="M13.3333 13.334C13.3333 12.6273 13.9442 11.5721 14.5625 10.6864C15.3575 9.54351 16.3075 8.54636 17.3967 7.78541C18.2133 7.21494 19.2033 6.66732 20 6.66732M20 6.66732C19.2033 6.66732 18.2125 6.1197 17.3967 5.54922C16.3075 4.78732 15.3575 3.79017 14.5625 2.64922C13.9442 1.76256 13.3333 0.705413 13.3333 0.000650711M20 6.66732L7.68246e-07 6.66732" stroke="currentColor" strokeWidth="1.5" />
															</svg>
														</Link>
													</div>
												</div>
											</SwiperSlide>
											<SwiperSlide>
												<div className="card-case-study">
													<div className="card-image">
														<img src="/assets/imgs/pages/home6/case.png" alt="Vatech" />
													</div>
													<div className="card-info">
														<p className="paragraph-base-12-fitree text-uppercase mb-0 color-white">Software Development</p>
														<Link href="#" className="heading-24-fitree color-white">Essential Product Solutions Program</Link>
														<Link href="#" className="view-detail">
															<svg width={20} height={14} viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
																<path d="M13.3333 13.334C13.3333 12.6273 13.9442 11.5721 14.5625 10.6864C15.3575 9.54351 16.3075 8.54636 17.3967 7.78541C18.2133 7.21494 19.2033 6.66732 20 6.66732M20 6.66732C19.2033 6.66732 18.2125 6.1197 17.3967 5.54922C16.3075 4.78732 15.3575 3.79017 14.5625 2.64922C13.9442 1.76256 13.3333 0.705413 13.3333 0.000650711M20 6.66732L7.68246e-07 6.66732" stroke="currentColor" strokeWidth="1.5" />
															</svg>
														</Link>
													</div>
												</div>
											</SwiperSlide>
											<SwiperSlide>
												<div className="card-case-study">
													<div className="card-image">
														<img src="/assets/imgs/pages/home6/case2.png" alt="Vatech" />
													</div>
													<div className="card-info">
														<p className="paragraph-base-12-fitree text-uppercase mb-0 color-white">Software Development</p>
														<Link href="#" className="heading-24-fitree color-white">Essential Product Solutions Program</Link>
														<Link href="#" className="view-detail">
															<svg width={20} height={14} viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
																<path d="M13.3333 13.334C13.3333 12.6273 13.9442 11.5721 14.5625 10.6864C15.3575 9.54351 16.3075 8.54636 17.3967 7.78541C18.2133 7.21494 19.2033 6.66732 20 6.66732M20 6.66732C19.2033 6.66732 18.2125 6.1197 17.3967 5.54922C16.3075 4.78732 15.3575 3.79017 14.5625 2.64922C13.9442 1.76256 13.3333 0.705413 13.3333 0.000650711M20 6.66732L7.68246e-07 6.66732" stroke="currentColor" strokeWidth="1.5" />
															</svg>
														</Link>
													</div>
												</div>
											</SwiperSlide>
											<SwiperSlide>
												<div className="card-case-study">
													<div className="card-image">
														<img src="/assets/imgs/pages/home6/case.png" alt="Vatech" />
													</div>
													<div className="card-info">
														<p className="paragraph-base-12-fitree text-uppercase mb-0 color-white">Software Development</p>
														<Link href="#" className="heading-24-fitree color-white">Essential Product Solutions Program</Link>
														<Link href="#" className="view-detail">
															<svg width={20} height={14} viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
																<path d="M13.3333 13.334C13.3333 12.6273 13.9442 11.5721 14.5625 10.6864C15.3575 9.54351 16.3075 8.54636 17.3967 7.78541C18.2133 7.21494 19.2033 6.66732 20 6.66732M20 6.66732C19.2033 6.66732 18.2125 6.1197 17.3967 5.54922C16.3075 4.78732 15.3575 3.79017 14.5625 2.64922C13.9442 1.76256 13.3333 0.705413 13.3333 0.000650711M20 6.66732L7.68246e-07 6.66732" stroke="currentColor" strokeWidth="1.5" />
															</svg>
														</Link>
													</div>
												</div>
											</SwiperSlide>
										</div>
									</Swiper>
								</div>
							</div>
						</div>
						<div className={isTab == 2 ? "tab-pane show active" : "tab-pane"} id="business">
							<div className="row mt-5 row-masonry">
								<div className="col-lg-4 col-md-6">
									<div className="card-case-study">
										<div className="card-image">
											<img src="/assets/imgs/pages/home6/case.png" alt="Vatech" />
										</div>
										<div className="card-info">
											<p className="paragraph-base-12-fitree text-uppercase mb-0 color-white">Software Development</p>
											<Link href="#" className="heading-24-fitree color-white">Essential Product Solutions Program</Link>
											<Link href="#" className="view-detail">
												<svg width={20} height={14} viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M13.3333 13.334C13.3333 12.6273 13.9442 11.5721 14.5625 10.6864C15.3575 9.54351 16.3075 8.54636 17.3967 7.78541C18.2133 7.21494 19.2033 6.66732 20 6.66732M20 6.66732C19.2033 6.66732 18.2125 6.1197 17.3967 5.54922C16.3075 4.78732 15.3575 3.79017 14.5625 2.64922C13.9442 1.76256 13.3333 0.705413 13.3333 0.000650711M20 6.66732L7.68246e-07 6.66732" stroke="currentColor" strokeWidth="1.5" />
												</svg>
											</Link>
										</div>
									</div>
								</div>
								<div className="col-lg-4 col-md-6">
									<div className="card-case-study">
										<div className="card-image">
											<img src="/assets/imgs/pages/home6/case2.png" alt="Vatech" />
										</div>
										<div className="card-info">
											<p className="paragraph-base-12-fitree text-uppercase mb-0 color-white">Software Development</p>
											<Link href="#" className="heading-24-fitree color-white">Essential Product Solutions Program</Link>
											<Link href="#" className="view-detail">
												<svg width={20} height={14} viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M13.3333 13.334C13.3333 12.6273 13.9442 11.5721 14.5625 10.6864C15.3575 9.54351 16.3075 8.54636 17.3967 7.78541C18.2133 7.21494 19.2033 6.66732 20 6.66732M20 6.66732C19.2033 6.66732 18.2125 6.1197 17.3967 5.54922C16.3075 4.78732 15.3575 3.79017 14.5625 2.64922C13.9442 1.76256 13.3333 0.705413 13.3333 0.000650711M20 6.66732L7.68246e-07 6.66732" stroke="currentColor" strokeWidth="1.5" />
												</svg>
											</Link>
										</div>
									</div>
								</div>
								<div className="col-lg-4 col-md-6">
									<div className="card-case-study">
										<div className="card-image">
											<img src="/assets/imgs/pages/home6/case.png" alt="Vatech" />
										</div>
										<div className="card-info">
											<p className="paragraph-base-12-fitree text-uppercase mb-0 color-white">Software Development</p>
											<Link href="#" className="heading-24-fitree color-white">Essential Product Solutions Program</Link>
											<Link href="#" className="view-detail">
												<svg width={20} height={14} viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M13.3333 13.334C13.3333 12.6273 13.9442 11.5721 14.5625 10.6864C15.3575 9.54351 16.3075 8.54636 17.3967 7.78541C18.2133 7.21494 19.2033 6.66732 20 6.66732M20 6.66732C19.2033 6.66732 18.2125 6.1197 17.3967 5.54922C16.3075 4.78732 15.3575 3.79017 14.5625 2.64922C13.9442 1.76256 13.3333 0.705413 13.3333 0.000650711M20 6.66732L7.68246e-07 6.66732" stroke="currentColor" strokeWidth="1.5" />
												</svg>
											</Link>
										</div>
									</div>
								</div>
								<div className="col-lg-4 col-md-6">
									<div className="card-case-study">
										<div className="card-image">
											<img src="/assets/imgs/pages/home6/case2.png" alt="Vatech" />
										</div>
										<div className="card-info">
											<p className="paragraph-base-12-fitree text-uppercase mb-0 color-white">Software Development</p>
											<Link href="#" className="heading-24-fitree color-white">Essential Product Solutions Program</Link>
											<Link href="#" className="view-detail">
												<svg width={20} height={14} viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M13.3333 13.334C13.3333 12.6273 13.9442 11.5721 14.5625 10.6864C15.3575 9.54351 16.3075 8.54636 17.3967 7.78541C18.2133 7.21494 19.2033 6.66732 20 6.66732M20 6.66732C19.2033 6.66732 18.2125 6.1197 17.3967 5.54922C16.3075 4.78732 15.3575 3.79017 14.5625 2.64922C13.9442 1.76256 13.3333 0.705413 13.3333 0.000650711M20 6.66732L7.68246e-07 6.66732" stroke="currentColor" strokeWidth="1.5" />
												</svg>
											</Link>
										</div>
									</div>
								</div>
								<div className="col-lg-4 col-md-6">
									<div className="card-case-study">
										<div className="card-image">
											<img src="/assets/imgs/pages/home6/case.png" alt="Vatech" />
										</div>
										<div className="card-info">
											<p className="paragraph-base-12-fitree text-uppercase mb-0 color-white">Software Development</p>
											<Link href="#" className="heading-24-fitree color-white">Essential Product Solutions Program</Link>
											<Link href="#" className="view-detail">
												<svg width={20} height={14} viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M13.3333 13.334C13.3333 12.6273 13.9442 11.5721 14.5625 10.6864C15.3575 9.54351 16.3075 8.54636 17.3967 7.78541C18.2133 7.21494 19.2033 6.66732 20 6.66732M20 6.66732C19.2033 6.66732 18.2125 6.1197 17.3967 5.54922C16.3075 4.78732 15.3575 3.79017 14.5625 2.64922C13.9442 1.76256 13.3333 0.705413 13.3333 0.000650711M20 6.66732L7.68246e-07 6.66732" stroke="currentColor" strokeWidth="1.5" />
												</svg>
											</Link>
										</div>
									</div>
								</div>
								<div className="col-lg-4 col-md-6">
									<div className="card-case-study">
										<div className="card-image">
											<img src="/assets/imgs/pages/home6/case2.png" alt="Vatech" />
										</div>
										<div className="card-info">
											<p className="paragraph-base-12-fitree text-uppercase mb-0 color-white">Software Development</p>
											<Link href="#" className="heading-24-fitree color-white">Essential Product Solutions Program</Link>
											<Link href="#" className="view-detail">
												<svg width={20} height={14} viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M13.3333 13.334C13.3333 12.6273 13.9442 11.5721 14.5625 10.6864C15.3575 9.54351 16.3075 8.54636 17.3967 7.78541C18.2133 7.21494 19.2033 6.66732 20 6.66732M20 6.66732C19.2033 6.66732 18.2125 6.1197 17.3967 5.54922C16.3075 4.78732 15.3575 3.79017 14.5625 2.64922C13.9442 1.76256 13.3333 0.705413 13.3333 0.000650711M20 6.66732L7.68246e-07 6.66732" stroke="currentColor" strokeWidth="1.5" />
												</svg>
											</Link>
										</div>
									</div>
								</div>
								<div className="col-lg-4 col-md-6">
									<div className="card-case-study">
										<div className="card-image">
											<img src="/assets/imgs/pages/home6/case.png" alt="Vatech" />
										</div>
										<div className="card-info">
											<p className="paragraph-base-12-fitree text-uppercase mb-0 color-white">Software Development</p>
											<Link href="#" className="heading-24-fitree color-white">Essential Product Solutions Program</Link>
											<Link href="#" className="view-detail">
												<svg width={20} height={14} viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M13.3333 13.334C13.3333 12.6273 13.9442 11.5721 14.5625 10.6864C15.3575 9.54351 16.3075 8.54636 17.3967 7.78541C18.2133 7.21494 19.2033 6.66732 20 6.66732M20 6.66732C19.2033 6.66732 18.2125 6.1197 17.3967 5.54922C16.3075 4.78732 15.3575 3.79017 14.5625 2.64922C13.9442 1.76256 13.3333 0.705413 13.3333 0.000650711M20 6.66732L7.68246e-07 6.66732" stroke="currentColor" strokeWidth="1.5" />
												</svg>
											</Link>
										</div>
									</div>
								</div>
								<div className="col-lg-4 col-md-6">
									<div className="card-case-study">
										<div className="card-image">
											<img src="/assets/imgs/pages/home6/case2.png" alt="Vatech" />
										</div>
										<div className="card-info">
											<p className="paragraph-base-12-fitree text-uppercase mb-0 color-white">Software Development</p>
											<Link href="#" className="heading-24-fitree color-white">Essential Product Solutions Program</Link>
											<Link href="#" className="view-detail">
												<svg width={20} height={14} viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M13.3333 13.334C13.3333 12.6273 13.9442 11.5721 14.5625 10.6864C15.3575 9.54351 16.3075 8.54636 17.3967 7.78541C18.2133 7.21494 19.2033 6.66732 20 6.66732M20 6.66732C19.2033 6.66732 18.2125 6.1197 17.3967 5.54922C16.3075 4.78732 15.3575 3.79017 14.5625 2.64922C13.9442 1.76256 13.3333 0.705413 13.3333 0.000650711M20 6.66732L7.68246e-07 6.66732" stroke="currentColor" strokeWidth="1.5" />
												</svg>
											</Link>
										</div>
									</div>
								</div>
								<div className="col-lg-4 col-md-6">
									<div className="card-case-study">
										<div className="card-image">
											<img src="/assets/imgs/pages/home6/case.png" alt="Vatech" />
										</div>
										<div className="card-info">
											<p className="paragraph-base-12-fitree text-uppercase mb-0 color-white">Software Development</p>
											<Link href="#" className="heading-24-fitree color-white">Essential Product Solutions Program</Link>
											<Link href="#" className="view-detail">
												<svg width={20} height={14} viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M13.3333 13.334C13.3333 12.6273 13.9442 11.5721 14.5625 10.6864C15.3575 9.54351 16.3075 8.54636 17.3967 7.78541C18.2133 7.21494 19.2033 6.66732 20 6.66732M20 6.66732C19.2033 6.66732 18.2125 6.1197 17.3967 5.54922C16.3075 4.78732 15.3575 3.79017 14.5625 2.64922C13.9442 1.76256 13.3333 0.705413 13.3333 0.000650711M20 6.66732L7.68246e-07 6.66732" stroke="currentColor" strokeWidth="1.5" />
												</svg>
											</Link>
										</div>
									</div>
								</div>
								<div className="col-lg-4 col-md-6">
									<div className="card-case-study">
										<div className="card-image">
											<img src="/assets/imgs/pages/home6/case2.png" alt="Vatech" />
										</div>
										<div className="card-info">
											<p className="paragraph-base-12-fitree text-uppercase mb-0 color-white">Software Development</p>
											<Link href="#" className="heading-24-fitree color-white">Essential Product Solutions Program</Link>
											<Link href="#" className="view-detail">
												<svg width={20} height={14} viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M13.3333 13.334C13.3333 12.6273 13.9442 11.5721 14.5625 10.6864C15.3575 9.54351 16.3075 8.54636 17.3967 7.78541C18.2133 7.21494 19.2033 6.66732 20 6.66732M20 6.66732C19.2033 6.66732 18.2125 6.1197 17.3967 5.54922C16.3075 4.78732 15.3575 3.79017 14.5625 2.64922C13.9442 1.76256 13.3333 0.705413 13.3333 0.000650711M20 6.66732L7.68246e-07 6.66732" stroke="currentColor" strokeWidth="1.5" />
												</svg>
											</Link>
										</div>
									</div>
								</div>
								<div className="col-lg-4 col-md-6">
									<div className="card-case-study">
										<div className="card-image">
											<img src="/assets/imgs/pages/home6/case.png" alt="Vatech" />
										</div>
										<div className="card-info">
											<p className="paragraph-base-12-fitree text-uppercase mb-0 color-white">Software Development</p>
											<Link href="#" className="heading-24-fitree color-white">Essential Product Solutions Program</Link>
											<Link href="#" className="view-detail">
												<svg width={20} height={14} viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M13.3333 13.334C13.3333 12.6273 13.9442 11.5721 14.5625 10.6864C15.3575 9.54351 16.3075 8.54636 17.3967 7.78541C18.2133 7.21494 19.2033 6.66732 20 6.66732M20 6.66732C19.2033 6.66732 18.2125 6.1197 17.3967 5.54922C16.3075 4.78732 15.3575 3.79017 14.5625 2.64922C13.9442 1.76256 13.3333 0.705413 13.3333 0.000650711M20 6.66732L7.68246e-07 6.66732" stroke="currentColor" strokeWidth="1.5" />
												</svg>
											</Link>
										</div>
									</div>
								</div>
								<div className="col-lg-4 col-md-6">
									<div className="card-case-study">
										<div className="card-image">
											<img src="/assets/imgs/pages/home6/case2.png" alt="Vatech" />
										</div>
										<div className="card-info">
											<p className="paragraph-base-12-fitree text-uppercase mb-0 color-white">Software Development</p>
											<Link href="#" className="heading-24-fitree color-white">Essential Product Solutions Program</Link>
											<Link href="#" className="view-detail">
												<svg width={20} height={14} viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M13.3333 13.334C13.3333 12.6273 13.9442 11.5721 14.5625 10.6864C15.3575 9.54351 16.3075 8.54636 17.3967 7.78541C18.2133 7.21494 19.2033 6.66732 20 6.66732M20 6.66732C19.2033 6.66732 18.2125 6.1197 17.3967 5.54922C16.3075 4.78732 15.3575 3.79017 14.5625 2.64922C13.9442 1.76256 13.3333 0.705413 13.3333 0.000650711M20 6.66732L7.68246e-07 6.66732" stroke="currentColor" strokeWidth="1.5" />
												</svg>
											</Link>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className={isTab == 3 ? "tab-pane show active" : "tab-pane"} id="consulting">
							<div className="row mt-5 row-masonry">
								<div className="col-lg-4 col-md-6">
									<div className="card-case-study">
										<div className="card-image">
											<img src="/assets/imgs/pages/home6/case.png" alt="Vatech" />
										</div>
										<div className="card-info">
											<p className="paragraph-base-12-fitree text-uppercase mb-0 color-white">Software Development</p>
											<Link href="#" className="heading-24-fitree color-white">Essential Product Solutions Program</Link>
											<Link href="#" className="view-detail">
												<svg width={20} height={14} viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M13.3333 13.334C13.3333 12.6273 13.9442 11.5721 14.5625 10.6864C15.3575 9.54351 16.3075 8.54636 17.3967 7.78541C18.2133 7.21494 19.2033 6.66732 20 6.66732M20 6.66732C19.2033 6.66732 18.2125 6.1197 17.3967 5.54922C16.3075 4.78732 15.3575 3.79017 14.5625 2.64922C13.9442 1.76256 13.3333 0.705413 13.3333 0.000650711M20 6.66732L7.68246e-07 6.66732" stroke="currentColor" strokeWidth="1.5" />
												</svg>
											</Link>
										</div>
									</div>
								</div>
								<div className="col-lg-4 col-md-6">
									<div className="card-case-study">
										<div className="card-image">
											<img src="/assets/imgs/pages/home6/case2.png" alt="Vatech" />
										</div>
										<div className="card-info">
											<p className="paragraph-base-12-fitree text-uppercase mb-0 color-white">Software Development</p>
											<Link href="#" className="heading-24-fitree color-white">Essential Product Solutions Program</Link>
											<Link href="#" className="view-detail">
												<svg width={20} height={14} viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M13.3333 13.334C13.3333 12.6273 13.9442 11.5721 14.5625 10.6864C15.3575 9.54351 16.3075 8.54636 17.3967 7.78541C18.2133 7.21494 19.2033 6.66732 20 6.66732M20 6.66732C19.2033 6.66732 18.2125 6.1197 17.3967 5.54922C16.3075 4.78732 15.3575 3.79017 14.5625 2.64922C13.9442 1.76256 13.3333 0.705413 13.3333 0.000650711M20 6.66732L7.68246e-07 6.66732" stroke="currentColor" strokeWidth="1.5" />
												</svg>
											</Link>
										</div>
									</div>
								</div>
								<div className="col-lg-4 col-md-6">
									<div className="card-case-study">
										<div className="card-image">
											<img src="/assets/imgs/pages/home6/case.png" alt="Vatech" />
										</div>
										<div className="card-info">
											<p className="paragraph-base-12-fitree text-uppercase mb-0 color-white">Software Development</p>
											<Link href="#" className="heading-24-fitree color-white">Essential Product Solutions Program</Link>
											<Link href="#" className="view-detail">
												<svg width={20} height={14} viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M13.3333 13.334C13.3333 12.6273 13.9442 11.5721 14.5625 10.6864C15.3575 9.54351 16.3075 8.54636 17.3967 7.78541C18.2133 7.21494 19.2033 6.66732 20 6.66732M20 6.66732C19.2033 6.66732 18.2125 6.1197 17.3967 5.54922C16.3075 4.78732 15.3575 3.79017 14.5625 2.64922C13.9442 1.76256 13.3333 0.705413 13.3333 0.000650711M20 6.66732L7.68246e-07 6.66732" stroke="currentColor" strokeWidth="1.5" />
												</svg>
											</Link>
										</div>
									</div>
								</div>
								<div className="col-lg-4 col-md-6">
									<div className="card-case-study">
										<div className="card-image">
											<img src="/assets/imgs/pages/home6/case2.png" alt="Vatech" />
										</div>
										<div className="card-info">
											<p className="paragraph-base-12-fitree text-uppercase mb-0 color-white">Software Development</p>
											<Link href="#" className="heading-24-fitree color-white">Essential Product Solutions Program</Link>
											<Link href="#" className="view-detail">
												<svg width={20} height={14} viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M13.3333 13.334C13.3333 12.6273 13.9442 11.5721 14.5625 10.6864C15.3575 9.54351 16.3075 8.54636 17.3967 7.78541C18.2133 7.21494 19.2033 6.66732 20 6.66732M20 6.66732C19.2033 6.66732 18.2125 6.1197 17.3967 5.54922C16.3075 4.78732 15.3575 3.79017 14.5625 2.64922C13.9442 1.76256 13.3333 0.705413 13.3333 0.000650711M20 6.66732L7.68246e-07 6.66732" stroke="currentColor" strokeWidth="1.5" />
												</svg>
											</Link>
										</div>
									</div>
								</div>
								<div className="col-lg-4 col-md-6">
									<div className="card-case-study">
										<div className="card-image">
											<img src="/assets/imgs/pages/home6/case.png" alt="Vatech" />
										</div>
										<div className="card-info">
											<p className="paragraph-base-12-fitree text-uppercase mb-0 color-white">Software Development</p>
											<Link href="#" className="heading-24-fitree color-white">Essential Product Solutions Program</Link>
											<Link href="#" className="view-detail">
												<svg width={20} height={14} viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M13.3333 13.334C13.3333 12.6273 13.9442 11.5721 14.5625 10.6864C15.3575 9.54351 16.3075 8.54636 17.3967 7.78541C18.2133 7.21494 19.2033 6.66732 20 6.66732M20 6.66732C19.2033 6.66732 18.2125 6.1197 17.3967 5.54922C16.3075 4.78732 15.3575 3.79017 14.5625 2.64922C13.9442 1.76256 13.3333 0.705413 13.3333 0.000650711M20 6.66732L7.68246e-07 6.66732" stroke="currentColor" strokeWidth="1.5" />
												</svg>
											</Link>
										</div>
									</div>
								</div>
								<div className="col-lg-4 col-md-6">
									<div className="card-case-study">
										<div className="card-image">
											<img src="/assets/imgs/pages/home6/case2.png" alt="Vatech" />
										</div>
										<div className="card-info">
											<p className="paragraph-base-12-fitree text-uppercase mb-0 color-white">Software Development</p>
											<Link href="#" className="heading-24-fitree color-white">Essential Product Solutions Program</Link>
											<Link href="#" className="view-detail">
												<svg width={20} height={14} viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M13.3333 13.334C13.3333 12.6273 13.9442 11.5721 14.5625 10.6864C15.3575 9.54351 16.3075 8.54636 17.3967 7.78541C18.2133 7.21494 19.2033 6.66732 20 6.66732M20 6.66732C19.2033 6.66732 18.2125 6.1197 17.3967 5.54922C16.3075 4.78732 15.3575 3.79017 14.5625 2.64922C13.9442 1.76256 13.3333 0.705413 13.3333 0.000650711M20 6.66732L7.68246e-07 6.66732" stroke="currentColor" strokeWidth="1.5" />
												</svg>
											</Link>
										</div>
									</div>
								</div>
								<div className="col-lg-4 col-md-6">
									<div className="card-case-study">
										<div className="card-image">
											<img src="/assets/imgs/pages/home6/case.png" alt="Vatech" />
										</div>
										<div className="card-info">
											<p className="paragraph-base-12-fitree text-uppercase mb-0 color-white">Software Development</p>
											<Link href="#" className="heading-24-fitree color-white">Essential Product Solutions Program</Link>
											<Link href="#" className="view-detail">
												<svg width={20} height={14} viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M13.3333 13.334C13.3333 12.6273 13.9442 11.5721 14.5625 10.6864C15.3575 9.54351 16.3075 8.54636 17.3967 7.78541C18.2133 7.21494 19.2033 6.66732 20 6.66732M20 6.66732C19.2033 6.66732 18.2125 6.1197 17.3967 5.54922C16.3075 4.78732 15.3575 3.79017 14.5625 2.64922C13.9442 1.76256 13.3333 0.705413 13.3333 0.000650711M20 6.66732L7.68246e-07 6.66732" stroke="currentColor" strokeWidth="1.5" />
												</svg>
											</Link>
										</div>
									</div>
								</div>
								<div className="col-lg-4 col-md-6">
									<div className="card-case-study">
										<div className="card-image">
											<img src="/assets/imgs/pages/home6/case2.png" alt="Vatech" />
										</div>
										<div className="card-info">
											<p className="paragraph-base-12-fitree text-uppercase mb-0 color-white">Software Development</p>
											<Link href="#" className="heading-24-fitree color-white">Essential Product Solutions Program</Link>
											<Link href="#" className="view-detail">
												<svg width={20} height={14} viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M13.3333 13.334C13.3333 12.6273 13.9442 11.5721 14.5625 10.6864C15.3575 9.54351 16.3075 8.54636 17.3967 7.78541C18.2133 7.21494 19.2033 6.66732 20 6.66732M20 6.66732C19.2033 6.66732 18.2125 6.1197 17.3967 5.54922C16.3075 4.78732 15.3575 3.79017 14.5625 2.64922C13.9442 1.76256 13.3333 0.705413 13.3333 0.000650711M20 6.66732L7.68246e-07 6.66732" stroke="currentColor" strokeWidth="1.5" />
												</svg>
											</Link>
										</div>
									</div>
								</div>
								<div className="col-lg-4 col-md-6">
									<div className="card-case-study">
										<div className="card-image">
											<img src="/assets/imgs/pages/home6/case.png" alt="Vatech" />
										</div>
										<div className="card-info">
											<p className="paragraph-base-12-fitree text-uppercase mb-0 color-white">Software Development</p>
											<Link href="#" className="heading-24-fitree color-white">Essential Product Solutions Program</Link>
											<Link href="#" className="view-detail">
												<svg width={20} height={14} viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M13.3333 13.334C13.3333 12.6273 13.9442 11.5721 14.5625 10.6864C15.3575 9.54351 16.3075 8.54636 17.3967 7.78541C18.2133 7.21494 19.2033 6.66732 20 6.66732M20 6.66732C19.2033 6.66732 18.2125 6.1197 17.3967 5.54922C16.3075 4.78732 15.3575 3.79017 14.5625 2.64922C13.9442 1.76256 13.3333 0.705413 13.3333 0.000650711M20 6.66732L7.68246e-07 6.66732" stroke="currentColor" strokeWidth="1.5" />
												</svg>
											</Link>
										</div>
									</div>
								</div>
								<div className="col-lg-4 col-md-6">
									<div className="card-case-study">
										<div className="card-image">
											<img src="/assets/imgs/pages/home6/case2.png" alt="Vatech" />
										</div>
										<div className="card-info">
											<p className="paragraph-base-12-fitree text-uppercase mb-0 color-white">Software Development</p>
											<Link href="#" className="heading-24-fitree color-white">Essential Product Solutions Program</Link>
											<Link href="#" className="view-detail">
												<svg width={20} height={14} viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M13.3333 13.334C13.3333 12.6273 13.9442 11.5721 14.5625 10.6864C15.3575 9.54351 16.3075 8.54636 17.3967 7.78541C18.2133 7.21494 19.2033 6.66732 20 6.66732M20 6.66732C19.2033 6.66732 18.2125 6.1197 17.3967 5.54922C16.3075 4.78732 15.3575 3.79017 14.5625 2.64922C13.9442 1.76256 13.3333 0.705413 13.3333 0.000650711M20 6.66732L7.68246e-07 6.66732" stroke="currentColor" strokeWidth="1.5" />
												</svg>
											</Link>
										</div>
									</div>
								</div>
								<div className="col-lg-4 col-md-6">
									<div className="card-case-study">
										<div className="card-image">
											<img src="/assets/imgs/pages/home6/case.png" alt="Vatech" />
										</div>
										<div className="card-info">
											<p className="paragraph-base-12-fitree text-uppercase mb-0 color-white">Software Development</p>
											<Link href="#" className="heading-24-fitree color-white">Essential Product Solutions Program</Link>
											<Link href="#" className="view-detail">
												<svg width={20} height={14} viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M13.3333 13.334C13.3333 12.6273 13.9442 11.5721 14.5625 10.6864C15.3575 9.54351 16.3075 8.54636 17.3967 7.78541C18.2133 7.21494 19.2033 6.66732 20 6.66732M20 6.66732C19.2033 6.66732 18.2125 6.1197 17.3967 5.54922C16.3075 4.78732 15.3575 3.79017 14.5625 2.64922C13.9442 1.76256 13.3333 0.705413 13.3333 0.000650711M20 6.66732L7.68246e-07 6.66732" stroke="currentColor" strokeWidth="1.5" />
												</svg>
											</Link>
										</div>
									</div>
								</div>
								<div className="col-lg-4 col-md-6">
									<div className="card-case-study">
										<div className="card-image">
											<img src="/assets/imgs/pages/home6/case2.png" alt="Vatech" />
										</div>
										<div className="card-info">
											<p className="paragraph-base-12-fitree text-uppercase mb-0 color-white">Software Development</p>
											<Link href="#" className="heading-24-fitree color-white">Essential Product Solutions Program</Link>
											<Link href="#" className="view-detail">
												<svg width={20} height={14} viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M13.3333 13.334C13.3333 12.6273 13.9442 11.5721 14.5625 10.6864C15.3575 9.54351 16.3075 8.54636 17.3967 7.78541C18.2133 7.21494 19.2033 6.66732 20 6.66732M20 6.66732C19.2033 6.66732 18.2125 6.1197 17.3967 5.54922C16.3075 4.78732 15.3575 3.79017 14.5625 2.64922C13.9442 1.76256 13.3333 0.705413 13.3333 0.000650711M20 6.66732L7.68246e-07 6.66732" stroke="currentColor" strokeWidth="1.5" />
												</svg>
											</Link>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className={isTab == 4 ? "tab-pane show active" : "tab-pane"} id="digital">
							<div className="row mt-5 row-masonry">
								<div className="col-lg-4 col-md-6">
									<div className="card-case-study">
										<div className="card-image">
											<img src="/assets/imgs/pages/home6/case.png" alt="Vatech" />
										</div>
										<div className="card-info">
											<p className="paragraph-base-12-fitree text-uppercase mb-0 color-white">Software Development</p>
											<Link href="#" className="heading-24-fitree color-white">Essential Product Solutions Program</Link>
											<Link href="#" className="view-detail">
												<svg width={20} height={14} viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M13.3333 13.334C13.3333 12.6273 13.9442 11.5721 14.5625 10.6864C15.3575 9.54351 16.3075 8.54636 17.3967 7.78541C18.2133 7.21494 19.2033 6.66732 20 6.66732M20 6.66732C19.2033 6.66732 18.2125 6.1197 17.3967 5.54922C16.3075 4.78732 15.3575 3.79017 14.5625 2.64922C13.9442 1.76256 13.3333 0.705413 13.3333 0.000650711M20 6.66732L7.68246e-07 6.66732" stroke="currentColor" strokeWidth="1.5" />
												</svg>
											</Link>
										</div>
									</div>
								</div>
								<div className="col-lg-4 col-md-6">
									<div className="card-case-study">
										<div className="card-image">
											<img src="/assets/imgs/pages/home6/case2.png" alt="Vatech" />
										</div>
										<div className="card-info">
											<p className="paragraph-base-12-fitree text-uppercase mb-0 color-white">Software Development</p>
											<Link href="#" className="heading-24-fitree color-white">Essential Product Solutions Program</Link>
											<Link href="#" className="view-detail">
												<svg width={20} height={14} viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M13.3333 13.334C13.3333 12.6273 13.9442 11.5721 14.5625 10.6864C15.3575 9.54351 16.3075 8.54636 17.3967 7.78541C18.2133 7.21494 19.2033 6.66732 20 6.66732M20 6.66732C19.2033 6.66732 18.2125 6.1197 17.3967 5.54922C16.3075 4.78732 15.3575 3.79017 14.5625 2.64922C13.9442 1.76256 13.3333 0.705413 13.3333 0.000650711M20 6.66732L7.68246e-07 6.66732" stroke="currentColor" strokeWidth="1.5" />
												</svg>
											</Link>
										</div>
									</div>
								</div>
								<div className="col-lg-4 col-md-6">
									<div className="card-case-study">
										<div className="card-image">
											<img src="/assets/imgs/pages/home6/case.png" alt="Vatech" />
										</div>
										<div className="card-info">
											<p className="paragraph-base-12-fitree text-uppercase mb-0 color-white">Software Development</p>
											<Link href="#" className="heading-24-fitree color-white">Essential Product Solutions Program</Link>
											<Link href="#" className="view-detail">
												<svg width={20} height={14} viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M13.3333 13.334C13.3333 12.6273 13.9442 11.5721 14.5625 10.6864C15.3575 9.54351 16.3075 8.54636 17.3967 7.78541C18.2133 7.21494 19.2033 6.66732 20 6.66732M20 6.66732C19.2033 6.66732 18.2125 6.1197 17.3967 5.54922C16.3075 4.78732 15.3575 3.79017 14.5625 2.64922C13.9442 1.76256 13.3333 0.705413 13.3333 0.000650711M20 6.66732L7.68246e-07 6.66732" stroke="currentColor" strokeWidth="1.5" />
												</svg>
											</Link>
										</div>
									</div>
								</div>
								<div className="col-lg-4 col-md-6">
									<div className="card-case-study">
										<div className="card-image">
											<img src="/assets/imgs/pages/home6/case2.png" alt="Vatech" />
										</div>
										<div className="card-info">
											<p className="paragraph-base-12-fitree text-uppercase mb-0 color-white">Software Development</p>
											<Link href="#" className="heading-24-fitree color-white">Essential Product Solutions Program</Link>
											<Link href="#" className="view-detail">
												<svg width={20} height={14} viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M13.3333 13.334C13.3333 12.6273 13.9442 11.5721 14.5625 10.6864C15.3575 9.54351 16.3075 8.54636 17.3967 7.78541C18.2133 7.21494 19.2033 6.66732 20 6.66732M20 6.66732C19.2033 6.66732 18.2125 6.1197 17.3967 5.54922C16.3075 4.78732 15.3575 3.79017 14.5625 2.64922C13.9442 1.76256 13.3333 0.705413 13.3333 0.000650711M20 6.66732L7.68246e-07 6.66732" stroke="currentColor" strokeWidth="1.5" />
												</svg>
											</Link>
										</div>
									</div>
								</div>
								<div className="col-lg-4 col-md-6">
									<div className="card-case-study">
										<div className="card-image">
											<img src="/assets/imgs/pages/home6/case.png" alt="Vatech" />
										</div>
										<div className="card-info">
											<p className="paragraph-base-12-fitree text-uppercase mb-0 color-white">Software Development</p>
											<Link href="#" className="heading-24-fitree color-white">Essential Product Solutions Program</Link>
											<Link href="#" className="view-detail">
												<svg width={20} height={14} viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M13.3333 13.334C13.3333 12.6273 13.9442 11.5721 14.5625 10.6864C15.3575 9.54351 16.3075 8.54636 17.3967 7.78541C18.2133 7.21494 19.2033 6.66732 20 6.66732M20 6.66732C19.2033 6.66732 18.2125 6.1197 17.3967 5.54922C16.3075 4.78732 15.3575 3.79017 14.5625 2.64922C13.9442 1.76256 13.3333 0.705413 13.3333 0.000650711M20 6.66732L7.68246e-07 6.66732" stroke="currentColor" strokeWidth="1.5" />
												</svg>
											</Link>
										</div>
									</div>
								</div>
								<div className="col-lg-4 col-md-6">
									<div className="card-case-study">
										<div className="card-image">
											<img src="/assets/imgs/pages/home6/case2.png" alt="Vatech" />
										</div>
										<div className="card-info">
											<p className="paragraph-base-12-fitree text-uppercase mb-0 color-white">Software Development</p>
											<Link href="#" className="heading-24-fitree color-white">Essential Product Solutions Program</Link>
											<Link href="#" className="view-detail">
												<svg width={20} height={14} viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M13.3333 13.334C13.3333 12.6273 13.9442 11.5721 14.5625 10.6864C15.3575 9.54351 16.3075 8.54636 17.3967 7.78541C18.2133 7.21494 19.2033 6.66732 20 6.66732M20 6.66732C19.2033 6.66732 18.2125 6.1197 17.3967 5.54922C16.3075 4.78732 15.3575 3.79017 14.5625 2.64922C13.9442 1.76256 13.3333 0.705413 13.3333 0.000650711M20 6.66732L7.68246e-07 6.66732" stroke="currentColor" strokeWidth="1.5" />
												</svg>
											</Link>
										</div>
									</div>
								</div>
								<div className="col-lg-4 col-md-6">
									<div className="card-case-study">
										<div className="card-image">
											<img src="/assets/imgs/pages/home6/case.png" alt="Vatech" />
										</div>
										<div className="card-info">
											<p className="paragraph-base-12-fitree text-uppercase mb-0 color-white">Software Development</p>
											<Link href="#" className="heading-24-fitree color-white">Essential Product Solutions Program</Link>
											<Link href="#" className="view-detail">
												<svg width={20} height={14} viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M13.3333 13.334C13.3333 12.6273 13.9442 11.5721 14.5625 10.6864C15.3575 9.54351 16.3075 8.54636 17.3967 7.78541C18.2133 7.21494 19.2033 6.66732 20 6.66732M20 6.66732C19.2033 6.66732 18.2125 6.1197 17.3967 5.54922C16.3075 4.78732 15.3575 3.79017 14.5625 2.64922C13.9442 1.76256 13.3333 0.705413 13.3333 0.000650711M20 6.66732L7.68246e-07 6.66732" stroke="currentColor" strokeWidth="1.5" />
												</svg>
											</Link>
										</div>
									</div>
								</div>
								<div className="col-lg-4 col-md-6">
									<div className="card-case-study">
										<div className="card-image">
											<img src="/assets/imgs/pages/home6/case2.png" alt="Vatech" />
										</div>
										<div className="card-info">
											<p className="paragraph-base-12-fitree text-uppercase mb-0 color-white">Software Development</p>
											<Link href="#" className="heading-24-fitree color-white">Essential Product Solutions Program</Link>
											<Link href="#" className="view-detail">
												<svg width={20} height={14} viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M13.3333 13.334C13.3333 12.6273 13.9442 11.5721 14.5625 10.6864C15.3575 9.54351 16.3075 8.54636 17.3967 7.78541C18.2133 7.21494 19.2033 6.66732 20 6.66732M20 6.66732C19.2033 6.66732 18.2125 6.1197 17.3967 5.54922C16.3075 4.78732 15.3575 3.79017 14.5625 2.64922C13.9442 1.76256 13.3333 0.705413 13.3333 0.000650711M20 6.66732L7.68246e-07 6.66732" stroke="currentColor" strokeWidth="1.5" />
												</svg>
											</Link>
										</div>
									</div>
								</div>
								<div className="col-lg-4 col-md-6">
									<div className="card-case-study">
										<div className="card-image">
											<img src="/assets/imgs/pages/home6/case.png" alt="Vatech" />
										</div>
										<div className="card-info">
											<p className="paragraph-base-12-fitree text-uppercase mb-0 color-white">Software Development</p>
											<Link href="#" className="heading-24-fitree color-white">Essential Product Solutions Program</Link>
											<Link href="#" className="view-detail">
												<svg width={20} height={14} viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M13.3333 13.334C13.3333 12.6273 13.9442 11.5721 14.5625 10.6864C15.3575 9.54351 16.3075 8.54636 17.3967 7.78541C18.2133 7.21494 19.2033 6.66732 20 6.66732M20 6.66732C19.2033 6.66732 18.2125 6.1197 17.3967 5.54922C16.3075 4.78732 15.3575 3.79017 14.5625 2.64922C13.9442 1.76256 13.3333 0.705413 13.3333 0.000650711M20 6.66732L7.68246e-07 6.66732" stroke="currentColor" strokeWidth="1.5" />
												</svg>
											</Link>
										</div>
									</div>
								</div>
								<div className="col-lg-4 col-md-6">
									<div className="card-case-study">
										<div className="card-image">
											<img src="/assets/imgs/pages/home6/case2.png" alt="Vatech" />
										</div>
										<div className="card-info">
											<p className="paragraph-base-12-fitree text-uppercase mb-0 color-white">Software Development</p>
											<Link href="#" className="heading-24-fitree color-white">Essential Product Solutions Program</Link>
											<Link href="#" className="view-detail">
												<svg width={20} height={14} viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M13.3333 13.334C13.3333 12.6273 13.9442 11.5721 14.5625 10.6864C15.3575 9.54351 16.3075 8.54636 17.3967 7.78541C18.2133 7.21494 19.2033 6.66732 20 6.66732M20 6.66732C19.2033 6.66732 18.2125 6.1197 17.3967 5.54922C16.3075 4.78732 15.3575 3.79017 14.5625 2.64922C13.9442 1.76256 13.3333 0.705413 13.3333 0.000650711M20 6.66732L7.68246e-07 6.66732" stroke="currentColor" strokeWidth="1.5" />
												</svg>
											</Link>
										</div>
									</div>
								</div>
								<div className="col-lg-4 col-md-6">
									<div className="card-case-study">
										<div className="card-image">
											<img src="/assets/imgs/pages/home6/case.png" alt="Vatech" />
										</div>
										<div className="card-info">
											<p className="paragraph-base-12-fitree text-uppercase mb-0 color-white">Software Development</p>
											<Link href="#" className="heading-24-fitree color-white">Essential Product Solutions Program</Link>
											<Link href="#" className="view-detail">
												<svg width={20} height={14} viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M13.3333 13.334C13.3333 12.6273 13.9442 11.5721 14.5625 10.6864C15.3575 9.54351 16.3075 8.54636 17.3967 7.78541C18.2133 7.21494 19.2033 6.66732 20 6.66732M20 6.66732C19.2033 6.66732 18.2125 6.1197 17.3967 5.54922C16.3075 4.78732 15.3575 3.79017 14.5625 2.64922C13.9442 1.76256 13.3333 0.705413 13.3333 0.000650711M20 6.66732L7.68246e-07 6.66732" stroke="currentColor" strokeWidth="1.5" />
												</svg>
											</Link>
										</div>
									</div>
								</div>
								<div className="col-lg-4 col-md-6">
									<div className="card-case-study">
										<div className="card-image">
											<img src="/assets/imgs/pages/home6/case2.png" alt="Vatech" />
										</div>
										<div className="card-info">
											<p className="paragraph-base-12-fitree text-uppercase mb-0 color-white">Software Development</p>
											<Link href="#" className="heading-24-fitree color-white">Essential Product Solutions Program</Link>
											<Link href="#" className="view-detail">
												<svg width={20} height={14} viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M13.3333 13.334C13.3333 12.6273 13.9442 11.5721 14.5625 10.6864C15.3575 9.54351 16.3075 8.54636 17.3967 7.78541C18.2133 7.21494 19.2033 6.66732 20 6.66732M20 6.66732C19.2033 6.66732 18.2125 6.1197 17.3967 5.54922C16.3075 4.78732 15.3575 3.79017 14.5625 2.64922C13.9442 1.76256 13.3333 0.705413 13.3333 0.000650711M20 6.66732L7.68246e-07 6.66732" stroke="currentColor" strokeWidth="1.5" />
												</svg>
											</Link>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
