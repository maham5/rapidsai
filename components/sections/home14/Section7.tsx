'use client'
import Link from "next/link"
import { useState } from 'react'
import ModalVideo from 'react-modal-video'

export default function Section7() {
	const [isOpen, setOpen] = useState(false)
	return (
		<>

			<section className="position-relative overflow-hidden box-videos-services-3 box-video-14">
				<div className="box-videos-services-3-inner">
					<div className="box-video">
						<span className="text-stroke-300"> VIDEO </span>
						<a onClick={() => setOpen(true)} className="popup-video"><img src="/assets/imgs/pages/home14/play.png" alt="Vatech" /></a>
					</div>
					<div className="box-info-video-bottom">
						<p className="sub-heading-ag-xl-m mb-3 color-white">Professionality</p>
						<div className="line-rounded" />
						<p className="sub-heading-ag-xl-m mb-3 color-white">Clients Services</p>
						<div className="line-rounded" />
					</div>
				</div>
			</section>
			<ModalVideo channel='youtube' isOpen={isOpen} videoId="9HaU8NjH7bI" onClose={() => setOpen(false)} />
		</>
	)
}
