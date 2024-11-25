import React from 'react'
import "./cards1.css"

import cardIcon1 from "../../../assets/Images/CardIcons/transaction.png"
import cardIcon2 from "../../../assets/Images/CardIcons/fraud-detection.png"
import cardIcon3 from "../../../assets/Images/CardIcons/customer-support.png"

const Cards = () => {
  return (
    <>
<section className="text-gray-600 body-font">
  <div className="container px-12 py-24 mx-auto">
    <div className="flex flex-wrap -mx-4">
      <div className="w-full md:w-1/3 px-4 mb-8 drop-shadow-xl cardHover">
        <div className="p-6  bg-gray-900 h-full">
          <img className="mx-auto mt-10 mb-8 w-24 h-24" src={cardIcon1} alt="Transaction" />
          <div className="text-center">
            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
            <h1 className="title-font text-lg font-medium text-white mb-3">Secure Online Payments</h1>
            <p className="leading-relaxed mb-3">We prioritize your security with robust fraud detection measures. Feel confident knowing that every transaction is scrutinized for any signs of fraudulent activity, ensuring your financial safety.</p>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/3 px-4 mb-8 drop-shadow-xl cardHover">
        <div className="p-6 bg-gray-900 h-full">
          <img className="mx-auto mt-10 mb-8 w-24 h-24" src={cardIcon2} alt="Fraud Detection" />
          <div className="text-center">
            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
            <h1 className="title-font text-lg font-medium text-white mb-3">Real-Time Fraud Monitoring</h1>
            <p className="leading-relaxed mb-3">Our dedicated team works tirelessly to detect and prevent fraudulent activity in real-time. Through sophisticated algorithms and machine learning, we swiftly identify suspicious patterns and behaviors.</p>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/3 px-4 mb-8 drop-shadow-xl cardHover">
        <div className="p-6 bg-gray-900 h-full">
          <img className="mx-auto mt-10 mb-8 w-24 h-24" src={cardIcon3}alt="Customer Support" />
          <div className="text-center">
            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
            <h1 className="title-font text-lg font-medium text-white mb-3">Assistance When You Need It</h1>
            <p className="leading-relaxed mb-3">Our customer support team is available around the clock to assist you with any concerns regarding fraud or security. If you suspect any fraudulent activity, don't hesitate to reach out to us immediately.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


    </>
  )
}

export default Cards