
import Link from "next/link"

export default function Section1() {
	return (
		<>

			<section className="position-relative overflow-hidden box-banner-14">
				<div className="box-banner-14-inner">
					<div className="container" data-aos="fade-up">
						<div className="banner">
							<p className="sub-heading-ag-sm text-uppercase text-line-down color-white mb-1">
								<svg className="mr-3" width={40} height={40} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
									<circle cx={20} cy={20} r="19.75" stroke="white" strokeWidth="0.5" />
									<path d="M23.9961 20L15.9961 26V14L23.9961 20Z" fill="white" />
								</svg>
								how it works
							</p>
							<h1 className="display-4xl-bold color-white mb-5">
								Strategic Solutions for Sustainable Growth
							</h1>
							<div className="d-flex align-items-center flex-wrap">
								<Link href="#" className="btn btn-primary-square-md mb-3">
									Schedule a Consultation
									<svg width={19} height={15} viewBox="0 0 19 15" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M12.6667 14.5C12.6667 13.758 13.247 12.65 13.8344 11.72C14.5896 10.52 15.4921 9.473 16.5268 8.674C17.3027 8.075 18.2432 7.5 19 7.5M19 7.5C18.2432 7.5 17.3019 6.925 16.5268 6.326C15.4921 5.526 14.5896 4.479 13.8344 3.281C13.247 2.35 12.6667 1.24 12.6667 0.500001M19 7.5L3.0598e-07 7.5L19 7.5Z" fill="currentColor" />
										<path d="M12.6667 14.5C12.6667 13.758 13.247 12.65 13.8344 11.72C14.5896 10.52 15.4921 9.473 16.5268 8.674C17.3027 8.075 18.2432 7.5 19 7.5M19 7.5C18.2432 7.5 17.3019 6.925 16.5268 6.326C15.4921 5.526 14.5896 4.479 13.8344 3.281C13.247 2.35 12.6667 1.24 12.6667 0.500001M19 7.5L-1.70857e-07 7.5" stroke="currentColor" strokeWidth={2} />
									</svg>
								</Link>
								<span className="mr-20" />
								<div className="d-inline-block mb-3">
									<div className="box-need-help-2 color-white">
										<img src="/assets/imgs/pages/home14/phone.png" alt="Vatech" />
										<div className="right-help">
											<span className="paragraph-18-fitree">Need Help?</span><br />
											<strong className="paragraph-base-fitree-bold color-white">+98 909807</strong>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div></section>
		</>
	)
}
