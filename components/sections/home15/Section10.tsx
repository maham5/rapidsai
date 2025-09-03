
import Link from "next/link"

export default function Section10() {
	return (
		<>

			<section className="box-section overflow-hidden box-latest-blog-15">
				<div className="box-latest-blog-15-inner">
					<div className="container" data-aos="fade-up">
						<div className="text-center">
							<h6 className="paragraph-base-fitree-medium text-uppercase primary-500 mb-2">News &amp; blog</h6>
							<h3 className="heading-3xl secondery-500">Read Our Latest News &amp; Blog</h3>
						</div>
						<div className="row position-relative mt-5">
							<div className="col-lg-4">
								<div className="card-blog card-blog-14">
									<div className="card-image">
										<Link href="#"><img src="/assets/imgs/pages/home15/news.png" alt="Vatech" /></Link>
										<Link href="#" className="post-cat">Tax Advisiory</Link>
									</div>
									<div className="card-info">
										<div className="card-meta">
											<span className="comment">Comments</span>
											<Link href="#" className="by-user">By Admin</Link>
										</div>
										<div className="card-title">
											<Link href="#" className="link-title">Stay Informed with Our Consulting Agency's News Feed</Link>
											<div className="box-link-bottom">
												<Link href="#" className="link-readmore">
													Read More
													<svg width={15} height={10} viewBox="0 0 15 10" fill="none" xmlns="http://www.w3.org/2000/svg">
														<path d="M10 10C10 9.47 10.4581 8.67857 10.9219 8.01429C11.5181 7.15714 12.2306 6.40929 13.0475 5.83857C13.66 5.41071 14.4025 5 15 5M15 5C14.4025 5 13.6594 4.58929 13.0475 4.16143C12.2306 3.59 11.5181 2.84214 10.9219 1.98643C10.4581 1.32143 10 0.528571 10 -2.38419e-07M15 5L0 5" stroke="currentColor" strokeWidth="1.5" />
													</svg>
												</Link>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-4">
								<div className="card-blog card-blog-14">
									<div className="card-image">
										<Link href="#"><img src="/assets/imgs/pages/home15/news2.png" alt="Vatech" /></Link>
										<Link href="#" className="post-cat">Consulting</Link>
									</div>
									<div className="card-info">
										<div className="card-meta">
											<span className="comment">Comments</span>
											<Link href="#" className="by-user">By Admin</Link>
										</div>
										<div className="card-title">
											<Link href="#" className="link-title">Explore Our Blog for Expert Tips and Industry News</Link>
											<div className="box-link-bottom">
												<Link href="#" className="link-readmore">
													Read More
													<svg width={15} height={10} viewBox="0 0 15 10" fill="none" xmlns="http://www.w3.org/2000/svg">
														<path d="M10 10C10 9.47 10.4581 8.67857 10.9219 8.01429C11.5181 7.15714 12.2306 6.40929 13.0475 5.83857C13.66 5.41071 14.4025 5 15 5M15 5C14.4025 5 13.6594 4.58929 13.0475 4.16143C12.2306 3.59 11.5181 2.84214 10.9219 1.98643C10.4581 1.32143 10 0.528571 10 -2.38419e-07M15 5L0 5" stroke="currentColor" strokeWidth="1.5" />
													</svg>
												</Link>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-4">
								<div className="card-blog card-blog-14">
									<div className="card-image">
										<Link href="#"><img src="/assets/imgs/pages/home15/news3.png" alt="Vatech" /></Link>
										<Link href="#" className="post-cat">Financial</Link>
									</div>
									<div className="card-info">
										<div className="card-meta">
											<span className="comment">Comments</span>
											<Link href="#" className="by-user">By Admin</Link>
										</div>
										<div className="card-title">
											<Link href="#" className="link-title">Read Our Latest News and Thought Leadership Pieces</Link>
											<div className="box-link-bottom">
												<Link href="#" className="link-readmore">
													Read More
													<svg width={15} height={10} viewBox="0 0 15 10" fill="none" xmlns="http://www.w3.org/2000/svg">
														<path d="M10 10C10 9.47 10.4581 8.67857 10.9219 8.01429C11.5181 7.15714 12.2306 6.40929 13.0475 5.83857C13.66 5.41071 14.4025 5 15 5M15 5C14.4025 5 13.6594 4.58929 13.0475 4.16143C12.2306 3.59 11.5181 2.84214 10.9219 1.98643C10.4581 1.32143 10 0.528571 10 -2.38419e-07M15 5L0 5" stroke="currentColor" strokeWidth="1.5" />
													</svg>
												</Link>
											</div>
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
