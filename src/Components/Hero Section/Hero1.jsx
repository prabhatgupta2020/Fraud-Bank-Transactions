import React from "react";
import HeroVideo1 from "../../assets/Images/Home/Hero1/HeroVideo1.gif";
import { Link } from "react-router-dom";
import './Hero.css'

const Hero1 = () => {
  return (
    <>
      <section className="text-[#b0b0b0] body-font HeroBg">
        <div className="container mx-auto flex sm:px-5 px-3 sm:pt-10 pt-32 flex-wrap-reverse items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-2xl mb-4 font-medium text-[#fff]">
              Secure Your Transactions with Advanced Fraud Detection
            </h1>
            <p className="mb-8 leading-relaxed">
              Protect your financial institution from fraud with our
              cutting-edge machine learning solutions. Our real-time fraud
              detection system analyzes transaction patterns and user behavior
              to swiftly identify and prevent fraudulent activities, ensuring
              your transactions are secure and your business is protected.
            </p>
            <div className="flex justify-center">
              <Link to="/signup">
                <button className="inline-flex text-white bg-[#3b82f6] border-0 py-2 sm:px-6 px-3 focus:outline-none hover:bg-[#2563EB] rounded text-lg">
                  Create an account
                </button>
              </Link>
              <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 sm:px-6 px-3 focus:outline-none hover:bg-gray-200 rounded text-lg">
                Support
              </button>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-full mx-auto">
            <img
              className="object-cover object-center rounded w-[100%]"
              alt="hero"
              src={HeroVideo1}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero1;
