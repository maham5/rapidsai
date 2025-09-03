
import Link from "next/link"

export default function Section10() {
	return (
		<>

			<section className="position-relative overflow-hidden box-blog-4">
				<div className="box-blog-4-inner">
					<div className="container" data-aos="fade-up">
						<div className="text-center" data-aos="fade-up">
							<div className="sub-heading-fitree-sm color-white text-uppercase mb-20">
								<svg width={13} height={13} viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
									<circle cx="6.5" cy="6.5" r="5.75" fill="white" stroke="#0055FF" strokeWidth="1.5" />
								</svg>OUR NEWS
							</div>
							<h2 className="heading-48-fitree color-white mb-30">
								Our Latest Trending<br className="d-none d-lg-block" />
								Blogs &amp; News
							</h2>
						</div>
						<div className="row position-relative mt-60" data-aos="fade-up">
							<div className="col-lg-4">
								<div className="card-blog card-blog-5">
									<div className="card-image">
										<Link href="#"><img src="/assets/imgs/pages/home4/blog2.png" alt="Vatech" /></Link>
									</div>
									<div className="card-info">
										<div className="card-date">
											<span className="post-date">Nov 27, 2024</span>
											<Link href="#" className="by-category">Brending</Link>
										</div>
										<div className="card-title">
											<Link href="#" className="link-title">A Chronicle Our Consulting Agency's Insights</Link>
											<Link href="#" className="link-readmore">Read More</Link>
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-4">
								<div className="card-blog card-blog-5">
									<div className="card-image">
										<Link href="#"><img src="/assets/imgs/pages/home4/blog3.png" alt="Vatech" /></Link>
									</div>
									<div className="card-info">
										<div className="card-date">
											<span className="post-date">Nov 27, 2024</span>
											<Link href="#" className="by-category">Brending</Link>
										</div>
										<div className="card-title">
											<Link href="#" className="link-title">Explore Our Blog for Expert Tips and Industry News</Link>
											<Link href="#" className="link-readmore">Read More</Link>
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-4">
								<div className="card-blog card-blog-5">
									<div className="card-image">
										<Link href="#"><img src="/assets/imgs/pages/home4/blog.png" alt="Vatech" /></Link>
									</div>
									<div className="card-info">
										<div className="card-date">
											<span className="post-date">Nov 27, 2024</span>
											<Link href="#" className="by-category">Brending</Link>
										</div>
										<div className="card-title">
											<Link href="#" className="link-title">Insights from Our Experts Consulting</Link>
											<Link href="#" className="link-readmore">Read More</Link>
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
