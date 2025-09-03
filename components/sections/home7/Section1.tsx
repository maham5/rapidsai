'use client'
import CountUp from 'react-countup'
import Link from "next/link"

export default function Section1() {
	return (
		<>

			<section className="position-relative overflow-hidden box-banner-7">
				<div className="banner-7">
					<div className="container" data-aos="fade-up">
						<div className="text-center" data-aos="fade-up">
							<div className="sub-heading-ag-sm color-white text-uppercase">Solutions</div>
							<h1 className="display-ag-2xl color-white mb-20">
								Tailored Solutions <span className="primary-1000">for Tomorrow</span> <br className="d-none d-lg-block" />
								<span className="primary-1000">was</span> Challenges
							</h1>
							<p className="paragraph-rubik-r color-white desc-banner mb-40">
								We have been operating for over a decade, providing top-notch services to our clients<br />
								and building a strong track record in the industry.
							</p>
							<div className="d-flex align-items-center justify-content-center flex-wrap">
								<Link href="#" className="btn btn-primary-1000 mb-3">
									Discover More
									<svg width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M11.8125 5.75C11.8125 6.24219 11.4023 6.65234 10.9375 6.65234H7V10.5898C7 11.0547 6.58984 11.4375 6.125 11.4375C5.63281 11.4375 5.25 11.0547 5.25 10.5898V6.65234H1.3125C0.820312 6.65234 0.4375 6.24219 0.4375 5.75C0.4375 5.28516 0.820312 4.90234 1.3125 4.90234H5.25V0.964844C5.25 0.472656 5.63281 0.0625 6.125 0.0625C6.58984 0.0625 7 0.472656 7 0.964844V4.90234H10.9375C11.4023 4.875 11.8125 5.28516 11.8125 5.75Z" fill="currentColor" />
									</svg>
								</Link>
								<span className="mr-20" />
								<div className="box-authors-banner mb-3">
									<div className="box-authors-banner-left">
										<img src="/assets/imgs/pages/home7/author.png" />
										<img src="/assets/imgs/pages/home7/author2.png" />
										<img src="/assets/imgs/pages/home7/author3.png" />
										<span className="plus-circle">
											<svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M15.8477 8.04688C15.8477 8.298 15.7479 8.53884 15.5703 8.71642C15.3927 8.89399 15.1519 8.99375 14.9008 8.99375H8.90391V14.9906C8.90391 15.2418 8.80415 15.4826 8.62657 15.6602C8.449 15.8377 8.20816 15.9375 7.95703 15.9375C7.7059 15.9375 7.46506 15.8377 7.28749 15.6602C7.10992 15.4826 7.01016 15.2418 7.01016 14.9906V8.99375H1.01328C0.762154 8.99375 0.521313 8.89399 0.34374 8.71642C0.166166 8.53884 0.0664062 8.298 0.0664062 8.04688C0.0664062 7.79575 0.166166 7.55491 0.34374 7.37733C0.521313 7.19976 0.762154 7.1 1.01328 7.1H7.01016V1.10313C7.01016 0.851998 7.10992 0.611157 7.28749 0.433583C7.46506 0.25601 7.7059 0.15625 7.95703 0.15625C8.20816 0.15625 8.449 0.25601 8.62657 0.433583C8.80415 0.611157 8.90391 0.851998 8.90391 1.10313V7.1H14.9008C15.1519 7.1 15.3927 7.19976 15.5703 7.37733C15.7479 7.55491 15.8477 7.79575 15.8477 8.04688Z" fill="currentColor" />
											</svg>
										</span>
									</div>
									<div className="box-authors-banner-right">
										<h6 className="text-num-author"><CountUp className="odometer" enableScrollSpy={true} end={3000} /><span className="d-inline-block align-middle">+</span></h6>
										<p className="text-author-exp">Experience Team</p>
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
