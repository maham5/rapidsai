
'use client'
import { sliderGroup1 } from '@/util/swiperOptions'
import { Swiper, SwiperSlide } from "swiper/react"
export default function Section7() {
	return (
		<>

			<section className="position-relative overflow-hidden box-section box-testimonial-12">
				<div className="container" data-aos="fade-up">
					<div className="row align-items-end">
						<div className="col-lg-12 mb-30">
							<p className="paragraph-base-fitree-medium text-uppercase primary-500 mb-3">TESTIMONIALS</p>
							<h2 className="heading-3xl dark-950">What our Client Saying</h2>
						</div>
					</div>
					<div className="box-slider-testimonials-11 mt-5">
						<div className="box-swiper pt-5 pb-6">
							<Swiper {...sliderGroup1} className="swiper-container slider-group-1">
								<div className="swiper-wrapper">
									<SwiperSlide>
										<div className="card-testimonials-2 card-testimonials-12">
											<div className="card-image">
												<img src="/assets/imgs/pages/home15/review.png" alt="Vatech" />
											</div>
											<div className="card-info">
												<div className="comment-text sub-heading-xl dark-950">“What truly sets Vatech apart is their strategic approach. They took the time to fully comprehend our industry. Apart is their strategic approach. truly sets Vatech apart”</div>
												<div className="rating">
													<img src="/assets/imgs/pages/home8/star.svg" alt="Vatech" />
													<img src="/assets/imgs/pages/home8/star.svg" alt="Vatech" />
													<img src="/assets/imgs/pages/home8/star.svg" alt="Vatech" />
													<img src="/assets/imgs/pages/home8/star.svg" alt="Vatech" />
													<img src="/assets/imgs/pages/home8/star.svg" alt="Vatech" />
												</div>
												<div className="card-author">
													<div className="author-info">
														<h5 className="sub-heading-xl primary-500">Mrs.Diannel Russell</h5>
														<p className="paragraph-base primary-500">Fluxi Agency</p>
													</div>
												</div>
											</div>
										</div>
									</SwiperSlide>
									<SwiperSlide>
										<div className="card-testimonials-2 card-testimonials-12">
											<div className="card-image">
												<img src="/assets/imgs/pages/home15/review.png" alt="Vatech" />
											</div>
											<div className="card-info">
												<div className="comment-text sub-heading-xl dark-950">“What truly sets Vatech apart is their strategic approach. They took the time to fully comprehend our industry. Apart is their strategic approach. truly sets Vatech apart”</div>
												<div className="rating">
													<img src="/assets/imgs/pages/home8/star.svg" alt="Vatech" />
													<img src="/assets/imgs/pages/home8/star.svg" alt="Vatech" />
													<img src="/assets/imgs/pages/home8/star.svg" alt="Vatech" />
													<img src="/assets/imgs/pages/home8/star.svg" alt="Vatech" />
													<img src="/assets/imgs/pages/home8/star.svg" alt="Vatech" />
												</div>
												<div className="card-author">
													<div className="author-info">
														<h5 className="sub-heading-xl primary-500">Mrs.Diannel Russell</h5>
														<p className="paragraph-base primary-500">Fluxi Agency</p>
													</div>
												</div>
											</div>
										</div>
									</SwiperSlide>
								</div>
							</Swiper>
							<div className="swiper-pagination swiper-pagination-style-1 swiper-pagination-style-4" />
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
