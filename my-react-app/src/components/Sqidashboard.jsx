import React from "react";
import { MdOutlineContacts } from "react-icons/md";
import { PiGraduationCapFill } from "react-icons/pi";
import { MdAutoGraph } from "react-icons/md";
import { ImFolderDownload } from "react-icons/im";
import { IoMdCheckmark } from "react-icons/io";


const Sqidashboard = () => {
  return (
    <>
      <section>
        <div className=" p-3">
          <p className=" text-uppercase">welcome,</p>
          <div className=" d-flex justify-content-between mt-5">
            <div className=" shape1idashboard card shadow border ">
              <MdOutlineContacts className=" fs-4" />
              <hr className=" border-1 border-black" />
              <p className=" fs-6 text-end">Student Id</p>
            </div>
            <div className=" shape1idashboard card shadow border ">
              <PiGraduationCapFill className=" fs-4" />
              <hr className=" border-1 border-black" />
              <p className=" fs-6 text-end">Level|Semester </p>
            </div>
            <div className=" shape1idashboard card shadow border ">
              <MdAutoGraph className=" fs-4" />
              <hr className=" border-1 border-black" />
              <p className=" fs-6 text-end">Current CGPA</p>
            </div>
            <div className=" shape1idashboard card shadow border ">
              <ImFolderDownload className=" fs-4" />
              <hr className=" border-1 border-black" />
              <p className=" fs-6 text-end">Dept|Programme</p>
            </div>
          </div>

          <div className=" d-flex justify-content-between ">
            <div className="col-8 py-3">
              <div className=" card p-3 me-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
                voluptates, doloremque quae tempore est eum incidunt doloribus
                voluptatibus atque, nulla qui modi nobis dignissimos! Sapiente
                assumenda aliquid ipsum consequatur exercitationem.
              </div>
            </div>
            <div className="col-4 py-3 d-flex flex-column">
              <div className=" card p-3 ms-2 mb-3 ">
                Lorem ipsum dolor sit amet caboriosam!
              </div>
              <div className=" card p-3 ms-2 mb-3  themiddlethatwantheight">
                
              </div>
              <div className=" card p-3 ms-2 mb-3 text-center ">
                <p>STATS</p>

                <p>Tuition: <IoMdCheckmark/> </p>
                <p>Course Registration: </p>
              </div>
              <div className=" card p-3 ms-2 mb-3 text-center  ">
                <p>QUICK LINKS</p>
                <a href="" className="text-decoration-none">
                  Pay Tuition
                </a>
                <a href="" className="text-decoration-none">
                  Register Courses
                </a>
                <a href="" className="text-decoration-none">
                  Upload Documents
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Sqidashboard;
