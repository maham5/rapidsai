
import Link from "next/link"

export default function Section10() {
	return (
		<>

			<section className="box-section overflow-hidden box-latest-blog-10">
				<div className="container" data-aos="fade-up">
					<div className="row position-relative align-items-end">
						<div className="col-lg-9 mb-4">
							<h6 className="paragraph-base-fitree-bold text-underline text-uppercase secondery-500 mb-2">OUR NEWS</h6>
							<h3 className="heading-3xl secondery-500">
								Our Latest Trending<br className="d-none d-lg-block" />
								Blogs &amp; News
							</h3>
						</div>
						<div className="col-lg-3 mb-4 text-center text-lg-end">
							<Link href="#" className="btn btn-primary">Explore More
								<svg width={19} height={15} viewBox="0 0 19 15" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M12.6667 14.5C12.6667 13.758 13.247 12.65 13.8344 11.72C14.5896 10.52 15.4921 9.473 16.5268 8.674C17.3027 8.075 18.2432 7.5 19 7.5M19 7.5C18.2432 7.5 17.3019 6.925 16.5268 6.326C15.4921 5.526 14.5896 4.479 13.8344 3.281C13.247 2.35 12.6667 1.24 12.6667 0.500001M19 7.5L-1.70857e-07 7.5" stroke="currentColor" strokeWidth={2} />
								</svg>
							</Link>
						</div>
					</div>
					<div className="row position-relative mt-5">
						<div className="col-lg-4">
							<div className="card-blog card-blog-9">
								<div className="card-image">
									<Link href="#"><img className="wow img-custom-anim-top" src="/assets/imgs/pages/home10/news.png" alt="Vatech" /></Link>
									<span className="card-date">24 January</span>
								</div>
								<div className="card-info">
									<div className="card-meta">
										<span className="comment">Comments</span>
										<span className="by-user">By Admin</span>
									</div>
									<div className="card-title">
										<Link href="#" className="link-title">Your Source for Consulting Insights and Updates</Link>
										<Link href="#" className="link-readmore">Read More</Link>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="card-blog card-blog-9">
								<div className="card-image">
									<Link href="#"><img className="wow img-custom-anim-top" src="/assets/imgs/pages/home10/news2.png" alt="Vatech" /></Link>
									<span className="card-date">24 January</span>
								</div>
								<div className="card-info">
									<div className="card-meta">
										<span className="comment">Comments</span>
										<span className="by-user">By Admin</span>
									</div>
									<div className="card-title">
										<Link href="#" className="link-title">workforce Challenges &amp; Opportunities </Link>
										<Link href="#" className="link-readmore">Read More</Link>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="card-blog card-blog-9">
								<div className="card-image">
									<Link href="#"><img className="wow img-custom-anim-top" src="/assets/imgs/pages/home10/news3.png" alt="Vatech" /></Link>
									<span className="card-date">24 January</span>
								</div>
								<div className="card-info">
									<div className="card-meta">
										<span className="comment">Comments</span>
										<span className="by-user">By Admin</span>
									</div>
									<div className="card-title">
										<Link href="#" className="link-title">Transformative Success Stories and Industry </Link>
										<Link href="#" className="link-readmore">Read More</Link>
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
