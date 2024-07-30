import React from "react";
import { Outlet } from "react-router-dom";
import Sqinavtop from "./Sqinavtop";
import Sqisidenav from "./Sqisidenav";

const Sqistudenthome = () => {
  return (
    <>
      <div className=" d-flex">
        <div className="sidenavholder">
          <Sqisidenav />
        </div>
        <div className="topnavandoutletholder w-100">
          <Sqinavtop />
        <div className=" outletholder position-relative">
        <Outlet />
        </div>
        </div>
      </div>
    </>
  );
};

export default Sqistudenthome;
