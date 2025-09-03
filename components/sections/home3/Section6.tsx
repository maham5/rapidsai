'use client'
import Link from "next/link"
import { useState } from 'react'
import ModalVideo from 'react-modal-video'

export default function Section6() {
	const [isOpen, setOpen] = useState(false)
	return (
		<>

			<section className="position-relative overflow-hidden box-get-touch">
				<div className="container" data-aos="fade-up">
					<div className="box-touch">
						<div className="touch-left">
							<h3 className="display-ag-2xl color-white mb-2 text-uppercase">Be Ready to go your Business Consulting Program</h3>
							<p className="paragraph-rubik-r color-white mb-5">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu Ut enim ad minima veniam, quis nostrum exercitationem</p>
							<Link href="#" className="btn btn-black">GET IN TOUCH</Link>
						</div>
						<div className="touch-right">
							<div className="bg-trans-w">
								<a onClick={() => setOpen(true)} className="popup-video"><img src="/assets/imgs/template/icons/play-black.svg" alt="Vatech" /></a>
							</div>
						</div>
					</div>
				</div>
			</section>
			<ModalVideo channel='youtube' isOpen={isOpen} videoId="9HaU8NjH7bI" onClose={() => setOpen(false)} />
		</>
	)
}
