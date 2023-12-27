import logo from "../assets/logo.svg";
import moon from "../assets/moon.svg";
import sun from "../assets/sun.svg";
import avatar from "../assets/avatar.svg";

function Navbar() {
  return (
    <div className=" bg-[#373B53]  lg:rounded-r-3xl  ">
      <div className="   w-full lg:h-full flex items-center justify-between lg:flex-col ">
        <div>
          <img
            className="md:w-20 md:h-20 lg:w-[105px] lg:h-[105px]"
            src={logo}
            alt="site-logo"
          />
        </div>
        <div className="flex items-center  lg:flex lg:flex-col lg: gap-6 lg:gap-0 lg:w-full">
          <div className="lg:border-b-2 lg:w-full lg:relative ">
            <img
              className="lg:absolute lg:bottom-6 left-[35%] "
              src={moon}
              alt="moon"
            />
            {/* <img src={sun} alt="sun" /> */}
          </div>
          <hr className="w-[1px] h-[72px] md:h-20 bg-slate-200 lg:hidden " />
          <div className="  pr-6 lg:pr-0  lg:py-6 ">
            <img src={avatar} alt="avatar" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
