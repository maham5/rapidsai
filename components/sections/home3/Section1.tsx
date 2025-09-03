'use client'
import CountUp from 'react-countup'
import Link from "next/link"

export default function Section1() {
	return (
		<>

			<section className="position-relative overflow-hidden box-banner-3">
				<div className="container" data-aos="fade-up">
					<div className="row align-items-end">
						<div className="col-lg-6 mb-4">
							<div className="banner-2">
								<div className="sub-heading-ag-sm primary-home text-uppercase">Features</div>
								<h1 className="heading-ag-3xl neutral-1300 mb-20">
									Strategic Solutions for<br className="d-none d-lg-block" />
									Sustainable Growth
								</h1>
								<p className="paragraph-rubik-r gray-700 desc-banner mb-40">There are many variations of passages of Lorem Ipsum thei available, but the majority have There are many variations of passages of Lorem There are many variations of passages of Lorem Ipsum thei available,</p>
								<div className="box-progress">
									<div className="item-progress">
										<h6 className="sub-heading-ag-sm gray-800 mb-2">Consulting</h6>
										<div className="progress">
											<div className="progress-bar" style={{ width: '80%' }} />
										</div>
									</div>
									<div className="item-progress">
										<h6 className="sub-heading-ag-sm gray-800 mb-2">Advisors</h6>
										<div className="progress">
											<div className="progress-bar" style={{ width: '90%' }} />
										</div>
									</div>
								</div>
								<div className="d-flex align-items-center">
									<Link href="#" className="btn btn-primary-home">
										Read More
										<img src="/assets/imgs/template/icons/plus-sm.svg" alt="Vatech" />
									</Link>
								</div>
							</div>
						</div>
						<div className="col-lg-6 mb-4 text-center text-lg-end">
							<div className="row align-items-center">
								<div className="col-sm-6">
									<div className="box-image-banner-3-1">
										<img src="/assets/imgs/pages/home3/banner.png" className="w-100" alt="Vatech" />
									</div>
								</div>
								<div className="col-sm-6">
									<div className="box-image-banner-3-2">
										<img src="/assets/imgs/pages/home3/banner2.png" className="w-100" alt="Vatech" />
									</div>
									<div className="box-experience">
										<div className="icon-experience">
											<div className="image-exp">
												<img src="/assets/imgs/pages/home3/experience.svg" alt="Vatech" />
											</div>
										</div>
										<div className="info-exp">
											<h3><CountUp className="odometer" enableScrollSpy={true} end={25} /> <span className="d-inline-block align-middle">Years</span></h3>
											<p>Experience</p>
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
