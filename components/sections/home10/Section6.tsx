'use client'
import { Swiper, SwiperSlide } from "swiper/react"
import { sliderGroup3 } from '@/util/swiperOptions'
import Link from "next/link"

export default function Section6() {
	return (
		<>

			<section className="box-section overflow-hidden box-our-team">
				<div className="container" data-aos="fade-up">
					<div className="text-center mb-5">
						<div className="text-center">
							<div className="paragraph-base-fitree-bold text-underline text-uppercase primary-500 mb-1">Dedicated Team</div>
							<h2 className="heading-48-fitree dark-950 mb-4">Professional Team Members</h2>
						</div>
					</div>
					<div className="box-teams box-teams-10">
						<div className="box-swiper">
							<Swiper {...sliderGroup3} className="swiper-container slider-group-3">
								<div className="swiper-wrapper">
									<SwiperSlide>
										<div className="card-team card-team-3">
											<div className="card-social">
												<Link href="#" className="share" />
												<Link href="#" className="share fb" />
												<Link href="#" className="share tw" />
												<Link href="#" className="share printest" />
											</div>
											<div className="card-image">
												<div className="card-image-inner">
													<img className="wow img-custom-anim-top" src="/assets/imgs/pages/home10/team.png" alt="Vatech" />
												</div>
											</div>
											<div className="card-info">
												<h6>Ambrose Halley</h6>
												<p>Managing Director</p>
											</div>
										</div>
									</SwiperSlide>
									<SwiperSlide>
										<div className="card-team card-team-3">
											<div className="card-social">
												<Link href="#" className="share" />
												<Link href="#" className="share fb" />
												<Link href="#" className="share tw" />
												<Link href="#" className="share printest" />
											</div>
											<div className="card-image">
												<div className="card-image-inner">
													<img className="wow img-custom-anim-top" src="/assets/imgs/pages/home10/team2.png" alt="Vatech" />
												</div>
											</div>
											<div className="card-info">
												<h6>Ensiles Helicon</h6>
												<p>Hr. Manager</p>
											</div>
										</div>
									</SwiperSlide>
									<SwiperSlide>
										<div className="card-team card-team-3">
											<div className="card-social">
												<Link href="#" className="share" />
												<Link href="#" className="share fb" />
												<Link href="#" className="share tw" />
												<Link href="#" className="share printest" />
											</div>
											<div className="card-image">
												<div className="card-image-inner">
													<img className="wow img-custom-anim-top" src="/assets/imgs/pages/home10/team3.png" alt="Vatech" />
												</div>
											</div>
											<div className="card-info">
												<h6>Emely Haider</h6>
												<p>Hr Manager</p>
											</div>
										</div>
									</SwiperSlide>
									<SwiperSlide>
										<div className="card-team card-team-3">
											<div className="card-social">
												<Link href="#" className="share" />
												<Link href="#" className="share fb" />
												<Link href="#" className="share tw" />
												<Link href="#" className="share printest" />
											</div>
											<div className="card-image">
												<div className="card-image-inner">
													<img className="wow img-custom-anim-top" src="/assets/imgs/pages/home10/team.png" alt="Vatech" />
												</div>
											</div>
											<div className="card-info">
												<h6>Ensiles Helicon</h6>
												<p>Hr. Manager</p>
											</div>
										</div>
									</SwiperSlide>
									<SwiperSlide>
										<div className="card-team card-team-3">
											<div className="card-social">
												<Link href="#" className="share" />
												<Link href="#" className="share fb" />
												<Link href="#" className="share tw" />
												<Link href="#" className="share printest" />
											</div>
											<div className="card-image">
												<div className="card-image-inner">
													<img className="wow img-custom-anim-top" src="/assets/imgs/pages/home10/team.png" alt="Vatech" />
												</div>
											</div>
											<div className="card-info">
												<h6>Emely Haider</h6>
												<p>Hr Manager</p>
											</div>
										</div>
									</SwiperSlide>
								</div>
						</Swiper>
					</div>
				</div>
			</div>
		</section >
		</>
	)
}
