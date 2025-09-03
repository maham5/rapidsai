
'use client'
import { Swiper, SwiperSlide } from "swiper/react"
import { sliderGroup3 } from '@/util/swiperOptions'
export default function Section7() {
	return (
		<>

			<section className="position-relative overflow-hidden box-testimonial-3">
				<div className="bg-testimonial-2" data-aos="fade-up" />
				<div className="container" data-aos="fade-up">
					<div className="row position-relative align-items-end">
						<div className="col-lg-7">
							<h6 className="sub-heading-ag-sm primary-home text-uppercase mb-2">TESTIMONIAL</h6>
							<h3 className="heading-ag-3xl dark-950">
								What Our Customers Say<br className="d-none d-lg-block" />
								us From Our Services
							</h3>
						</div>
						<div className="col-lg-5">
							<p className="mb-0 paragraph-rubik-r">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu Ut enim ad minima veniam</p>
						</div>
					</div>
					<div className="box-testimonials-lists mt-5">
						<div className="box-swiper pt-3 pb-5">
							<Swiper {...sliderGroup3} className="swiper-container slider-group-3">
								<div className="swiper-wrapper">
									<SwiperSlide>
										<div className="card-testimonials-2 card-testimonials-3">
											<div className="comment-text">What truly sets Vatech apart is their strategic approach. They took the time to fully comprehend our industry. Apart is their strategic approach. truly sets Vatech apart</div>
											<div className="card-author">
												<div className="author-info">
													<div className="rating">
														<img src="/assets/imgs/template/icons/star.svg" alt="Vatech" />
														<img src="/assets/imgs/template/icons/star.svg" alt="Vatech" />
														<img src="/assets/imgs/template/icons/star.svg" alt="Vatech" />
														<img src="/assets/imgs/template/icons/star.svg" alt="Vatech" />
														<img src="/assets/imgs/template/icons/star.svg" alt="Vatech" />
													</div>
													<h5 className="sub-heading-ag-xl">Dianne Russell</h5>
													<p className="paragraph-rubik-r">Bressler, Canada</p>
												</div>
											</div>
										</div>
									</SwiperSlide>
									<SwiperSlide>
										<div className="card-testimonials-2 card-testimonials-3">
											<div className="comment-text">What truly sets Vatech apart is their strategic approach. They took the time to fully comprehend our industry. Apart is their strategic approach. truly sets Vatech apart</div>
											<div className="card-author">
												<div className="author-info">
													<div className="rating">
														<img src="/assets/imgs/template/icons/star.svg" alt="Vatech" />
														<img src="/assets/imgs/template/icons/star.svg" alt="Vatech" />
														<img src="/assets/imgs/template/icons/star.svg" alt="Vatech" />
														<img src="/assets/imgs/template/icons/star.svg" alt="Vatech" />
														<img src="/assets/imgs/template/icons/star.svg" alt="Vatech" />
													</div>
													<h5 className="sub-heading-ag-xl">Russell Daniel</h5>
													<p className="paragraph-rubik-r">Ananda, Australia</p>
												</div>
											</div>
										</div>
									</SwiperSlide>
									<SwiperSlide>
										<div className="card-testimonials-2 card-testimonials-3">
											<div className="comment-text">What truly sets Vatech apart is their strategic approach. They took the time to fully comprehend our industry. Apart is their strategic approach. truly sets Vatech apart</div>
											<div className="card-author">
												<div className="author-info">
													<div className="rating">
														<img src="/assets/imgs/template/icons/star.svg" alt="Vatech" />
														<img src="/assets/imgs/template/icons/star.svg" alt="Vatech" />
														<img src="/assets/imgs/template/icons/star.svg" alt="Vatech" />
														<img src="/assets/imgs/template/icons/star.svg" alt="Vatech" />
														<img src="/assets/imgs/template/icons/star.svg" alt="Vatech" />
													</div>
													<h5 className="sub-heading-ag-xl">Daniel Bressler</h5>
													<p className="paragraph-rubik-r">Bressler, Canada</p>
												</div>
											</div>
										</div>
									</SwiperSlide>
									<SwiperSlide>
										<div className="card-testimonials-2 card-testimonials-3">
											<div className="comment-text">What truly sets Vatech apart is their strategic approach. They took the time to fully comprehend our industry. Apart is their strategic approach. truly sets Vatech apart</div>
											<div className="card-author">
												<div className="author-info">
													<div className="rating">
														<img src="/assets/imgs/template/icons/star.svg" alt="Vatech" />
														<img src="/assets/imgs/template/icons/star.svg" alt="Vatech" />
														<img src="/assets/imgs/template/icons/star.svg" alt="Vatech" />
														<img src="/assets/imgs/template/icons/star.svg" alt="Vatech" />
														<img src="/assets/imgs/template/icons/star.svg" alt="Vatech" />
													</div>
													<h5 className="sub-heading-ag-xl">Dianne Russell</h5>
													<p className="paragraph-rubik-r">Bressler, Canada</p>
												</div>
											</div>
										</div>
									</SwiperSlide>
								</div>
						</Swiper>
						<div className="swiper-pagination swiper-pagination-style-1" />
					</div>
				</div>
				<div className="client-logos">
					<div className="item-logo">
						<img src="/assets/imgs/pages/home3/logo.svg" />
					</div>
					<div className="item-logo">
						<img src="/assets/imgs/pages/home3/logo2.svg" />
					</div>
					<div className="item-logo">
						<img src="/assets/imgs/pages/home3/logo3.svg" />
					</div>
					<div className="item-logo">
						<img src="/assets/imgs/pages/home3/logo4.svg" />
					</div>
					<div className="item-logo">
						<img src="/assets/imgs/pages/home3/logo5.svg" />
					</div>
				</div>
			</div>
		</section >
		</>
	)
}
