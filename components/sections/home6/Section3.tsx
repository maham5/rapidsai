'use client'
import CountUp from 'react-countup'
import Link from "next/link"

export default function Section3() {
	return (
		<>

			<section className="position-relative overflow-hidden box-about-us-6">
				<div className="container" data-aos="fade-up">
					<div className="row">
						<div className="col-lg-6 mb-4">
							<div className="box-image-about-6">
								<div className="box-image-about-inner">
									<img src="/assets/imgs/pages/home6/about.png" alt="Vatech" />
								</div>
							</div>
						</div>
						<div className="col-lg-6 mb-4">
							<div className="sub-heading-fitree-sm primary-500 text-uppercase mb-20">About us</div>
							<h1 className="heading-48-fitree secondery-500 text-uppercase mb-20">
								Most Trusted Service<br className="d-none d-lg-block" />
								Since 2000.
							</h1>
							<p className="paragraph-18-fitree gray-700 desc-banner mb-40">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit</p>
							<div className="box-number-about">
								<div className="item-number">
									<h6 className="heading-80-fitree primary-500 mb-0"><CountUp className="odometer" enableScrollSpy={true} end={3} /><span className="d-inline-block align-middle">K+</span></h6>
									<p className="paragraph-20-fitree">Project Completed</p>
								</div>
								<div className="item-number">
									<h6 className="heading-80-fitree primary-500 mb-0"><CountUp className="odometer" enableScrollSpy={true} end={2} /><span className="d-inline-block align-middle">K+</span></h6>
									<p className="paragraph-20-fitree">Happy Customers</p>
								</div>
							</div>
							<div className="d-flex align-items-center">
								<Link href="#" className="btn btn-primary-square">
									About More
									<svg width={19} height={15} viewBox="0 0 19 15" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M12.6667 14.5C12.6667 13.758 13.247 12.65 13.8344 11.72C14.5896 10.52 15.4921 9.473 16.5268 8.674C17.3027 8.075 18.2432 7.5 19 7.5M19 7.5C18.2432 7.5 17.3019 6.925 16.5268 6.326C15.4921 5.526 14.5896 4.479 13.8344 3.281C13.247 2.35 12.6667 1.24 12.6667 0.500001M19 7.5L-1.70857e-07 7.5" stroke="currentColor" strokeWidth={2} />
									</svg>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
