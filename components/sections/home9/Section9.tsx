
import Link from "next/link"

export default function Section9() {
	return (
		<>

			<section className="position-relative box-we-can-help">
				<div className="container">
					<div className="block-can-help">
						<div className="block-left wow img-custom-anim-left">
							<h2 className="display-4xl-bold text-uppercase color-white mb-3">We Can Help!</h2>
							<p className="paragraph-24-fitree primary-50 mb-4">Innovative Success For your Next Destination for helping Community.</p>
							<Link href="#" className="btn btn-white">Free Consultancy
								<svg width={19} height={15} viewBox="0 0 19 15" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M12.6667 14.5C12.6667 13.758 13.247 12.65 13.8344 11.72C14.5896 10.52 15.4921 9.473 16.5268 8.674C17.3027 8.075 18.2432 7.5 19 7.5M19 7.5C18.2432 7.5 17.3019 6.925 16.5268 6.326C15.4921 5.526 14.5896 4.479 13.8344 3.281C13.247 2.35 12.6667 1.24 12.6667 0.500001M19 7.5L3.0598e-07 7.5L19 7.5Z" fill="currentColor" />
									<path d="M12.6667 14.5C12.6667 13.758 13.247 12.65 13.8344 11.72C14.5896 10.52 15.4921 9.473 16.5268 8.674C17.3027 8.075 18.2432 7.5 19 7.5M19 7.5C18.2432 7.5 17.3019 6.925 16.5268 6.326C15.4921 5.526 14.5896 4.479 13.8344 3.281C13.247 2.35 12.6667 1.24 12.6667 0.500001M19 7.5L-1.70857e-07 7.5" stroke="currentColor" strokeWidth={2} />
								</svg>
							</Link>
						</div>
						<div className="block-right">
							<div className="box-image-help wow img-custom-anim-right">
								<img src="/assets/imgs/pages/home9/help.png" alt="Vatech" />
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
