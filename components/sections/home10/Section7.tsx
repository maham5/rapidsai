'use client'
import Link from "next/link"
import { useState } from 'react'
import ModalVideo from 'react-modal-video'

export default function Section7() {
	const [isOpen, setOpen] = useState(false)
	return (
		<>

			<section className="box-section overflow-hidden box-video-10">
				<div className="container" data-aos="fade-up">
					<div className="text-center">
						<h4 className="heading-48-fitree color-white mb-3">
							Starte today or never in life,<br className="d-none d-lg-block" />
							You’ll have the time
						</h4>
						<p className="paragraph-18-fitree gray-50 mb-4">
							Muchas variaciones de los pasajes de Lorem Ipsum disponibles, pero la<br className="d-none d-lg-block" />
							mayoría sufrió alteraciones en alguna manera
						</p>
						<a onClick={() => setOpen(true)} className="popup-video"><img src="/assets/imgs/pages/home10/play.svg" alt="Vatech" /></a>
					</div>
				</div>
			</section>
			<ModalVideo channel='youtube' isOpen={isOpen} videoId="9HaU8NjH7bI" onClose={() => setOpen(false)} />
		</>
	)
}
