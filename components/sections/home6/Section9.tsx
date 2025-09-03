
import Link from "next/link"

export default function Section9() {
	return (
		<>

			<section className="position-relative overflow-hidden box-blog-4">
				<div className="container" data-aos="fade-up">
					<div className="row position-relative align-items-end">
						<div className="col-lg-9 mb-4" data-aos="fade-up">
							<h6 className="heading-18-fitree primary-500 text-uppercase mb-2">Latest Blog</h6>
							<h3 className="heading-48-fitree secondery-500 text-uppercase">
								Our Latest Trending<br className="d-none d-lg-block" />
								Blogs &amp; News
							</h3>
						</div>
						<div className="col-lg-3 mb-4 text-center text-lg-end" data-aos="fade-up">
							<Link href="#" className="btn btn-primary-square bg-secondery-500">Explore More</Link>
						</div>
					</div>
					<div className="row position-relative mt-60" data-aos="fade-up">
						<div className="col-lg-6">
							<div className="card-blog-6">
								<div className="card-image">
									<Link href="#"><img src="/assets/imgs/pages/home6/blog2.png" alt="Vatech" /></Link>
									<Link href="#" className="post-cat">Business Consulting</Link>
								</div>
								<div className="card-info">
									<div className="card-meta">
										<span className="post-comments primary-500">Comments</span>
										<Link href="#" className="by-user">By Admin</Link>
									</div>
									<div className="card-title">
										<Link href="#" className="link-title">Exclusive Updates and Analysis in Our Consulting Agency Blog</Link>
										<Link href="#" className="link-readmore">
											Read More
											<svg width={24} height={14} viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M16 14C16 13.258 16.733 12.15 17.475 11.22C18.429 10.02 19.569 8.973 20.876 8.174C21.856 7.575 23.044 7 24 7M24 7C23.044 7 21.855 6.425 20.876 5.826C19.569 5.026 18.429 3.979 17.475 2.781C16.733 1.85 16 0.74 16 -3.49691e-07M24 7L3.0598e-07 7" stroke="currentColor" strokeWidth={2} />
											</svg>
										</Link>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-6">
							<div className="card-blog-6">
								<div className="card-image">
									<Link href="#"><img src="/assets/imgs/pages/home6/blog.png" alt="Vatech" /></Link>
									<Link href="#" className="post-cat">Business Consulting</Link>
								</div>
								<div className="card-info">
									<div className="card-meta">
										<span className="post-comments primary-500">Comments</span>
										<Link href="#" className="by-user">By Admin</Link>
									</div>
									<div className="card-title">
										<Link href="#" className="link-title">Breaking Down Complex Issues in Our Consulting Agency Blog</Link>
										<Link href="#" className="link-readmore">
											Read More
											<svg width={24} height={14} viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M16 14C16 13.258 16.733 12.15 17.475 11.22C18.429 10.02 19.569 8.973 20.876 8.174C21.856 7.575 23.044 7 24 7M24 7C23.044 7 21.855 6.425 20.876 5.826C19.569 5.026 18.429 3.979 17.475 2.781C16.733 1.85 16 0.74 16 -3.49691e-07M24 7L3.0598e-07 7" stroke="currentColor" strokeWidth={2} />
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
