import React from "react";
import { FaChevronLeft } from "react-icons/fa";
import { LuDot } from "react-icons/lu";
import { Navigate } from "react-router-dom";
function ViewInvoise() {
  return (
    <div className="bg-[#DFE3FA] h-screen">
      <div className="max-container flex flex-col p-6 md:px-10">
        <a href="/" className="flex items-center justify-start my-8 gap-7">
          <span>
            <FaChevronLeft />
          </span>
          <h1>Go back</h1>
        </a>
        <div className="flex items-center justify-between p-6  bg-[#FFFFFF] rounded shadow-sm mb-4">
          <div className=" flex items-center gap-[136px] sm:gap-[430px] md:gap-4">
            <h3 className="text-[#858BB2] text-xs font-medium">status</h3>
            <button className="py-4 w-[104px] h-10 flex items-center gap-2 border rounded-md ">
              <span>
                <LuDot size={40} color="#33D69F" />
              </span>
              <h3 className="text-xs font-bold text-[#33D69F]">Paid</h3>
            </button>
          </div>
          <div className=" hidden md:block ">
            <button className="py-4 px-6 md:mr-2 bg-[#F9FAFE] font-bold text-base text-[#7E88C3] rounded-[50px]">
              Edit
            </button>
            <button className="py-4 px-5 md:mr-2 bg-[#EC5757] font-bold text-base text-[#FFFFFF] rounded-[50px]">
              Delete
            </button>
            <button className="py-4 px-6 bg-[#7C5DFA] font-bold text-base text-[#FFFFFF] rounded-[50px]">
              Mark as Paid
            </button>
          </div>
        </div>
        <div className="flex flex-col p-6 bg-[#FFFFFF]">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-[30px] mb-8 ">
            <div>
              <div className="flex items-center">
                <p className="text-xs md:text-base font-bold  text-[#7E88C3]">
                  #
                </p>
                <h1 className="text-xs md:text-base font-bold  text-[#0C0E16]">
                  RT3080
                </h1>
              </div>
              <div>
                <h1 className="font-medium text-sm text-[#7E88C3]">
                  Graphic Design
                </h1>
              </div>
            </div>
            <div className="flex flex-col gap-1 font-medium text-xs text-[#7E88C3]">
              <h1>19 Union Terrase</h1>
              <h1>London</h1>
              <h1>E1 3EZ</h1>
              <h1>United Kingdom</h1>
            </div>
          </div>
          <div className="flex flex-col gap-9 mb-10 md:flex-row md:items-start md:justify-between">
            <div className="flex items-center justify-between md:flex-row md:items-center md:justify-start md:gap-[100px] ">
              <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-3">
                  <p className="font-medium text-sm text-[#7E88C3]">
                    Invoice Date
                  </p>
                  <h1 className="text-[#0C0E16] text-base font-bold">
                    21 Aug 2021
                  </h1>
                </div>
                <div className="flex flex-col gap-3">
                  <p className="font-medium text-sm text-[#7E88C3]">
                    Payment Due
                  </p>
                  <h1 className="text-[#0C0E16] text-base font-bold">
                    20 Sep 2021
                  </h1>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <h1 className="font-medium text-sm text-[#7E88C3]">Bill To</h1>
                <div className="flex flex-col gap-2">
                  <h1 className="text-[#0C0E16] text-base font-bold">
                    Alex Grim
                  </h1>
                  <div className="flex flex-col font-medium text-xs text-[#7E88C3] gap-1">
                    <span>84 Church Way</span>
                    <span>Bradford</span>
                    <span>BD1 9PB</span>
                    <span>United Kingdom</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col  gap-3">
              <p className="font-medium text-xs text-[#7E88C3]">Sent to</p>
              <a className="text-[#0C0E16] text-base font-bold" href="#">
                alexgrim@mail.com
              </a>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex flex-col gap-6 p-6 bg-[#F9FAFE] rounded-md">
              <div className="flex items-center justify-between">
                <div className="flex flex-col gap-2 md:flex-row md:gap-[184px]">
                  <div>
                    <p className="text-[#7E88C3] mb-8 text-sm font-medium">
                      Item Name
                    </p>
                    <h2 className="text-[#0C0E16] text-base font-bold">
                      Banner Design
                    </h2>
                  </div>
                  <div className="flex items-center md:gap-16 md:items-center font-bold text-xs text-[#7E88C3]">
                    <div>
                      <p className="text-[#7E88C3] mb-8 text-sm font-medium">
                        QTY
                      </p>
                      <span className="font-bold">1</span>
                    </div>
                    <div>
                      <p className="text-[#7E88C3] mb-8 text-sm font-medium">
                        Price
                      </p>
                      <h5 className="font-bold ">
                        <span className="md:hidden">x</span> £ 156.00
                      </h5>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="text-[#7E88C3] mb-8 text-sm font-medium">
                    Total
                  </p>
                  <h1 className="text-[#0C0E16] text-base font-bold">
                    £ 156.00
                  </h1>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex flex-col gap-2 md:flex-row md:gap-[195px]">
                  <h2 className="text-[#0C0E16] text-base font-bold">
                    Email Design
                  </h2>

                  <div className="flex items-center md:gap-16 md:items-center font-bold text-xs text-[#7E88C3]">
                    <span className="font-bold">2</span>
                    <h5 className="font-bold">£ 200.00</h5>
                  </div>
                </div>
                <div>
                  <h1 className="text-[#0C0E16] text-base font-bold">
                    £ 400.00
                  </h1>
                </div>
              </div>
            </div>
            <div className="bg-[#373B53] p-6 flex items-center justify-between rounded-b-md">
              <h2 className="text-sm text-[#FFFFFF] font-medium">
                Grand Total
              </h2>
              <p className="text-2xl text-[#FFFFFF] font-bold">£ 556.00</p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between md:hidden py-5 bg-[#FFF]">
          <button className="py-4 px-6 bg-[#F9FAFE] font-bold text-base text-[#7E88C3] rounded-[50px]">
            Edit
          </button>
          <button className="py-4 px-5 bg-[#EC5757] font-bold text-base text-[#FFFFFF] rounded-[50px]">
            Delete
          </button>
          <button className="py-4 px-6 bg-[#7C5DFA] font-bold text-base text-[#FFFFFF] rounded-[50px]">
            Mark as Paid
          </button>
        </div>
      </div>
    </div>
  );
}

export default ViewInvoise;
