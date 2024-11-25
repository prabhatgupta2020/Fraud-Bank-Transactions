// src/pages/ReportDashboard.jsx

import React, { useEffect, useState } from "react";
import { ref, onValue } from "firebase/database";
import { database } from "../../firebase";
import BarChart from "../../Components/Bar Chart/BarChart";

const ReportDashboard = () => {
  const [totalTransactions, setTotalTransactions] = useState(100); // Assuming total transactions are 40
  const [totalFraud, setTotalFraud] = useState(0);
  const [securedTransactions, setSecuredTransactions] = useState(0);

  useEffect(() => {
    const fetchFraudData = () => {
      const transactionsRef = ref(database, 'fraudulent_transactions');

      onValue(transactionsRef, (snapshot) => {
        const data = snapshot.val();
        if (data) {
          let fraudCount = 0;
          Object.values(data).forEach(transaction => {
            if (transaction.isFraud === "0") {
              fraudCount++;
            }
          });
          setTotalFraud(fraudCount);
          setSecuredTransactions(totalTransactions - fraudCount);
        }
      });
    };

    fetchFraudData();
  }, [totalTransactions]);

  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 pt-32 pb-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-200">
                Fraud Report
              </h1>
              <div className="h-1 w-20 bg-blue-500 rounded"></div>
            </div>
            {/* <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
              Our Fraud Report Dashboard offers a comprehensive view of your
              transaction security, providing real-time insights and detailed
              analysis to help you stay ahead of fraudulent activities. Designed
              with user-friendliness and efficiency in mind, the dashboard
              presents crucial data in a clear and actionable format, empowering
              you to make informed decisions quickly.
            </p> */}
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="xl:w-1/3 md:w-1/2 p-4 cardHover">
              <div className="bg-gray-900 p-6 rounded-lg">
                <h2 className="text-lg text-gray-200 font-medium title-font mb-4">
                  Total Transaction
                </h2>
                <p className="leading-relaxed text-base text-blue-400">{totalTransactions}</p>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4 cardHover">
              <div className="bg-gray-900 p-6 rounded-lg">
                <h2 className="text-lg text-gray-200 font-medium title-font mb-4">
                  Total Fraud
                </h2>
                <p className="leading-relaxed text-base text-red-400">{totalFraud}</p>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4 cardHover">
              <div className="bg-gray-900 p-6 rounded-lg">
                <h2 className="text-lg text-gray-200 font-medium title-font mb-4">
                  Secured transactions
                </h2>
                <p className="leading-relaxed text-base text-green-400">{securedTransactions}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="container w-[100%] flex justify-center items-center mx-auto bg-transparent px-10 py-10 ">
        <BarChart 
          totalTransactions={totalTransactions} 
          totalFraud={totalFraud} 
          securedTransactions={securedTransactions} 
        />
      </section>
    </>
  );
};

export default ReportDashboard;
