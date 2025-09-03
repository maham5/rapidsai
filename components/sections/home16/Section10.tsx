
import Link from "next/link"

export default function Section10() {
	return (
		<>

			<section className="position-relative overflow-hidden box-blogs-16">
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
							<Link href="#" className="btn btn-secondery-500">Explore More</Link>
						</div>
					</div>
					<div className="row mt-5">
						<div className="col-md-6">
							<div className="card-blog card-blog-2 card-blog-10">
								<div className="card-image">
									<Link href="#"><img className="wow img-custom-anim-top" src="/assets/imgs/pages/home16/news2.png" alt="Vatech" /></Link>
									<span className="card-date">25 January</span>
								</div>
								<div className="card-info">
									<div className="card-meta">
										<span className="comment">Comments</span>
										<span className="by-user">By Admin</span>
									</div>
									<div className="card-title">
										<Link href="#" className="link-title heading-ag-lg">Your Source for Consulting Insights and Updates</Link>
										<Link href="#" className="btn btn-border-950">Read More</Link>
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-6">
							<div className="card-blog card-blog-2 card-blog-10">
								<div className="card-image">
									<Link href="#"><img className="wow img-custom-anim-top" src="/assets/imgs/pages/home16/news.png" alt="Vatech" /></Link>
									<span className="card-date">25 January</span>
								</div>
								<div className="card-info">
									<div className="card-meta">
										<span className="comment">Comments</span>
										<span className="by-user">By Admin</span>
									</div>
									<div className="card-title">
										<Link href="#" className="link-title heading-ag-lg">Breaking Down Complex Issues in Our Consulting Agency Blog</Link>
										<Link href="#" className="btn btn-border-950">Read More</Link>
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
