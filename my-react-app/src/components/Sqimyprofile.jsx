import React from "react";
import { TbCircleNumber1Filled } from "react-icons/tb";
import { TbCircleNumber2Filled } from "react-icons/tb";
import { TbCircleNumber3Filled } from "react-icons/tb";
import { MdModeEditOutline } from "react-icons/md";
const Sqimyprofile = () => {
  return (
    <>
      <section className="p-5">
        <p className=" fs-6 fw-semibold">PROFILE</p>
        <div className=" d-flex justify-content-evenly align-items-center">
          <TbCircleNumber1Filled  className=" fs-2 text-primary" />
          Personal
          <hr className=" hroflongline" />
          <TbCircleNumber2Filled  className=" fs-2 text-primary" />
          Contact
          <hr className=" hroflongline" />
          <TbCircleNumber3Filled  className=" fs-2 text-primary" />
          Referee
        </div>
        <div className=" d-flex justify-content-evenly flex-wrap">
            <input placeholder="Surname " className="oneinputinprofile" type="text" />
            <input placeholder="First Name " className="oneinputinprofile" type="text" />
            <input placeholder=" Middle Name " className="oneinputinprofile" type="text" />
            <input placeholder=" Date of birth " className="oneinputinprofile" type="date" />
            <input placeholder="Nationality " className="oneinputinprofile" type="text" />
            <input placeholder="State of Origin " className="oneinputinprofile" type="text" />
            <input placeholder="Gender  " className="oneinputinprofile" type="text" />
            <input placeholder=" Marital Status  " className="oneinputinprofile" type="text" />
        </div>
        <div>
            <button className=" btn btn-primary fw-bold text-uppercase">
                next
            </button>
        </div>
        <button className="profileeditbutton">
        <MdModeEditOutline className=" fs-2"/>
        </button>
          
        
      </section>
    </>
  );
};

export default Sqimyprofile;
