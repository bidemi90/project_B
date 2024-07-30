import React from "react";
import { RiPrinterFill } from "react-icons/ri";

const Sqicoursereg = () => {
  return (
    <>
      <section>
        <div className=" m-3 p-3 card border-0 bg-light ">
          <p className=" fs-5 m-0  mb-3">COURSE REGISTRATION</p>
          <p className=" fs-6 m-0  mb-3">
            Penalty: 2024-10-31 | Closure: 2024-10-31
          </p>
          <div class="table-responsive">
            <table class=" w-100 bg-dark-subtle p-5 rounded-start-2">
              <tr className=" p-5 mt-5">
                <td className=" p-4 fw-semibold"> Course Title</td>
                <td className=" p-4 fw-semibold">Description</td>
                <td className=" p-4 fw-semibold">Units</td>
                <td className=" p-4 fw-semibold">Action</td>
              </tr>
            </table>
          </div>
          <p className="  m-0  mb-3 ps-4 mt-3">
            No registered courses for this semester
          </p>
          <br />
          <p className=" fs-6 fw-bold"> Total Units: 0 </p>
        </div>

        <div className="thebottom card border-0 position-absolute bottom-0 p-3 accordion">
         <div className=" d-flex justify-content-evenly">
         <select className="thebottomselect " name="" id="">
            <option value=""></option>
          </select>
          <button className=" btn btn-primary">Add course(s)</button>
         </div>
        </div>

        <button className="profileeditbutton">
          <RiPrinterFill className=" fs-2" />
        </button>
      </section>
    </>
  );
};

export default Sqicoursereg;
