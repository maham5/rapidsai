
import Link from "next/link"

export default function Section2() {
	return (
		<>

			<section className="position-relative overflow-hidden box-section box-about-us-5">
				<div className="container" data-aos="fade-up">
					<div className="row align-items-center">
						<div className="col-lg-6 mb-4">
							<img src="/assets/imgs/pages/home5/img-about.png" alt="Vatech" />
						</div>
						<div className="col-lg-6 mb-4">
							<div className="banner-small-title-black line-primary-home">About Us</div>
							<h2 className="heading-3xl mb-30">Crafting Success Stories One Client Time</h2>
							<p className="mb-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry wasoi imn Lorem Ipsum has been the industry's standard dummyLorem Ipsum is simply isnnwan dummy text of the printing and typesetting industry.</p>
							<p className="mb-4">Been the industry's standard dummyLorem Ipsum is simply isnn dummy text of thegh printing and typesetting industry.</p>
							<div className="mb-5" />
							<Link href="#" className="btn btn-primary-home">
								Discover More
								<img src="/assets/imgs/template/icons/plus-sm.svg" alt="Vatech" />
							</Link>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
