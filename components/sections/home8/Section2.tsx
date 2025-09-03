
import CircleText from '@/components/elements/CircleText'
import Link from "next/link"

export default function Section2() {
	return (
		<>

			<section className="position-relative overflow-hidden box-about-us-8 @@class">
				<div className="container" data-aos="fade-up">
					<div className="row align-items-center">
						<div className="col-lg-6 mb-4">
							<div className="box-image-about-8">
								<img src="/assets/imgs/pages/home8/img-about.png" alt="Vatech" />
								<div className="image-circle">
									<div className="position-relative bg-dark-950 border-linear-01 icon_220 icon-shape rounded-circle">
										<svg width={62} height={61} viewBox="0 0 62 61" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M49.1017 38.1349C47.8531 36.7421 47.1256 33.6429 46.7116 30.8653C46.1722 27.286 46.1787 23.7353 46.8616 20.4179C47.3739 17.9306 48.2491 15.1992 49.7321 13.8697M49.7321 13.8697C48.2491 15.1992 45.4371 15.7733 42.9104 16.0103C39.5367 16.3262 36.0064 15.9462 32.5105 15.024C29.7928 14.3082 26.7878 13.244 25.5425 11.8549M49.7321 13.8697L12.5021 47.2452" stroke="#0055FF" strokeWidth="3.5" />
										</svg>
										<div className="position-absolute top-50 start-50 translate-middle w-100">
										<CircleText text="Best - Consulting - Agency -" />
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-6 mb-4">
							<div className="banner-small-title-black sub-heading-ag-sm color-white line-gradient-01">Solutions</div>
							<h1 className="heading-ag-3xl color-white mb-20">Tangible Outcomes: Discover Our Consulting Approach</h1>
							<p className="paragraph-rubik-r color-white desc-banner mb-20">Muchas variaciones de los pasajes de Lorem Ipsum disponibles, pero la mayoría sufrió alteraciones en alguna manera, ya sea porque se le agregó humor alteraciones en alguna manera, ya sea porque</p>
							<div className="box-progress box-progress-gradient">
								<div className="item-progress">
									<h6 className="sub-heading-ag-sm color-white mb-2">Mission Success</h6>
									<div className="progress">
										<div className="progress-bar" style={{ width: '80%' }} />
									</div>
								</div>
								<div className="item-progress">
									<h6 className="sub-heading-ag-sm color-white mb-2">Vision Complete</h6>
									<div className="progress">
										<div className="progress-bar" style={{ width: '90%' }} />
									</div>
								</div>
							</div>
							<div className="d-flex align-items-center">
								<Link href="#" className="btn btn-linear-02">
									About more
									<img src="/assets/imgs/pages/home8/arrow-right.png" alt="Vatech" />
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
