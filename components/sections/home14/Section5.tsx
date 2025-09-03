'use client'
import { swiperCenterSlide } from '@/util/swiperOptions'
import Link from "next/link"
import { Swiper, SwiperSlide } from "swiper/react"

export default function Section5() {
	return (
		<>

			<section className="box-section overflow-hidden box-projects-14">
				<div className="container" data-aos="fade-up">
					<div className="text-center">
						<div className="sub-heading-ag-sm color-white text-uppercase mb-3 text-border-white">
							<svg width={13} height={11} viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M12.2891 2.45312H11.9844V0.21875C11.9844 0.164878 11.963 0.113212 11.9249 0.075119C11.8868 0.0370256 11.8351 0.015625 11.7812 0.015625H1.21875C1.16488 0.015625 1.11321 0.0370256 1.07512 0.075119C1.03703 0.113212 1.01562 0.164878 1.01562 0.21875V0.828125H0.710938C0.576299 0.828259 0.447213 0.881804 0.352008 0.977008C0.256804 1.07221 0.203259 1.2013 0.203125 1.33594V10.4766C0.203259 10.6112 0.256804 10.7403 0.352008 10.8355C0.447213 10.9307 0.576299 10.9842 0.710938 10.9844H12.2891C12.4237 10.9842 12.5528 10.9307 12.648 10.8355C12.7432 10.7403 12.7967 10.6112 12.7969 10.4766V2.96094C12.7967 2.8263 12.7432 2.69721 12.648 2.60201C12.5528 2.5068 12.4237 2.45326 12.2891 2.45312ZM1.42188 0.421875H11.5781V2.45312H5.40668L4.65055 0.940351C4.63363 0.906625 4.60767 0.878267 4.57557 0.858448C4.54346 0.838629 4.50648 0.82813 4.46875 0.828125H1.42188V0.421875ZM12.3906 10.4766C12.3906 10.5035 12.3799 10.5293 12.3609 10.5484C12.3418 10.5674 12.316 10.5781 12.2891 10.5781H0.710938C0.684001 10.5781 0.658169 10.5674 0.639122 10.5484C0.620075 10.5293 0.609375 10.5035 0.609375 10.4766V1.33594C0.609375 1.309 0.620075 1.28317 0.639122 1.26412C0.658169 1.24508 0.684001 1.23438 0.710938 1.23438H4.34332L5.09945 2.74715C5.11637 2.78088 5.14233 2.80923 5.17443 2.82905C5.20654 2.84887 5.24352 2.85937 5.28125 2.85938H12.2891C12.316 2.85938 12.3418 2.87008 12.3609 2.88912C12.3799 2.90817 12.3906 2.934 12.3906 2.96094V10.4766Z" fill="white" />
								<path d="M6.5 3.67188C5.89739 3.67188 5.3083 3.85057 4.80725 4.18537C4.30619 4.52016 3.91567 4.99602 3.68506 5.55276C3.45445 6.10951 3.39411 6.72213 3.51167 7.31317C3.62924 7.9042 3.91942 8.4471 4.34554 8.87322C4.77165 9.29933 5.31455 9.58952 5.90559 9.70708C6.49662 9.82464 7.10925 9.76431 7.66599 9.5337C8.22273 9.30308 8.69859 8.91256 9.03339 8.4115C9.36818 7.91045 9.54688 7.32136 9.54688 6.71875C9.54596 5.91095 9.22466 5.1365 8.65346 4.56529C8.08226 3.99409 7.3078 3.67279 6.5 3.67188ZM6.5 9.35938C5.97773 9.35938 5.4672 9.2045 5.03295 8.91435C4.5987 8.62419 4.26024 8.21178 4.06038 7.72927C3.86052 7.24676 3.80823 6.71582 3.91012 6.20359C4.012 5.69136 4.2635 5.22084 4.6328 4.85155C5.0021 4.48225 5.47261 4.23075 5.98484 4.12886C6.49707 4.02697 7.02801 4.07927 7.51052 4.27913C7.99304 4.47899 8.40545 4.81745 8.6956 5.2517C8.98576 5.68595 9.14063 6.19648 9.14063 6.71875C9.13983 7.41884 8.86137 8.09004 8.36633 8.58508C7.87129 9.08012 7.2001 9.35858 6.5 9.35938Z" fill="white" />
								<path d="M7.9814 5.76262L6.07871 7.66532L5.20512 6.96639C5.18429 6.94972 5.16038 6.93731 5.13475 6.92988C5.10913 6.92245 5.08229 6.92014 5.05578 6.92308C5.02926 6.92602 5.00358 6.93415 4.98021 6.94702C4.95683 6.95988 4.93622 6.97722 4.91955 6.99805C4.90288 7.01888 4.89047 7.04279 4.88304 7.06842C4.87561 7.09404 4.8733 7.12088 4.87624 7.14739C4.87918 7.17391 4.88731 7.19959 4.90018 7.22296C4.91304 7.24634 4.93038 7.26695 4.95121 7.28362L5.96684 8.09612C6.00587 8.12735 6.05505 8.14309 6.10497 8.14033C6.15488 8.13757 6.20203 8.11649 6.23737 8.08114L8.26862 6.04989C8.30672 6.0118 8.32812 5.96013 8.32812 5.90626C8.32812 5.85238 8.30672 5.80071 8.26862 5.76262C8.23053 5.72453 8.17886 5.70313 8.12499 5.70312C8.07112 5.70312 8.01945 5.72453 7.98135 5.76262H7.9814Z" fill="white" />
							</svg>
							Latest project
						</div>
						<h2 className="heading-48-fitree color-white mb-4">
							We Have Complete 1000+<br />
							Project Here
						</h2>
					</div>
				</div>
				<div className="box-slide-projects">
					<div className="box-swiper pt-4">
						<Swiper {...swiperCenterSlide} className="swiper-container swiper-center-slide slide-projects-center">
							<div className="swiper-wrapper">
								<SwiperSlide>
									<div className="card-project-7">
										<div className="card-image">
											<img src="/assets/imgs/pages/home14/project.png" />
										</div>
										<div className="card-info">
											<Link href="#" className="heading-3xl">Software Development</Link>
											<Link href="#" className="read-more">
												<svg width={15} height={14} viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M8.00005 13C8.00005 13 14 8.58107 14 6.99995C14 5.41884 8 1 8 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
													<path d="M1.00005 13C1.00005 13 6.99999 8.58107 7 6.99995C7.00001 5.41884 1 1 1 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
												</svg>
											</Link>
										</div>
									</div>
								</SwiperSlide>
								<SwiperSlide>
									<div className="card-project-7">
										<div className="card-image">
											<img src="/assets/imgs/pages/home14/project2.png" />
										</div>
										<div className="card-info">
											<Link href="#" className="heading-3xl">Software Development</Link>
											<Link href="#" className="read-more">
												<svg width={15} height={14} viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M8.00005 13C8.00005 13 14 8.58107 14 6.99995C14 5.41884 8 1 8 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
													<path d="M1.00005 13C1.00005 13 6.99999 8.58107 7 6.99995C7.00001 5.41884 1 1 1 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
												</svg>
											</Link>
										</div>
									</div>
								</SwiperSlide>
								<SwiperSlide>
									<div className="card-project-7">
										<div className="card-image">
											<img src="/assets/imgs/pages/home14/project3.png" />
										</div>
										<div className="card-info">
											<Link href="#" className="heading-3xl">Software Development</Link>
											<Link href="#" className="read-more">
												<svg width={15} height={14} viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M8.00005 13C8.00005 13 14 8.58107 14 6.99995C14 5.41884 8 1 8 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
													<path d="M1.00005 13C1.00005 13 6.99999 8.58107 7 6.99995C7.00001 5.41884 1 1 1 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
												</svg>
											</Link>
										</div>
									</div>
								</SwiperSlide>
								<SwiperSlide>
									<div className="card-project-7">
										<div className="card-image">
											<img src="/assets/imgs/pages/home14/project2.png" />
										</div>
										<div className="card-info">
											<Link href="#" className="heading-3xl">Software Development</Link>
											<Link href="#" className="read-more">
												<svg width={15} height={14} viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M8.00005 13C8.00005 13 14 8.58107 14 6.99995C14 5.41884 8 1 8 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
													<path d="M1.00005 13C1.00005 13 6.99999 8.58107 7 6.99995C7.00001 5.41884 1 1 1 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
												</svg>
											</Link>
										</div>
									</div>
								</SwiperSlide>
							</div>
						</Swiper>
					</div>
					<div className="container" data-aos="fade-up">
						<div className="box-button-slider box-button-slider-project">
							<div className="swiper-button-prev swiper-button-inline swiper-button-prev-style-1 swiper-button-prev-center">
								<svg width={18} height={12} viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M6 2.62268e-07C6 0.636 5.45025 1.58571 4.89375 2.38286C4.17825 3.41143 3.32325 4.30886 2.343 4.99371C1.608 5.50714 0.717 6 -2.62268e-07 6M-2.62268e-07 6C0.717 6 1.60875 6.49286 2.343 7.00629C3.32325 7.692 4.17825 8.58943 4.89375 9.61629C5.45025 10.4143 6 11.3657 6 12M-2.62268e-07 6L18 6" stroke="currentColor" strokeWidth="1.5" />
								</svg>
							</div>
							<div className="swiper-button-next swiper-button-inline swiper-button-next-style-1 swiper-button-next-center">
								<svg width={18} height={12} viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M12 12C12 11.364 12.5498 10.4143 13.1063 9.61714C13.8218 8.58857 14.6768 7.69114 15.657 7.00629C16.392 6.49286 17.283 6 18 6M18 6C17.283 6 16.3913 5.50714 15.657 4.99371C14.6768 4.308 13.8218 3.41057 13.1063 2.38371C12.5498 1.58571 12 0.634285 12 -3.81478e-07M18 6L2.62268e-07 6" stroke="currentColor" strokeWidth="1.5" />
								</svg>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
