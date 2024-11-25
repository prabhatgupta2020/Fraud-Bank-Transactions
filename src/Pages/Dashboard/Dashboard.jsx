import React from "react";
import FileUpload from "../../Components/File Upload/FileUpload";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";
// import Field1 from '../../Components/Fields section/Field1'

const Dashboard = () => {
  return (
    <>
      <section class="text-gray-600 body-font">
        <div class="container px-5 pt-32 pb-10 mx-auto">
          <div class="flex flex-col text-center w-full ">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-100">
              Dashboard
            </h1>
            {/* <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep.</p> */}
          </div>
        </div>
      </section>

      <div className="flex justify-center items-center text-white pb-20">
        <FileUpload />
      </div>
      <div className="flex justify-center items-center text-white pb-20">
      <Link to="/reportDashboard">
      <button class="text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg">
          View Report
        </button></Link>
      </div>
    </>
  );
};

export default Dashboard;