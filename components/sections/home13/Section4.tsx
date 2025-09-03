'use client'
import { useState } from 'react'
import CountUp from 'react-countup'
import ModalVideo from 'react-modal-video'

export default function Section4() {
	const [isOpen, setOpen] = useState(false)

	const [isAccordion, setIsAccordion] = useState(1)

	const handleAccordion = (key: any) => {
		setIsAccordion(prevState => prevState === key ? null : key)
	}
	return (
		<>

			<section className="box-section overflow-hidden box-number-faq-black">
				<div className="container" data-aos="fade-up">
					<div className="row">
						<div className="col-lg-3 col-md-6 mb-4">
							<div className="card-number-2">
								<p className="paragraph-rubik-r color-white">Winning award</p>
								<h4 className="heading-ag-3xl stroke-text-single"><CountUp className="odometer" enableScrollSpy={true} end={200} /><span className="d-inline-block align-middle">+</span></h4>
							</div>
						</div>
						<div className="col-lg-3 col-md-6 mb-4">
							<div className="card-number-2">
								<p className="paragraph-rubik-r color-white">Happy Clients</p>
								<h4 className="heading-ag-3xl stroke-text-single"><CountUp className="odometer" enableScrollSpy={true} end={220} /><span className="d-inline-block align-middle">+</span></h4>
							</div>
						</div>
						<div className="col-lg-3 col-md-6 mb-4">
							<div className="card-number-2">
								<p className="paragraph-rubik-r color-white">Team Members</p>
								<h4 className="heading-ag-3xl stroke-text-single"><CountUp className="odometer" enableScrollSpy={true} end={100} /><span className="d-inline-block align-middle">+</span></h4>
							</div>
						</div>
						<div className="col-lg-3 col-md-6 mb-4">
							<div className="card-number-2">
								<p className="paragraph-rubik-r color-white">Complete project</p>
								<h4 className="heading-ag-3xl stroke-text-single"><CountUp className="odometer" enableScrollSpy={true} end={200} /><span className="d-inline-block align-middle">+</span></h4>
							</div>
						</div>
					</div>
				</div>
				<div className="position-relative overflow-hidden box-section box-faq-single-2 faq-blue">
					<div className="box-project-inner">
						<div className="container" data-aos="fade-up">
							<div className="text-center">
								<p className="title-line-both color-white line-primary-1400">Common Faq</p>
								<h3 className="heading-3xl color-white">
									Inspiring Confidence corporate<br className="d-none d-lg-block" />
									Delivering Solutions
								</h3>
							</div>
							<div className="row mt-5">
								<div className="col-md-6">
									<div className="block-faqs">
										<div className="accordion" id="accordionFAQ">
											<div className="accordion-item wow fadeInUp">
												<h5 className="accordion-header" onClick={() => handleAccordion(1)} id="headingOne">
													<button className={isAccordion == 1 ? "accordion-button text-heading-5" : "accordion-button collapsed text-heading-5"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
														<p>How can I contact customer support ?</p>
													</button>
												</h5>
												<div className={isAccordion == 1 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} id="collapseOne" aria-labelledby="headingOne" data-bs-parent="#accordionFAQ">
													<div className="accordion-body">It is a long established fact that a reader will be distr acted bioiiy the rea dablea content of a page when looking at its layout Thoiie point of using.It is a long this established fact that a reader</div>
												</div>
											</div>
											<div className="accordion-item wow fadeInUp">
												<h5 className="accordion-header" onClick={() => handleAccordion(2)} id="headingTwo">
													<button className={isAccordion == 2 ? "accordion-button text-heading-5" : "accordion-button collapsed text-heading-5"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
														<p>Are your services customizable ?</p>
													</button>
												</h5>
												<div className={isAccordion == 2 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} id="collapseTwo" aria-labelledby="headingTwo" data-bs-parent="#accordionFAQ">
													<div className="accordion-body">It is a long established fact that a reader will be distr acted bioiiy the rea dablea content of a page when looking at its layout Thoiie point of using.It is a long this established fact that a reader</div>
												</div>
											</div>
											<div className="accordion-item wow fadeInUp">
												<h5 className="accordion-header" onClick={() => handleAccordion(3)} id="headingThree">
													<button className={isAccordion == 3 ? "accordion-button text-heading-5" : "accordion-button collapsed text-heading-5"} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
														<p>What are your business hours ?</p>
													</button>
												</h5>
												<div className={isAccordion == 3 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} id="collapseThree" aria-labelledby="headingThree" data-bs-parent="#accordionFAQ">
													<div className="accordion-body">It is a long established fact that a reader will be distr acted bioiiy the rea dablea content of a page when looking at its layout Thoiie point of using.It is a long this established fact that a reader</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="col-md-6">
									<div className="box-video-center ps-3">
										<img src="/assets/imgs/pages/services/faq.png" alt="Vatech" />
										<a onClick={() => setOpen(true)} className="btn btn-play popup-video">
											<svg width={24} height={28} viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M21.957 11.3164C22.7773 11.8438 23.3047 12.7812 23.3047 13.7188C23.3047 14.7148 22.7773 15.6523 21.957 16.1211L5.08203 26.4336C4.20312 26.9609 3.08984 27.0195 2.21094 26.4922C1.33203 26.0234 0.804688 25.0859 0.804688 24.0312V3.40625C0.804688 2.41016 1.33203 1.47266 2.21094 1.00391C3.08984 0.476562 4.20312 0.476562 5.08203 1.0625L21.957 11.3164Z" fill="currentColor" />
											</svg>
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<ModalVideo channel='youtube' isOpen={isOpen} videoId="9HaU8NjH7bI" onClose={() => setOpen(false)} />
		</>
	)
}
