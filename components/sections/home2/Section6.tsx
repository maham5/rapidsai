import Link from 'next/link'


export default function Section6() {
	return (
		<>

			<section className="position-relative overflow-hidden box-consultants">
				<div className="container" data-aos="fade-up">
					<div className="row align-items-end">
						<div className="col-lg-7 mb-30">
							<div className="banner-small-title-black" data-aos="fade-up">OUR CONSULTANTS</div>
							<h2 className="heading-ag-3xl secondery-500" data-aos="fade-up">
								Our Awasome Team<br className="d-none d-lg-block" />
								Members
							</h2>
						</div>
						<div className="col-lg-5 text-center text-lg-end mb-30">
							<Link href="#" className="btn btn-primary-square-2-md" data-aos="fade-up" >
							view more
							<img src="/assets/imgs/template/icons/plus-sm.svg" alt="Vatech" />
							</Link>
						</div>
					</div>
					<div className="box-consultant-lists mt-3" data-aos="fade-up">
						<div className="row">
							<div className="col-lg-4 col-sm-6">
								<div className="card-consultant">
									<div className="card-image">
										<Link href="#" />
										<img src="/assets/imgs/pages/home2/team.png" />
									</div>
									<div className="card-info">
										<div className="card-info-inner">
											<Link href="#" />
											<h4 className="heading-ag-lg">Kathryn Murphy</h4>
											<p className="paragraph-ag-base grey-100">Manager Manager</p>
											<div className="consultant-social">
												<Link href="#" className="fb" /><img src="/assets/imgs/pages/home2/fb.svg" />
												<Link href="#" className="inst" /><img src="/assets/imgs/pages/home2/inst.svg" />
												<Link href="#" className="tw" /><img src="/assets/imgs/pages/home2/tw.svg" />
												<Link href="#" className="linkedin" /><img src="/assets/imgs/pages/home2/linkedin.svg" />
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-4 col-sm-6">
								<div className="card-consultant">
									<div className="card-image">
										<Link href="#" />
										<img src="/assets/imgs/pages/home2/team3.png" />
									</div>
									<div className="card-info">
										<div className="card-info-inner">
											<Link href="#" />
											<h4 className="heading-ag-lg">Kathryn Murphy</h4>
											<p className="paragraph-ag-base grey-100">Manager Manager</p>
											<div className="consultant-social">
												<Link href="#" className="fb" /><img src="/assets/imgs/pages/home2/fb.svg" />
												<Link href="#" className="inst" /><img src="/assets/imgs/pages/home2/inst.svg" />
												<Link href="#" className="tw" /><img src="/assets/imgs/pages/home2/tw.svg" />
												<Link href="#" className="linkedin" /><img src="/assets/imgs/pages/home2/linkedin.svg" />
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-4 col-sm-6">
								<div className="card-consultant">
									<div className="card-image">
										<Link href="#" />
										<img src="/assets/imgs/pages/home2/team2.png" />
									</div>
									<div className="card-info">
										<div className="card-info-inner">
											<Link href="#" />
											<h4 className="heading-ag-lg">Kathryn Murphy</h4>
											<p className="paragraph-ag-base grey-100">Manager Manager</p>
											<div className="consultant-social">
												<Link href="#" className="fb" /><img src="/assets/imgs/pages/home2/fb.svg" />
												<Link href="#" className="inst" /><img src="/assets/imgs/pages/home2/inst.svg" />
												<Link href="#" className="tw" /><img src="/assets/imgs/pages/home2/tw.svg" />
												<Link href="#" className="linkedin" /><img src="/assets/imgs/pages/home2/linkedin.svg" />
											</div>
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
