import React from 'react'
import './css/Blogs.css'
import { Faq, Testimonials } from '../components'

const Blogs = () => {
    return (
        <>
            <section className='page-bl'>
                <div className="page-bl-caption d-f jc-sb align-center">
                    <h1 className="caption-title">Our blogs</h1>
                    <div className="caption-tabs d-f">
                        <button className='tabs-btn'>Business</button>
                        <button className='tabs-btn tabs-btn__active'>Design</button>
                        <button className='tabs-btn'>Development</button>
                    </div>
                </div>
                <div className="blogs-trends d-f">
                    <div><img src="/images/blogs-trends.png" alt="blogs-trends" /></div>
                    <div className="blogs-trends-info">
                        <h3 className="blogs-trends-title">Web Design Trends Shaping 2024</h3>
                        <div className="blogs-trends-features d-f">
                            <div className="features-item d-f align-center">
                                <div className="features-item-title">Category</div>
                                <div><img src="/images/shape.png" alt="shape" /></div>
                                <div className="features-item-value">Design</div>
                            </div>
                            <div className="features-item d-f align-center">
                                <div className="features-item-title">Read Time</div>
                                <div><img src="/images/shape.png" alt="shape" /></div>
                                <div className="features-item-value">6 Mins</div>
                            </div>
                            <div className="features-item d-f align-center">
                                <div className="features-item-title">Author</div>
                                <div><img src="/images/shape.png" alt="shape" /></div>
                                <div className="features-item-value">Laura Turner</div>
                            </div>
                        </div>
                        <p className="blogs-trends-desc">
                            Stay ahead of the design curve with insights into the latest web design trends.
                            From immersive user experiences to bold color choices, explore the design elements
                            that will dominate the digital landscape in 2023 and beyond.
                        </p>
                        <div className="d-f jc-sb align-center">
                            <div className="blogs-trends-read d-f align-center">
                                <a href="" className="d-b"><img src="/images/all.png" alt="all" /></a>
                                <div className="read-title">Read Full Blog</div>
                            </div>
                            <div className="blogs-trends-date d-f align-center">
                                <div className="date-title">Published Date</div>
                                <div className="date-value">7th February 2023</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="blogs-box d-f">
                    <div className="blogs-item">
                        <div><img src="/images/blogs1.png" alt="blogs1" /></div>
                        <h3 className="blogs-item-title">Optimizing Mobile User Experience for Higher Conversions</h3>
                        <p className="blogs-item-desc">
                            Mobile devices dominate digital interactions, making mobile
                            user experience crucial for conversion rates. Explore mobile
                            design best practices...
                        </p>
                        <div className="blogs-item-read d-f align-center">
                            <a href="" className="d-b"><img src="/images/all.png" alt="all" /></a>
                            <div className="read-title">Read Full Blog</div>
                        </div>
                    </div>
                    <div className="blogs-item">
                        <div><img src="/images/blogs2.png" alt="blogs2" /></div>
                        <h3 className="blogs-item-title">Mastering the Art of Minimalistic Design</h3>
                        <p className="blogs-item-desc">
                            Simplicity and elegance take center stage in minimalistic design.
                            Learn the principles of minimalism, how to effectively communicate with fewer elements...
                        </p>
                        <div className="blogs-item-read d-f align-center">
                            <a href="" className="d-b"><img src="/images/all.png" alt="all" /></a>
                            <div className="read-title">Read Full Blog</div>
                        </div>
                    </div>
                    <div className="blogs-item">
                        <div><img src="/images/blogs3.png" alt="blogs3" /></div>
                        <h3 className="blogs-item-title">The Psychology of Visual Design in Branding</h3>
                        <p className="blogs-item-desc">
                            Uncover the impact of visual elements in branding and how they influence 
                            customer perceptions and emotions. Explore color psychology, typography choices...
                        </p>
                        <div className="blogs-item-read d-f align-center">
                            <a href="" className="d-b"><img src="/images/all.png" alt="all" /></a>
                            <div className="read-title">Read Full Blog</div>
                        </div>
                    </div>
                </div>
            </section>
            <Testimonials/>
            <Faq/>
        </>
    )
}

export default Blogs