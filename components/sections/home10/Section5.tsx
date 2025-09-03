'use client'
import { Swiper, SwiperSlide } from "swiper/react"
import Link from "next/link"
import { sliderGroup4 } from '@/util/swiperOptions'

export default function Section5() {
	return (
		<>

			<section className="box-section overflow-hidden box-testimonials-4">
				<div className="container" data-aos="fade-up">
					<div className="text-center mb-5">
						<div className="text-center">
							<div className="paragraph-base-fitree-bold text-underline text-uppercase primary-500 mb-1">Lastest Project</div>
							<h2 className="heading-48-fitree dark-950 mb-4">
								Take a look Our Completed<br className="d-none d-lg-block" />
								Latest projects
							</h2>
						</div>
					</div>
					<div className="box-testimonials-lists mt-5">
						<div className="box-swiper">
							<Swiper {...sliderGroup4} className="swiper-container slider-group-4">
								<div className="swiper-wrapper">
									<SwiperSlide>
										<div className="card-project-3">
											<div className="card-image">
												<img src="/assets/imgs/pages/home10/project.png" alt="Vatech" />
											</div>
											<div className="card-info">
												<Link href="#">
													<h4 className="heading-24-fitree secondery-500">Financial Solution</h4>
												</Link>
												<p className="paragraph-base dark-950-70">Digital Project</p>
											</div>
										</div>
									</SwiperSlide>
									<SwiperSlide>
										<div className="card-project-3">
											<div className="card-image">
												<img src="/assets/imgs/pages/home10/project2.png" alt="Vatech" />
											</div>
											<div className="card-info">
												<Link href="#">
													<h4 className="heading-24-fitree secondery-500">Business Consulting</h4>
												</Link>
												<p className="paragraph-base dark-950-70">Digital Project</p>
											</div>
										</div>
									</SwiperSlide>
									<SwiperSlide>
										<div className="card-project-3">
											<div className="card-image">
												<img src="/assets/imgs/pages/home10/project3.png" alt="Vatech" />
											</div>
											<div className="card-info">
												<Link href="#">
													<h4 className="heading-24-fitree secondery-500">Digital Analysis</h4>
												</Link>
												<p className="paragraph-base dark-950-70">Digital Project</p>
											</div>
										</div>
									</SwiperSlide>
									<SwiperSlide>
										<div className="card-project-3">
											<div className="card-image">
												<img src="/assets/imgs/pages/home10/project4.png" alt="Vatech" />
											</div>
											<div className="card-info">
												<Link href="#">
													<h4 className="heading-24-fitree secondery-500">Technologies Software</h4>
												</Link>
												<p className="paragraph-base dark-950-70">Digital Project</p>
											</div>
										</div>
									</SwiperSlide>
									<SwiperSlide>
										<div className="card-project-3">
											<div className="card-image">
												<img src="/assets/imgs/pages/home10/project.png" alt="Vatech" />
											</div>
											<div className="card-info">
												<Link href="#">
													<h4 className="heading-24-fitree secondery-500">Financial Solution</h4>
												</Link>
												<p className="paragraph-base dark-950-70">Digital Project</p>
											</div>
										</div>
									</SwiperSlide>
								</div>
							</Swiper>
							<div className="swiper-pagination swiper-pagination-style-2" />
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
