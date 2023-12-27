import React from "react";
import { FaChevronLeft } from "react-icons/fa";
import { LuDot } from "react-icons/lu";
import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

function ViewInvoise() {
  const { id } = useParams();
  const url = "http://localhost:2003/data/" + id;
  const { data, isPending, error } = useFetch(url);
  console.log(data);

  return (
    <div className=" h-screen">
      {isPending && (
        <div>
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      )}
      {data && (
        <div className="max-container flex flex-col p-6 md:px-10">
          <a href="/" className="flex items-center justify-start my-8 gap-7">
            <span>
              <FaChevronLeft />
            </span>
            <h1>Go back</h1>
          </a>
          <div className="flex items-center justify-between p-6  bg-[#FFFFFF] rounded shadow-sm mb-4">
            <div className=" flex items-center justify-between w-full md:w-0 md:gap-4">
              <h3 className="text-[#858BB2] text-xs font-medium">status</h3>
              <button className="py-4 w-[104px] h-10 flex items-center gap-2 border rounded-md ">
                <span>
                  <LuDot size={40} color="#33D69F" />
                </span>
                <h3 className="text-xs font-bold text-[#33D69F] md:pr-4">
                  {data.status}
                </h3>
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
                Mark as {data.status}
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
                    {data.id}
                  </h1>
                </div>
                <div>
                  <h1 className="font-medium text-sm text-[#7E88C3]">
                    {data.description}
                  </h1>
                </div>
              </div>
              <div className="flex flex-col gap-1 font-medium text-xs text-[#7E88C3]">
                <span>{data.senderAddress.street}</span>
                <span>{data.senderAddress.city}</span>
                <span>{data.senderAddress.country}</span>
                <span>{data.senderAddress.postCode}</span>
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
                      {data.createdAt}
                    </h1>
                  </div>
                  <div className="flex flex-col gap-3">
                    <p className="font-medium text-sm text-[#7E88C3]">
                      Payment Due
                    </p>
                    <h1 className="text-[#0C0E16] text-base font-bold">
                      {data.paymentDue}
                    </h1>
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <h1 className="font-medium text-sm text-[#7E88C3]">
                    Bill To
                  </h1>
                  <div className="flex flex-col gap-2">
                    <h1 className="text-[#0C0E16] text-base font-bold">
                      {data.clientName}
                    </h1>
                    <div className="flex flex-col font-medium text-xs text-[#7E88C3] gap-1">
                      <span>{data.clientAddress.street}</span>
                      <span>{data.clientAddress.city}</span>
                      <span>{data.clientAddress.country}</span>
                      <span>{data.clientAddress.postCode}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col  gap-3">
                <p className="font-medium text-xs text-[#7E88C3]">Sent to</p>
                <a className="text-[#0C0E16] text-base font-bold" href="#">
                  {data.clientEmail}
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
                      <h2 className="text-[rgb(12,14,22)] text-base font-bold">
                        {data.items[0].name}
                      </h2>
                    </div>
                    <div className="flex items-center md:gap-16 md:items-center font-bold text-xs text-[#7E88C3]">
                      <div>
                        <p className="text-[#7E88C3] mb-8 text-sm font-medium">
                          QTY
                        </p>
                        <span className="font-bold">
                          {" "}
                          {data.items[0].quantity}
                        </span>
                      </div>
                      <div>
                        <p className="text-[#7E88C3] mb-8 text-sm font-medium">
                          Price
                        </p>
                        <h5 className="font-bold ">
                          <span className="md:hidden">x</span>{" "}
                          {data.items[0].price} $
                        </h5>
                      </div>
                    </div>
                  </div>
                  <div>
                    <p className="text-[#7E88C3] mb-8 text-sm font-medium">
                      Total
                    </p>
                    <h1 className="text-[#0C0E16] text-base font-bold">
                      {data.items[0].total} $
                    </h1>
                  </div>
                </div>
                {/* <div className="flex items-center justify-between md:w-full">
                  <div className="flex flex-col justify-between  md:flex-row w-[415px]">
                    <h2 className="text-[#0C0E16] text-base font-bold">
                      {data.items[1].name}
                    </h2>

                    <div className="flex items-center text-left md:gap-[84px] md:items-center font-bold text-xs text-[#7E88C3]">
                      <span className="font-bold">
                        {data.items[1].quantity}
                      </span>
                      <h5 className="font-bold">{data.items[1].price} $</h5>
                    </div>
                  </div>
                  <div>
                    <h1 className="text-[#0C0E16] text-base font-bold">
                      {data.items[1].total} $
                    </h1>
                  </div>
                </div> */}
              </div>
              <div className="bg-[#373B53] p-6 flex items-center justify-between rounded-b-md">
                <h2 className="text-sm text-[#FFFFFF] font-medium">
                  Grand Total
                </h2>
                <p className="text-2xl text-[#FFFFFF] font-bold">
                  {data.total} $
                </p>
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
      )}
    </div>
  );
}

export default ViewInvoise;
