import React from 'react'
import './css/About.css'
import { MembersItem, MembersList } from '../components'

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
                        MembersList.map((member)=> {
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
        </>
    )
}

export default About