import bottom from "../assets/bottom.svg";
import top from "../assets/top.svg";
import plus from "../assets/plus.svg";
import EditInvoice from "./EditInvoice";
function FilterInvoise() {
  return (
    <div className="">
      <div className="max-container flex items-center justify-between py-8 md:w-[672px] xl:w-[730px] px-6  md:px-0 ">
        <div className="flex flex-col justify-start gap-2">
          <h1 className="font-extrabold text-xl md:text-3xl color-[#0C0E16]">
            Invoices
          </h1>
          <p className="font-medium text-xs color-[#888EB0]">7 invoices</p>
        </div>
        <div className="flex items-center gap-10">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="flex items-center gap-1 m-1 md:gap-4"
            >
              <h3 className="flex items-center md:w-[100px] gap-1 color-[#0C0E16] font-extrabold text-xs ">
                Filter
                <span className="color-[#0C0E16] font-extrabold text-xs hidden md:block">
                  by status
                </span>
              </h3>
              <img src={bottom} alt="bottom-svg" />
              {/* <img src={top} alt="top-svg" /> */}
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box  w-48"
            >
              <li className="form-control">
                <label className="label flex items-center justify-start gap-4  cursor-pointer">
                  <input
                    type="checkbox"
                    className="checkbox checkbox-primary"
                  />
                  <span className="label-text color-[#1E2139] font-bold">
                    Draft
                  </span>
                </label>
              </li>
              <li className="form-control">
                <label className="label flex items-center justify-start gap-4  cursor-pointer">
                  <input
                    type="checkbox"
                    className="checkbox checkbox-primary"
                  />
                  <span className="label-text  color-[#1E2139] font-bold">
                    Pending
                  </span>
                </label>
              </li>
              <li className="form-control ">
                <label className="label flex items-center justify-start gap-4  cursor-pointer">
                  <input
                    type="checkbox"
                    className="checkbox checkbox-primary"
                  />
                  <span className="label-text  color-[#1E2139] font-bold">
                    Paid
                  </span>
                </label>
              </li>
            </ul>
          </div>
          <div className="drawer">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className=" drawer-content bg-[#7C5DFA] cursor-pointer p-[6px] flex items-center w-[90px] md:w-[150px] rounded-3xl gap-2 md:gap-4">
              <div className="bg-white rounded-[50%] flex items-center justify-center w-8 h-8">
                <img src={plus} alt="plus-image" />
              </div>
              <label htmlFor="my-drawer" className="drawer-button">
                <h1 className="flex items-center text-[#FFFFFF] font-bold text-sm ">
                  New <span className="hidden md:block"> Invoice</span>
                </h1>
              </label>
            </div>
            <div className="drawer-side">
              <label
                htmlFor="my-drawer"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>
              <ul className="menu p-4 w-[375px] md:w-[616px] mt-[72px] md:mt-20 lg:mt-0 lg:ml-[95px] min-h-full bg-white text-base-content">
                <EditInvoice />
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilterInvoise;
