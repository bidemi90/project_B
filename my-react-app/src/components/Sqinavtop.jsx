import React from "react";
import { CgMenu } from "react-icons/cg";
import { FaBell } from "react-icons/fa6";
import { MdOutlineContacts } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { IoSettingsSharp } from "react-icons/io5";

import { FcBusinessman } from "react-icons/fc";

const Sqinavtop = () => {
  return (
    <>
      <section>
        <nav className="topnav d-flex justify-content-between align-items-center border-bottom px-2 bg-light">
          <div>
            <button className=" fs-3 btn btn-light ">
              <CgMenu  className=" fs-3 mx-2" />
            </button>
          </div>
          <div>
            <button className=" fs-3 btn btn-light ">
              <FaBell  className=" fs-3 mx-2" />
            </button>
            <button className=" fs-3 btn btn-light ">
              <MdOutlineContacts  className=" fs-3 mx-2" />
            </button>
            <button className=" fs-3 btn btn-light ">
              <MdEmail  className=" fs-3 mx-2" />
            </button>
            <button className=" fs-3 btn btn-light ">
              <FaBell  className=" fs-3 mx-2" />
            </button>
            <button className=" fs-3 btn btn-light ">
              <IoSettingsSharp  className=" fs-3 mx-2" />
            </button>
            <button className=" fs-5 btn btn-light  btn-outline-dark">PCB</button>
            <button className=" fs-3 btn btn-light ">
              <FcBusinessman  className=" fs-3 mx-2" />
            </button>
          </div>
        </nav>
      </section>
    </>
  );
};

export default Sqinavtop;
