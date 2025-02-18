import React from 'react'
import './Footer.css'


const Footer = () => {
  return (
    <footer>
      <div className="footer-touch d-f jc-sb">
        <div>
          <h2 className="footer-touch-title">Ready to Transform Your Digital Presence?</h2>
          <p className="footer-touch-desc">
            Take the first step towards digital success with NexGen by your side.
            Our team of experts is eager to craft tailored solutions that drive growth for your business.
          </p>
        </div>
        <div className="footer-touch-action d-f jc-sb align-center">
          <div className="action-name">Get in Touch</div>
          <a href="" className="d-b">
            <svg width="28" height="24" viewBox="0 0 28 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g filter="url(#filter0_d_18_4343)">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.625 0.375001L22.75 0.375C22.9821 0.375 23.2046 0.467187 23.3687 0.631282C23.5328 0.795376 23.625 1.01794 23.625 1.25V14.375C23.625 14.8582 23.2332 15.25 22.75 15.25C22.2668 15.25 21.875 14.8582 21.875 14.375V3.36244L5.86872 19.3687C5.52701 19.7104 4.97299 19.7104 4.63128 19.3687C4.28957 19.027 4.28957 18.473 4.63128 18.1313L20.6376 2.125L9.625 2.125C9.14175 2.125 8.75 1.73325 8.75 1.25C8.75 0.766751 9.14175 0.375001 9.625 0.375001Z" fill="#E7BEB1" />
              </g>
              <defs>
                <filter id="filter0_d_18_4343" x="0.375" y="0.375" width="27.25" height="27.25" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="2" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_18_4343" />
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_18_4343" result="shape" />
                </filter>
              </defs>
            </svg>
          </a>
        </div>
      </div>
      <div className="footer-follow d-f">
        <div className="follow-wr d-f">
          <div className="follow-caption d-f align-center">
            <div><img src="/images/shape.png" alt="shape" /></div>
            <div>Follow Us on Social Media</div>
          </div>
          <div className="follow-caption d-f align-center">
            <div><img src="/images/shape.png" alt="shape" /></div>
            <div>Follow Us on Social Media</div>
          </div>
          <div className="follow-caption d-f align-center">
            <div><img src="/images/shape.png" alt="shape" /></div>
            <div>Follow Us on Social Media</div>
          </div>
          <div className="follow-caption d-f align-center">
            <div><img src="/images/shape.png" alt="shape" /></div>
            <div>Follow Us on Social Media</div>
          </div>
          <div className="follow-caption d-f align-center">
            <div><img src="/images/shape.png" alt="shape" /></div>
            <div>Follow Us on Social Media</div>
          </div>
        </div>
      </div>
      <div className="footer-bar d-f">
        <div className="footer-social-bl">
          <div className="d-f jc-sb">
            <div><img src="/images/social1.png" alt="social1" /></div>
            <a href="" className="d-b"><img src="/images/all.png" alt="all" /></a>
          </div>
          <h3 className="social-bl-title">Instagram</h3>
          <p className="social-bl-desc">
            Share visually appealing snippets of our latest web projects.
          </p>
        </div>
        <div className="footer-social-bl">
          <div className="d-f jc-sb">
            <div><img src="/images/social2.png" alt="social2" /></div>
            <a href="" className="d-b"><img src="/images/all.png" alt="all" /></a>
          </div>
          <h3 className="social-bl-title">Twitter</h3>
          <p className="social-bl-desc">
            Tweet about interesting coding challenges you've overcome.
          </p>
        </div>
        <div className="footer-info-bl d-f jc-sb">
          <div>
            <h3 className="info-bl-title">Home</h3>
            <ul className="info-bl-list">
              <li>Why Us</li>
              <li>About Us</li>
              <li>Testimonials</li>
              <li>FAQ’s</li>
            </ul>
          </div>
          <div>
            <h3 className="info-bl-title">Services</h3>
            <ul className="info-bl-list">
              <li>Web Development</li>
              <li>App Development</li>
              <li>Web Design</li>
              <li>Digital Marketing</li>
            </ul>
          </div>
          <div>
            <h3 className="info-bl-title">Projects</h3>
            <ul className="info-bl-list">
              <li>Klothink</li>
              <li>Zenith</li>
              <li>Novus</li>
              <li>Apex</li>
            </ul>
          </div>
          <div>
            <h3 className="info-bl-title">Blogs</h3>
            <ul className="info-bl-list">
              <li>Business</li>
              <li>Design <span>Soon</span></li>
              <li>Development <span>Soon</span></li>
            </ul>
          </div>
        </div>
        <div className="footer-social-bl">
          <div className="d-f jc-sb">
            <div><img src="/images/social3.png" alt="social3" /></div>
            <a href="" className="d-b"><img src="/images/all.png" alt="all" /></a>
          </div>
          <h3 className="social-bl-title">Dribbble</h3>
          <p className="social-bl-desc">
            Showcase design elements of our web projects.
          </p>
        </div>
        <div className="footer-social-bl">
          <div className="d-f jc-sb">
            <div><img src="/images/social4.png" alt="social4" /></div>
            <a href="" className="d-b"><img src="/images/all.png" alt="all" /></a>
          </div>
          <h3 className="social-bl-title">Behance</h3>
          <p className="social-bl-desc">
            Create detailed presentations for our projects.
          </p>
        </div>
        <div>
           <div className="footer-subscribe-bl d-f jc-sb">
              <div>
                 <h4 className="subscribe-bl-above">Newsletter</h4>
                 <h3 className="subscribe-bl-title">Subscribe To our Newsletter</h3>
              </div>
              <form action='' className="subscribe-bl-fm d-f">
                <input type="email" name="subscribeEmail" placeholder='Enter your email' />
                <button type="button" className='btn-clear d-b'><img src="/images/all.png" alt="all" /></button>
              </form>
           </div>
           <div className="footer-rights-bl d-f jc-sb">
            <div>&copy; 2024 NextGen. All rights reserved.</div>
            <div className="footer-terms d-f align-center">
              <a href="" className="d-b">Terms & Conditions</a>
              <div className="footer-terms-line"></div>
              <a href="" className="d-b">Privacy Policy</a>
            </div>
           </div>
        </div>
      </div>

    </footer>
  )
}

export default Footer