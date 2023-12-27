import Navbar from "../components/Navbar";

import { Outlet } from "react-router-dom";
function RootLayout() {
  return (
    <div className="lg:flex lg:h-full ">
      <Navbar />
      <main className="bg-[#DFE3FA] w-screen h-screen  ">
        <Outlet />
      </main>
    </div>
  );
}

export default RootLayout;
