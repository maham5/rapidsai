
import Link from "next/link"

export default function Section10() {
	return (
		<>

			<section className="position-relative overflow-hidden box-latest-blog">
				<div className="container" data-aos="fade-up">
					<div className="row position-relative align-items-end">
						<div className="col-lg-9 mb-4">
							<h6 className="title-line" data-aos="fade-up">Latest Blog</h6>
							<h3 className="heading-3xl color-white" data-aos="fade-up">
								Our Latest Trending<br className="d-none d-lg-block" />
								Blogs &amp; News
							</h3>
						</div>
						<div className="col-lg-3 mb-4 text-center text-lg-end" data-aos="fade-up">
							<Link href="#" className="btn btn-primary-square text-uppercase">Explore More</Link>
						</div>
					</div>
					<div className="row position-relative mt-5">
						<div className="col-lg-4" data-aos="fade-up" data-aos-duration={500}>
							<div className="card-blog">
								<div className="card-image">
									<Link href="#"><img src="/assets/imgs/pages/home1/blog.png" alt="Vatech" /></Link>
									<span className="card-date">24 January</span>
								</div>
								<div className="card-info">
									<div className="card-meta">
										<span className="comment">Comments</span>
										<span className="by-user">By Admin</span>
									</div>
									<div className="card-title">
										<Link href="#" className="link-title">Navigating the Future: Insights from Our Consulting Experts</Link>
										<Link href="#" className="link-readmore">Read More
											<svg width={15} height={10} viewBox="0 0 15 10" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M10 10C10 9.47 10.4581 8.67857 10.9219 8.01429C11.5181 7.15714 12.2306 6.40929 13.0475 5.83857C13.66 5.41071 14.4025 5 15 5M15 5C14.4025 5 13.6594 4.58929 13.0475 4.16143C12.2306 3.59 11.5181 2.84214 10.9219 1.98643C10.4581 1.32143 10 0.528572 10 3.7749e-07M15 5L2.18557e-07 5" stroke="currentColor" strokeWidth="1.5" />
											</svg>
										</Link>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-4" data-aos="fade-up" data-aos-duration={1000}>
							<div className="card-blog">
								<div className="card-image">
									<Link href="#"><img src="/assets/imgs/pages/home1/blog2.png" alt="Vatech" /></Link>
									<span className="card-date">24 January</span>
								</div>
								<div className="card-info">
									<div className="card-meta">
										<span className="comment">Comments</span>
										<span className="by-user">By Admin</span>
									</div>
									<div className="card-title">
										<Link href="#" className="link-title">Dive into Innovation: Latest Trends and Consulting Agency</Link>
										<Link href="#" className="link-readmore">Read More
											<svg width={15} height={10} viewBox="0 0 15 10" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M10 10C10 9.47 10.4581 8.67857 10.9219 8.01429C11.5181 7.15714 12.2306 6.40929 13.0475 5.83857C13.66 5.41071 14.4025 5 15 5M15 5C14.4025 5 13.6594 4.58929 13.0475 4.16143C12.2306 3.59 11.5181 2.84214 10.9219 1.98643C10.4581 1.32143 10 0.528572 10 3.7749e-07M15 5L2.18557e-07 5" stroke="currentColor" strokeWidth="1.5" />
											</svg>
										</Link>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-4" data-aos="fade-up" data-aos-duration={1500}>
							<div className="card-blog">
								<div className="card-image">
									<Link href="#"><img src="/assets/imgs/pages/home1/blog3.png" alt="Vatech" /></Link>
									<span className="card-date">24 January</span>
								</div>
								<div className="card-info">
									<div className="card-meta">
										<span className="comment">Comments</span>
										<span className="by-user">By Admin</span>
									</div>
									<div className="card-title">
										<Link href="#" className="link-title">Transformative Success Stories and Industry Updates</Link>
										<Link href="#" className="link-readmore">Read More
											<svg width={15} height={10} viewBox="0 0 15 10" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M10 10C10 9.47 10.4581 8.67857 10.9219 8.01429C11.5181 7.15714 12.2306 6.40929 13.0475 5.83857C13.66 5.41071 14.4025 5 15 5M15 5C14.4025 5 13.6594 4.58929 13.0475 4.16143C12.2306 3.59 11.5181 2.84214 10.9219 1.98643C10.4581 1.32143 10 0.528572 10 3.7749e-07M15 5L2.18557e-07 5" stroke="currentColor" strokeWidth="1.5" />
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
