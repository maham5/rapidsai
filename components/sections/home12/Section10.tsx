
import Link from "next/link"

export default function Section10() {
	return (
		<>

			<section className="position-relative overflow-hidden box-latest-blog-3 box-latest-blog-12">
				<div className="container" data-aos="fade-up">
					<div className="text-center">
						<p className="sub-heading-ag-sm dark-950 text-uppercase text-line-up-down black letter-space-4 mb-3">Some Faq</p>
						<h3 className="heading-3xl secondery-500">
							Explore Our Latest Trending<br className="d-none d-lg-block" />
							Blogs &amp; News
						</h3>
					</div>
					<div className="box-news-lists mt-5">
						<div className="row">
							<div className="col-lg-4 col-md-6">
								<div className="card-blog card-blog-12">
									<div className="card-image">
										<Link href="#"><img src="/assets/imgs/pages/home12/news.png" alt="Vatech" /></Link>
										<span className="card-date">
											<span className="heading-ag-3xl">22</span>
											<span className="paragraph-rubik-r">FEB,2024</span>
										</span>
									</div>
									<div className="card-info">
										<div className="card-title">
											<Link href="#" className="link-title heading-ag-lg">Our Commitment ,user friendly interfaces, and a focus</Link>
											<Link href="#" className="link-readmore">Read More
												<svg width={15} height={12} viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M10 12C10 11.364 10.4581 10.4143 10.9219 9.61714C11.5181 8.58857 12.2306 7.69114 13.0475 7.00629C13.66 6.49286 14.4025 6 15 6M15 6C14.4025 6 13.6594 5.50714 13.0475 4.99371C12.2306 4.308 11.5181 3.41057 10.9219 2.38371C10.4581 1.58571 10 0.634286 10 7.35117e-07M15 6L-7.51011e-07 6" stroke="currentColor" strokeWidth="1.5" />
												</svg>
											</Link>
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-4 col-md-6">
								<div className="card-blog card-blog-12">
									<div className="card-image">
										<Link href="#"><img src="/assets/imgs/pages/home12/news2.png" alt="Vatech" /></Link>
										<span className="card-date">
											<span className="heading-ag-3xl">22</span>
											<span className="paragraph-rubik-r">FEB,2024</span>
										</span>
									</div>
									<div className="card-info">
										<div className="card-title">
											<Link href="#" className="link-title heading-ag-lg">Navigating Insights from Our Consulting Experts</Link>
											<Link href="#" className="link-readmore">Read More
												<svg width={15} height={12} viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M10 12C10 11.364 10.4581 10.4143 10.9219 9.61714C11.5181 8.58857 12.2306 7.69114 13.0475 7.00629C13.66 6.49286 14.4025 6 15 6M15 6C14.4025 6 13.6594 5.50714 13.0475 4.99371C12.2306 4.308 11.5181 3.41057 10.9219 2.38371C10.4581 1.58571 10 0.634286 10 7.35117e-07M15 6L-7.51011e-07 6" stroke="currentColor" strokeWidth="1.5" />
												</svg>
											</Link>
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-4 col-md-6">
								<div className="card-blog card-blog-12">
									<div className="card-image">
										<Link href="#"><img src="/assets/imgs/pages/home12/news3.png" alt="Vatech" /></Link>
										<span className="card-date">
											<span className="heading-ag-3xl">22</span>
											<span className="paragraph-rubik-r">FEB,2024</span>
										</span>
									</div>
									<div className="card-info">
										<div className="card-title">
											<Link href="#" className="link-title heading-ag-lg">Exclusive Updates and Analysis in Our Consulting Agency</Link>
											<Link href="#" className="link-readmore">Read More
												<svg width={15} height={12} viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M10 12C10 11.364 10.4581 10.4143 10.9219 9.61714C11.5181 8.58857 12.2306 7.69114 13.0475 7.00629C13.66 6.49286 14.4025 6 15 6M15 6C14.4025 6 13.6594 5.50714 13.0475 4.99371C12.2306 4.308 11.5181 3.41057 10.9219 2.38371C10.4581 1.58571 10 0.634286 10 7.35117e-07M15 6L-7.51011e-07 6" stroke="currentColor" strokeWidth="1.5" />
												</svg>
											</Link>
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
