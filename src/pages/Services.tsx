import React from 'react'
import './css/Services.css'
import { Faq, ServicesItem, ServicesList, Testimonials } from '../components'

const Services = () => {
    return (
        <>
            <main className='services-main d-f'>
                <div className="services-main-info">
                    <div className="services-main-caption d-f">
                        <h1 className="page-title">Our Comprehensive <br /> Digital Solutions</h1>
                        <div className="services-main-start d-f align-center">
                            <a href="" className="d-b"><img src="/images/start-icon.png" alt="start" /></a>
                            <div className="start-name">Start a Project</div>
                        </div>
                    </div>
                    <p className="page-desc">
                        At NexGen, we offer a comprehensive suite of digital solutions designed to propel
                        your business to new heights in the digital realm. With a team of skilled professionals,
                        cutting-edge technologies, and a passion for innovation.
                    </p>
                    <div className="services-main-features d-f">
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
                <div className="services-main-action d-f jc-sb align-center">
                    <div className="services-main-view d-f align-center">
                        <a href="" className="d-b"><img src="/images/view.png" alt="View" /></a>
                        <div className="view-title">View Blog</div>
                    </div>
                    <div className="services-main-tag">Web Development.</div>
                </div>
            </main>
            <section className='page-bl'>
                <h2 className="page-bl-title">Our services</h2>
                <div className="services-content d-f">
                    <div className="services-box d-f">
                        {
                            ServicesList.map((service) => {
                                return (
                                    <ServicesItem
                                        key={service.id}
                                        {...service}
                                    />
                                )
                            })
                        }
                    </div>
                    <div className="services-projects d-f">
                        <div className="services-projects-item">
                            <div className="d-f jc-sb align-center">
                                <h3 className="projects-item-title">Web Design Projects</h3>
                                <div className="projects-item-all d-f align-center">
                                    <a href="" className="d-b"><img src="/images/all.png" alt="all" /></a>
                                    <div className="all-title">View All</div>
                                </div>
                            </div>
                            <div className="projects-item-box d-f jc-sb">
                                <div className="project-container">
                                    <div className="project-open d-f align-center">
                                        <a href="" className="d-b"><img src="/images/view.png" alt="View" /></a>
                                        <div className="open-title">Open project</div>
                                    </div>
                                </div>
                                <div className="project-container">
                                    <div className="project-open d-f align-center">
                                        <a href="" className="d-b"><img src="/images/view.png" alt="View" /></a>
                                        <div className="open-title">Open project</div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="services-projects-item">
                            <div className="d-f jc-sb align-center">
                                <h3 className="projects-item-title">Mobile App Development Projects</h3>
                                <div className="projects-item-all d-f align-center">
                                    <a href="" className="d-b"><img src="/images/all.png" alt="all" /></a>
                                    <div className="all-title">View All</div>
                                </div>
                            </div>
                            <div className="projects-item-box d-f jc-sb">
                                <div className="project-container">
                                    <div className="project-open d-f align-center">
                                        <a href="" className="d-b"><img src="/images/view.png" alt="View" /></a>
                                        <div className="open-title">Open project</div>
                                    </div>
                                </div>
                                <div className="project-container">
                                    <div className="project-open d-f align-center">
                                        <a href="" className="d-b"><img src="/images/view.png" alt="View" /></a>
                                        <div className="open-title">Open project</div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="services-projects-item">
                            <div className="d-f jc-sb align-center">
                                <h3 className="projects-item-title">Web Development Projects</h3>
                                <div className="projects-item-all d-f align-center">
                                    <a href="" className="d-b"><img src="/images/all.png" alt="all" /></a>
                                    <div className="all-title">View All</div>
                                </div>
                            </div>
                            <div className="projects-item-box d-f jc-sb">
                                <div className="project-container">
                                    <div className="project-open d-f align-center">
                                        <a href="" className="d-b"><img src="/images/view.png" alt="View" /></a>
                                        <div className="open-title">Open project</div>
                                    </div>
                                </div>
                                <div className="project-container">
                                    <div className="project-open d-f align-center">
                                        <a href="" className="d-b"><img src="/images/view.png" alt="View" /></a>
                                        <div className="open-title">Open project</div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="services-projects-item">
                            <div className="d-f jc-sb align-center">
                                <h3 className="projects-item-title">Digital Marketing Projects</h3>
                                <div className="projects-item-all d-f align-center">
                                    <a href="" className="d-b"><img src="/images/all.png" alt="all" /></a>
                                    <div className="all-title">View All</div>
                                </div>
                            </div>
                            <div className="projects-item-box d-f jc-sb">
                                <div className="project-container">
                                    <div className="project-open d-f align-center">
                                        <a href="" className="d-b"><img src="/images/view.png" alt="View" /></a>
                                        <div className="open-title">Open project</div>
                                    </div>
                                </div>
                                <div className="project-container">
                                    <div className="project-open d-f align-center">
                                        <a href="" className="d-b"><img src="/images/view.png" alt="View" /></a>
                                        <div className="open-title">Open project</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='services-stories'>
                <div className="page-bl-caption d-f jc-sb align-center">
                    <h2 className="caption-title">Success Stories</h2>
                    <div className="caption-all">
                        <a href="" className="d-b"><img src="/images/all.png" alt="all" /></a>
                        <div className="all-title">View all</div>
                    </div>
                </div>
                <div className="page-bl">
                    <div className="d-f jc-sb">
                        <div className="services-stories-card">
                            <div className="d-f jc-sb align-center">
                                <div className="card-caption d-f align-center">
                                    <div><img src="/images/stories1.png" alt="stories1" /></div>
                                    <h3 className="card-title">Klothink</h3>
                                </div>
                                <div className="card-visit d-f align-center">
                                    <a href="" className="d-b"><img src="/images/all.png" alt="All" /></a>
                                    <div className="visit-title">Visit Website</div>
                                </div>
                            </div>
                            <div className="card-info d-f">
                                <div className="card-info-item d-f align-center">
                                    <div className="title">Industry</div>
                                    <div><img src="/images/shape.png" alt="shape" /></div>
                                    <div className="name">E-commerce</div>
                                </div>
                                <div className="card-info-item d-f align-center">
                                    <div className="title">Service Utilized</div>
                                    <div><img src="/images/shape.png" alt="shape" /></div>
                                    <div className="name">Design & Development</div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="services-stories-tabs d-f">
                                <button className='tabs-btn'>Challenge</button>
                                <button className='tabs-btn tabs-btn__active'>Solution</button>
                                <button className='tabs-btn'>Results</button>
                            </div>
                            <div className="servises-stories-about">
                                <h3 className="title">Solution</h3>
                                <p className="desc">
                                    Our team conducted a thorough analysis of their target audience and business objectives.
                                    We designed a modern and intuitive website with seamless navigation and a mobile-responsive layout.
                                    Additionally, we integrated an efficient checkout process and optimized the site for search engines.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="page-bl">
                    <div className="d-f jc-sb">
                        <div className="services-stories-card">
                            <div className="d-f jc-sb align-center">
                                <div className="card-caption d-f align-center">
                                    <div><img src="/images/stories2.png" alt="stories2" /></div>
                                    <h3 className="card-title">Fitness Tracker App</h3>
                                </div>
                                <div className="card-visit d-f align-center">
                                    <a href="" className="d-b"><img src="/images/all.png" alt="All" /></a>
                                    <div className="visit-title">Visit Website</div>
                                </div>
                            </div>
                            <div className="card-info d-f">
                                <div className="card-info-item d-f align-center">
                                    <div className="title">Industry</div>
                                    <div><img src="/images/shape.png" alt="shape" /></div>
                                    <div className="name">Health & Fitness</div>
                                </div>
                                <div className="card-info-item d-f align-center">
                                    <div className="title">Service Utilized</div>
                                    <div><img src="/images/shape.png" alt="shape" /></div>
                                    <div className="name">Mobile App Development</div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="services-stories-tabs d-f">
                                <button className='tabs-btn'>Challenge</button>
                                <button className='tabs-btn tabs-btn__active'>Solution</button>
                                <button className='tabs-btn'>Results</button>
                            </div>
                            <div className="servises-stories-about">
                                <h3 className="title">Solution</h3>
                                <p className="desc">
                                    Leveraging our expertise in app development, we built an interactive mobile app 
                                    with user-friendly features. The app allowed users to set personalized fitness goals, 
                                    track their progress, and share achievements on social media platforms. Real-time 
                                    data synchronization enabled users to access their data on multiple devices.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Testimonials/>
            <Faq/>
        </>
    )
}

export default Services