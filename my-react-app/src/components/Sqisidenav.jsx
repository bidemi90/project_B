import React from "react";
import viteLogo from "/vite.svg";
import logo from "../assets/SCICT-staff-18-sqi-new-logo.jpeg";
import { RiDashboardFill } from "react-icons/ri";

import { BsPersonWorkspace } from "react-icons/bs";
import { MdLock } from "react-icons/md";
import { PiFolderSimpleFill } from "react-icons/pi";
import { TbBellPlusFilled } from "react-icons/tb";
import { AiFillDatabase } from "react-icons/ai";

import { FaRegCreditCard } from "react-icons/fa6";

import { IoHome } from "react-icons/io5";

import { IoMdCheckmark } from "react-icons/io";
import { MdHelp } from "react-icons/md";

import { RiLogoutBoxRLine } from "react-icons/ri";
//
import { Link } from "react-router-dom";

const Sqisidenav = () => {
  return (
    <>
      <section className="sidnav">
        <div className=" d-flex flex-column justify-content-center align-items-center pt-4">
          <img className="sidenavimg" src={logo} alt="" />
          <p className="m-0 text-light  text-center">scict</p>
        </div>
        <div className=" onesectionforsomebttoninsidenav mb-3">
          <p className=" text-capitalize text-light px-3 fw-medium fs-6">
            General
          </p>
          {/* <Link to="/profile"></Link> */}
          <Link
            to="/sqi/"
            className="onenormalbuttoninsidenav text-decoration-none px-2 text-start py-3 text-light fw-medium fs-6 d-flex justify-content-start align-items-center"
          >
            <RiDashboardFill className=" text-light ms-3 " />
            <p className="m-0 mx-4">Dashboard</p>
          </Link>
        </div>
        <div className=" onesectionforsomebttoninsidenav mb-3">
          <p className=" text-capitalize text-light px-3 fw-medium fs-6">
            Profile
          </p>
          <Link
            to="/sqi/profile"
            className="onenormalbuttoninsidenav text-decoration-none px-2 text-start py-3 text-light fw-medium fs-6 d-flex justify-content-start align-items-center"
          >
            <BsPersonWorkspace className=" text-light ms-3 " />
            <p className="m-0 mx-4"> My Profile</p>
          </Link>
          <Link
            to="/sqi/changepassword"
            className="onenormalbuttoninsidenav text-decoration-none px-2 text-start py-3 text-light fw-medium fs-6 d-flex justify-content-start align-items-center"
          >
            <MdLock className=" text-light ms-3 " />
            <p className="m-0 mx-4">Change Password</p>
          </Link>
          <Link
            to="/sqi/uploaddoc"
            className="onenormalbuttoninsidenav text-decoration-none px-2 text-start py-3 text-light fw-medium fs-6 d-flex justify-content-start align-items-center"
          >
            <PiFolderSimpleFill className=" text-light ms-3 " />
            <p className="m-0 mx-4">Documents</p>
          </Link>
        </div>
        <div className=" onesectionforsomebttoninsidenav mb-3">
          <p className=" text-capitalize text-light px-3 fw-medium fs-6">
            Academics
          </p>
          <Link
            to="/sqi/coursereg"
            className="onenormalbuttoninsidenav text-decoration-none px-2 text-start py-3 text-light fw-medium fs-6 d-flex justify-content-start align-items-center"
          >
            <TbBellPlusFilled className=" text-light ms-3 " />
            <p className="m-0 mx-4"> Course Registration</p>
          </Link>
          <Link
            to="/sqi/resources"
            className="onenormalbuttoninsidenav text-decoration-none px-2 text-start py-3 text-light fw-medium fs-6 d-flex justify-content-start align-items-center"
          >
            <AiFillDatabase className=" text-light ms-3 " />
            <p className="m-0 mx-4">Resources</p>
          </Link>
          <Link
            to="/sqi/registration_history"
            className="onenormalbuttoninsidenav text-decoration-none px-2 text-start py-3 text-light fw-medium fs-6 d-flex justify-content-start align-items-center"
          >
            <AiFillDatabase className=" text-light ms-3 " />
            <p className="m-0 mx-4"> Registration History</p>
          </Link>
          <Link
            to="/sqi/result"
            className="onenormalbuttoninsidenav text-decoration-none px-2 text-start py-3 text-light fw-medium fs-6 d-flex justify-content-start align-items-center"
          >
            <p className="m-0 mx-5"> Semester Result</p>
          </Link>
          <Link
            to="/sqi/profile"
            className="onenormalbuttoninsidenav text-decoration-none px-2 text-start py-3 text-light fw-medium fs-6 d-flex justify-content-start align-items-center"
          >
            <p className="m-0 mx-5"> View Timetable</p>
          </Link>
        </div>
        <div className=" onesectionforsomebttoninsidenav mb-3">
          <p className=" text-capitalize text-light px-3 fw-medium fs-6">
            Payments
          </p>
          <Link
            to="/sqi/paytuition"
            className="onenormalbuttoninsidenav text-decoration-none px-2 text-start py-3 text-light fw-medium fs-6 d-flex justify-content-start align-items-center"
          >
            <FaRegCreditCard className=" text-light ms-3 " />
            <p className="m-0 mx-4"> Pay Tuition</p>
          </Link>
          <Link
            to="/sqi/paymenthis"
            className="onenormalbuttoninsidenav text-decoration-none px-2 text-start py-3 text-light fw-medium fs-6 d-flex justify-content-start align-items-center"
          >
            <FaRegCreditCard className=" text-light ms-3 " />
            <p className="m-0 mx-4"> Payment History</p>
          </Link>
          <Link
            to="/sqi/transactionhis"
            className="onenormalbuttoninsidenav text-decoration-none px-2 text-start py-3 text-light fw-medium fs-6 d-flex justify-content-start align-items-center"
          >
            <FaRegCreditCard className=" text-light ms-3 " />
            <p className="m-0 mx-4"> Transaction History</p>
          </Link>
        </div>
        <div className=" onesectionforsomebttoninsidenav mb-3">
          <p className=" text-capitalize text-light px-3 fw-medium fs-6">
            Others
          </p>
          <Link
            to="/sqi/profile"
            className="onenormalbuttoninsidenav text-decoration-none px-2 text-start py-3 text-light fw-medium fs-6 d-flex justify-content-start align-items-center"
          >
            <TbBellPlusFilled className=" text-light ms-3 " />
            <p className="m-0 mx-4"> Notice Board</p>
          </Link>
          <Link
            to="/sqi/profile"
            className="onenormalbuttoninsidenav text-decoration-none px-2 text-start py-3 text-light fw-medium fs-6 d-flex justify-content-start align-items-center"
          >
            <IoHome className=" text-light ms-3 " />
            <p className="m-0 mx-4"> Accomodation</p>
          </Link>
          <Link
            to="/sqi/profile"
            className="onenormalbuttoninsidenav text-decoration-none px-2 text-start py-3 text-light fw-medium fs-6 d-flex justify-content-start align-items-center"
          >
            <IoMdCheckmark className=" text-light ms-3 " />
            <p className="m-0 mx-4"> Election</p>
          </Link>
          <Link
            to="/sqi/profile"
            className="onenormalbuttoninsidenav text-decoration-none px-2 text-start py-3 text-light fw-medium fs-6 d-flex justify-content-start align-items-center"
          >
            <IoMdCheckmark className=" text-light ms-3 " />
            <p className="m-0 mx-4"> Certificate</p>
          </Link>
          <Link
            to="/sqi/profile"
            className="onenormalbuttoninsidenav text-decoration-none px-2 text-start py-3 text-light fw-medium fs-6 d-flex justify-content-start align-items-center"
          >
            <MdHelp className=" text-light ms-3 " />
            <p className="m-0 mx-4"> Help</p>
          </Link>
          <Link
            to="/sqi/profile"
            className="onenormalbuttoninsidenav text-decoration-none px-2 text-start py-3 text-light fw-medium fs-6 d-flex justify-content-start align-items-center"
          >
            <RiLogoutBoxRLine className=" text-light ms-3 " />
            <p className="m-0 mx-4"> Logout</p>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Sqisidenav;
