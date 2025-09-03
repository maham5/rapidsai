'use client'
import Link from "next/link"
import { useState } from 'react'
import ModalVideo from 'react-modal-video'

export default function Section1() {
	const [isOpen, setOpen] = useState(false)
	return (
		<>

			<section className="position-relative overflow-hidden box-banner-16">
				<div className="box-banner-16-inner">
					<div className="container" data-aos="fade-up">
						<div className="banner text-start">
							<div className="row">
								<div className="col-lg-8">
									<p className="paragraph-base-fitree-bold text-underline text-uppercase color-white mb-1">WELCOME BUSINESS CONSULT</p>
									<h1 className="display-4xl color-white mb-4">Consulting your Business Success</h1>
									<p className="paragraph-base color-white mb-40">perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto.</p>
									<div className="d-flex align-items-center flex-wrap">
										<Link href="#" className="btn btn-secondery-500 mb-3"> Discover More </Link>
										<span className="mr-20" />
										<div className="d-inline-block mb-3">
											<a onClick={() => setOpen(true)} className="btn-play popup-video color-white me-2">
												<img src="/assets/imgs/pages/home15/play.png" alt="Vatech" />
											</a>
											<span className="paragraph-base regular color-white">Watch The Video</span>
										</div>
									</div>
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
