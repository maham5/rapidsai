'use client'
import Link from "next/link"
import { useState } from 'react'
import ModalVideo from 'react-modal-video'

export default function Section6() {
	  const lat = 33.647279;
  const lng = 72.99987;
  const zoom = 17;

  const src = `https://www.google.com/maps?q=${lat},${lng}&z=${zoom}&output=embed`;

	
	return (
		<>
  <section className="contact-section">
      <div className="contact-container">
        {/* Left Side - Form */}
        <div className="contact-form-wrapper">
          <span className="contact-subtitle">Contact Us</span>
          <h2 className="contact-title">Let's Get In Touch</h2>

          <form className="contact-form">
            <div className="input-row1">
              <input type="text" placeholder="Full Name" className="input-field" />
              <input type="text" placeholder="Phone Number" className="input-field" />
            </div>

            <input type="email" placeholder="Email Address Here" className="input-field" />

            <select className="input-field">
              <option>Estimated Budget</option>
              <option>$500 - $1000</option>
              <option>$1000 - $5000</option>
              <option>$5000+</option>
            </select>

            <select className="input-field">
              <option>Industry</option>
              <option>IT</option>
              <option>Health</option>
              <option>Education</option>
            </select>

            <textarea rows={4} placeholder="Message Here" className="input-field"></textarea>

            <button type="submit" className="contact-button">Contact Us</button>
          </form>
        </div>

        {/* Right Side - Map */}
        <div className="contact-map">
          <iframe
            title="SINES NUST Map"
            src="https://www.google.com/maps?q=33.647279,72.99987&z=17&output=embed"
            loading="lazy"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>



		
		</>
	)
}
