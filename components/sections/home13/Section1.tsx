'use client'
import Link from "next/link"
import { useState } from 'react'
import ModalVideo from 'react-modal-video'

export default function Section1() {
	const [isOpen, setOpen] = useState(false)
	return (
		<>

			<section className="position-relative overflow-hidden box-banner-13">
				<div className="box-banner-13-inner">
					<div className="container" data-aos="fade-up">
						<div className="banner">
							<p className="sub-heading-ag-sm text-uppercase text-line-down neutral-1800 mb-1">Solutions</p>
							<h1 className="display-ag-2xl neutral-1200 mb-4">Like a good neighbor State Farm is <span className="bg-line">there</span></h1>
							<p className="paragraph-rubik-r neutral-1200 desc-banner">We have been operating for over a decade, providing top-notch services to our clients and building a strong track record in the industry.</p>
							<div className="d-flex align-items-center flex-wrap">
								<Link href="#" className="btn btn-primary-1400 mb-3">
									Discover More
									<svg width={8} height={11} viewBox="0 0 8 11" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M1.75 11C1.50391 11 1.28516 10.918 1.12109 10.7539C0.765625 10.4258 0.765625 9.85156 1.12109 9.52344L4.86719 5.75L1.12109 2.00391C0.765625 1.67578 0.765625 1.10156 1.12109 0.773437C1.44922 0.417969 2.02344 0.417969 2.35156 0.773437L6.72656 5.14844C7.08203 5.47656 7.08203 6.05078 6.72656 6.37891L2.35156 10.7539C2.1875 10.918 1.96875 11 1.75 11Z" fill="currentColor" />
									</svg>
								</Link>
								<span className="mr-20" />
								<div className="d-inline-block mb-3">
									<a onClick={() => setOpen(true)} className="btn-play popup-video neutral-2000">
										<img src="/assets/imgs/pages/home8/play.svg" alt="Vatech" />
									</a>
									<span className="sub-heading-ag-sm neutral-2000">Watch Video</span>
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
