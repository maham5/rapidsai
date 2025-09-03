'use client'
import Link from "next/link"
import { useState } from 'react'
import ModalVideo from 'react-modal-video'

export default function Section8() {
	const [isOpen, setOpen] = useState(false)
	return (
		<>

			<section className="position-relative overflow-hidden box-video-3">
				<div className="block-video" data-aos="fade-up">
					<a onClick={() => setOpen(true)} className="btn btn-play popup-video"><img src="/assets/imgs/pages/home6/play.svg" alt="Vatech" /></a>
				</div>
			</section>
			<ModalVideo channel='youtube' isOpen={isOpen} videoId="9HaU8NjH7bI" onClose={() => setOpen(false)} />
		</>
	)
}
