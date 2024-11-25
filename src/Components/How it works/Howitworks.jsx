import React from "react";

// ----------- IMPORT IMAGES ---------------- 

import Img1 from '../../assets/Images/Howitworks/howitworks1.png'
import Img2 from '../../assets/Images/Howitworks/howitworks2.png'
import Img3 from '../../assets/Images/Howitworks/howitworks3.png'
import Img4 from '../../assets/Images/Howitworks/howitworks4.png'

const Howitworks = () => {
  return (
    <>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap w-full mb-20">
            <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">
                How it's works
              </h1>
              <div class="h-1 w-20 bg-blue-500 rounded"></div>
            </div>
            <p class="lg:w-1/2 w-full leading-relaxed text-gray-500">
              Upload your transaction data or connect your account. Our system
              analyzes the data in real-time using advanced machine learning.
              You receive a detailed report highlighting suspicious activities,
              allowing you to take immediate action to protect your finances.
            </p>
          </div>
          <div class="flex flex-wrap -m-4">
            <div class="xl:w-1/4 md:w-1/2 p-4 cardHover">
              <div class="bg-gray-900 p-6 rounded-lg">
                <img
                  class="h-40 rounded w-full object-cover object-center mb-6"
                  src={Img1}
                  alt="content"
                />
                <h3 class="tracking-widest text-blue-500 text-xs font-medium title-font">
                  Step 1
                </h3>
                <h2 class="text-lg text-gray-100 font-medium title-font mb-4">
                  Data Collection
                </h2>
                <p class="leading-relaxed text-base">
                  Begin by securely uploading your transaction data or
                  connecting your financial account to our system.
                </p>
              </div>
            </div>
            <div class="xl:w-1/4 md:w-1/2 p-4 cardHover">
              <div class="bg-gray-900 p-6 rounded-lg">
                <img
                  class="h-40 rounded w-full object-cover object-center mb-6"
                  src={Img2}
                  alt="content"
                />
                <h3 class="tracking-widest text-blue-500 text-xs font-medium title-font">
                  Step 2
                </h3>
                <h2 class="text-lg text-gray-100 font-medium title-font mb-4">
                  Real-Time Analysis
                </h2>
                <p class="leading-relaxed text-base">
                  Our advanced machine learning algorithms scan and analyze your
                  transaction data in real-time.
                </p>
              </div>
            </div>
            <div class="xl:w-1/4 md:w-1/2 p-4 cardHover">
              <div class="bg-gray-900 p-6 rounded-lg">
                <img
                  class="h-40 rounded w-full object-cover object-center mb-6"
                  src={Img3}
                  alt="content"
                />
                <h3 class="tracking-widest text-blue-500 text-xs font-medium title-font">
                  Step 3
                </h3>
                <h2 class="text-lg text-gray-100 font-medium title-font mb-4">
                Fraud Detection Report
                </h2>
                <p class="leading-relaxed text-base">
                Receive a comprehensive report highlighting any potentially fraudulent transactions.
                </p>
              </div>
            </div>
            <div class="xl:w-1/4 md:w-1/2 p-4 cardHover">
              <div class="bg-gray-900 p-6 rounded-lg">
                <img
                  class="h-40 rounded w-full object-cover object-center mb-6"
                  src={Img4}
                  alt="content"
                />
                <h3 class="tracking-widest text-blue-500 text-xs font-medium title-font">
                  Step 4
                </h3>
                <h2 class="text-lg text-gray-100 font-medium title-font mb-4">
                Take Action
                </h2>
                <p class="leading-relaxed text-base">
                Use the report to take necessary actions, such as blocking transactions, contacting customers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Howitworks;
