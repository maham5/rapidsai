'use client'
import Link from "next/link"
import { useState } from 'react'
import ModalVideo from 'react-modal-video'

export default function Section3() {
	const [isOpen, setOpen] = useState(false)
	return (
		<>

			<section className="position-relative overflow-hidden box-about-us-4">
				<div className="container" data-aos="fade-up">
					<div className="row align-items-center" data-aos="fade-up">
						<div className="col-lg-6 mb-4">
							<div className="box-image-about-home-4">
								<img src="/assets/imgs/pages/home4/img-about.png" alt="Vatech" />
								<a onClick={() => setOpen(true)} className="popup-video btn btn-play"><img src="/assets/imgs/pages/home4/play.png" alt="Vatech" /></a>
							</div>
						</div>
						<div className="col-lg-6 mb-4">
							<div className="sub-heading-fitree-sm primary-500 text-uppercase mb-20">
								<svg width={13} height={13} viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
									<circle cx="6.5" cy="6.5" r="5.75" stroke="currentColor" strokeWidth="1.5" />
								</svg>
								About us
							</div>
							<h1 className="heading-48-fitree neutral-1300 mb-20">
								Preparing For Your Success<br className="d-none d-lg-block" />
								Provide Best <span className="primary-500">Business Consulting</span>
							</h1>
							<p className="paragraph-rubik-r gray-700 desc-banner mb-20">Muchas variaciones de los pasajes de Lorem Ipsum disponibles, pero la mayoría sufrió alteraciones en alguna manera, ya sea porque se le agregó humor</p>
							<div className="box-progress box-progress-primary">
								<div className="item-progress">
									<h6 className="sub-heading-ag-sm gray-800 mb-2">Consulting</h6>
									<div className="progress">
										<div className="progress-bar" style={{ width: '80%' }} />
									</div>
								</div>
								<div className="item-progress">
									<h6 className="sub-heading-ag-sm gray-800 mb-2">Advisors</h6>
									<div className="progress">
										<div className="progress-bar" style={{ width: '90%' }} />
									</div>
								</div>
							</div>
							<div className="d-flex align-items-center">
								<Link href="#" className="btn btn-primary-square-2-md">
									About more
									<img src="/assets/imgs/template/icons/plus-sm.svg" alt="Vatech" />
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>
			<ModalVideo channel='youtube' isOpen={isOpen} videoId="9HaU8NjH7bI" onClose={() => setOpen(false)} />
		</>
	)
}
