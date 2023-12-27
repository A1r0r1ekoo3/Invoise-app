import { FaChevronLeft } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
function EditInvoice() {
  return (
    <div className="px-6 py-8">
      <div className="flex flex-col items-start gap-6 mb-6">
        <div className=" flex items-center gap-6 md:hidden">
          <span>
            <FaChevronLeft color="blue" />
          </span>
          <h3 className="text-[#0C0E16] font-bold text-xs">Go back</h3>
        </div>
        <h1 className="font-bold text-[#0C0E16] text-2xl">New Invoice</h1>
      </div>
      <form action="">
        <div className="flex flex-col gap-6 mb-10">
          <h6 className="font-bold text-[#7C5DFA] text-xs">Bill From</h6>
          <label className="flex flex-col gap-[10px] ">
            <span className="font-medium text-[#7E88C3] text-xs">
              Street Address
            </span>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered input-info w-full "
            />
          </label>
          <div className="flex flex-col md:flex-row gap-6 mb-10">
            <div className="flex items-center justify-between gap-6">
              <label className="flex flex-col gap-[10px] ">
                <span className="font-medium text-[#7E88C3] text-xs">City</span>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered input-info w-full "
                />
              </label>
              <label className="flex flex-col gap-[10px] ">
                <span className="font-medium text-[#7E88C3] text-xs">
                  Post code
                </span>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered input-info w-full "
                />
              </label>
            </div>
            <label className="flex flex-col gap-[10px] ">
              <span className="font-medium text-[#7E88C3] text-xs">
                Country
              </span>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered input-info w-full "
              />
            </label>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <h1 className="font-bold text-[#7C5DFA] text-xs">Bill To</h1>
          <label className="flex flex-col gap-[10px] ">
            <span className="font-medium text-[#7E88C3] text-xs">
              Client’s Name
            </span>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered input-info w-full "
            />
          </label>
          <label className="flex flex-col gap-[10px] ">
            <span className="font-medium text-[#7E88C3] text-xs">
              Client’s Email
            </span>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered input-info w-full "
            />
          </label>
          <label className="flex flex-col gap-[10px] ">
            <span className="font-medium text-[#7E88C3] text-xs">
              Client’s Address
            </span>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered input-info w-full "
            />
          </label>
          <div className="flex flex-col md:flex-row  gap-6 mb-10">
            <div className="flex items-center justify-between gap-6">
              <label className="flex flex-col gap-[10px] ">
                <span className="font-medium text-[#7E88C3] text-xs">City</span>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered input-info w-full "
                />
              </label>
              <label className="flex flex-col gap-[10px] ">
                <span className="font-medium text-[#7E88C3] text-xs">
                  Post code
                </span>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered input-info w-full "
                />
              </label>
            </div>
            <label className="flex flex-col gap-[10px] ">
              <span className="font-medium text-[#7E88C3] text-xs">
                Country
              </span>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered input-info w-full "
              />
            </label>
          </div>
        </div>
        <div className="flex flex-col gap-6 mb-16">
          <div className="flex flex-col md:flex-row  gap-6">
            <label className="flex flex-col gap-[10px] ">
              <span className="font-medium text-[#7E88C3] text-xs">
                Invoice Date
              </span>
              <input
                type="date"
                placeholder="Type here"
                className="input input-bordered input-info w-full  "
              />
            </label>
            <label className="flex flex-col gap-[10px] ">
              <span className="font-medium text-[#7E88C3] text-xs">
                Payment Terms
              </span>
              <input
                type="number"
                placeholder="Type here"
                className="input input-bordered input-info w-full "
              />
            </label>
          </div>
          <label className="flex flex-col gap-[10px] ">
            <span className="font-medium text-[#7E88C3] text-xs">
              Project Description
            </span>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered input-info w-full "
            />
          </label>
        </div>
        <div className="flex flex-col gap-6 mb-12">
          <h1 className="font-bold text-[#777F98] text-lg">Item List</h1>
          <div className="flex flex-col gap-12">
            <div className="flex flex-col md:flex-row gap-6">
              <label className="flex flex-col gap-[10px] ">
                <span className="font-medium text-[#7E88C3] text-xs">
                  Street Address
                </span>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered input-info w-full "
                />
              </label>
              <div className="flex items-end justify-between">
                <div className="flex items-center  w-[80%]">
                  <label className="flex flex-col gap-[10px] ">
                    <span className="font-medium text-[#7E88C3] text-xs">
                      Qty
                    </span>
                    <input
                      type="text"
                      className="input input-bordered input-info w-[60%] "
                    />
                  </label>
                  <label className="flex flex-col gap-[10px] ">
                    <span className="font-medium text-[#7E88C3] text-xs">
                      Price
                    </span>
                    <input
                      type="text"
                      className="input input-bordered input-info w-[80%] "
                    />
                  </label>
                  <label className="flex flex-col  gap-[10px]  w-[20%]">
                    <span className="font-medium text-[#7E88C3] text-xs">
                      Total
                    </span>
                    <p className="border-2 border-cyan-600 px-3 py-3 font-bold text-xs text-[#888EB0] text-start">
                      500
                    </p>
                  </label>
                </div>
                <span>
                  <MdDelete size={23} />
                </span>
              </div>
            </div>
            <div className="flex flex-col md:flex-row   gap-6">
              <label className="flex flex-col gap-[10px] md:gap-0">
                <span className="font-medium text-[#7E88C3] text-xs md:hidden">
                  Item name
                </span>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered input-info w-full "
                />
              </label>
              <div className="flex items-end justify-between">
                <div className="flex items-start   w-[80%]">
                  <label className="flex flex-col gap-[10px] md:gap-0">
                    <span className="font-medium text-[#7E88C3] text-xs md:hidden">
                      Qty
                    </span>
                    <input
                      type="text"
                      className="input input-bordered input-info w-[60%] "
                    />
                  </label>
                  <label className="flex flex-col gap-[10px] md:gap-0 ">
                    <span className="font-medium text-[#7E88C3] text-xs md:hidden">
                      Price
                    </span>
                    <input
                      type="text"
                      className="input input-bordered input-info w-[80%] "
                    />
                  </label>
                  <label className="flex flex-col   gap-[10px]  w-[20%]">
                    <span className="font-medium text-[#7E88C3] text-xs md:hidden">
                      Total
                    </span>
                    <p className="border-2 border-cyan-600 px-3 py-3 font-bold text-xs text-[#888EB0] text-start">
                      500
                    </p>
                  </label>
                </div>
                <span>
                  <MdDelete size={23} />
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-6">
          <button className="text-center bg-[#F9FAFE] w-full rounded-3xl py-4 font-medium text-[#7E88C3] text-xs">
            + Add New Item
          </button>
        </div>
        <div className="flex items-center justify-between ">
          <button className="font-bold text-xs text-[#7E88C3] p-4 bg-[#F9FAFE] rounded-3xl">
            Discard
          </button>
          <div className="flex items-center gap-2">
            <button className="font-bold text-xs text-[#888EB0] p-4 bg-[#373B53] rounded-3xl">
              Save as Draft
            </button>
            <button className="font-bold text-xs text-[#FFF] p-4 bg-[#7C5DFA] rounded-3xl">
              Save & Send
            </button>
          </div>
        </div>
      </form>
      <div></div>
    </div>
  );
}

export default EditInvoice;
