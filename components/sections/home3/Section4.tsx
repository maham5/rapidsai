
import IsotopeFilter1 from '@/components/elements/IsotopeFilter1'
import Link from "next/link"

export default function Section4() {
	return (
		<>

			<section className="position-relative overflow-hidden box-case-studies">
				<div className="container" data-aos="fade-up">
					<div className="text-center">
						<p className="sub-heading-ag-sm color-white text-uppercase">CASE STUDIES</p>
						<h2 className="heading-ag-3xl color-white">
							Explore Our Consulting Agency’s<br className="d-none d-lg-block" />
							Latest Case Studies
						</h2>
					</div>
					<IsotopeFilter1 />
				</div>
			</section>
		</>
	)
}
