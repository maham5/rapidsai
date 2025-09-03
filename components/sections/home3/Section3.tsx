'use client'
import CountUp from 'react-countup'
import Link from "next/link"

export default function Section3() {
	return (
		<>

			<section className="position-relative overflow-hidden box-about-us-2">
				<div className="container" data-aos="fade-up">
					<div className="row align-items-center">
						<div className="col-lg-6 mb-4 text-center text-lg-end">
							<div className="box-img-about-inner-2">
								<div className="box-img-about-2">
									<img src="/assets/imgs/pages/home3/about.png" alt="Vatech" />
								</div>
								<div className="box-years-exp">
									<div className="box-circle-year-exp">
										<div>
											<h3><CountUp className="odometer" enableScrollSpy={true} end={25} /><span className="d-inline-block align-middle">+</span></h3>
											<p>Years of Experiences</p>
										</div>
									</div>
								</div>
								<div className="box-img-about">
									<img src="/assets/imgs/pages/home3/img-about.png" alt="Vatech" />
								</div>
							</div>
						</div>
						<div className="col-lg-6 mb-4">
							<p className="sub-heading-ag-sm primary-home text-uppercase">About us</p>
							<h2 className="heading-ag-3xl">Our Consulting Firm's Commitment to Excellence</h2>
							<p className="paragraph-rubik-r">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut al</p>
							<div className="box-border-top-bottom">
								<div className="row">
									<div className="col-lg-6">
										<div className="card-image-square-left">
											<div className="image">
												<img src="/assets/imgs/pages/home3/support.svg" alt="Vatech" />
											</div>
											<div className="info">
												Inventory<br />
												management
											</div>
										</div>
									</div>
									<div className="col-lg-6">
										<div className="card-image-square-left">
											<div className="image">
												<img src="/assets/imgs/pages/home3/team.svg" alt="Vatech" />
											</div>
											<div className="info">
												Experienced<br />
												Team members
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="box-call-help">
								<Link href="#" className="btn btn-primary-home">
									Read More
									<img src="/assets/imgs/template/icons/plus-sm.svg" alt="Vatech" />
								</Link>
								<div className="call-for-help">
									<div className="contact-phone">
										<div className="icon-contact">
											<svg width={25} height={25} viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M15.269 6.95462H18.0493V9.73646C18.0493 10.5015 18.6748 11.1274 19.4394 11.1274C20.204 11.1274 20.8295 10.5015 20.8295 9.73646V6.95462H23.6098C24.3744 6.95462 25 6.3287 25 5.56369C25 4.79869 24.3744 4.17277 23.6098 4.17277H20.8295V1.39092C20.8295 0.625915 20.204 0 19.4394 0C18.6748 0 18.0493 0.625915 18.0493 1.39092V4.17277H15.269C14.5044 4.17277 13.8788 4.79869 13.8788 5.56369C13.8788 6.3287 14.5044 6.95462 15.269 6.95462ZM22.5116 17.0666L18.9807 16.6633C18.5655 16.6145 18.1446 16.6605 17.7498 16.7978C17.3549 16.9351 16.9963 17.1602 16.7008 17.4561L14.1429 20.0154C10.1966 18.0072 6.98891 14.7978 4.98184 10.8492L7.55362 8.27599C8.15138 7.6779 8.44332 6.82943 8.34601 5.99488L7.94286 2.48975C7.86779 1.81097 7.54579 1.18354 7.0382 0.726965C6.53061 0.270395 5.87291 0.0165948 5.19037 0.0139092H2.78541C1.21454 0.0139092 -0.0922038 1.32138 0.00510669 2.89312C0.741886 14.7716 10.2366 24.2577 22.0946 24.9949C23.6655 25.0923 24.9722 23.7848 24.9722 22.213V19.8067C24.9861 18.4158 23.9157 17.2196 22.5116 17.0666Z" fill="#012236" />
											</svg>
										</div>
										<span className="sub-heading-sm dark-950">
											Call for help:<br />
											(+055) 6489 6448
										</span>
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
