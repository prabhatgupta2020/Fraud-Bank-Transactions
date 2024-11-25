import React from 'react'
import './faq.css'

const Faq = () => {
  return (
    <>
    <section className="faq-section">
    <div className="accordion ">
    <h1 className='pb-10 max-md:pt-10 text-white'>Frequently Asked Questions</h1>
    <div className="accordion-item ">
        <input type="checkbox" id="accordion1"/>
        <label htmlFor="accordion1" className="accordion-item-title"><span className="icon"></span> How does the fraud detection system work?</label>
        <div className="accordion-item-desc">Our fraud detection system leverages advanced machine learning algorithms to analyze transaction patterns and user behaviors. By continuously monitoring transactions in real-time, the system identifies anomalies and flags suspicious activities, helping prevent fraudulent transactions before they can cause harm.</div>
    </div>

    <div className="accordion-item">
        <input type="checkbox" id="accordion2"/>
        <label htmlFor="accordion2" className="accordion-item-title"><span className="icon"></span>Is the fraud detection system customizable for different businesses?</label>
        <div className="accordion-item-desc">Yes, our system is highly customizable to meet the unique needs of different financial institutions. You can tailor the detection parameters, integrate with your existing databases, and adjust the model based on specific transaction types and risk profiles to ensure optimal performance.</div>
    </div>

    <div className="accordion-item">
        <input type="checkbox" id="accordion3"/>
        <label htmlFor="accordion3" className="accordion-item-title"><span className="icon"></span>How quickly can the system detect and respond to fraud?</label>
        <div className="accordion-item-desc">Our system is designed for real-time detection and response. It continuously monitors transactions and can flag potentially fraudulent activities instantly, allowing you to take immediate action to prevent financial losses and protect your customers.</div>
    </div>

    <div className="accordion-item">
        <input type="checkbox" id="accordion4"/>
        <label htmlFor="accordion4" className="accordion-item-title"><span className="icon"></span>How often is the fraud detection model updated?</label>
        <div className="accordion-item-desc">The model is updated regularly to incorporate new data and adapt to evolving fraud patterns. This ensures that the system remains effective in identifying and preventing new types of fraudulent activities. We also provide the option for on-demand updates based on specific needs and feedback.</div>
    </div>

    {/* <div className="accordion-item mb-10">
        <input type="checkbox" id="accordion5"/>
        <label htmlFor="accordion5" className="accordion-item-title"><span className="icon"></span>Can I organize a fundraising event for Bharat Shakti Foundation?</label>
        <div className="accordion-item-desc">Absolutely! We welcome and appreciate the initiative of individuals or groups organizing fundraising events on our behalf. Visit our "Fundraise for Us" page to find guidelines, resources, and information on how to get started.</div>
    </div> */}

</div>
</section>
    </>
  )
}

export default Faq