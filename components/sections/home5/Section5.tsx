'use client'
import CountUp from 'react-countup'
import { sliderGroup2 } from '@/util/swiperOptions'
import { Swiper, SwiperSlide } from "swiper/react"

export default function Section5() {
	return (
		<>

			<section className="box-section box-clients-5">
				<div className="bg-number" data-aos="fade-up" />
				<div className="container" data-aos="fade-up">
					<div className="box-numbers">
						<div className="item-number">
							<div className="item-number-image">
								<img src="/assets/imgs/pages/home5/client.png" alt="Vatech" />
							</div>
							<div className="item-numner-info">
								<h3 className="heading-ag-3xl"><CountUp className="odometer" enableScrollSpy={true} end={10} /><span className="d-inline-block align-middle">+</span></h3>
								<p className="sub-heading-ag-lg">Clients Review</p>
							</div>
						</div>
						<div className="item-number">
							<div className="item-number-image">
								<img src="/assets/imgs/pages/home5/client.png" alt="Vatech" />
							</div>
							<div className="item-numner-info">
								<h3 className="heading-ag-3xl"><CountUp className="odometer" enableScrollSpy={true} end={10} /><span className="d-inline-block align-middle">+</span></h3>
								<p className="sub-heading-ag-lg">Team member</p>
							</div>
						</div>
						<div className="item-number">
							<div className="item-number-image">
								<img src="/assets/imgs/pages/home5/client.png" alt="Vatech" />
							</div>
							<div className="item-numner-info">
								<h3 className="heading-ag-3xl"><CountUp className="odometer" enableScrollSpy={true} end={20} /><span className="d-inline-block align-middle">+</span></h3>
								<p className="sub-heading-ag-lg">Winning award</p>
							</div>
						</div>
						<div className="item-number">
							<div className="item-number-image">
								<img src="/assets/imgs/pages/home5/client.png" alt="Vatech" />
							</div>
							<div className="item-numner-info">
								<h3 className="heading-ag-3xl"><CountUp className="odometer" enableScrollSpy={true} end={10} /><span className="d-inline-block align-middle">+</span></h3>
								<p className="sub-heading-ag-lg">project Done</p>
							</div>
						</div>
					</div>
					<div className="block-form-contact">
						<div className="row">
							<div className="col-lg-7">
								<div className="box-form-contact">
									<div className="banner-small-title-black line-primary-home mb-2">Message</div>
									<h2 className="heading-ag-3xl dark-950 mb-5">
										your business to growth<br className="d-none d-lg-block" />
										please touch ?
									</h2>
									<div className="form-contact">
										<form className="form" action="#">
											<div className="row">
												<div className="col-lg-6">
													<div className="form-group">
														<input type="text" className="form-control user" placeholder="Name Here" />
													</div>
												</div>
												<div className="col-lg-6">
													<div className="form-group">
														<input type="text" className="form-control phone" placeholder="Contact Here" />
													</div>
												</div>
												<div className="col-lg-12">
													<div className="form-group">
														<input type="text" className="form-control email" placeholder="Email Address Here" />
													</div>
												</div>
												<div className="col-lg-12">
													<div className="form-group">
														<textarea className="form-control" rows={5} placeholder="Message Here" />
													</div>
												</div>
												<div className="col-lg-12">
													<div className="form-group">
														<input type="submit" className="btn btn-submit" defaultValue="Contact us" />
													</div>
												</div>
											</div>
										</form>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="client-logos">
						<div className="item-logo">
							<img src="/assets/imgs/pages/home5/doo.svg" alt="Vatech" />
						</div>
						<div className="item-logo">
							<img src="/assets/imgs/pages/home5/instagram.svg" alt="Vatech" />
						</div>
						<div className="item-logo">
							<img src="/assets/imgs/pages/home5/invision.svg" alt="Vatech" />
						</div>
						<div className="item-logo">
							<img src="/assets/imgs/pages/home5/hellosign.svg" alt="Vatech" />
						</div>
						<div className="item-logo">
							<img src="/assets/imgs/pages/home5/chri.svg" alt="Vatech" />
						</div>
					</div>
					<div className="box-testimonials-lists mt-5">
						<div className="box-swiper">
							<Swiper {...sliderGroup2} className="swiper-container slider-group-2">
								<div className="swiper-wrapper">
									<SwiperSlide>
										<div className="card-testimonials-5">
											<div className="card-testimonials-inner">
												<div className="rating">
													<img src="/assets/imgs/pages/home5/star.svg" alt="Vatech" />
													<img src="/assets/imgs/pages/home5/star.svg" alt="Vatech" />
													<img src="/assets/imgs/pages/home5/star.svg" alt="Vatech" />
													<img src="/assets/imgs/pages/home5/star.svg" alt="Vatech" />
													<img src="/assets/imgs/pages/home5/star.svg" alt="Vatech" />
												</div>
												<div className="card-author">
													<div className="author-image">
														<img src="/assets/imgs/pages/home5/author.png" alt="Vatech" />
													</div>
												</div>
												<div className="comment-text">Financial planners help people to gain knowledge about how toio dei invest and save their money in the most efficient way ever Manynmi people all across the country use them</div>
												<div className="card-author-info">
													<div className="author-info">
														<div>
															<h5 className="sub-heading-ag-sm">Albert Flores</h5>
															<p className="paragraph-rubik-r">Nursing Assistant</p>
														</div>
													</div>
												</div>
											</div>
										</div>
									</SwiperSlide>
									<SwiperSlide>
										<div className="card-testimonials-5">
											<div className="card-testimonials-inner">
												<div className="rating">
													<img src="/assets/imgs/pages/home5/star.svg" alt="Vatech" />
													<img src="/assets/imgs/pages/home5/star.svg" alt="Vatech" />
													<img src="/assets/imgs/pages/home5/star.svg" alt="Vatech" />
													<img src="/assets/imgs/pages/home5/star.svg" alt="Vatech" />
													<img src="/assets/imgs/pages/home5/star.svg" alt="Vatech" />
												</div>
												<div className="card-author">
													<div className="author-image">
														<img src="/assets/imgs/pages/home5/author.png" alt="Vatech" />
													</div>
												</div>
												<div className="comment-text">Financial planners help people to gain knowledge about how toio dei invest and save their money in the most efficient way ever Manynmi people all across the country use them</div>
												<div className="card-author-info">
													<div className="author-info">
														<div>
															<h5 className="sub-heading-ag-sm">Jenny Wilson</h5>
															<p className="paragraph-rubik-r">Web Designer</p>
														</div>
													</div>
												</div>
											</div>
										</div>
									</SwiperSlide>
									<SwiperSlide>
										<div className="card-testimonials-5">
											<div className="card-testimonials-inner">
												<div className="rating">
													<img src="/assets/imgs/pages/home5/star.svg" alt="Vatech" />
													<img src="/assets/imgs/pages/home5/star.svg" alt="Vatech" />
													<img src="/assets/imgs/pages/home5/star.svg" alt="Vatech" />
													<img src="/assets/imgs/pages/home5/star.svg" alt="Vatech" />
													<img src="/assets/imgs/pages/home5/star.svg" alt="Vatech" />
												</div>
												<div className="card-author">
													<div className="author-image">
														<img src="/assets/imgs/pages/home5/author.png" alt="Vatech" />
													</div>
												</div>
												<div className="comment-text">Financial planners help people to gain knowledge about how toio dei invest and save their money in the most efficient way ever Manynmi people all across the country use them</div>
												<div className="card-author-info">
													<div className="author-info">
														<div>
															<h5 className="sub-heading-ag-sm">Esther Howard</h5>
															<p className="paragraph-rubik-r">Businessman</p>
														</div>
													</div>
												</div>
											</div>
										</div>
									</SwiperSlide>
								</div>
							</Swiper>
							<div className="swiper-pagination swiper-pagination-style-2 swiper-pagination-style-3" />
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
