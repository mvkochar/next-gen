import React from 'react'
import './css/Home.css'
import { Faq, FaqItem, FaqList, ServicesItem, ServicesList, Testimonials } from '../components'

const Home = () => {
  return (
    <>
      <main className='home-main d-f'>
        <div className="home-main-info">
          <div className="home-main-caption d-f">
            <h1 className="page-title">Digital Solutions <br /> That Drive Success</h1>
            <div className="home-main-start d-f align-center">
              <a href="" className="d-b"><img src="/images/start-icon.png" alt="start" /></a>
              <div className="start-name">Start a Project</div>
            </div>
          </div>
          <p className="page-desc">
            At NexGen, we offer a comprehensive suite of digital solutions designed
            to propel your business to new heights in the digital realm. With
            a team of skilled professionals, cutting-edge technologies, and a passion for innovation
          </p>
          <ul className="home-main-features d-f">
            <li>Website Design</li>
            <li>Branding</li>
            <li>Website Development</li>
            <li>Mobile App Development</li>
            <li>Digital Marketing</li>
          </ul>
        </div>
        <div>
          <div className="home-main-picture">
            <a href="" className="estate-link"><img src="/images/start-icon2.png" alt="Start" /></a>
          </div>
          <div className="estate-info">
            <h3 className="estate-title">Estatein Real Estate</h3>
            <h4 className="estate-subtitle">Web Development.</h4>
          </div>
        </div>

      </main>
      <div className="home-statistic d-f">
        <div className="home-statistic-item">
          <h3 className="statistic-item-title">Clients</h3>
          <h4 className="statistic-item-value">200+</h4>
        </div>
        <div className="home-statistic-item">
          <h3 className="statistic-item-title">Projects</h3>
          <h4 className="statistic-item-value">280+</h4>
        </div>
        <div className="home-statistic-item">
          <h3 className="statistic-item-title">Happy Clients</h3>
          <h4 className="statistic-item-value">100%</h4>
        </div>
        <div className="home-statistic-item">
          <h3 className="statistic-item-title">Follower</h3>
          <h4 className="statistic-item-value">420K</h4>
        </div>
        <div className="home-statistic-item">
          <h3 className="statistic-item-title" style={{ textTransform: "capitalize" }}>Years Of Experience</h3>
          <h4 className="statistic-item-value">10+</h4>
        </div>
        <div className="home-statistic-item">
          <div className="statistic-item-more d-f align-center">
            <a href="" className="d-b"><img src="/images/more.png" alt="more" /></a>
            <div className="more-title">Know More</div>
          </div>
        </div>
      </div>
      <section className='page-bl'>
        <h2 className="page-bl-title">Reasons to Choose NexGen for Your Digital Journey</h2>
        <div className="home-reasons-box d-f">
          <div className="home-reasons-item">
            <h3 className="reasons-item-title">Expertise in Cutting-Edge Technologies</h3>
            <p className="reasons-item-desc">
              NexGen ensures your projects are powered by state-of-the-art technologies,
              guaranteeing innovation and future-proof solutions.
            </p>
            <div className="reasons-item-more d-f align-center">
              <a href="" className="d-b"><img src="/images/more.png" alt="more" /></a>
              <div className="more-title">Learn More</div>
            </div>
          </div>
          <div className="home-reasons-item">
            <h3 className="reasons-item-title">Proven Track Record of Success</h3>
            <p className="reasons-item-desc">
              NexGen demonstrates a consistent ability to meet and exceed client expectations,
              providing reliable and effective web solutions tailored to diverse needs.
            </p>
            <div className="reasons-item-more d-f align-center">
              <a href="" className="d-b"><img src="/images/more.png" alt="more" /></a>
              <div className="more-title">Learn More</div>
            </div>
          </div>
          <div className="home-reasons-item">
            <h3 className="reasons-item-title">Client-Centric Approach</h3>
            <p className="reasons-item-desc">
              At NexGen, we prioritize understanding our clients' unique requirements,
              fostering transparent communication throughout the development process.
            </p>
            <div className="reasons-item-more d-f align-center">
              <a href="" className="d-b"><img src="/images/more.png" alt="more" /></a>
              <div className="more-title">Learn More</div>
            </div>
          </div>
          <div className="home-reasons-item">
            <h3 className="reasons-item-title">Dedicated Team of Professionals</h3>
            <p className="reasons-item-desc">
              Our professionals bring a wealth of expertise to the table, ensuring the delivery
              of top-notch, scalable, and secure web solutions for your business.
            </p>
            <div className="reasons-item-more d-f align-center">
              <a href="" className="d-b"><img src="/images/more.png" alt="more" /></a>
              <div className="more-title">Learn More</div>
            </div>
          </div>
        </div>
      </section>
      <section className='page-bl'>
        <h2 className="page-bl-title">Our services</h2>
        <div className="home-services-box d-f">
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
      </section>
      <section className='home-works'>
        <div className="page-bl-caption">
          <h2 className="caption-title">Our Works</h2>
          <div className="caption-all">
            <a href="" className="d-b"><img src="/images/all.png" alt="all" /></a>
            <div className="all-title">ALL Works</div>
          </div>
        </div>
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
      </section>
      <Testimonials/>
      <Faq/>
    </>
  )
}

export default Home