
'use client'
import CountUp from 'react-countup'
import Link from "next/link"

export default function Section2() {
	return (
		<>

			<section className="position-relative overflow-hidden box-about-us">
				<div className="container">
					<div className="row align-items-end">
						<div className="col-lg-6 mb-4">
							<div className="box-happy-customers">
								<div className="box-happy-img-1">
									<img src="/assets/imgs/pages/home2/about.png" alt="Vatech" data-aos="fade-up" data-aos-duration={200} />
									<div className="happy-customers">
										<h6 className="heading-3xl theme-secondary"><CountUp className="odometer" enableScrollSpy={true} end={56} /><span className="d-inline-block align-middle">k+</span></h6>
										<p className="sub-heading-ag-md theme-primary">Happy Customers</p>
									</div>
								</div>
								<div className="box-happy-img-2">
									<img src="/assets/imgs/pages/home2/img-about.png" alt="Vatech" data-aos="fade-up" data-aos-duration={1000} />
								</div>
							</div>
						</div>
						<div className="col-lg-6 mb-4">
							<div className="banner-small-title-black">Solutions</div>
							<h2 className="heading-3xl mb-30">Investing for your Future <span className="theme-primary underline">Business growth</span></h2>
							<p className="mb-4">Muchas variaciones de los pasajes de Lorem Ipsum disponibles, pero la mayoría sufrió alteraciones en alguna manera, ya sea porque se le agregó humor los pasajes.</p>
							<ul className="list-tick-col">
								<li>
									<svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
										<g clipPath="url(#clip0_4249_2372)">
											<path d="M9.99995 0C4.48601 0 0 4.36344 0 9.72695C0 15.0905 4.48601 19.454 9.99995 19.454C15.5139 19.454 19.9999 15.0905 19.9999 9.72695C19.9999 4.36344 15.514 0 9.99995 0ZM15.7421 8.08399L9.45963 14.1949C9.1925 14.4548 8.83741 14.5978 8.45967 14.5978C8.08193 14.5978 7.72684 14.4548 7.45971 14.1949L4.2578 11.0804C3.99067 10.8206 3.84354 10.4752 3.84354 10.1078C3.84354 9.74025 3.99067 9.39485 4.2578 9.13501C4.52483 8.87517 4.87992 8.73206 5.25776 8.73206C5.6355 8.73206 5.9907 8.87517 6.25773 9.13511L8.45957 11.2767L13.742 6.13856C14.0091 5.87872 14.3642 5.73571 14.7419 5.73571C15.1197 5.73571 15.4748 5.87872 15.7419 6.13856C16.2935 6.67508 16.2935 7.54767 15.7421 8.08399Z" fill="#0055FF" />
										</g>
										<defs>
											<clipPath id="clip0_4249_2372">
												<rect width={20} height="19.454" fill="white" />
											</clipPath>
										</defs>
									</svg>
									Unlimited Consultation until getting result
								</li>
								<li>
									<svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
										<g clipPath="url(#clip0_4249_2372)">
											<path d="M9.99995 0C4.48601 0 0 4.36344 0 9.72695C0 15.0905 4.48601 19.454 9.99995 19.454C15.5139 19.454 19.9999 15.0905 19.9999 9.72695C19.9999 4.36344 15.514 0 9.99995 0ZM15.7421 8.08399L9.45963 14.1949C9.1925 14.4548 8.83741 14.5978 8.45967 14.5978C8.08193 14.5978 7.72684 14.4548 7.45971 14.1949L4.2578 11.0804C3.99067 10.8206 3.84354 10.4752 3.84354 10.1078C3.84354 9.74025 3.99067 9.39485 4.2578 9.13501C4.52483 8.87517 4.87992 8.73206 5.25776 8.73206C5.6355 8.73206 5.9907 8.87517 6.25773 9.13511L8.45957 11.2767L13.742 6.13856C14.0091 5.87872 14.3642 5.73571 14.7419 5.73571C15.1197 5.73571 15.4748 5.87872 15.7419 6.13856C16.2935 6.67508 16.2935 7.54767 15.7421 8.08399Z" fill="#0055FF" />
										</g>
										<defs>
											<clipPath id="clip0_4249_2372">
												<rect width={20} height="19.454" fill="white" />
											</clipPath>
										</defs>
									</svg>
									Free demo Consultation
								</li>
								<li>
									<svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
										<g clipPath="url(#clip0_4249_2372)">
											<path d="M9.99995 0C4.48601 0 0 4.36344 0 9.72695C0 15.0905 4.48601 19.454 9.99995 19.454C15.5139 19.454 19.9999 15.0905 19.9999 9.72695C19.9999 4.36344 15.514 0 9.99995 0ZM15.7421 8.08399L9.45963 14.1949C9.1925 14.4548 8.83741 14.5978 8.45967 14.5978C8.08193 14.5978 7.72684 14.4548 7.45971 14.1949L4.2578 11.0804C3.99067 10.8206 3.84354 10.4752 3.84354 10.1078C3.84354 9.74025 3.99067 9.39485 4.2578 9.13501C4.52483 8.87517 4.87992 8.73206 5.25776 8.73206C5.6355 8.73206 5.9907 8.87517 6.25773 9.13511L8.45957 11.2767L13.742 6.13856C14.0091 5.87872 14.3642 5.73571 14.7419 5.73571C15.1197 5.73571 15.4748 5.87872 15.7419 6.13856C16.2935 6.67508 16.2935 7.54767 15.7421 8.08399Z" fill="#0055FF" />
										</g>
										<defs>
											<clipPath id="clip0_4249_2372">
												<rect width={20} height="19.454" fill="white" />
											</clipPath>
										</defs>
									</svg>
									100% Moneyback Guarantee
								</li>
							</ul>
							<div className="mb-5" />
							<Link href="#" className="btn btn-primary-square-2-md">
								About More
								<img src="/assets/imgs/template/icons/plus-sm.svg" alt="Vatech" />
							</Link>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
