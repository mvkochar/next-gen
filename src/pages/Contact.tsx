import React from 'react'
import './css/Contact.css'
import { Faq, Testimonials } from '../components'

const Contact = () => {
    return (
        <>
            <main className='contact-main d-f'>
                <div className="contact-main-info">
                    <div className="contact-main-caption d-f">
                        <h1 className="page-title">Get in Touch <br /> with Us Today!</h1>
                        <div className="contact-main-start d-f align-center">
                            <a href="" className="d-b"><img src="/images/start-icon.png" alt="start" /></a>
                            <div className="start-name">Start a Project</div>
                        </div>
                    </div>
                    <p className="page-desc">
                        At NexGen, we value your inquiries, feedback, and collaborations.
                        Whether you are interested in our digital services, have questions
                        about our projects, or want to explore potential partnerships, we
                        encourage you to reach out to our dedicated team.
                    </p>
                    <div className="contact-main-features d-f">
                        <div className="features-wr d-f">
                            <div className="features-caption d-f align-center">
                                <div><img src="/images/shape.png" alt="shape" /></div>
                                <div>Digital Marketing</div>
                            </div>
                            <div className="features-caption d-f align-center">
                                <div><img src="/images/shape.png" alt="shape" /></div>
                                <div>Website Design</div>
                            </div>
                            <div className="features-caption d-f align-center">
                                <div><img src="/images/shape.png" alt="shape" /></div>
                                <div>Branding</div>
                            </div>
                            <div className="features-caption d-f align-center">
                                <div><img src="/images/shape.png" alt="shape" /></div>
                                <div>Website Development</div>
                            </div>
                            <div className="features-caption d-f align-center">
                                <div><img src="/images/shape.png" alt="shape" /></div>
                                <div>Mobile App Development</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="contact-main-stats d-f">
                    <div className="stats-item">
                        <dl>
                            <dt>Clients</dt>
                            <dd>200+</dd>
                        </dl>
                    </div>
                    <div className="stats-item">
                        <dl>
                            <dt>Projects</dt>
                            <dd>280+</dd>
                        </dl>
                    </div>
                    <div className="stats-item">
                        <dl>
                            <dt>Happy Clients</dt>
                            <dd>100%</dd>
                        </dl>
                    </div>
                    <div className="stats-item">
                        <dl>
                            <dt>Follower</dt>
                            <dd>420K</dd>
                        </dl>
                    </div>
                    <div className="stats-item">
                        <dl>
                            <dt>Years Of Experience</dt>
                            <dd>10+</dd>
                        </dl>
                    </div>
                    <div className="stats-item">
                        <div className="stats-item-reach d-f align-center">
                            <a href="" className="d-b"><img src="/images/know.png" alt="know" /></a>
                            <div className="reach-title">Reach Us</div>
                        </div>
                    </div>
                </div>
            </main>
            <div className="contact-content d-f">
                <div className="contact-content-card">
                    <div className="contact-content-tabs d-f">
                        <button className="tabs-btn">Phone Number</button>
                        <button className="tabs-btn tabs-btn__active">Emails</button>
                        <button className="tabs-btn">Office Locations</button>
                    </div>
                    <div className="contact-content-links d-f">
                        <div>
                            <div className="links-title">General Inquiries</div>
                            <div className="link-bl d-f jc-sb align-center">
                                <div className="link-bl-title">info@NexGen.com</div>
                                <a href="" className="d-b"><img src="/images/all.png" alt="all" /></a>
                            </div>
                        </div>
                        <div>
                            <div className="links-title">Business Collaborations</div>
                            <div className="link-bl d-f jc-sb align-center">
                                <div className="link-bl-title">partnerships@NexGen.com</div>
                                <a href="" className="d-b"><img src="/images/all.png" alt="all" /></a>
                            </div>
                        </div>
                        <div>
                            <div className="links-title">Job Opportunities</div>
                            <div className="link-bl d-f jc-sb align-center">
                                <div className="link-bl-title">careers@NexGen.com</div>
                                <a href="" className="d-b"><img src="/images/all.png" alt="all" /></a>
                            </div>
                        </div>
                    </div>
                </div>
                <form action="" className='contact-content-fm'>
                    <div className="input-bl d-f">
                        <div>
                            <label htmlFor="contactFName">First Name</label>
                            <input type="text" name='contactFName' id='contactFName' placeholder='Enter First Name' />
                        </div>
                        <div>
                            <label htmlFor="contactLName">Last Name</label>
                            <input type="text" name='contactLName' id='contactLName' placeholder='Enter Last Name' />
                        </div>
                    </div>
                    <div className="input-bl d-f">
                        <div>
                            <label htmlFor="contactEmail">Email</label>
                            <input type="email" name='contactEmail' id='contactEmail' placeholder='Enter your Email' />
                        </div>
                        <div>
                            <label htmlFor="contactPhone">Phone number</label>
                            <div className="phone-bl d-f align-center">
                                <div><img src="/images/flag.png" alt="Flag" /></div>
                                <button className='btn-clear d-b'>
                                    <svg width="17" height="21" viewBox="0 0 17 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16 12L8.5 19.5M8.5 19.5L1 12M8.5 19.5L8.5 1.5" stroke="#E7BEB1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </button>
                                <input type="tel" name="contactPhone" id="contactPhone" placeholder='Enter Phone Number' />
                            </div>
                        </div>
                    </div>
                    <div className="input-bl">
                        <label htmlFor="contactMsg">Message</label>
                        <textarea name="contactMsg" id="contactMsg" placeholder='Enter your Message'></textarea>
                    </div>
                    <div className="d-f jc-sb align-center">
                        <div className="check-bl d-f">
                            <input type="checkbox" name="contactAgree" id="contactAgree" />
                            <label htmlFor="contactAgree">I agree with Terms of Use and Privacy Policy</label>
                        </div>
                        <button type='button' className='send-btn'>Send Your Message</button>
                    </div>
                </form>
            </div>
            <Testimonials/>
            <Faq/>
        </>
    )
}

export default Contact