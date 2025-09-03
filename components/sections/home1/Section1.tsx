

import CircleText from '@/components/elements/CircleText'
import Link from "next/link"

export default function Section1() {
	
	return (
		<>

			<section className="position-relative overflow-hidden box-banner">

				
				<div className="container" data-aos="fade-up">
					<div className="banner img-custom-anim-left">
						
						<h1 className="title-banner" data-aos="fade-up">
							Making AI Rapidly <br className="d-none d-lg-block" />
							Accessible for Everyone
						</h1>
						<p className="paragraph-base primary-50 desc-banner" data-aos="fade-up">Welcome to RapidsAI! We're a passionate team, transforming ideas into reality with our expertise in AI-based software development</p>
						<Link href="#" className="btn btn-primary mb-3" data-aos="fade-up">
							Get Started
							<svg width={17} height={12} viewBox="0 0 17 12" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M11.3333 12C11.3333 11.364 11.8525 10.4143 12.3781 9.61714C13.0539 8.58857 13.8614 7.69114 14.7872 7.00629C15.4813 6.49286 16.3228 6 17 6M17 6C16.3228 6 15.4806 5.50714 14.7872 4.99371C13.8614 4.308 13.0539 3.41057 12.3781 2.38371C11.8525 1.58571 11.3333 0.634286 11.3333 -2.47698e-07M17 6L2.62268e-07 6L17 6Z" fill="currentColor" />
								<path d="M11.3333 12C11.3333 11.364 11.8525 10.4143 12.3781 9.61714C13.0539 8.58857 13.8614 7.69114 14.7872 7.00629C15.4813 6.49286 16.3228 6 17 6M17 6C16.3228 6 15.4806 5.50714 14.7872 4.99371C13.8614 4.308 13.0539 3.41057 12.3781 2.38371C11.8525 1.58571 11.3333 0.634285 11.3333 -3.66907e-07M17 6L7.39105e-07 6" stroke="currentColor" strokeWidth="1.5" />
							</svg>
						</Link>
						<span className="mr-20 d-none d-sm-inline-block mb-3" />
						
					</div>
				</div>
			</section>
		</>
	)
}