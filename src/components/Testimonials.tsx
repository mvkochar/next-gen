import React from 'react'

const Testimonials = () => {
    return (
        <section className='page-bl'>
            <div className="page-bl-caption">
                <h2 className="caption-title">Testimonials</h2>
                <div className="caption-all">
                    <a href="" className="d-b"><img src="/images/all.png" alt="all" /></a>
                    <div className="all-title">ALL Testimonials</div>
                </div>
            </div>
            <div className="home-testimonials-box d-f">
                <div className="home-testimonials-item">
                    <h3 className="testimonials-item-title">NexGen turned our business around!</h3>
                    <p className="testimonials-item-desc">
                        Their digital marketing strategies helped us reach new customers and increase our revenue
                        by 30% within just a few months. Highly recommended!
                    </p>
                    <div className="testimonials-item-author d-f align-center">
                        <div><img src="/images/testimonials-avatars/1.png" alt="testimonials-avatars1" /></div>
                        <div style={{ marginLeft: "15px", marginRight: "65px" }}>
                            <div className="author-name">Sarah Thompson</div>
                            <div className="author-pos">CEO of BlueBloom</div>
                        </div>
                        <a href="" className="d-b"><img src="/images/detail.png" alt="detail" /></a>
                    </div>
                </div>
                <div className="home-testimonials-item">
                    <h3 className="testimonials-item-title">NexGen turned our business around!</h3>
                    <p className="testimonials-item-desc">
                        Their digital marketing strategies helped us reach new customers and increase our revenue
                        by 30% within just a few months. Highly recommended!
                    </p>
                    <div className="testimonials-item-author d-f align-center">
                        <div><img src="/images/testimonials-avatars/2.png" alt="testimonials-avatars2" /></div>
                        <div style={{ width: "223px", marginLeft: "15px" }}>
                            <div className="author-name">Wade Warren</div>
                            <div className="author-pos">Art Director</div>
                        </div>
                        <a href="" className="d-b"><img src="/images/detail.png" alt="detail" /></a>
                    </div>
                </div>
                <div className="home-testimonials-item">
                    <h3 className="testimonials-item-title">Working with NexGen was a pleasure.</h3>
                    <p className="testimonials-item-desc">
                        Their web design team created a stunning website that perfectly captured our brand's essence.
                        The feedback from our customers has been overwhelmingly positive.
                    </p>
                    <div className="testimonials-item-author d-f align-center">
                        <div><img src="/images/testimonials-avatars/3.png" alt="testimonials-avatars3" /></div>
                        <div style={{ width: "223px", marginLeft: "15px" }}>
                            <div className="author-name">Lisa Williams</div>
                            <div className="author-pos">CEO Of HealthTech</div>
                        </div>
                        <a href="" className="d-b"><img src="/images/detail.png" alt="detail" /></a>
                    </div>
                </div>
                <div className="home-testimonials-item">
                    <h3 className="testimonials-item-title">NexGen's web design team brought our vision to life.</h3>
                    <p className="testimonials-item-desc">
                        Their responsive design ensures our website looks stunning on all devices,
                        contributing to increased user engagement.
                    </p>
                    <div className="testimonials-item-author d-f align-center">
                        <div><img src="/images/testimonials-avatars/4.png" alt="testimonials-avatars4" /></div>
                        <div style={{ width: "223px", marginLeft: "15px" }}>
                            <div className="author-name">Jennifer Lee</div>
                            <div className="author-pos">COO of Foodie Haven</div>
                        </div>
                        <a href="" className="d-b"><img src="/images/detail.png" alt="detail" /></a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonials