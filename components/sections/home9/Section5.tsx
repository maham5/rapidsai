
'use client'
import CountUp from 'react-countup'
export default function Section5() {
	return (
		<>

			<section className="position-relative overflow-hidden box-number-9">
				<div className="container">
					<div className="box-list-numbers">
						<div className="item-number" data-aos="fade-up" data-aos-duration={0}>
							<div className="number-left">
								<img src="/assets/imgs/pages/home9/success.png" alt="Vatech" />
							</div>
							<div className="number-right">
								<h4 className="heading-60-fitree secondery-500"><CountUp className="odometer" enableScrollSpy={true} end={95} /><span className="d-inline-block align-middle">%</span></h4>
								<p className="paragraph-18-fitree gray-1000">Success Rate</p>
							</div>
						</div>
						<div className="item-number" data-aos="fade-up" data-aos-duration={500}>
							<div className="number-left">
								<img src="/assets/imgs/pages/home9/project.png" alt="Vatech" />
							</div>
							<div className="number-right">
								<h4 className="heading-60-fitree secondery-500"><CountUp className="odometer" enableScrollSpy={true} end={23} /><span className="d-inline-block align-middle">K</span></h4>
								<p className="paragraph-18-fitree gray-1000">Complete Project</p>
							</div>
						</div>
						<div className="item-number" data-aos="fade-up" data-aos-duration={1000}>
							<div className="number-left">
								<img src="/assets/imgs/pages/home9/client2.png" alt="Vatech" />
							</div>
							<div className="number-right">
								<h4 className="heading-60-fitree secondery-500"><CountUp className="odometer" enableScrollSpy={true} end={12} /><span className="d-inline-block align-middle">K</span></h4>
								<p className="paragraph-18-fitree gray-1000">Satisfied Client</p>
							</div>
						</div>
						<div className="item-number" data-aos="fade-up" data-aos-duration={1500}>
							<div className="number-left">
								<img src="/assets/imgs/pages/home9/trade2.png" alt="Vatech" />
							</div>
							<div className="number-right">
								<h4 className="heading-60-fitree secondery-500"><CountUp className="odometer" enableScrollSpy={true} end={520} /></h4>
								<p className="paragraph-18-fitree gray-1000">Trade In The World</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
