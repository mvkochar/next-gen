import React from 'react'

const Works = () => {
    return (
        <div className="home-works-box d-f">
            <div className="home-works-item d-f">
                <div className="works-item-card">
                    <div className="d-f jc-sb">
                        <div className="card-caption d-f align-center">
                            <div><img src="/images/works1.png" alt="works1" /></div>
                            <h3 className="card-title">Zenith Fitness App</h3>
                        </div>
                        <div className="card-details d-f align-center">
                            <a href="" className="d-b"><img src="/images/all.png" alt="all" /></a>
                            <div className="card-details-title">Details</div>
                        </div>
                    </div>
                    <div className="works-item-category d-f align-center">
                        <div className="category-title">Category</div>
                        <div><img src="/images/shape.png" alt="Shape" /></div>
                        <div className="category-name">Mobile App Development</div>
                    </div>
                    <div className="works-item-category d-f align-center" style={{ marginTop: "10px" }}>
                        <div className="category-title">Time Taken</div>
                        <div><img src="/images/shape.png" alt="Shape" /></div>
                        <div className="category-name">6 months</div>
                    </div>
                    <p className="works-item-desc">
                        An all-in-one health and wellness app that offers personalized
                        fitness plans, nutrition guidance
                    </p>
                </div>
                <div><img src="/images/works1-pic.png" alt="works1-pic" width={579.33} /></div>
                <div>
                    <div className="works-item-technologies">
                        <h3 className="technologies-title">Technologies Used</h3>
                        <div className="technologies-box d-f">
                            <div className="technologies-item">React Native</div>
                            <div className="technologies-item">Firebase</div>
                            <div className="technologies-item">Redux</div>
                            <div className="technologies-item">Rest Api</div>
                            <div className="technologies-item">MongoDb</div>
                        </div>
                    </div>
                    <div className="worsks-item-team d-f align-center">
                        <h3 className="team-title">Team members</h3>
                        <div className="team-box d-f">
                            <div><img src="/images/team-avatars/1.png" alt="team-avatars1" /></div>
                            <div><img src="/images/team-avatars/2.png" alt="team-avatars2" /></div>
                            <div><img src="/images/team-avatars/3.png" alt="team-avatars3" /></div>
                            <div><img src="/images/team-avatars/4.png" alt="team-avatars4" /></div>
                            <div><img src="/images/team-avatars/5.png" alt="team-avatars5" /></div>
                        </div>
                    </div>
                    <a href="" className="worsks-item-call">Book A Call</a>
                </div>
            </div>
            <div className="home-works-item d-f">
                <div className="works-item-card">
                    <div className="d-f jc-sb">
                        <div className="card-caption d-f align-center">
                            <div><img src="/images/works2.png" alt="works2" /></div>
                            <h3 className="card-title">A-Aura Ecommerce</h3>
                        </div>
                        <div className="card-details d-f align-center">
                            <a href="" className="d-b"><img src="/images/all.png" alt="all" /></a>
                            <div className="card-details-title">Details</div>
                        </div>
                    </div>
                    <div className="works-item-category d-f align-center">
                        <div className="category-title">Category</div>
                        <div><img src="/images/shape.png" alt="Shape" /></div>
                        <div className="category-name">Web Design & Development</div>
                    </div>
                    <div className="works-item-category d-f align-center" style={{ marginTop: "10px" }}>
                        <div className="category-title">Time Taken</div>
                        <div><img src="/images/shape.png" alt="Shape" /></div>
                        <div className="category-name">3 months</div>
                    </div>
                    <p className="works-item-desc">
                        A complete overhaul of a corporate website to enhance its brand identity and user experience.
                    </p>
                </div>
                <div><img src="/images/works2-pic.png" alt="works2-pic" width={579.33} /></div>
                <div>
                    <div className="works-item-technologies">
                        <h3 className="technologies-title">Technologies Used</h3>
                        <div className="technologies-box d-f">
                            <div className="technologies-item">WordPress</div>
                            <div className="technologies-item">PHP</div>
                            <div className="technologies-item">HTML5</div>
                            <div className="technologies-item">CSS3</div>
                            <div className="technologies-item">JavaScript</div>
                        </div>
                    </div>
                    <div className="worsks-item-team d-f align-center">
                        <h3 className="team-title">Team members</h3>
                        <div className="team-box d-f">
                            <div><img src="/images/team-avatars/6.png" alt="team-avatars6" /></div>
                            <div><img src="/images/team-avatars/7.png" alt="team-avatars7" /></div>
                            <div><img src="/images/team-avatars/8.png" alt="team-avatars8" /></div>
                            <div><img src="/images/team-avatars/9.png" alt="team-avatars9" /></div>
                            <div><img src="/images/team-avatars/10.png" alt="team-avatars10" /></div>
                        </div>
                    </div>
                    <a href="" className="worsks-item-call">Book A Call</a>
                </div>
            </div>
        </div>
    )
}

export default Works