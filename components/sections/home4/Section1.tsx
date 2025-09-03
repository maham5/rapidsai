'use client'
import Link from "next/link"
import { useState } from 'react'
import ModalVideo from 'react-modal-video'

export default function Section1() {
	const [isOpen, setOpen] = useState(false)
	return (
		<>

			<section className="position-relative overflow-hidden box-banner-4">
				<div className="container" data-aos="fade-up">
					<div className="row align-items-center">
						<div className="col-lg-7 mb-4">
							<div className="banner-2">
								<div className="sub-heading-ag-sm color-white text-uppercase mb-20" data-aos="fade-up">
									<svg width={13} height={13} viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
										<circle cx="6.5" cy="6.5" r="5.75" stroke="currentColor" strokeWidth="1.5" />
									</svg>
									Consut HR Consult
								</div>
								<h1 className="display-xl color-white mb-30" data-aos="fade-up">
									Strategic Solutions for<br className="d-none d-lg-block" />
									Sustainable Growth
								</h1>
								<p className="paragraph-rubik-r gray-700 desc-banner mb-40" data-aos="fade-up">We have been operating for over a decade, providing top-notch services to our clients and building a strong track record</p>
								<div className="d-flex align-items-center" data-aos="fade-up">
									<Link href="#" className="btn btn-primary-square-2-md">
										Schedule a consultation
										<img src="/assets/imgs/template/icons/plus-sm.svg" alt="Vatech" />
									</Link>
								</div>
							</div>
						</div>
						<div className="col-lg-5 mb-4 text-center" data-aos="fade-right">
							<div className="box-banner-video">
								<img src="/assets/imgs/pages/home4/banner.png" alt="Vatech" />
								<a onClick={() => setOpen(true)} className="btn btn-play-4 popup-video"><img src="/assets/imgs/pages/home4/play.svg" alt="Vatech" /></a>
							</div>
						</div>
					</div>
				</div>
			</section>
			<ModalVideo channel='youtube' isOpen={isOpen} videoId="9HaU8NjH7bI" onClose={() => setOpen(false)} />
		</>
	)
}
