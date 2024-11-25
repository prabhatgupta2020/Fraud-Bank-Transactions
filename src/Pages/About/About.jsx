import React from "react";
import "./about.css";
import { Link } from "react-router-dom";

// ---------- ANIMATION  ------------

import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

// ---------- IMPORTING IMAGES ----------

import headerImg from "../../assets/Images/About/AboutHeaderImg.png";
import member1 from "../../assets/Images/About/Our team/piyushImg.jpg";
import member2 from "../../assets/Images/About/Our team/piyushImg.jpg";
import member3 from "../../assets/Images/About/Our team/piyushImg.jpg";
import member4 from "../../assets/Images/About/Our team/piyushImg.jpg";


const About = () => {
  return (
    <>
      {/* ------- HEADER SECTION ( MISSION ) -----------  */}
      <section className="text-gray-600 body-font ">
        <div className="container mx-auto justify-center flex max-md:px-4 px-24 gap-16 pt-28 max-md:gap-0 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 max-md:mb-2 py-10 max-md:pt-10 max-md:py-0 ">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src={headerImg}
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 sm:w-1/2 flex flex-col md:items-start md:text-left items-center text-center gap-2 mt-6">
            <h1 className="title-font sm:text-3xl text-2xl mb-4 font-medium text-gray-200">
              Securing your Financial Future with Advanced fraud detection
            </h1>
            <p className="mb-8 text-gray-500 max-md:pr-0 text-[20px] text-start font-medium">
            we leverage cutting-edge machine learning to protect your financial transactions. Our real-time analysis and instant alerts ensure your assets are safe from fraud. With a blend of industry expertise and innovative technology, we are your trusted partner in safeguarding financial integrity.
            </p>
            <div className="flex justify-center">
              <Link to="/donate">
                <button className="inline-flex text-white bg-blue-500 font-normal border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
                  Join our mission
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ----------- OUR VISION --------------  */}

      <section className="text-gray-400 body-font bg-[#292828] w-full sm:px-10 px-0 mx-auto ">
        <div className="py-20 max-md:py-10 mx-auto max-md:mx-0 ">
          <div
            className="flex flex-col text-center w-full mb-14 max-md:mb-10"
            data-aos="zoom-out"
            data-aos-duration="800"
            data-aos-delay="0"
          >
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base font-normal">
              Kawach
            </p>
            <h1 class="sm:text-5xl text-4xl font-semibold  mb-4 text-gray-200">
              OUR<span class="text-blue-500 font-semibold"> VISION</span>
            </h1>
          </div>
          <div className="flex flex-wrap mx-auto text-start statistic-box-container">
            <div
              className="sm:p-4 p-4 max-md:py-2  md:w-1/3 sm:w-1/2 w-full"
              data-aos="slide-left"
              data-aos-duration="800"
              data-aos-delay="0"
            >
              <div className="border-2 border-gray-200 px-4 py-6 rounded-lg h-[350px] max-md:h-fit overflow-hidden statistic-box">
                <ion-icon
                  name="bulb-outline"
                  className="text-6xl text-start text-[#00CB6C] "
                ></ion-icon>
                <h2 className="font-medium text-3xl text-start text-gray-200 mb-2">
                Innovate for <br /> Security
                </h2>
                <p className="text-start">
                We aim to continuously innovate our machine learning algorithms to stay ahead of emerging fraud tactics. To provide the most advanced and adaptive fraud detection system in the industry, ensuring our clients' financial transactions are always secure.
                </p>
              </div>
            </div>
            <div
              className="sm:p-4 p-4 max-md:py-2 md:w-1/3 sm:w-1/2 w-full"
              data-aos="slide-left"
              data-aos-duration="800"
              data-aos-delay="100"
            >
              <div className="border-2 border-gray-200 px-4 py-6 rounded-lg max-md:h-fit overflow-hidden trunate h-[350px] statistic-box">
                <ion-icon
                  name="shield-checkmark-outline"
                  className="text-6xl text-[#00CB6C]"
                ></ion-icon>
                <h2 className="font-medium text-3xl text-gray-200 mb-2">
                Real-Time <br /> Protection
                </h2>
                <p>
                We strive to offer real-time monitoring and instant alerts to detect and prevent fraudulent activities as they happen. To deliver a seamless and proactive fraud prevention experience that gives our clients peace of mind and confidence in their financial security.
                </p>
              </div>
            </div>
            <div
              className="sm:p-4 p-4 max-md:py-2  md:w-1/3 sm:w-1/2  w-full"
              data-aos="slide-left"
              data-aos-duration="800"
              data-aos-delay="200"
            >
              <div className="border-2 border-gray-200 px-4 py-6 rounded-lg max-md:h-fit h-[350px] overflow-hidden statistic-box">
                <ion-icon
                  name="fitness-outline"
                  className="text-6xl text-[#00CB6C]"
                ></ion-icon>
                <h2 className="font-medium text-3xl text-gray-200 mb-2">
                Empower Through Insight
                </h2>
                <p>
                We focus on providing comprehensive insights and actionable reports that empower our clients to make informed decisions. To be a trusted advisor and partner, enabling our clients to protect their assets and maintain financial integrity through clear, data-driven insights.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>



      <hr />

    </>
  );
};

export default About;
