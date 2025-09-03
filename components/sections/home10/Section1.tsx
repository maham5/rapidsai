
import Link from "next/link"

export default function Section1() {
	return (
		<>

			<section className="position-relative overflow-hidden box-banner-10">
				<div className="container" data-aos="fade-up">
					<div className="banner">
						<p className="paragraph-base-fitree-bold text-underline primary-500 mb-1">WELCOME Vatech CONSULTENCY</p>
						<h1 className="display-3xl secondery-500 mb-3">
							Unlocking your<br className="d-none d-lg-block" />
							Business Success
						</h1>
						<p className="paragraph-base neutral-2100 desc-banner">Muchas variaciones de los pasajes de Lorem Ipsum disponibles, pero la mayoría sufrió alteraciones en alguna manera, ya sea porque se le agregó humor</p>
						<Link href="#" className="btn btn-primary mb-3">
							Discover More
							<svg width={17} height={12} viewBox="0 0 17 12" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M11.3333 12C11.3333 11.364 11.8525 10.4143 12.3781 9.61714C13.0539 8.58857 13.8614 7.69114 14.7872 7.00629C15.4813 6.49286 16.3228 6 17 6M17 6C16.3228 6 15.4806 5.50714 14.7872 4.99371C13.8614 4.308 13.0539 3.41057 12.3781 2.38371C11.8525 1.58571 11.3333 0.634286 11.3333 -2.47698e-07M17 6L2.62268e-07 6L17 6Z" fill="currentColor" />
								<path d="M11.3333 12C11.3333 11.364 11.8525 10.4143 12.3781 9.61714C13.0539 8.58857 13.8614 7.69114 14.7872 7.00629C15.4813 6.49286 16.3228 6 17 6M17 6C16.3228 6 15.4806 5.50714 14.7872 4.99371C13.8614 4.308 13.0539 3.41057 12.3781 2.38371C11.8525 1.58571 11.3333 0.634285 11.3333 -3.66907e-07M17 6L7.39105e-07 6" stroke="currentColor" strokeWidth="1.5" />
							</svg>
						</Link>
						<span className="mr-20 d-none d-sm-inline-block mb-3" />
						<Link href="#" className="btn btn-border-6 mb-3">
							Contact Us
							<svg width={17} height={12} viewBox="0 0 17 12" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M11.3333 12C11.3333 11.364 11.8525 10.4143 12.3781 9.61714C13.0539 8.58857 13.8614 7.69114 14.7872 7.00629C15.4813 6.49286 16.3228 6 17 6M17 6C16.3228 6 15.4806 5.50714 14.7872 4.99371C13.8614 4.308 13.0539 3.41057 12.3781 2.38371C11.8525 1.58571 11.3333 0.634286 11.3333 -2.47698e-07M17 6L2.62268e-07 6L17 6Z" fill="currentColor" />
								<path d="M11.3333 12C11.3333 11.364 11.8525 10.4143 12.3781 9.61714C13.0539 8.58857 13.8614 7.69114 14.7872 7.00629C15.4813 6.49286 16.3228 6 17 6M17 6C16.3228 6 15.4806 5.50714 14.7872 4.99371C13.8614 4.308 13.0539 3.41057 12.3781 2.38371C11.8525 1.58571 11.3333 0.634285 11.3333 -3.66907e-07M17 6L7.39105e-07 6" stroke="currentColor" strokeWidth="1.5" />
							</svg>
						</Link>
					</div>
				</div>
				<div className="banner-right img-custom-anim-right" />
			</section>
		</>
	)
}
