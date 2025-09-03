'use client'
import { Swiper, SwiperSlide } from "swiper/react"
import { sliderGroup3 } from '@/util/swiperOptions'

export default function Section7() {
	return (
		<>

			<section className="position-relative overflow-hidden box-section box-testimonial-6">
				<div className="bg-testimonial-2" />
				<div className="container" data-aos="fade-up">
					<div className="text-center" data-aos="fade-up">
						<h6 className="heading-18-fitree primary-500 text-uppercase mb-2">TESTIMONIAL</h6>
						<h3 className="heading-48-fitree secondery-500 text-uppercase">
							what Say Our Clients<br className="d-none d-lg-block" />
							For Our Services
						</h3>
					</div>
					<div className="box-testimonials-lists mt-5" data-aos="fade-up">
						<div className="box-swiper pt-3 pb-8">
							<Swiper {...sliderGroup3} className="swiper-container slider-group-3">
								<div className="swiper-wrapper">
									<SwiperSlide>
										<div className="card-testimonials-2 card-testimonials-6">
											<div className="rating">
												<img src="/assets/imgs/template/icons/star.svg" alt="Vatech" />
												<img src="/assets/imgs/template/icons/star.svg" alt="Vatech" />
												<img src="/assets/imgs/template/icons/star.svg" alt="Vatech" />
												<img src="/assets/imgs/template/icons/star.svg" alt="Vatech" />
												<img src="/assets/imgs/template/icons/star.svg" alt="Vatech" />
											</div>
											<div className="comment-text paragraph-18-fitree">“ buat night cream bagiku sih oke oke aja,cukup melembabkan. untuk tekstur aku lebih prefer night “</div>
											<div className="card-author">
												<div className="author-image">
													<img src="/assets/imgs/pages/home6/author.png" alt="Vatech" />
												</div>
												<div className="author-info">
													<h5 className="heading-18-fitree secondery-500">Cameron Williamson</h5>
													<p className="paragraph-base-fitree secondery-500">Product Manager</p>
												</div>
											</div>
										</div>
									</SwiperSlide>
									<SwiperSlide>
										<div className="card-testimonials-2 card-testimonials-6">
											<div className="rating">
												<img src="/assets/imgs/template/icons/star.svg" alt="Vatech" />
												<img src="/assets/imgs/template/icons/star.svg" alt="Vatech" />
												<img src="/assets/imgs/template/icons/star.svg" alt="Vatech" />
												<img src="/assets/imgs/template/icons/star.svg" alt="Vatech" />
												<img src="/assets/imgs/template/icons/star.svg" alt="Vatech" />
											</div>
											<div className="comment-text paragraph-18-fitree">“ buat night cream bagiku sih oke oke aja,cukup melembabkan. untuk tekstur aku lebih prefer night “</div>
											<div className="card-author">
												<div className="author-image">
													<img src="/assets/imgs/pages/home6/author.png" alt="Vatech" />
												</div>
												<div className="author-info">
													<h5 className="heading-18-fitree secondery-500">Cameron Williamson</h5>
													<p className="paragraph-base-fitree secondery-500">Product Manager</p>
												</div>
											</div>
										</div>
									</SwiperSlide>
									<SwiperSlide>
										<div className="card-testimonials-2 card-testimonials-6">
											<div className="rating">
												<img src="/assets/imgs/template/icons/star.svg" alt="Vatech" />
												<img src="/assets/imgs/template/icons/star.svg" alt="Vatech" />
												<img src="/assets/imgs/template/icons/star.svg" alt="Vatech" />
												<img src="/assets/imgs/template/icons/star.svg" alt="Vatech" />
												<img src="/assets/imgs/template/icons/star.svg" alt="Vatech" />
											</div>
											<div className="comment-text paragraph-18-fitree">“ buat night cream bagiku sih oke oke aja,cukup melembabkan. untuk tekstur aku lebih prefer night “</div>
											<div className="card-author">
												<div className="author-image">
													<img src="/assets/imgs/pages/home6/author.png" alt="Vatech" />
												</div>
												<div className="author-info">
													<h5 className="heading-18-fitree secondery-500">Cameron Williamson</h5>
													<p className="paragraph-base-fitree secondery-500">Product Manager</p>
												</div>
											</div>
										</div>
									</SwiperSlide>
									<SwiperSlide>
										<div className="card-testimonials-2 card-testimonials-6">
											<div className="rating">
												<img src="/assets/imgs/template/icons/star.svg" alt="Vatech" />
												<img src="/assets/imgs/template/icons/star.svg" alt="Vatech" />
												<img src="/assets/imgs/template/icons/star.svg" alt="Vatech" />
												<img src="/assets/imgs/template/icons/star.svg" alt="Vatech" />
												<img src="/assets/imgs/template/icons/star.svg" alt="Vatech" />
											</div>
											<div className="comment-text paragraph-18-fitree">“ buat night cream bagiku sih oke oke aja,cukup melembabkan. untuk tekstur aku lebih prefer night “</div>
											<div className="card-author">
												<div className="author-image">
													<img src="/assets/imgs/pages/home6/author.png" alt="Vatech" />
												</div>
												<div className="author-info">
													<h5 className="heading-18-fitree secondery-500">Cameron Williamson</h5>
													<p className="paragraph-base-fitree secondery-500">Product Manager</p>
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
		</section >
		</>
	)
}
