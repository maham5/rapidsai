

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
						<div className="glow-border">
  <button className="glow-button">Get started</button>
</div>
						<span className="mr-20 d-none d-sm-inline-block mb-3" />
						
					</div>
				</div>
			</section>
		</>
	)
}