'use client'
import Link from "next/link"
import { useState } from "react"

export default function Section8() {

	const [isTab, setIsTab] = useState(1)
    const handleTab = (i: number) => {
        setIsTab(i)
    }
	return (
		<>

			<section className="position-relative overflow-hidden box-consultants">
				<div className="container" data-aos="fade-up">
					<div className="row align-items-end">
						<div className="col-lg-7 mb-30">
							<div className="banner-small-title-black">Pricing Plan</div>
							<h2 className="heading-ag-3xl dark-950">
								Pricing Plan For your<br className="d-none d-lg-block" />
								Consulting Solution
							</h2>
						</div>
						<div className="col-lg-5 text-center text-lg-end mb-30">
							<div className="box-button-change-package">
							<a onClick={() => handleTab(1)} className={`btn btn-default ${isTab === 1 ? 'btn-active' : ''}`}> Monthly </a>
							<a onClick={() => handleTab(2)} className={`btn btn-default ${isTab === 2 ? 'btn-active' : ''}`}> Yearly </a>
							</div>
						</div>
					</div>
					<div className="box-list-pricing" data-aos="fade-up">
						<div className="row">
							<div className="col-lg-4 col-md-6">
								<div className="card-pricing-2">
									<div className="top-pricing">
										<div className="pricing-name">
											<h6 className="heading-ag-lg dark-950">Exclusive Package</h6>
											<div className="pricing-icon">
												<img src="/assets/imgs/pages/home2/exclusive.svg" className="light-mode" alt="Vatech" />
												<img src="/assets/imgs/pages/home2/exclusive-w.svg" className="dark-mode" alt="Vatech" />
											</div>
										</div>
										<div className="paragraph-rubik-m desc-pricing dark-950">Start at</div>
										<div className="pricing-price">
											<h2 className="heading-ag-xl package-item monthly"  style={{ display: `${isTab  == 1 ? "block" : "none"}` }}>$229</h2>
											<h2 className="heading-ag-xl package-item yearly" style={{ display: `${isTab  == 2 ? "block" : "none"}` }}>$2,748</h2>
										</div>
									</div>
									<div className="bottom-pricing">
										<ul className="list-ticked mb-40">
											<li>5000 User Activities</li>
											<li>Unlimited Access</li>
											<li>No Hidden Charge</li>
											<li>03 Time Updates</li>
											<li>Figma Source File</li>
											<li>Many More Facilities</li>
										</ul>
										<div className="card-button text-center">
											<Link href="#" className="btn btn-border-950">GET STARTED</Link>
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-4 col-md-6">
								<div className="card-pricing-2">
									<div className="top-pricing">
										<div className="pricing-name">
											<h6 className="heading-ag-lg dark-950">Standard Package</h6>
											<div className="pricing-icon">
												<img src="/assets/imgs/pages/home2/standard.svg" className="light-mode" alt="Vatech" />
												<img src="/assets/imgs/pages/home2/standard-w.svg" className="dark-mode" alt="Vatech" />
											</div>
										</div>
										<div className="paragraph-rubik-m desc-pricing dark-950">Start at</div>
										<div className="pricing-price">
											<h2 className="heading-ag-xl package-item monthly"  style={{ display: `${isTab  == 1 ? "block" : "none"}` }}>$129</h2>
											<h2 className="heading-ag-xl package-item yearly" style={{ display: `${isTab  == 2 ? "block" : "none"}` }}>$1,548</h2>
										</div>
									</div>
									<div className="bottom-pricing">
										<ul className="list-ticked mb-40">
											<li>5000 User Activities</li>
											<li>Unlimited Access</li>
											<li>No Hidden Charge</li>
											<li>03 Time Updates</li>
											<li>Figma Source File</li>
											<li>Many More Facilities</li>
										</ul>
										<div className="card-button text-center">
											<Link href="#" className="btn btn-border-950">GET STARTED</Link>
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-4 col-md-6">
								<div className="card-pricing-2">
									<div className="top-pricing">
										<div className="pricing-name">
											<h6 className="heading-ag-lg dark-950">Premium Package</h6>
											<div className="pricing-icon">
												<img src="/assets/imgs/pages/home2/premium.svg" className="light-mode" alt="Vatech" />
												<img src="/assets/imgs/pages/home2/premium-w.svg" className="dark-mode" alt="Vatech" />
											</div>
										</div>
										<div className="paragraph-rubik-m desc-pricing dark-950">Start at</div>
										<div className="pricing-price">
											<h2 className="heading-ag-xl package-item monthly"  style={{ display: `${isTab  == 1 ? "block" : "none"}` }}>$329</h2>
											<h2 className="heading-ag-xl package-item yearly" style={{ display: `${isTab  == 2 ? "block" : "none"}` }}>$3,948</h2>
										</div>
									</div>
									<div className="bottom-pricing">
										<ul className="list-ticked mb-40">
											<li>5000 User Activities</li>
											<li>Unlimited Access</li>
											<li>No Hidden Charge</li>
											<li>03 Time Updates</li>
											<li>Figma Source File</li>
											<li>Many More Facilities</li>
										</ul>
										<div className="card-button text-center">
											<Link href="#" className="btn btn-border-950">GET STARTED</Link>
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
