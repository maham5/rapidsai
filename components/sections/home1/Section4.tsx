

import Link from "next/link"
import Image from "next/image";
import blc from "@/public/assets/imgs/template/bbbi.png"
import gis from "@/public/assets/imgs/template/gisss__1_-removebg-preview.png"
import ai from "@/public/assets/imgs/template/aiouu-removebg-preview.png"
import bio from "@/public/assets/imgs/template/bio-removebg-preview.png"


export default function Section4() {
	return (
		<>

			<section className="position-relative overflow-hidden box-project">
				<h1 className="trusted-title">Our Services</h1>



<div className="trusted-grid1">
  <div className="trusted-card">
    {/* <!-- First Logo --> */}
  <Image src={blc} alt="blockchain"/>
  </div>
  <div className="trusted-card">
    {/* <!-- Second Logo --> */}
 <Image src={ai} alt="blockchain"/>
  </div>
  <div className="trusted-card">
    {/* <!-- Third Logo --> */}
    <Image src={gis} alt="blockchain"/>
  </div>
  <div className="trusted-card">
    {/* <!-- Fourth Logo --> */}
 <Image src={bio} alt="blockchain" 
  height={150}/>
  </div>
</div>


			</section>
		</>
	)
}
