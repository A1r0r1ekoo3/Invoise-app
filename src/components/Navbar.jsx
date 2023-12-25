import logo from "../assets/logo.svg";
import moon from "../assets/moon.svg";
import sun from "../assets/sun.svg";
import avatar from "../assets/avatar.svg";

function Navbar() {
  return (
    <div className="bg-[#373B53] ">
      <div className=" max-container  flex items-center justify-between ">
        <div>
          <img className="md:w-20 md:h-20" src={logo} alt="site-logo" />
        </div>
        <div className="flex items-center gap-6">
          <div>
            <img src={moon} alt="moon" />
            {/* <img src={sun} alt="sun" /> */}
          </div>
          <div>
            <hr />
          </div>
          <div className="pr-6">
            <img src={avatar} alt="avatar" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
