
import Link from "next/link"

export default function Section5() {
	return (
		<>

			<section className="position-relative overflow-hidden box-section box-project-7">
				<div className="box-project-inner">
					<div className="container" data-aos="fade-up">
						<div className="text-center">
							<p className="title-line-both sub-heading-ag-sm primary-1000 line-primary-1000">All project</p>
							<h3 className="heading-3xl">
								Inspiring Confidence corporate<br className="d-none d-lg-block" />
								Delivering Solutions
							</h3>
						</div>
					</div>
					<div className="container-projects" data-aos="fade-up">
						<div className="box-list-projects-2">
							<div className="item-project">
								<Link href="#"><img src="/assets/imgs/pages/home7/project.png" alt="Vatech" /></Link>
							</div>
							<div className="item-project">
								<Link href="#"><img src="/assets/imgs/pages/home7/project2.png" alt="Vatech" /></Link>
							</div>
							<div className="item-project">
								<Link href="#"><img src="/assets/imgs/pages/home7/project3.png" alt="Vatech" /></Link>
							</div>
							<div className="item-project">
								<Link href="#"><img src="/assets/imgs/pages/home7/project4.png" alt="Vatech" /></Link>
							</div>
						</div>
					</div>
					<div className="container" data-aos="fade-up">
						<div className="text-center mt-5">
							<p className="paragraph-rubik-r d-inline-block neutral-1800 me-3">Ensuring your digital protection a secure environment</p>
							<Link href="#" className="button-ag-bold primary-1000 text-uppercase">Get started
								<svg className="ms-1" width={10} height={10} viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M9.42187 1.15234C9.42187 0.876202 9.19802 0.652344 8.92188 0.652344L4.42187 0.652344C4.14573 0.652344 3.92187 0.876202 3.92187 1.15234C3.92187 1.42849 4.14573 1.65234 4.42187 1.65234L8.42187 1.65234L8.42187 5.65234C8.42187 5.92849 8.64573 6.15234 8.92187 6.15234C9.19802 6.15234 9.42187 5.92849 9.42187 5.65234L9.42187 1.15234ZM1.27543 9.5059L9.27543 1.5059L8.56832 0.798791L0.568322 8.79879L1.27543 9.5059Z" fill="#1CBBB4" />
								</svg>
							</Link>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
