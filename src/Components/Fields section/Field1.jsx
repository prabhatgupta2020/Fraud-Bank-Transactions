import React from "react";

const Field1 = () => {
  return (
    <>
      <section className="text-[#B0B0B0] body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
              Protect Your Finances with Real-Time Fraud Detection
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Stay ahead of fraud with our advanced machine learning system. Our
              solution analyzes transaction patterns and user behavior in
              real-time to detect and flag suspicious activities instantly.
              Enhance the security of your financial transactions and safeguard
              your assets from potential threats.
            </p>
          </div>
          
          <div className="lg:w-1/2 md:w-2/3 mx-auto text-left">

              {/* --------- ADD FOOD DATA FORM ---------  */}
              <form onSubmit="/">
                <div className="flex flex-wrap ">
                  {/* --------- DISH NAME ---------  */}
                  <div className="p-2 w-1/2">
                    <div className="relative">
                      <label for="name" className="leading-7 text-sm text-gray-600">
                        Dish Name
                      </label>
                      <input
                        type="text"
                        name="dishName"
                        value="name"
                        onChange="ok"
                        placeholder="Dish Name"
                        id="name"
                        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      />
                    </div>
                  </div>

                  {/* --------- IMG URL ---------  */}
                  <div className="p-2 w-1/2">
                    <div className="relative">
                      <label
                        for="email"
                        className="leading-7 text-sm text-gray-600"
                      >
                        Image Url
                      </label>
                      <input
                        type="text"
                        name="imgUrl"
                        value="image"
                        onChange="hello"
                        placeholder="Image URL"
                        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      />
                    </div>
                  </div>

                  {/* --------- RATING ---------  */}
                  <div className="p-2 w-1/2">
                    <div className="relative">
                      <label
                        for="email"
                        className="leading-7 text-sm text-gray-600"
                      >
                        Rating
                      </label>
                      <input
                        type="number"
                        name="rating"
                        value="rating"
                        onChange="Hello rating"
                        placeholder="Rating"
                        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      />
                    </div>
                  </div>

                  {/* --------- PRICE ---------  */}
                  <div className="p-2 w-1/2">
                    <div className="relative">
                      <label
                        for="email"
                        className="leading-7 text-sm text-gray-600"
                      >
                        Price
                      </label>
                      <input
                        type="number"
                        name="price"
                        value="price"
                        onChange="Hello Price"
                        placeholder="Price"
                        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      />
                    </div>
                  </div>
                  {/* --------- CLASSNAME ---------  */}
                  <div className="p-2 w-1/2">
                    <div className="relative">
                      <label for="name" className="leading-7 text-sm text-gray-600">
                        ClassName
                      </label>
                      <input
                        type="text"
                        name="className"
                        value="classname"
                        onChange="hello classname"
                        placeholder="Class Name"
                        id="name"
                        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      />
                    </div>
                  </div>
                  {/* --------- AMOUNT ---------  */}
                  <div className="p-2 w-1/2">
                    <div className="relative">
                      <label
                        for="email"
                        className="leading-7 text-sm text-gray-600"
                      >
                        Amount
                      </label>
                      <input
                        type="number"
                        name="amount"
                        value="amount"
                        onChange="Paise do"
                        placeholder="amount"
                        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      />
                    </div>
                  </div>
                  {/* --------- SUBMIT BTN ---------  */}
                  <div className="p-2 w-full mt-10">
                    <button
                      type="submit"
                      className="flex mx-auto bg-white text-[#0A0D10] border-2 py-2 px-8 focus:outline-none hover:bg-[#161C23] hover:text-[#FFFFFF] hover:border-2 hover:border-white rounded text-lg"
                      
                    >
                      Add Dish
                    </button>
                  </div>
                </div>
              </form>
            </div>
        </div>
      </section>
    </>
  );
};

export default Field1;
