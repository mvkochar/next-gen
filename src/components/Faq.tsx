import React from 'react'
import FaqList from './FaqList'
import FaqItem from './FaqItem/FaqItem'

const Faq = () => {
  return (
    <section className='home-faq'>
    <div className="page-bl-caption">
      <h2 className="caption-title">Frequently Asked Questions</h2>
      <div className="caption-all">
        <a href="" className="d-b"><img src="/images/all.png" alt="all" /></a>
        <div className="all-title">View all</div>
      </div>
    </div>
    <div className="home-faq-content d-f">
      <div className="home-faq-box d-f">
        {
          FaqList.map((faq) => {
            return (
              <FaqItem
                key={faq.id}
                {...faq}
              />
            )
          })
        }
      </div>
      <div className="home-faq-ask">
        <h3 className="ask-title">Ask your question</h3>
        <form action="" className='ask-fm'>
          <div className="input-bl">
            <label htmlFor="askName">Name</label>
            <input type="text" name='askName' id='askName' placeholder='Enter your name'/>
          </div>
          <div className="input-bl">
            <label htmlFor="askEmail">Email</label>
            <input type="email" name="askEmail" id="askEmail" placeholder='Enter your email' />
          </div>
          <div className="input-bl input-bl-last">
            <label htmlFor="askMsg">Your Question</label>
            <textarea name="askMsg" id="askMsg" placeholder='Enter Your Question Here .....'></textarea>
          </div>
          <button type="button">Send Your Message</button>
        </form>
      </div>
    </div>
  </section>
  )
}

export default Faq