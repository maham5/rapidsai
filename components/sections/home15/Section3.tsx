'use client'
import CountUp from 'react-countup'
import Link from "next/link"

export default function Section3() {
	return (
		<>

			<section className="box-section overflow-hidden box-section box-about-us-7 box-pd-120">
				<div className="container" data-aos="fade-up">
					<div className="row align-items-center">
						<div className="col-lg-6 mb-30">
							<div className="box-image-about-7">
								<div className="image-left">
									<div className="card-number abs-bottom">
										<div className="card-icon">
											<svg width={27} height={18} viewBox="0 0 27 18" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M19.1225 13.7381C18.4605 13.502 17.3801 13.486 16.9012 13.3071C16.5325 13.2112 16.1843 13.0489 15.8738 12.8282C15.7432 12.2781 15.6867 11.713 15.7057 11.1479C15.9519 10.9117 16.1514 10.6313 16.2938 10.3213C16.4367 9.78923 16.5314 9.24544 16.5769 8.69644C16.5769 8.69644 16.9668 8.86447 17.1205 8.08231C17.2507 7.4102 17.4986 7.05483 17.4339 6.55831C17.3692 6.06179 17.0911 6.18025 17.0911 6.18025C17.3927 5.48524 17.5107 4.72442 17.4339 3.97071C17.4293 3.48562 17.3249 3.00666 17.1273 2.56365C16.9296 2.12063 16.6429 1.72303 16.285 1.3956C15.927 1.06816 15.5055 0.817896 15.0467 0.660372C14.5879 0.502848 14.1016 0.441438 13.618 0.479964C13.1343 0.441414 12.6479 0.502501 12.1888 0.659446C11.7297 0.816391 11.3077 1.06586 10.9488 1.39242C10.59 1.71897 10.302 2.11568 10.1026 2.558C9.90315 3.00032 9.79661 3.47885 9.78953 3.96398C9.71347 4.71705 9.82907 5.47713 10.1256 6.17353C10.1256 6.17353 9.84833 6.05507 9.7828 6.55159C9.71727 7.0481 9.96091 7.40852 10.0945 8.08062C10.2482 8.86615 10.6381 8.69476 10.6381 8.69476C10.684 9.24369 10.7788 9.78745 10.9212 10.3196C11.0636 10.6296 11.2631 10.91 11.5093 11.1463C11.5283 11.7113 11.4718 12.2764 11.3412 12.8265C11.0315 13.0474 10.683 13.2079 10.3138 13.2995C9.84161 13.4827 8.76037 13.5062 8.09246 13.7423C7.28715 14.0441 6.5949 14.5876 6.11059 15.2982C5.62628 16.0089 5.37362 16.852 5.38724 17.7119H21.8219C21.838 16.8517 21.5871 16.0077 21.1037 15.296C20.6203 14.5843 19.9281 14.04 19.1225 13.7381Z" fill="currentColor" />
												<path d="M6.77348 10.8605C7.46749 10.8511 8.14719 10.6618 8.7461 10.311C7.83036 8.92315 8.32604 7.30422 8.13785 5.79198C8.12859 5.44791 8.04815 5.10949 7.9016 4.79805C7.75504 4.48661 7.54556 4.2089 7.28635 3.98245C7.02714 3.756 6.72382 3.5857 6.39552 3.48229C6.06722 3.37889 5.72106 3.34462 5.37886 3.38165H5.35534C5.01515 3.34933 4.67196 3.38709 4.34694 3.4926C4.02192 3.5981 3.72198 3.76911 3.46564 3.99507C3.20929 4.22102 3.00199 4.49712 2.85652 4.80633C2.71105 5.11553 2.63051 5.45127 2.61987 5.79282C2.43084 7.29918 2.95592 9.10126 2.0175 10.3119C2.61827 10.6569 3.30363 10.8269 3.99601 10.8025C4.03186 11.1342 4.01199 11.4696 3.9372 11.7947C3.73387 11.9641 3.48914 12.0763 3.22813 12.1198C2.71038 12.2319 2.19956 12.3738 1.69825 12.545C1.29659 12.7549 0.959925 13.0706 0.724644 13.4579C0.489362 13.8452 0.364407 14.2895 0.363281 14.7427H5.1075C5.53872 13.9723 6.1995 13.3556 6.99779 12.9785C7.46041 12.7846 7.9556 12.6803 8.4571 12.671C8.4571 12.671 8.68141 12.3164 7.94294 12.1803C7.55045 12.0942 7.16968 11.9613 6.80876 11.7846C6.69619 11.6586 6.77348 10.8605 6.77348 10.8605Z" fill="currentColor" />
												<path d="M20.4765 10.8605C19.7825 10.8511 19.1028 10.6618 18.5039 10.311C19.4196 8.92315 18.924 7.30422 19.1122 5.79198C19.1214 5.44791 19.2019 5.10949 19.3484 4.79805C19.495 4.48661 19.7045 4.2089 19.9637 3.98245C20.2229 3.756 20.5262 3.5857 20.8545 3.48229C21.1828 3.37889 21.5289 3.34462 21.8711 3.38165H21.8947C22.2349 3.34933 22.578 3.38709 22.9031 3.4926C23.2281 3.5981 23.528 3.76911 23.7844 3.99507C24.0407 4.22102 24.248 4.49712 24.3935 4.80633C24.539 5.11553 24.6195 5.45127 24.6301 5.79282C24.8192 7.29918 24.2941 9.10126 25.2325 10.3119C24.6317 10.6569 23.9464 10.8269 23.254 10.8025C23.2181 11.1342 23.238 11.4696 23.3128 11.7947C23.5161 11.9641 23.7609 12.0763 24.0219 12.1198C24.5396 12.2319 25.0504 12.3738 25.5518 12.545C25.9534 12.7549 26.2901 13.0706 26.5254 13.4579C26.7606 13.8452 26.8856 14.2895 26.8867 14.7427H22.1425C21.7113 13.9723 21.0505 13.3556 20.2522 12.9785C19.7896 12.7846 19.2944 12.6803 18.7929 12.671C18.7929 12.671 18.5686 12.3164 19.3071 12.1803C19.6996 12.0942 20.0803 11.9613 20.4412 11.7846C20.5538 11.6586 20.4765 10.8605 20.4765 10.8605Z" fill="currentColor" />
											</svg>
										</div>
										<div className="card-info">
											<h6><CountUp className="odometer" enableScrollSpy={true} end={5000} /><span className="d-inline-block align-middle">+</span></h6>
											<p>Satisfied Clients</p>
										</div>
									</div>
									<div className="box-image-about-big">
										<img src="/assets/imgs/pages/home7/icon3.png" className="icon-3" alt="Vatech" />
										<img src="/assets/imgs/pages/home5/img-message.png" alt="Vatech" />
									</div>
								</div>
								<div className="image-right">
									<div className="box-image-about-big">
										<img src="/assets/imgs/pages/home7/icon2.png" className="icon-2" alt="Vatech" />
										<img src="/assets/imgs/pages/home6/blog.png" alt="Vatech" />
									</div>
									<div className="card-experience">
										<h3 className="heading-ag-3xl"><CountUp className="odometer" enableScrollSpy={true} end={10} /><span className="d-inline-block align-middle">k+</span></h3>
										<p className="sub-heading-ag-sm">years of experiences</p>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-6 mb-30">
							<div className="paragraph-base-fitree-medium text-uppercase secondery-500 mb-2">CONSUlting AGENCY</div>
							<h2 className="heading-ag-3xl dark-950 mb-3">
								Successfully Provide Best<br className="d-none d-lg-block" />
								<span className="primary-500">Business Consulting</span>
							</h2>
							<p className="paragraph-rubik-r neutral-1700 mb-30">Muchas variaciones de los pasajes de Lorem Ipsum disponibles, pero mayoría sufrió alteraciones en alguna manera, ya sea de los pasajes pasajes de Lorem Ipsum disponibles, pero mayoría sufriós</p>
							<div className="box-list-ticks mb-5">
								<ul className="list-tick mb-0">
									<li>
										<div className="card-image-circle-left mb-30">
											<div className="image">
												<img src="/assets/imgs/pages/home1/support.svg" alt="Vatech" />
											</div>
											<div className="info">
												Inventory management
												<p className="paragraph-medium mb-0 secondery-500-80">Muchas variaciones de los pasajes de.</p>
											</div>
										</div>
									</li>
									<li>
										<div className="card-image-circle-left">
											<div className="image">
												<img src="/assets/imgs/pages/home1/team.svg" alt="Vatech" />
											</div>
											<div className="info">
												Experienced Team
												<p className="paragraph-medium mb-0 secondery-500-80">Muchas variaciones de los pasajes de.</p>
											</div>
										</div>
									</li>
								</ul>
							</div>
							<Link href="#" className="btn btn-primary-md mb-3">
								About More
								<svg width={14} height={13} viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M13.5 6.5C13.5 7.0625 13.0312 7.53125 12.5 7.53125H8V12.0312C8 12.5625 7.53125 13 7 13C6.4375 13 6 12.5625 6 12.0312V7.53125H1.5C0.9375 7.53125 0.5 7.0625 0.5 6.5C0.5 5.96875 0.9375 5.53125 1.5 5.53125H6V1.03125C6 0.46875 6.4375 0 7 0C7.53125 0 8 0.46875 8 1.03125V5.53125H12.5C13.0312 5.5 13.5 5.96875 13.5 6.5Z" fill="currentColor" />
								</svg>
							</Link>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
