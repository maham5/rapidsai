'use client'
import { useState } from "react";
import Link from "next/link"

export default function Section7() {
	const [isTab, setIsTab] = useState(1)
    const handleTab = (i: number) => {
        setIsTab(i)
    }
	return (
		<>

			<section className="position-relative overflow-hidden box-services-4">
				<div className="container position-relative">
					<div className="box-list-services-4">
						<div className="box-ul">
							<ul className="nav nav-tabs" id="pills-tab" role="tablist">
								<li><a className={`${isTab === 1 ? 'active' : ''}`}  onClick={() => handleTab(1)} type="button" role="tab" aria-controls="affordable" aria-selected="true">01. Affordable</a></li>
								<li><a className={`${isTab === 2 ? 'active' : ''}`} onClick={() => handleTab(2)} type="button" role="tab" aria-controls="knowledge" aria-selected="false">02. Knowledge</a></li>
								<li><a className={`${isTab === 3 ? 'active' : ''}`} onClick={() => handleTab(3)} type="button" role="tab" aria-controls="savetimes" aria-selected="false">03. Saves Times</a></li>
								<li><a className={`${isTab === 4 ? 'active' : ''}`} onClick={() => handleTab(4)} type="button" role="tab" aria-controls="fastquality" aria-selected="false">04. Fast &amp; Quality</a></li>
								<li><a className={`${isTab === 5 ? 'active' : ''}`} onClick={() => handleTab(5)} type="button" role="tab" aria-controls="experienced" aria-selected="false">05. Experienced</a></li>
							</ul>
							<div className="phone-service">
								<span>
									<svg width={30} height={30} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M22.8077 19.8482C21.8276 18.8806 20.604 18.8806 19.6301 19.8482C18.8872 20.5848 18.1443 21.3215 17.4139 22.0706C17.2142 22.2766 17.0456 22.3203 16.8022 22.183C16.3215 21.9208 15.8096 21.7085 15.3476 21.4213C13.1939 20.0667 11.3897 18.325 9.79159 16.3647C8.99877 15.3909 8.29334 14.3483 7.80017 13.1747C7.70028 12.9375 7.71901 12.7814 7.91253 12.5879C8.65542 11.87 9.37957 11.1333 10.11 10.3967C11.1275 9.3729 11.1275 8.1743 10.1037 7.14425C9.52316 6.55743 8.94258 5.9831 8.36201 5.39629C7.76271 4.79699 7.16965 4.19144 6.56411 3.59839C5.584 2.64325 4.36043 2.64325 3.38657 3.60463C2.63744 4.34127 1.91953 5.09664 1.15792 5.82079C0.452489 6.48876 0.0966536 7.30656 0.021741 8.2617C-0.0968706 9.81613 0.283935 11.2832 0.820809 12.7128C1.91953 15.6718 3.59258 18.3 5.62146 20.7097C8.36201 23.9684 11.6332 26.5466 15.46 28.4069C17.183 29.2435 18.9684 29.8865 20.9099 29.9926C22.2458 30.0675 23.407 29.7304 24.3371 28.6879C24.9739 27.9762 25.6918 27.327 26.366 26.6465C27.3648 25.6352 27.3711 24.4116 26.3785 23.4128C25.1924 22.2204 24 21.0343 22.8077 19.8482Z" fill="#000407" />
										<path d="M21.6148 14.8693L23.9183 14.476C23.5562 12.3598 22.5574 10.4432 21.0404 8.92002C19.4361 7.31564 17.4072 6.30432 15.1723 5.99219L14.8477 8.30824C16.5769 8.5517 18.1501 9.33204 19.3924 10.5743C20.566 11.748 21.3338 13.2337 21.6148 14.8693Z" fill="#000407" />
										<path d="M25.2156 4.85683C22.5562 2.19744 19.1914 0.518146 15.477 0L15.1523 2.31605C18.3611 2.76552 21.2702 4.22008 23.5675 6.51115C25.7462 8.68986 27.1758 11.4429 27.694 14.4706L29.9975 14.0773C29.392 10.5689 27.7377 7.38513 25.2156 4.85683Z" fill="#000407" />
									</svg>
								</span>
								+098 9098087
							</div>
						</div>
						<div className="box-content-tab" data-aos="fade-up">
							<div className="tab-content">
								<div className={isTab == 1 ? "tab-pane fade show active" : "tab-pane fade"} id="affordable" role="tabpanel" aria-labelledby="affordable-tab" tabIndex={0}>
									<div className="tab-div tab-affordable">
										<div className="sub-heading-fitree-sm color-white text-uppercase text-under mb-20">
											<svg width={13} height={13} viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
												<circle cx="6.5" cy="6.5" r="5.75" stroke="currentColor" strokeWidth="1.5" />
											</svg>
											Why Us
										</div>
										<h2 className="heading-48-fitree color-white">Affordable &amp; Flexible</h2>
										<p className="paragraph-18-fitree grey-50">we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue</p>
										<Link href="#" className="link-white">
											Read More
											<svg width={15} height={10} viewBox="0 0 15 10" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M14.8678 4.68115L10.3225 0.158108C10.1592 -0.0316151 9.87224 -0.0537319 9.68157 0.108783C9.49091 0.271258 9.46869 0.556796 9.632 0.746519C9.64724 0.764205 9.6638 0.780724 9.68157 0.795845L13.4497 4.54997H0.454523C0.203512 4.54997 0 4.75248 0 5.00229C0 5.25211 0.203512 5.45458 0.454523 5.45458H13.4497L9.68157 9.20415C9.49091 9.36663 9.46869 9.65217 9.632 9.84189C9.79532 10.0316 10.0822 10.0537 10.2729 9.89122C10.2907 9.87606 10.3073 9.85958 10.3225 9.84189L14.8678 5.31885C15.0441 5.1425 15.0441 4.85758 14.8678 4.68115Z" fill="currentColor" />
											</svg>
										</Link>
									</div>
								</div>
								<div className={isTab == 2 ? "tab-pane fade show active" : "tab-pane fade"} id="knowledge" role="tabpanel" aria-labelledby="knowledge-tab" tabIndex={0}>
									<div className="tab-div tab-knowledge">
										<div className="sub-heading-fitree-sm color-white text-uppercase text-under mb-20">
											<svg width={13} height={13} viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
												<circle cx="6.5" cy="6.5" r="5.75" stroke="currentColor" strokeWidth="1.5" />
											</svg>
											Why Us
										</div>
										<h2 className="heading-48-fitree color-white">Knowledge</h2>
										<p className="paragraph-18-fitree grey-50">we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue</p>
										<Link href="#" className="link-white">
											Read More
											<svg width={15} height={10} viewBox="0 0 15 10" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M14.8678 4.68115L10.3225 0.158108C10.1592 -0.0316151 9.87224 -0.0537319 9.68157 0.108783C9.49091 0.271258 9.46869 0.556796 9.632 0.746519C9.64724 0.764205 9.6638 0.780724 9.68157 0.795845L13.4497 4.54997H0.454523C0.203512 4.54997 0 4.75248 0 5.00229C0 5.25211 0.203512 5.45458 0.454523 5.45458H13.4497L9.68157 9.20415C9.49091 9.36663 9.46869 9.65217 9.632 9.84189C9.79532 10.0316 10.0822 10.0537 10.2729 9.89122C10.2907 9.87606 10.3073 9.85958 10.3225 9.84189L14.8678 5.31885C15.0441 5.1425 15.0441 4.85758 14.8678 4.68115Z" fill="currentColor" />
											</svg>
										</Link>
									</div>
								</div>
								<div className={isTab == 3 ? "tab-pane fade show active" : "tab-pane fade"} id="savetimes" role="tabpanel" aria-labelledby="savetimes-tab" tabIndex={0}>
									<div className="tab-div tab-savetimes">
										<div className="sub-heading-fitree-sm color-white text-uppercase text-under mb-20">
											<svg width={13} height={13} viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
												<circle cx="6.5" cy="6.5" r="5.75" stroke="currentColor" strokeWidth="1.5" />
											</svg>
											Why Us
										</div>
										<h2 className="heading-48-fitree color-white">Saves Times</h2>
										<p className="paragraph-18-fitree grey-50">we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue</p>
										<Link href="#" className="link-white">
											Read More
											<svg width={15} height={10} viewBox="0 0 15 10" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M14.8678 4.68115L10.3225 0.158108C10.1592 -0.0316151 9.87224 -0.0537319 9.68157 0.108783C9.49091 0.271258 9.46869 0.556796 9.632 0.746519C9.64724 0.764205 9.6638 0.780724 9.68157 0.795845L13.4497 4.54997H0.454523C0.203512 4.54997 0 4.75248 0 5.00229C0 5.25211 0.203512 5.45458 0.454523 5.45458H13.4497L9.68157 9.20415C9.49091 9.36663 9.46869 9.65217 9.632 9.84189C9.79532 10.0316 10.0822 10.0537 10.2729 9.89122C10.2907 9.87606 10.3073 9.85958 10.3225 9.84189L14.8678 5.31885C15.0441 5.1425 15.0441 4.85758 14.8678 4.68115Z" fill="currentColor" />
											</svg>
										</Link>
									</div>
								</div>
								<div className={isTab == 4 ? "tab-pane fade show active" : "tab-pane fade"} id="fastquality" role="tabpanel" aria-labelledby="fastquality-tab" tabIndex={0}>
									<div className="tab-div tab-fastquality">
										<div className="sub-heading-fitree-sm color-white text-uppercase text-under mb-20">
											<svg width={13} height={13} viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
												<circle cx="6.5" cy="6.5" r="5.75" stroke="currentColor" strokeWidth="1.5" />
											</svg>
											Why Us
										</div>
										<h2 className="heading-48-fitree color-white">Fast &amp; Quality</h2>
										<p className="paragraph-18-fitree grey-50">we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue</p>
										<Link href="#" className="link-white">
											Read More
											<svg width={15} height={10} viewBox="0 0 15 10" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M14.8678 4.68115L10.3225 0.158108C10.1592 -0.0316151 9.87224 -0.0537319 9.68157 0.108783C9.49091 0.271258 9.46869 0.556796 9.632 0.746519C9.64724 0.764205 9.6638 0.780724 9.68157 0.795845L13.4497 4.54997H0.454523C0.203512 4.54997 0 4.75248 0 5.00229C0 5.25211 0.203512 5.45458 0.454523 5.45458H13.4497L9.68157 9.20415C9.49091 9.36663 9.46869 9.65217 9.632 9.84189C9.79532 10.0316 10.0822 10.0537 10.2729 9.89122C10.2907 9.87606 10.3073 9.85958 10.3225 9.84189L14.8678 5.31885C15.0441 5.1425 15.0441 4.85758 14.8678 4.68115Z" fill="currentColor" />
											</svg>
										</Link>
									</div>
								</div>
								<div className={isTab == 5 ? "tab-pane fade show active" : "tab-pane fade"} id="experienced" role="tabpanel" aria-labelledby="experienced-tab" tabIndex={0}>
									<div className="tab-div tab-experienced">
										<div className="sub-heading-fitree-sm color-white text-uppercase text-under mb-20">
											<svg width={13} height={13} viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
												<circle cx="6.5" cy="6.5" r="5.75" stroke="currentColor" strokeWidth="1.5" />
											</svg>
											Why Us
										</div>
										<h2 className="heading-48-fitree color-white">Experienced</h2>
										<p className="paragraph-18-fitree grey-50">we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue</p>
										<Link href="#" className="link-white">
											Read More
											<svg width={15} height={10} viewBox="0 0 15 10" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M14.8678 4.68115L10.3225 0.158108C10.1592 -0.0316151 9.87224 -0.0537319 9.68157 0.108783C9.49091 0.271258 9.46869 0.556796 9.632 0.746519C9.64724 0.764205 9.6638 0.780724 9.68157 0.795845L13.4497 4.54997H0.454523C0.203512 4.54997 0 4.75248 0 5.00229C0 5.25211 0.203512 5.45458 0.454523 5.45458H13.4497L9.68157 9.20415C9.49091 9.36663 9.46869 9.65217 9.632 9.84189C9.79532 10.0316 10.0822 10.0537 10.2729 9.89122C10.2907 9.87606 10.3073 9.85958 10.3225 9.84189L14.8678 5.31885C15.0441 5.1425 15.0441 4.85758 14.8678 4.68115Z" fill="currentColor" />
											</svg>
										</Link>
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
