
import Link from "next/link"

export default function Section2() {
	return (
		<>

			<section className="position-relative overflow-hidden box-features">
				<div className="container" data-aos="fade-up">
					<div className="row">
						<div className="col-lg-4">
							<div className="card-feature">
								<div className="card-title-icon">
									<div className="card-icon">
										<img src="/assets/imgs/pages/home3/process.png" alt="Vatech" />
									</div>
									<div className="card-title">
										<h6 className="sub-heading-ag-xl">
											How To Process <br />
											Business Plan?
										</h6>
									</div>
								</div>
								<div className="card-info">
									<p>Lorem Ipsum thei available, but the majority have There are many variations of passages</p>
									<Link href="#" className="btn btn-white-sm">Read More</Link>
								</div>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="card-feature">
								<div className="card-title-icon">
									<div className="card-icon">
										<img src="/assets/imgs/pages/home3/business.png" alt="Vatech" />
									</div>
									<div className="card-title">
										<h6 className="sub-heading-ag-xl">Business Consulting Program Plan</h6>
									</div>
								</div>
								<div className="card-info">
									<p>Lorem Ipsum thei available, but the majority have There are many variations of passages</p>
									<Link href="#" className="btn btn-white-sm">Read More</Link>
								</div>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="card-feature">
								<div className="card-title-icon">
									<div className="card-icon">
										<img src="/assets/imgs/pages/home3/identify.png" alt="Vatech" />
									</div>
									<div className="card-title">
										<h6 className="sub-heading-ag-xl">Identifying To <br />your Needs</h6>
									</div>
								</div>
								<div className="card-info">
									<p>Lorem Ipsum thei available, but the majority have There are many variations of passages</p>
									<Link href="#" className="btn btn-white-sm">Read More</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
