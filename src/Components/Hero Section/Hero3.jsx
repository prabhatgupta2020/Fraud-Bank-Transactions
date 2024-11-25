import React from "react";
import { Link } from "react-router-dom";
import HeroVideo2 from "../../assets/Images/Home/Hero3/HeroVideo2.gif";


const Hero3 = () => {
  return (
    <>
      <section className="text-gray-600 body-font ">
        <div className="container mx-auto flex sm:px-5 px-4 py-24 flex-wrap-reverse items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-2xl mb-4 font-medium text-gray-100">
              Check Your Fraudulent Transactions
              <br className="hidden lg:inline-block" />
            </h1>
            <p className="mb-8 leading-relaxed text-gray-400">
              Stay one step ahead of fraud with our powerful transaction
              checker. Analyze your recent transactions and detect any
              suspicious activities instantly.
            </p>
            {/* <ul className="text-gray-400 text-left">
                <h1>How it works:</h1>
                <li>Upload your transaction data or connect your account.</li>
                <li>Our system scans and analyzes the data in real-time.</li>
                <li>
                  Receive an instant report highlighting any potentially
                  fraudulent transactions.
                </li>
              </ul> */}
            <div className="flex justify-center pt-4">
              
              <Link to="/dashboard">
              <button className="inline-flex text-white bg-blue-500 border-0 py-2 sm:px-6 px-3 focus:outline-none hover:bg-blue-600 rounded text-lg">
              Start Fraud Check
              </button></Link>
              <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 sm:px-6 px-3 focus:outline-none hover:bg-gray-200 rounded text-lg">
                Contact us
              </button>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-full mx-auto">
            <img
              className="object-cover object-center rounded w-[100%]"
              alt="hero"
              src={HeroVideo2}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero3;
