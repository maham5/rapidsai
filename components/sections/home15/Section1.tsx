'use client'
import Link from "next/link"
import { useState } from 'react'
import ModalVideo from 'react-modal-video'

export default function Section1() {
	const [isOpen, setOpen] = useState(false)
	return (
		<>

			<section className="position-relative overflow-hidden box-banner-15">
				<div className="box-banner-15-inner">
					<div className="container" data-aos="fade-up">
						<div className="banner text-center">
							<p className="paragraph-base-fitree-medium text-uppercase color-white mb-1">Guaranteed satisfaction</p>
							<h1 className="display-xl color-white mb-5">
								Consulting need For Best<br />
								Position in the World
							</h1>
							<div className="d-flex align-items-center flex-wrap justify-content-center">
								<Link href="#" className="btn btn-primary-md mb-3">
									Discover More
									<svg width={14} height={13} viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M13.5 6.5C13.5 7.0625 13.0312 7.53125 12.5 7.53125H8V12.0312C8 12.5625 7.53125 13 7 13C6.4375 13 6 12.5625 6 12.0312V7.53125H1.5C0.9375 7.53125 0.5 7.0625 0.5 6.5C0.5 5.96875 0.9375 5.53125 1.5 5.53125H6V1.03125C6 0.46875 6.4375 0 7 0C7.53125 0 8 0.46875 8 1.03125V5.53125H12.5C13.0312 5.5 13.5 5.96875 13.5 6.5Z" fill="currentColor" />
									</svg>
								</Link>
								<span className="mr-20" />
								<div className="d-inline-block mb-3">
									<a onClick={() => setOpen(true)} className="btn-play popup-video me-2 color-white">
										<img src="/assets/imgs/pages/home15/play.png" alt="Vatech" />
									</a>
									<span className="sub-heading-ag-sm color-white">Watch Video</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<ModalVideo channel='youtube' isOpen={isOpen} videoId="9HaU8NjH7bI" onClose={() => setOpen(false)} />
		</>
	)
}
