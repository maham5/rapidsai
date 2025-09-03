'use client'
import Link from "next/link"
import { useState } from 'react'
import ModalVideo from 'react-modal-video'

export default function Section1() {
	const [isOpen, setOpen] = useState(false)
	return (
		<>

			<section className="position-relative overflow-hidden box-banner-8">
				<div className="banner-7">
					<div className="container" data-aos="fade-up">
						<div className="row align-items-center">
							<div className="col-lg-7">
								<div className="banner-8">
									<div className="banner-small-title-black line-gradient-01">Solutions</div>
									<h1 className="title-banner-black mb-20">
										Tailored Solutions for your<br className="d-none d-lg-block" />
										Tomorrow's Challenges
									</h1>
									<p className="paragraph-rubik-r neutral-1200 desc-banner mb-40">We have been operating for over a decade, providing top-notch services to our clients and building a strong track record in the industry.</p>
									<div>
										<ul className="list-tick">
											<li>
												<svg width={16} height={12} viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M14.6875 1.3125C15.0938 1.6875 15.0938 2.34375 14.6875 2.71875L6.6875 10.7188C6.3125 11.125 5.65625 11.125 5.28125 10.7188L1.28125 6.71875C0.875 6.34375 0.875 5.6875 1.28125 5.3125C1.65625 4.90625 2.3125 4.90625 2.6875 5.3125L5.96875 8.59375L13.2812 1.3125C13.6562 0.90625 14.3125 0.90625 14.6875 1.3125Z" fill="url(#paint0_linear_4249_378)" />
													<defs>
														<linearGradient id="paint0_linear_4249_378" x1="14.998" y1="6.00057" x2={1} y2="6.00057" gradientUnits="userSpaceOnUse">
															<stop stopColor="#BD16D8" />
															<stop offset="0.0001" stopColor="#9E3DDE" />
															<stop offset="0.9998" stopColor="#4AA4F0" />
															<stop offset="0.9999" stopColor="#15E6FB" />
															<stop offset={1} stopColor="#00FFFF" />
														</linearGradient>
													</defs>
												</svg>
												Momentum Masters Advisory
											</li>
											<li>
												<svg width={16} height={12} viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M14.6875 1.3125C15.0938 1.6875 15.0938 2.34375 14.6875 2.71875L6.6875 10.7188C6.3125 11.125 5.65625 11.125 5.28125 10.7188L1.28125 6.71875C0.875 6.34375 0.875 5.6875 1.28125 5.3125C1.65625 4.90625 2.3125 4.90625 2.6875 5.3125L5.96875 8.59375L13.2812 1.3125C13.6562 0.90625 14.3125 0.90625 14.6875 1.3125Z" fill="url(#paint0_linear_4249_378)" />
													<defs>
														<linearGradient id="paint0_linear_4249_378" x1="14.998" y1="6.00057" x2={1} y2="6.00057" gradientUnits="userSpaceOnUse">
															<stop stopColor="#BD16D8" />
															<stop offset="0.0001" stopColor="#9E3DDE" />
															<stop offset="0.9998" stopColor="#4AA4F0" />
															<stop offset="0.9999" stopColor="#15E6FB" />
															<stop offset={1} stopColor="#00FFFF" />
														</linearGradient>
													</defs>
												</svg>
												Momentum Masters Advisory
											</li>
										</ul>
									</div>
									<div className="d-flex align-items-center flex-wrap">
										<Link href="#" className="btn btn-linear-02 mb-3">
											Discover More
											<img src="/assets/imgs/template/icons/plus-sm.svg" alt="Vatech" />
										</Link>
										<span className="mr-20" />
										<div className="d-inline-block mb-3">
											<a onClick={() => setOpen(true)} className="btn-play popup-video neutral-2000">
												<img src="/assets/imgs/pages/home8/play.svg" alt="Vatech" />
											</a>
											<span className="sub-heading-ag-sm neutral-2000">Watch Video</span>
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-5">
								<img src="/assets/imgs/pages/home8/banner.png" alt="Vatech" />
							</div>
						</div>
					</div>
				</div>
			</section>
			<ModalVideo channel='youtube' isOpen={isOpen} videoId="9HaU8NjH7bI" onClose={() => setOpen(false)} />
		</>
	)
}
