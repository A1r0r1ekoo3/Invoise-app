import { LuDot } from "react-icons/lu";
import FilterInvoise from "../components/FilterInvoise";
import { FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
function Home() {
  const { data, isPending, error } = useFetch("http://localhost:2003/data");
  console.log(data);
  return (
    <div className="h-screen ">
      {isPending && (
        <div>
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      )}
      <div>
        <FilterInvoise />
      </div>
      {data &&
        data.map((invoise) => {
          const { id, paymentDue, items, status } = invoise;
          return (
            <li key={id} className="list-none">
              <div className="max-container flex items-center justify-between shadow-md rounded-md  bg-[#FFFFFF] mb-4  p-6  md:py-7 mx-auto md:mx-auto  md:w-[672px] xl:w-[730px]">
                <div className="flex flex-col md:flex-row gap-6 md:gap-[27px] md:items-center">
                  <div className="flex items-center ">
                    <span className="font-bold text-sm text-[#7E88C3]">#</span>
                    <h1 className="font-bold text-sm text-[#0C0E16]">{id}</h1>
                  </div>
                  <div className="flex flex-col gap-2 md:flex-row md:gap-9 md:items-center">
                    <h1 className="font-medium text-sm text-[#858BB2]">
                      {paymentDue}
                    </h1>
                    <span className="font-bold text-base text-[#0C0E16]">
                      £ {items[0].quantity},{items[0].price}
                    </span>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-10">
                  <h1 className="font-medium text-xs  text-[#858BB2]">
                    {items[0].name}
                  </h1>
                  <Link
                    to={`viewInvoise/${id}`}
                    className="md:flex md:items-center gap-5"
                  >
                    {status === "paid" && (
                      <button className="py-4 w-[104px] h-10 flex items-center gap-2 border rounded-md ">
                        <span>
                          <LuDot size={40} color="#33D69F" />
                        </span>
                        <h3 className="text-xs font-bold text-[#33D69F]">
                          {status}
                        </h3>
                      </button>
                    )}
                    {status === "pending" && (
                      <button className="py-4 w-[104px] h-10 flex items-center gap-2 border rounded-md ">
                        <span>
                          <LuDot size={40} color="#FF8F00" />
                        </span>
                        <h3 className="text-xs font-bold text-[#FF8F00]">
                          {status}
                        </h3>
                      </button>
                    )}
                    {status === "draft" && (
                      <button className="py-4 w-[104px] h-10 flex items-center gap-2 border rounded-md ">
                        <span>
                          <LuDot size={40} color="#373B53" />
                        </span>
                        <h3 className="text-xs font-bold text-[#373B53]">
                          {status}
                        </h3>
                      </button>
                    )}
                    <p className="hidden md:block">
                      <FaChevronRight />
                    </p>
                  </Link>
                </div>
              </div>
            </li>
          );
        })}
    </div>
  );
}

export default Home;

/*

*/
