'use client'
import Link from "next/link"
import { useState } from 'react'
import ModalVideo from 'react-modal-video'

export default function Section8() {
	const [isOpen, setOpen] = useState(false)
	return (
		<>

			<section className="position-relative overflow-hidden box-section box-pd-120 box-video-15">
				<div className="container" data-aos="fade-up">
					<div className="text-center">
						<div className="paragraph-base-fitree-medium text-uppercase color-white mb-3">Watching Zone</div>
						<h2 className="display-2xl color-white mb-3">
							Watching Previews Consulting<br className="d-none d-lg-block" />
							Program video
						</h2>
						<a onClick={() => setOpen(true)} className="popup-video">
							<img src="/assets/imgs/pages/home15/play-500.svg" alt="Vatech" />
						</a>
					</div>
				</div>
			</section>
			<ModalVideo channel='youtube' isOpen={isOpen} videoId="9HaU8NjH7bI" onClose={() => setOpen(false)} />
		</>
	)
}
