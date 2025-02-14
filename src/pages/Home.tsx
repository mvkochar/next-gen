import React from 'react'
import './css/Home.css'

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
           <h3 className="statistic-item-title" style={{textTransform: "capitalize"}}>Years Of Experience</h3>
           <h4 className="statistic-item-value">10+</h4>
        </div>
        <div className="home-statistic-item">
          <div className="statistic-item-more d-f align-center">
               <a href="" className="d-b"><img src="/images/more.png" alt="more" /></a>
               <div className="more-title">Know More</div>
          </div>
        
        </div>
      </div>
    </>
  )
}

export default Home