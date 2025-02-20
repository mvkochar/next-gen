import React from 'react'
import './css/Projects.css'
import { Faq, Testimonials, Works } from '../components'

const Projects = () => {
    return (
        <>
            <main className='projects-main d-f jc-sb align-center'>
                <div>
                    <div className="projects-main-caption d-f">
                        <h1 className="page-title">Empowering Your <br /> Digital Vision</h1>
                        <div className="projects-main-start d-f align-center">
                            <a href="" className="d-b"><img src="/images/start-icon.png" alt="start" /></a>
                            <div className="start-name">Start a Project</div>
                        </div>
                    </div>
                    <p className="page-desc">
                        At NexGen, we are committed to empowering your digital vision with innovative solutions
                        tailored to your unique needs. Our team of skilled professionals, coupled with cutting-edge
                        technologies, ensures that we deliver exceptional results that elevate your online presence.
                    </p>
                </div>
                <div className="projects-main-action d-f jc-sb align-center">
                    <div className="projects-main-view d-f align-center">
                        <a href="" className="d-b"><img src="/images/view.png" alt="View" /></a>
                        <div className="view-title">View Blog</div>
                    </div>
                    <div className="projects-main-tag">Web Development.</div>
                </div>
            </main>
            <section className='page-bl'>
                <h2 className="page-bl-title">Key Features of Our Projects</h2>
                <div className="projects-features-box d-f">
                    <div className="projects-features-item">
                        <div><img src="/images/projects-features1.png" alt="projects-features1" /></div>
                        <h3 className="features-item-title">Strategic Planning</h3>
                        <p className="features-item-desc">
                            Every project begins with thorough research and strategic planning
                            to ensure a holistic understanding of our clients' objectives.
                        </p>
                    </div>
                    <div className="projects-features-item">
                        <div><img src="/images/projects-features2.png" alt="projects-features2" /></div>
                        <h3 className="features-item-title">Customized Solutions</h3>
                        <p className="features-item-desc">
                            We believe in tailoring our services to suit each project's unique
                            requirements, resulting in solutions.
                        </p>
                    </div>
                    <div className="projects-features-item">
                        <div><img src="/images/projects-features3.png" alt="projects-features3" /></div>
                        <h3 className="features-item-title">User-Centric Approach</h3>
                        <p className="features-item-desc">
                            Our projects are designed with the end-user in mind, prioritizing seamless
                            user experiences and intuitive interfaces.
                        </p>
                    </div>
                    <div className="projects-features-item">
                        <div><img src="/images/projects-features4.png" alt="projects-features4" /></div>
                        <h3 className="features-item-title">Timely Delivery</h3>
                        <p className="features-item-desc">
                            We adhere to strict timelines and project schedules to ensure 
                            timely delivery without compromising on quality.
                        </p>
                    </div>
                </div>
            </section>
            <section className='projects-showcase'>
                <div className="page-bl-caption d-f jc-sb align-center">
                    <h2 className="page-bl-title">Projects Showcase</h2>
                    <div className="projects-showcase-tabs d-f">
                        <button className='tabs-btn'>Web Design</button>
                        <button className='tabs-btn tabs-btn__active'>Web Development</button>
                        <button className='tabs-btn'>Marketing</button>
                    </div>
                </div>
                <Works/>
            </section>
            <Testimonials/>
            <Faq/>
        </>
    )
}

export default Projects