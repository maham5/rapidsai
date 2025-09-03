'use client'
import { useState } from 'react'
import CountUp from 'react-countup'
export default function Section8() {

	const [isAccordion, setIsAccordion] = useState(1)

	const handleAccordion = (key: any) => {
		setIsAccordion(prevState => prevState === key ? null : key)
	}
	return (
		<>

			<section className="box-section overflow-hidden box-faq-16">
				<div className="container" data-aos="fade-up">
					<div className="row align-items-center position-relative">
						<div className="col-lg-6 mb-4">
							<div className="box-images-faq-inner">
								<img src="/assets/imgs/pages/home16/faq.png" className="w-100" alt="Vatech" />
								<div className="box-num-years">
									<div className="box-left"><CountUp className="odometer" enableScrollSpy={true} end={24} /></div>
									<div className="box-right">
										Years<br />
										Experiences
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-6 mb-4">
							<h6 className="paragraph-base-fitree-bold text-uppercase primary-500 mb-1">FREQUENTLY QUESTIONS</h6>
							<h3 className="heading-3xl mb-30">
								Have Any Question? Find<br />
								Answer Below
							</h3>
							<div className="block-faqs">
								<div className="accordion" id="accordionFAQ">
									<div className="accordion-item wow fadeInUp">
										<h5 className="accordion-header" onClick={() => handleAccordion(1)} id="headingOne">
											<button className={isAccordion == 1 ? "accordion-button text-heading-5" : "accordion-button collapsed text-heading-5"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
												<p>What Do you Services For Digital Agency?</p>
											</button>
										</h5>
										<div className={isAccordion == 1 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} id="collapseOne" aria-labelledby="headingOne" data-bs-parent="#accordionFAQ">
											<div className="accordion-body">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con Excepteur sint occaecat</div>
										</div>
									</div>
									<div className="accordion-item wow fadeInUp">
										<h5 className="accordion-header" onClick={() => handleAccordion(2)} id="headingTwo">
											<button className={isAccordion == 2 ? "accordion-button text-heading-5" : "accordion-button collapsed text-heading-5"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
												<p>What the Cost of Services Help desk or Support?</p>
											</button>
										</h5>
										<div className={isAccordion == 2 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} id="collapseTwo" aria-labelledby="headingTwo" data-bs-parent="#accordionFAQ">
											<div className="accordion-body">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id es</div>
										</div>
									</div>
									<div className="accordion-item wow fadeInUp">
										<h5 className="accordion-header" onClick={() => handleAccordion(3)} id="headingThree">
											<button className={isAccordion == 3 ? "accordion-button text-heading-5" : "accordion-button collapsed text-heading-5"} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
												<p>What types of Scale Help Desk?</p>
											</button>
										</h5>
										<div className={isAccordion == 3 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} id="collapseThree" aria-labelledby="headingThree" data-bs-parent="#accordionFAQ">
											<div className="accordion-body">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id es</div>
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
