import { LuDot } from "react-icons/lu";
import FilterInvoise from "../components/FilterInvoise";
import { FaChevronRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <div className="bg-[#DFE3FA] h-screen ">
      <div>
        <FilterInvoise />
      </div>
      <div className="max-container flex items-center justify-between shadow-md rounded-md  bg-[#FFFFFF] mb-4  p-6  md:py-7 mx-auto md:mx-auto  md:w-[672px] xl:w-[730px]">
        <div className="flex flex-col md:flex-row gap-6 md:gap-[27px] md:items-center">
          <div className="flex items-center ">
            <span className="font-bold text-sm text-[#7E88C3]">#</span>
            <h1 className="font-bold text-sm text-[#0C0E16]">RT3080</h1>
          </div>
          <div className="flex flex-col gap-2 md:flex-row md:gap-9 md:items-center">
            <h1 className="font-medium text-sm text-[#858BB2]">
              Due 19 Aug 2021
            </h1>
            <span className="font-bold text-base text-[#0C0E16]">
              £ 1,800.90
            </span>
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-10">
          <h1 className="font-medium text-xs  text-[#858BB2]">Jensen Huang</h1>
          <a href="/invoise" className="md:flex md:items-center gap-5">
            <button className="py-4 w-[104px] h-10 flex items-center gap-2 border rounded-md ">
              <span>
                <LuDot size={40} color="#33D69F" />
              </span>
              <h3 className="text-xs font-bold text-[#33D69F]">Paid</h3>
            </button>
            <p className="hidden md:block">
              <FaChevronRight />
            </p>
          </a>
        </div>
      </div>
      <div className="max-container flex items-center justify-between shadow-md rounded-md  bg-[#FFFFFF] mb-4  p-6  md:py-7 mx-auto md:mx-auto  md:w-[672px] xl:w-[730px]">
        <div className="flex flex-col md:flex-row gap-6 md:gap-[27px] md:items-center">
          <div className="flex items-center ">
            <span className="font-bold text-sm text-[#7E88C3]">#</span>
            <h1 className="font-bold text-sm text-[#0C0E16]">RT3080</h1>
          </div>
          <div className="flex flex-col gap-2 md:flex-row md:gap-9 md:items-center">
            <h1 className="font-medium text-sm text-[#858BB2]">
              Due 19 Aug 2021
            </h1>
            <span className="font-bold text-base text-[#0C0E16]">
              £ 1,800.90
            </span>
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-10">
          <h1 className="font-medium text-xs  text-[#858BB2]">Jensen Huang</h1>
          <a href="/invoise" className="md:flex md:items-center gap-5">
            <button className="py-4 w-[104px] h-10 flex items-center gap-2 border rounded-md ">
              <span>
                <LuDot size={40} color="#33D69F" />
              </span>
              <h3 className="text-xs font-bold text-[#33D69F]">Paid</h3>
            </button>
            <p className="hidden md:block">
              <FaChevronRight />
            </p>
          </a>
        </div>
      </div>
      <div className="max-container flex items-center justify-between shadow-md rounded-md  bg-[#FFFFFF] mb-4  p-6  md:py-7 mx-auto md:mx-auto  md:w-[672px] xl:w-[730px]">
        <div className="flex flex-col md:flex-row gap-6 md:gap-[27px] md:items-center">
          <div className="flex items-center ">
            <span className="font-bold text-sm text-[#7E88C3]">#</span>
            <h1 className="font-bold text-sm text-[#0C0E16]">RT3080</h1>
          </div>
          <div className="flex flex-col gap-2 md:flex-row md:gap-9 md:items-center">
            <h1 className="font-medium text-sm text-[#858BB2]">
              Due 19 Aug 2021
            </h1>
            <span className="font-bold text-base text-[#0C0E16]">
              £ 1,800.90
            </span>
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-10">
          <h1 className="font-medium text-xs  text-[#858BB2]">Jensen Huang</h1>
          <a href="/invoise" className="md:flex md:items-center gap-5">
            <button className="py-4 w-[104px] h-10 flex items-center gap-2 border rounded-md ">
              <span>
                <LuDot size={40} color="#33D69F" />
              </span>
              <h3 className="text-xs font-bold text-[#33D69F]">Paid</h3>
            </button>
            <p className="hidden md:block">
              <FaChevronRight />
            </p>
          </a>
        </div>
      </div>
      <div className="max-container flex items-center justify-between shadow-md rounded-md  bg-[#FFFFFF] mb-4  p-6  md:py-7 mx-auto md:mx-auto  md:w-[672px] xl:w-[730px]">
        <div className="flex flex-col md:flex-row gap-6 md:gap-[27px] md:items-center">
          <div className="flex items-center ">
            <span className="font-bold text-sm text-[#7E88C3]">#</span>
            <h1 className="font-bold text-sm text-[#0C0E16]">RT3080</h1>
          </div>
          <div className="flex flex-col gap-2 md:flex-row md:gap-9 md:items-center">
            <h1 className="font-medium text-sm text-[#858BB2]">
              Due 19 Aug 2021
            </h1>
            <span className="font-bold text-base text-[#0C0E16]">
              £ 1,800.90
            </span>
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-10">
          <h1 className="font-medium text-xs  text-[#858BB2]">Jensen Huang</h1>
          <a href="/invoise" className="md:flex md:items-center gap-5">
            <button className="py-4 w-[104px] h-10 flex items-center gap-2 border rounded-md ">
              <span>
                <LuDot size={40} color="#33D69F" />
              </span>
              <h3 className="text-xs font-bold text-[#33D69F]">Paid</h3>
            </button>
            <p className="hidden md:block">
              <FaChevronRight />
            </p>
          </a>
        </div>
      </div>
      <div className="max-container flex items-center justify-between shadow-md rounded-md  bg-[#FFFFFF] mb-4  p-6  md:py-7 mx-auto md:mx-auto  md:w-[672px] xl:w-[730px]">
        <div className="flex flex-col md:flex-row gap-6 md:gap-[27px] md:items-center">
          <div className="flex items-center ">
            <span className="font-bold text-sm text-[#7E88C3]">#</span>
            <h1 className="font-bold text-sm text-[#0C0E16]">RT3080</h1>
          </div>
          <div className="flex flex-col gap-2 md:flex-row md:gap-9 md:items-center">
            <h1 className="font-medium text-sm text-[#858BB2]">
              Due 19 Aug 2021
            </h1>
            <span className="font-bold text-base text-[#0C0E16]">
              £ 1,800.90
            </span>
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-10">
          <h1 className="font-medium text-xs  text-[#858BB2]">Jensen Huang</h1>
          <a href="/invoise" className="md:flex md:items-center gap-5">
            <button className="py-4 w-[104px] h-10 flex items-center gap-2 border rounded-md ">
              <span>
                <LuDot size={40} color="#33D69F" />
              </span>
              <h3 className="text-xs font-bold text-[#33D69F]">Paid</h3>
            </button>
            <p className="hidden md:block">
              <FaChevronRight />
            </p>
          </a>
        </div>
      </div>
      <div className="max-container flex items-center justify-between shadow-md rounded-md  bg-[#FFFFFF] mb-4  p-6  md:py-7 mx-auto md:mx-auto  md:w-[672px] xl:w-[730px]">
        <div className="flex flex-col md:flex-row gap-6 md:gap-[27px] md:items-center">
          <div className="flex items-center ">
            <span className="font-bold text-sm text-[#7E88C3]">#</span>
            <h1 className="font-bold text-sm text-[#0C0E16]">RT3080</h1>
          </div>
          <div className="flex flex-col gap-2 md:flex-row md:gap-9 md:items-center">
            <h1 className="font-medium text-sm text-[#858BB2]">
              Due 19 Aug 2021
            </h1>
            <span className="font-bold text-base text-[#0C0E16]">
              £ 1,800.90
            </span>
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-10">
          <h1 className="font-medium text-xs  text-[#858BB2]">Jensen Huang</h1>
          <a href="/invoise" className="md:flex md:items-center gap-5">
            <button className="py-4 w-[104px] h-10 flex items-center gap-2 border rounded-md ">
              <span>
                <LuDot size={40} color="#33D69F" />
              </span>
              <h3 className="text-xs font-bold text-[#33D69F]">Paid</h3>
            </button>
            <p className="hidden md:block">
              <FaChevronRight />
            </p>
          </a>
        </div>
      </div>
      <div className="max-container flex items-center justify-between shadow-md rounded-md  bg-[#FFFFFF] mb-4  p-6  md:py-7 mx-auto md:mx-auto  md:w-[672px] xl:w-[730px]">
        <div className="flex flex-col md:flex-row gap-6 md:gap-[27px] md:items-center">
          <div className="flex items-center ">
            <span className="font-bold text-sm text-[#7E88C3]">#</span>
            <h1 className="font-bold text-sm text-[#0C0E16]">RT3080</h1>
          </div>
          <div className="flex flex-col gap-2 md:flex-row md:gap-9 md:items-center">
            <h1 className="font-medium text-sm text-[#858BB2]">
              Due 19 Aug 2021
            </h1>
            <span className="font-bold text-base text-[#0C0E16]">
              £ 1,800.90
            </span>
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-10">
          <h1 className="font-medium text-xs  text-[#858BB2]">Jensen Huang</h1>
          <a href="/invoise" className="md:flex md:items-center gap-5">
            <button className="py-4 w-[104px] h-10 flex items-center gap-2 border rounded-md ">
              <span>
                <LuDot size={40} color="#33D69F" />
              </span>
              <h3 className="text-xs font-bold text-[#33D69F]">Paid</h3>
            </button>
            <p className="hidden md:block">
              <FaChevronRight />
            </p>
          </a>
        </div>
      </div>
      <div className="max-container flex items-center justify-between shadow-md rounded-md  bg-[#FFFFFF] mb-4  p-6  md:py-7 mx-auto md:mx-auto  md:w-[672px] xl:w-[730px]">
        <div className="flex flex-col md:flex-row gap-6 md:gap-[27px] md:items-center">
          <div className="flex items-center ">
            <span className="font-bold text-sm text-[#7E88C3]">#</span>
            <h1 className="font-bold text-sm text-[#0C0E16]">RT3080</h1>
          </div>
          <div className="flex flex-col gap-2 md:flex-row md:gap-9 md:items-center">
            <h1 className="font-medium text-sm text-[#858BB2]">
              Due 19 Aug 2021
            </h1>
            <span className="font-bold text-base text-[#0C0E16]">
              £ 1,800.90
            </span>
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-10">
          <h1 className="font-medium text-xs  text-[#858BB2]">Jensen Huang</h1>
          <a href="/invoise" className="md:flex md:items-center gap-5">
            <button className="py-4 w-[104px] h-10 flex items-center gap-2 border rounded-md ">
              <span>
                <LuDot size={40} color="#33D69F" />
              </span>
              <h3 className="text-xs font-bold text-[#33D69F]">Paid</h3>
            </button>
            <p className="hidden md:block">
              <FaChevronRight />
            </p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;

/*

*/
