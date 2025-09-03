
import Link from "next/link"

export default function Section3() {
	return (
		<>

			<section className="position-relative overflow-hidden box-projects-home2">
				<div className="container" data-aos="fade-up">
					<div className="row align-items-end">
						<div className="col-lg-7 mb-30">
							<div className="banner-small-title-black">Projects</div>
							<h2 className="heading-ag-3xl dark-950">
								Market Entry Strategy Develop<br className="d-none d-lg-block" />
								for Global Expansion
							</h2>
						</div>
						<div className="col-lg-5 mb-30">
							<p className="mb-20 paragraph-rubik-r">Lorem Ipsum disponibles, pero la mayoría sufrió alteraciones en alguna manera, ya sea porque se le agregó humor</p>
							<Link href="#" className="btn btn-primary-square-border">
								Browse all project
								<img src="/assets/imgs/template/icons/plus-black.svg" alt="Vatech" />
							</Link>
						</div>
					</div>
				</div>
				<div className="container-fluid mt-5" data-aos="fade-up">
					<div className="box-list-projects">
						<div className="item-project">
							<div className="card-project-9">
								<div className="card-image">
									<img src="/assets/imgs/pages/home2/project.png" alt="Vatech" />
								</div>
								<div className="card-info">
									<Link href="#" className="heading-lg">Change Management Solutions</Link>
								</div>
							</div>
						</div>
						<div className="item-project mt-5">
							<div className="card-project-9">
								<div className="card-image">
									<img src="/assets/imgs/pages/home2/project2.png" alt="Vatech" />
								</div>
								<div className="card-info">
									<Link href="#" className="heading-lg">Change Management Solutions</Link>
								</div>
							</div>
						</div>
						<div className="item-project">
							<div className="card-project-9">
								<div className="card-image">
									<img src="/assets/imgs/pages/home2/project3.png" alt="Vatech" />
								</div>
								<div className="card-info">
									<Link href="#" className="heading-lg">Change Management Solutions</Link>
								</div>
							</div>
						</div>
						<div className="item-project mt-5">
							<div className="card-project-9">
								<div className="card-image">
									<img src="/assets/imgs/pages/home2/project4.png" alt="Vatech" />
								</div>
								<div className="card-info">
									<Link href="#" className="heading-lg">Change Management Solutions</Link>
								</div>
							</div>
						</div>
						<div className="item-project">
							<div className="card-project-9">
								<div className="card-image">
									<img src="/assets/imgs/pages/home2/project5.png" alt="Vatech" />
								</div>
								<div className="card-info">
									<Link href="#" className="heading-lg">Change Management Solutions</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
