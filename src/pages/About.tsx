import React from 'react'
import './css/About.css'
import { Faq, MembersItem, MembersList, Testimonials } from '../components'

const About = () => {
    return (
        <>
            <main className='about-main d-f'>
                <div className="about-main-info">
                    <div className="about-main-caption d-f">
                        <h1 className="page-title">Elevating Brands <br /> in the Digital Age</h1>
                        <div className="about-main-start d-f align-center">
                            <a href="" className="d-b"><img src="/images/start-icon.png" alt="start" /></a>
                            <div className="start-name">Start a Project</div>
                        </div>
                    </div>
                </div>
                <div className="about-main-stats">
                    <div className="stats-box d-f">
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
                    </div>
                    <div className="stats-more d-f align-center">
                        <button className='btn-clear d-b'><img src="/images/know.png" alt="know" /></button>
                        <div className="more-title">Know More</div>
                    </div>
                </div>
            </main>
            <section className='page-bl'>
                <div className="page-bl-caption d-f jc-sb align-center">
                    <h2 className="caption-title">Meet the brilliant minds behind NexGen</h2>
                    <div className="caption-all">
                        <a href="" className="d-b"><img src="/images/all.png" alt="all" /></a>
                        <div className="all-title">ALL Members</div>
                    </div>
                </div>
                <div className="about-members-box d-f">
                    {
                        MembersList.map((member) => {
                            return (
                                <MembersItem
                                    key={member.id}
                                    {...member}
                                />
                            )
                        })
                    }
                </div>
            </section>
            <section className='about-achievements'>
                <h2 className="page-bl-title">Our Achievements</h2>
                <div className="about-achievements-box d-f">
                    <div className="about-achievements-item">
                        <div className="achievements-item-date">September 2023</div>
                        <h3 className="achievements-item-title">Global Recognition for Innovation</h3>
                        <p className="achievements-item-desc">
                            In 2023, our digital agency gained global acclaim for innovative solutions,
                            setting new standards in the ever-evolving digital landscape.
                        </p>
                    </div>
                    <div className="about-achievements-item">
                        <div className="achievements-item-date">March 2019</div>
                        <h3 className="achievements-item-title">Industry Leadership Acknowledged</h3>
                        <p className="achievements-item-desc">
                            Recognized as an industry leader in 2019, our agency received prestigious awards,
                            affirming our commitment to excellence and client satisfaction.
                        </p>
                    </div>
                    <div className="about-achievements-item">
                        <div className="achievements-item-date">August 2015</div>
                        <h3 className="achievements-item-title">Expansion into International Markets</h3>
                        <p className="achievements-item-desc">
                            Expanding horizons in 2015, our agency successfully entered international markets,
                            establishing a global presence and serving clients on a broader scale.
                        </p>
                    </div>
                    <div className="about-achievements-item">
                        <div className="achievements-item-date">January 2010</div>
                        <h3 className="achievements-item-title">Pioneering the Digital <br /> Frontier</h3>
                        <p className="achievements-item-desc">
                            In 2010, our agency was born, pioneering the digital frontier and
                            establishing core principles that have guided us through a decade of innovation.
                        </p>
                    </div>
                </div>
            </section>
            <section className='page-bl'>
                <h2 className="page-bl-title">Awards & Recognitions</h2>
                <div className="about-awards-box d-f">
                    <div className="about-awards-item">
                        <div className="d-f jc-sb align-center">
                            <div className="awards-item-date d-f align-center">
                                <div className="date-title">Date</div>
                                <div><img src="/images/shape.png" alt="shape" /></div>
                                <div className="date-value">October 2017</div>
                            </div>
                            <div><img src="/images/award.png" alt="Award" /></div>
                        </div>
                        <h3 className="awards-item-title">Digital Excellence Award</h3>
                        <p className="awards-item-desc">
                            Recognition for outstanding contributions to the digital industry,
                            celebrating our ability to deliver exceptional web design and development
                            solutions that push the boundaries of creativity and functionality.
                        </p>
                    </div>
                    <div className="about-awards-item">
                        <div className="d-f jc-sb align-center">
                            <div className="awards-item-date d-f align-center">
                                <div className="date-title">Date</div>
                                <div><img src="/images/shape.png" alt="shape" /></div>
                                <div className="date-value">March 2019</div>
                            </div>
                            <div><img src="/images/award.png" alt="Award" /></div>
                        </div>
                        <h3 className="awards-item-title">Top Mobile App Development Agency</h3>
                        <p className="awards-item-desc">
                            Recognized as a top mobile app development agency by industry experts,
                            highlighting our proficiency in delivering seamless and user-centric mobile applications.
                        </p>
                    </div>
                    <div className="about-awards-item">
                        <div className="d-f jc-sb align-center">
                            <div className="awards-item-date d-f align-center">
                                <div className="date-title">Date</div>
                                <div><img src="/images/shape.png" alt="shape" /></div>
                                <div className="date-value">July 2022</div>
                            </div>
                            <div><img src="/images/award.png" alt="Award" /></div>
                        </div>
                        <h3 className="awards-item-title">Best Digital Marketing Campaign</h3>
                        <p className="awards-item-desc">
                            Awarded for an exceptional digital marketing campaign with outstanding
                            results, showcasing our data-driven strategies and targeted marketing
                            efforts that achieved remarkable business growth for our clients.
                        </p>
                    </div>
                    <div className="about-awards-item">
                        <div className="d-f jc-sb align-center">
                            <div className="awards-item-date d-f align-center">
                                <div className="date-title">Date</div>
                                <div><img src="/images/shape.png" alt="shape" /></div>
                                <div className="date-value">November 2024</div>
                            </div>
                            <div><img src="/images/award.png" alt="Award" /></div>
                        </div>
                        <h3 className="awards-item-title">Innovative Tech Startup Award</h3>
                        <p className="awards-item-desc">
                            Recognition of our pioneering efforts as a technology startup, 
                            acknowledging our commitment to exploring and implementing cutting-edge 
                            technologies to drive innovation in the digital space.
                        </p>
                    </div>
                </div>
            </section>
            <Testimonials/>
            <Faq/>
        </>
    )
}

export default About