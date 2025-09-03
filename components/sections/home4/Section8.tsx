
'use client'
import { Swiper, SwiperSlide } from "swiper/react"
import { sliderGroup2 } from '@/util/swiperOptions'
export default function Section8() {
	return (
		<>

			<section className="position-relative overflow-hidden box-testimonials-4">
				<div className="container" data-aos="fade-up">
					<div className="text-center mb-5" data-aos="fade-up">
						<div className="sub-heading-fitree-sm primary-500 text-uppercase mb-20">
							<svg width={13} height={13} viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
								<circle cx="6.5" cy="6.5" r="5.75" stroke="currentColor" strokeWidth="1.5" />
							</svg>
							TESTIMONIALS
						</div>
						<h2 className="heading-48-fitree dark-950 mb-30">
							What Peoples Are Saying<br className="d-none d-lg-block" />
							Our Services
						</h2>
					</div>
					<div className="box-testimonials-lists mt-5" data-aos="fade-up">
						<div className="box-swiper">
							<Swiper {...sliderGroup2} className="swiper-container slider-group-2">
								<div className="swiper-wrapper">
									<SwiperSlide>
										<div className="card-testimonials-2 card-testimonials-4">
											<div className="card-author">
												<div className="author-image">
													<img src="/assets/imgs/pages/home2/author.png" alt="Vatech" />
												</div>
												<div className="author-info">
													<div>
														<h5 className="sub-heading-ag-xl secondery-600">Esther Howard</h5>
														<p className="paragraph-18-fitree secondery-600">Businessman</p>
													</div>
												</div>
											</div>
											<div className="comment-text">Lorem ipsum dolor sit amet consectetur. In non sodales elementum et te pus ac platea velit semper. Non morbi aliqu alesuada.</div>
											<div className="card-author-rating">
												<div className="card-author-name">Los Angeles, CA</div>
												<div className="rating">
													<img src="/assets/imgs/template/icons/star-24.svg" alt="Vatech" />
													<img src="/assets/imgs/template/icons/star-24.svg" alt="Vatech" />
													<img src="/assets/imgs/template/icons/star-24.svg" alt="Vatech" />
													<img src="/assets/imgs/template/icons/star-24.svg" alt="Vatech" />
													<img src="/assets/imgs/template/icons/star-24.svg" alt="Vatech" />
												</div>
											</div>
										</div>
									</SwiperSlide>
									<SwiperSlide>
										<div className="card-testimonials-2 card-testimonials-4">
											<div className="card-author">
												<div className="author-image">
													<img src="/assets/imgs/pages/home2/author2.png" alt="Vatech" />
												</div>
												<div className="author-info">
													<div>
														<h5 className="sub-heading-ag-xl secondery-600">Johnson Hamilton</h5>
														<p className="paragraph-18-fitree secondery-600">Businessman</p>
													</div>
												</div>
											</div>
											<div className="comment-text">Lorem ipsum dolor sit amet consectetur. In non sodales elementum et te pus ac platea velit semper. Non morbi aliqu alesuada.</div>
											<div className="card-author-rating">
												<div className="card-author-name">Los Angeles, CA</div>
												<div className="rating">
													<img src="/assets/imgs/template/icons/star-24.svg" alt="Vatech" />
													<img src="/assets/imgs/template/icons/star-24.svg" alt="Vatech" />
													<img src="/assets/imgs/template/icons/star-24.svg" alt="Vatech" />
													<img src="/assets/imgs/template/icons/star-24.svg" alt="Vatech" />
													<img src="/assets/imgs/template/icons/star-24.svg" alt="Vatech" />
												</div>
											</div>
										</div>
									</SwiperSlide>
									<SwiperSlide>
										<div className="card-testimonials-2 card-testimonials-4">
											<div className="card-author">
												<div className="author-image">
													<img src="/assets/imgs/pages/home4/author.png" alt="Vatech" />
												</div>
												<div className="author-info">
													<div>
														<h5 className="sub-heading-ag-xl secondery-600">Esther Howard</h5>
														<p className="paragraph-18-fitree secondery-600">Businessman</p>
													</div>
												</div>
											</div>
											<div className="comment-text">Lorem ipsum dolor sit amet consectetur. In non sodales elementum et te pus ac platea velit semper. Non morbi aliqu alesuada.</div>
											<div className="card-author-rating">
												<div className="card-author-name">Los Angeles, CA</div>
												<div className="rating">
													<img src="/assets/imgs/template/icons/star-24.svg" alt="Vatech" />
													<img src="/assets/imgs/template/icons/star-24.svg" alt="Vatech" />
													<img src="/assets/imgs/template/icons/star-24.svg" alt="Vatech" />
													<img src="/assets/imgs/template/icons/star-24.svg" alt="Vatech" />
													<img src="/assets/imgs/template/icons/star-24.svg" alt="Vatech" />
												</div>
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
