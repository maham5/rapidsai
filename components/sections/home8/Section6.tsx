'use client'
import CircleText from '@/components/elements/CircleText'
import { useState } from 'react'
import ModalVideo from 'react-modal-video'

export default function Section6() {
	const [isOpen, setOpen] = useState(false)

	const [isAccordion, setIsAccordion] = useState(1)

	const handleAccordion = (key: any) => {
		setIsAccordion(prevState => prevState === key ? null : key)
	}
	return (
		<>

			<section className="position-relative overflow-hidden box-faqs-8">
				<div className="box-faqs-8-inner">
					<div className="box-faqs-8-bg" data-aos="fade-up" />
					<div className="container" data-aos="fade-up">
						<div className="row position-relative">
							<div className="col-lg-6 mb-4" />
							<div className="col-lg-6 mb-4">
								<h6 className="banner-small-title-black line-dark-950 mb-20 text-uppercase">FREQUENTLY Answer QUESTIONS</h6>
								<h3 className="heading-ag-3xl secondery-500 mb-30">
									Have Any Question? Find<br />
									Answer Below
								</h3>
								<div className="block-faqs">
									<div className="accordion" id="accordionFAQ">
										<div className="accordion-item wow fadeInUp">
											<h5 className="accordion-header" onClick={() => handleAccordion(1)} id="headingOne">
												<button className={isAccordion == 1 ? "accordion-button text-heading-5" : "accordion-button collapsed text-heading-5"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
													<p>What the Cost of Services Help desk or Support?</p>
												</button>
											</h5>
											<div className={isAccordion == 1 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} id="collapseOne" aria-labelledby="headingOne" data-bs-parent="#accordionFAQ">
												<div className="accordion-body">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id es</div>
											</div>
										</div>
										<div className="accordion-item wow fadeInUp">
											<h5 className="accordion-header" onClick={() => handleAccordion(2)} id="headingTwo">
												<button className={isAccordion == 2 ? "accordion-button text-heading-5" : "accordion-button collapsed text-heading-5"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
													<p>What’s Our Mission</p>
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
										<div className="accordion-item wow fadeInUp">
											<h5 className="accordion-header" onClick={() => handleAccordion(4)} id="headingFour">
												<button className={isAccordion == 4 ? "accordion-button text-heading-5" : "accordion-button collapsed text-heading-5"} data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
													<p>What Do you Services For Digital Agency?</p>
												</button>
											</h5>
											<div className={isAccordion == 4 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} id="collapseFour" aria-labelledby="headingFour" data-bs-parent="#accordionFAQ">
												<div className="accordion-body">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id es</div>
											</div>
										</div>
									</div>
								</div>
								<div className="position-relative">
									<div className="position-relative bg-dark-950 border-linear-01 icon_220 icon-shape rounded-circle">
										<a onClick={() => setOpen(true)} className="popup-video"><svg width={60} height={60} viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
											<circle cx="29.9961" cy={30} r={30} fill="white" />
											<circle cx="29.9961" cy={30} r={25} fill="#141416" />
											<path d="M38.0977 28.8984C38.6445 29.25 38.9961 29.875 38.9961 30.5C38.9961 31.1641 38.6445 31.7891 38.0977 32.1016L26.8477 38.9766C26.2617 39.3281 25.5195 39.3672 24.9336 39.0156C24.3477 38.7031 23.9961 38.0781 23.9961 37.375V23.625C23.9961 22.9609 24.3477 22.3359 24.9336 22.0234C25.5195 21.6719 26.2617 21.6719 26.8477 22.0625L38.0977 28.8984Z" fill="url(#paint0_linear_4249_690)" />
											<defs>
												<linearGradient id="paint0_linear_4249_690" x1="38.9939" y1="30.0007" x2="23.9961" y2="30.0007" gradientUnits="userSpaceOnUse">
													<stop stopColor="#BD16D8" />
													<stop offset="0.0001" stopColor="#9E3DDE" />
													<stop offset="0.9998" stopColor="#4AA4F0" />
													<stop offset="0.9999" stopColor="#15E6FB" />
													<stop offset={1} stopColor="#00FFFF" />
												</linearGradient>
											</defs>
										</svg></a>
										<div className="position-absolute top-50 start-50 translate-middle w-100">
											<CircleText text="Best - Consulting - Agency -" />
										</div>
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
