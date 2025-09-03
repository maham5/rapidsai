
import Link from "next/link"

export default function Section8() {
	return (
		<>

			<section className="position-relative overflow-hidden box-section box-project-7">
				<div className="box-project-inner">
					<div className="container" data-aos="fade-up">
						<div className="text-center" data-aos="fade-up">
							<p className="title-line-both primary-1000 line-primary-1000">All project</p>
							<h3 className="heading-3xl">
								Inspiring Confidence corporate<br className="d-none d-lg-block" />
								Delivering Solutions
							</h3>
						</div>
						<div className="box-list-blogs" data-aos="fade-up">
							<div className="row">
								<div className="col-lg-4 col-md-6">
									<div className="card-blog-7">
										<div className="card-image">
											<Link href="/news-details"><img src="/assets/imgs/pages/home7/news.png" alt="Vatech" /></Link>
										</div>
										<div className="card-info">
											<div className="text-end mb-2">
												<span className="post-date sub-heading-ag-sm d-inline-block">Oct 19</span>
											</div>
											<Link href="/news-details" className="heading-md">Building a Robust IT Ecosystem for Your Enterprise</Link>
											<Link href="/news-details" className="link-more button-ag-bold">
												Discover More
												<svg width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M11.8125 5.75C11.8125 6.24219 11.4023 6.65234 10.9375 6.65234H7V10.5898C7 11.0547 6.58984 11.4375 6.125 11.4375C5.63281 11.4375 5.25 11.0547 5.25 10.5898V6.65234H1.3125C0.820312 6.65234 0.4375 6.24219 0.4375 5.75C0.4375 5.28516 0.820312 4.90234 1.3125 4.90234H5.25V0.964844C5.25 0.472656 5.63281 0.0625 6.125 0.0625C6.58984 0.0625 7 0.472656 7 0.964844V4.90234H10.9375C11.4023 4.875 11.8125 5.28516 11.8125 5.75Z" fill="currentColor" />
												</svg>
											</Link>
										</div>
									</div>
								</div>
								<div className="col-lg-4 col-md-6">
									<div className="card-blog-7">
										<div className="card-image">
											<Link href="/news-details"><img src="/assets/imgs/pages/home7/news2.png" alt="Vatech" /></Link>
										</div>
										<div className="card-info">
											<div className="text-end mb-2">
												<span className="post-date sub-heading-ag-sm d-inline-block">Oct 19</span>
											</div>
											<Link href="/news-details" className="heading-md">Harnessing the Power of AI in IT Solutions</Link>
											<Link href="/news-details" className="link-more button-ag-bold">
												Discover More
												<svg width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M11.8125 5.75C11.8125 6.24219 11.4023 6.65234 10.9375 6.65234H7V10.5898C7 11.0547 6.58984 11.4375 6.125 11.4375C5.63281 11.4375 5.25 11.0547 5.25 10.5898V6.65234H1.3125C0.820312 6.65234 0.4375 6.24219 0.4375 5.75C0.4375 5.28516 0.820312 4.90234 1.3125 4.90234H5.25V0.964844C5.25 0.472656 5.63281 0.0625 6.125 0.0625C6.58984 0.0625 7 0.472656 7 0.964844V4.90234H10.9375C11.4023 4.875 11.8125 5.28516 11.8125 5.75Z" fill="currentColor" />
												</svg>
											</Link>
										</div>
									</div>
								</div>
								<div className="col-lg-4 col-md-6">
									<div className="card-blog-7">
										<div className="card-image">
											<Link href="/news-details"><img src="/assets/imgs/pages/home7/news3.png" alt="Vatech" /></Link>
										</div>
										<div className="card-info">
											<div className="text-end mb-2">
												<span className="post-date sub-heading-ag-sm d-inline-block">Oct 19</span>
											</div>
											<Link href="/news-details" className="heading-md">Transforming Small Businesses with IT Automation</Link>
											<Link href="/news-details" className="link-more button-ag-bold">
												Discover More
												<svg width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M11.8125 5.75C11.8125 6.24219 11.4023 6.65234 10.9375 6.65234H7V10.5898C7 11.0547 6.58984 11.4375 6.125 11.4375C5.63281 11.4375 5.25 11.0547 5.25 10.5898V6.65234H1.3125C0.820312 6.65234 0.4375 6.24219 0.4375 5.75C0.4375 5.28516 0.820312 4.90234 1.3125 4.90234H5.25V0.964844C5.25 0.472656 5.63281 0.0625 6.125 0.0625C6.58984 0.0625 7 0.472656 7 0.964844V4.90234H10.9375C11.4023 4.875 11.8125 5.28516 11.8125 5.75Z" fill="currentColor" />
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
