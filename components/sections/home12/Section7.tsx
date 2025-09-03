'use client'
import Link from "next/link"
import { useState } from "react"

export default function Section7() {

	const [isTab, setIsTab] = useState(1)
    const handleTab = (i: number) => {
        setIsTab(i)
    }
	return (
		<>

			<section className="position-relative overflow-hidden box-pricing-12">
				<div className="container" data-aos="fade-up">
					<div className="row align-items-end">
						<div className="col-lg-7 mb-30">
							<p className="sub-heading-ag-sm dark-950 text-uppercase text-line-up-down black letter-space-4 mb-3">Pricing Plan</p>
							<h2 className="heading-ag-3xl dark-950">
								Pricing Plan For your<br className="d-none d-lg-block" />
								Next Step
							</h2>
						</div>
						<div className="col-lg-5 text-center text-lg-end mb-30">
							<div className="box-button-change-package">
								<a onClick={() =>handleTab(1)} className={`btn btn-default ${isTab === 1 ? 'btn-active' : ''}`}> Monthly </a>
								<a onClick={() =>handleTab(2)} className={`btn btn-default ${isTab === 2 ? 'btn-active' : ''}`}> Yearly </a>
							</div>
						</div>
					</div>
					<div className="box-list-pricing">
						<div className="row">
							<div className="col-lg-4 col-md-6">
								<div className="card-pricing-4">
									<div className="top-pricing">
										<div className="pricing-name mb-2">
											<h6 className="sub-heading-ag-xl-m dark-950">Personal</h6>
										</div>
										<div className="pricing-price">
											<h2 className="heading-ag-xl package-item monthly primary-home" style={{ display: `${isTab  == 1 ? "block" : "none"}` }}>20.29</h2>
											<h2 className="heading-ag-xl package-item yearly primary-home"style={{ display: `${isTab  == 2 ? "block" : "none"}` }}>243.48</h2>
											<p className="paragraph-ag-base package-item dark-950 monthly" style={{ display: `${isTab  == 1 ? "block" : "none"}` }}>/Month</p>
											<p className="paragraph-ag-base package-item dark-950 yearly"style={{ display: `${isTab  == 2 ? "block" : "none"}` }}>/Year</p>
										</div>
									</div>
									<div className="bottom-pricing">
										<ul className="list-ticked mb-40">
											<li>10 Users</li>
											<li className="not-ticked">Saas Metrics</li>
											<li>Team Collaboration</li>
											<li className="not-ticked">All Consultancy Program</li>
											<li>Export File</li>
										</ul>
										<div className="card-button text-center">
											<Link href="#" className="btn btn-border-950">GET STARTED</Link>
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-4 col-md-6">
								<div className="card-pricing-4">
									<div className="top-pricing">
										<div className="pricing-name mb-2">
											<h6 className="sub-heading-ag-xl-m dark-950">Business</h6>
										</div>
										<div className="pricing-price">
											<h2 className="heading-ag-xl package-item monthly primary-home" style={{ display: `${isTab  == 1 ? "block" : "none"}` }}>120.29</h2>
											<h2 className="heading-ag-xl package-item yearly primary-home"style={{ display: `${isTab  == 2 ? "block" : "none"}` }}>1,443.48</h2>
											<p className="paragraph-ag-base package-item dark-950 monthly" style={{ display: `${isTab  == 1 ? "block" : "none"}` }}>/Month</p>
											<p className="paragraph-ag-base package-item dark-950 yearly"style={{ display: `${isTab  == 2 ? "block" : "none"}` }}>/Year</p>
										</div>
									</div>
									<div className="bottom-pricing">
										<ul className="list-ticked mb-40">
											<li>10 Users</li>
											<li className="not-ticked">Saas Metrics</li>
											<li>Team Collaboration</li>
											<li className="not-ticked">All Consultancy Program</li>
											<li>Export File</li>
										</ul>
										<div className="card-button text-center">
											<Link href="#" className="btn btn-border-950">GET STARTED</Link>
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-4 col-md-6">
								<div className="card-pricing-4">
									<div className="top-pricing">
										<div className="pricing-name mb-2">
											<h6 className="sub-heading-ag-xl-m dark-950">Enterprise</h6>
										</div>
										<div className="pricing-price">
											<h2 className="heading-ag-xl package-item monthly primary-home" style={{ display: `${isTab  == 1 ? "block" : "none"}` }}>220.29</h2>
											<h2 className="heading-ag-xl package-item yearly primary-home"style={{ display: `${isTab  == 2 ? "block" : "none"}` }}>2,643.48</h2>
											<p className="paragraph-ag-base package-item dark-950 monthly" style={{ display: `${isTab  == 1 ? "block" : "none"}` }}>/Month</p>
											<p className="paragraph-ag-base package-item dark-950 yearly"style={{ display: `${isTab  == 2 ? "block" : "none"}` }}>/Year</p>
										</div>
									</div>
									<div className="bottom-pricing">
										<ul className="list-ticked mb-40">
											<li>10 Users</li>
											<li className="not-ticked">Saas Metrics</li>
											<li>Team Collaboration</li>
											<li className="not-ticked">All Consultancy Program</li>
											<li>Export File</li>
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
