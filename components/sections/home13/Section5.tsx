
import Link from "next/link"

export default function Section5() {
	return (
		<>

			<section className="box-section overflow-hidden ">
				<div className="container" data-aos="fade-up">
					<div className="row align-items-end">
						<div className="col-lg-7 mb-30">
							<div className="banner-small-title-black">Latest project</div>
							<h2 className="heading-ag-3xl dark-950">
								Empowering Connections<br className="d-none d-lg-block" />
								Empowering Growth
							</h2>
						</div>
						<div className="col-lg-5 mb-30">
							<p className="mb-20 paragraph-rubik-r">We provide technical support to assist you with any issues orai questions you may have regarding our services Yes, we offerm customizable solutions tailored</p>
						</div>
					</div>
					<div className="row">
						<div className="col-lg-5">
							<div className="card-project-3 card-project-6">
								<div className="card-image">
									<img src="/assets/imgs/pages/home13/project.png" alt="Vatech" />
								</div>
								<div className="card-info">
									<Link href="#">
										<h4 className="heading-ag-lg">Your Journey Our Expertise</h4>
									</Link>
								</div>
							</div>
						</div>
						<div className="col-lg-7">
							<div className="box-image-projects">
								<div className="image-project-1 mb-4">
									<img src="/assets/imgs/pages/home13/project2.png" className="w-100" alt="Vatech" />
								</div>
								<div className="image-project-2 mb-4">
									<img src="/assets/imgs/pages/home13/project3.png" className="w-100" alt="Vatech" />
								</div>
								<div className="image-project-3 mb-4">
									<img src="/assets/imgs/pages/home13/project4.png" className="w-100" alt="Vatech" />
								</div>
								<div className="image-project-4 mb-4">
									<img src="/assets/imgs/pages/home13/project5.png" className="w-100" alt="Vatech" />
								</div>
							</div>
						</div>
					</div>
					<div className="box-logos-partner box-logos-partner-5-col">
						<div className="item-partner">
							<img src="/assets/imgs/pages/home13/doo.svg" alt="Vatech" />
						</div>
						<div className="item-partner text-center">
							<img src="/assets/imgs/pages/home13/inst.svg" alt="Vatech" />
						</div>
						<div className="item-partner text-center">
							<img src="/assets/imgs/pages/home7/invision.svg" alt="Vatech" />
						</div>
						<div className="item-partner text-center">
							<img src="/assets/imgs/pages/home7/hellosign.svg" alt="Vatech" />
						</div>
						<div className="item-partner text-end">
							<img src="/assets/imgs/pages/home7/dribbble.svg" alt="Vatech" />
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
