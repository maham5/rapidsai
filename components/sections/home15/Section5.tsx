
import Link from "next/link"

export default function Section5() {
	return (
		<>

			<section className="box-section overflow-hidden box-projects-15 box-pd-120">
				<div className="container" data-aos="fade-up">
					<div className="row position-relative align-items-end">
						<div className="col-lg-9 mb-4">
							<h6 className="paragraph-base-fitree-medium text-uppercase secondery-500 mb-3">PROJECTS</h6>
							<h3 className="heading-3xl secondery-500">
								Empowering Connections<br className="d-none d-lg-block" />
								Empowering Growth
							</h3>
						</div>
						<div className="col-lg-3 mb-4 text-center text-lg-end">
							<Link href="#" className="btn btn-primary">See All Project
								<svg width={14} height={14} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M13.5 7C13.5 7.5625 13.0312 8.03125 12.5 8.03125H8V12.5312C8 13.0625 7.53125 13.5 7 13.5C6.4375 13.5 6 13.0625 6 12.5312V8.03125H1.5C0.9375 8.03125 0.5 7.5625 0.5 7C0.5 6.46875 0.9375 6.03125 1.5 6.03125H6V1.53125C6 0.96875 6.4375 0.5 7 0.5C7.53125 0.5 8 0.96875 8 1.53125V6.03125H12.5C13.0312 6 13.5 6.46875 13.5 7Z" fill="currentColor" />
								</svg>
							</Link>
						</div>
					</div>
					<div className="row mt-5">
						<div className="col-lg-8">
							<div className="card-project-8">
								<div className="card-image" />
								<div className="card-info">
									<h4 className="color-white mb-2 heading-md">Digital Marketing</h4>
									<p className="mb-0 color-white paragraph-base">Marketing Agency</p>
								</div>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="card-project-8">
								<div className="card-image" style={{ backgroundImage: 'url(assets/imgs/pages/home15/project.png)' }} />
								<div className="card-info">
									<h4 className="color-white mb-2 heading-md">Seo Marketing</h4>
									<p className="mb-0 color-white paragraph-base">Digital Agency</p>
								</div>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="card-project-8">
								<div className="card-image" style={{ backgroundImage: 'url(assets/imgs/pages/home15/project2.png)' }} />
								<div className="card-info">
									<h4 className="color-white mb-2 heading-md">Software Development</h4>
									<p className="mb-0 color-white paragraph-base">Development Agency</p>
								</div>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="card-project-8">
								<div className="card-image" style={{ backgroundImage: 'url(assets/imgs/pages/home15/project4.png)' }} />
								<div className="card-info">
									<h4 className="color-white mb-2 heading-md">Corporate Marketing</h4>
									<p className="mb-0 color-white paragraph-base">Corporate Agency</p>
								</div>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="card-project-8">
								<div className="card-image" style={{ backgroundImage: 'url(assets/imgs/pages/home15/project5.png)' }} />
								<div className="card-info">
									<h4 className="color-white mb-2 heading-md">Digital Marketing</h4>
									<p className="mb-0 color-white paragraph-base">Marketing Agency</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
