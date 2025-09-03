
import Link from "next/link"

export default function Section1() {
	return (
		<>

			<section className="position-relative overflow-hidden box-banner-5">
				<div className="container" data-aos="fade-up">
					<div className="row align-items-center">
						<div className="col-lg-6 mt-5">
							<div className="banner-2">
								<div className="banner-small-title-black color-white line-primary-home">Solutions</div>
								<h1 className="title-banner-black color-white mb-20">
									Where Strategy<br className="d-none d-lg-block" />
									Meets <span className="bg-red">Execution</span>
								</h1>
								<p className="paragraph-rubik-r color-white desc-banner mb-40">We have been operating for over a decade, providing top-notch services to our clients and building a strong track record in the industry.</p>
								<div className="d-flex align-items-center flex-wrap">
									<Link href="#" className="btn btn-linear-01 mb-3">
										Discover More
										<img src="/assets/imgs/pages/home5/plus.png" alt="Vatech" />
									</Link>
									<span className="mr-20" />
									<div className="d-inline-block mb-3">
										<div className="box-need-help">
											<p>Need help?</p>
											<h6 className="heading-md">(307) 555-0133</h6>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-6 mt-5" />
					</div>
				</div>
			</section>
		</>
	)
}
